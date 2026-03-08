import { CHAIN_CONFIG, CONTRACTS, BILLBOARD_ACCOUNT } from '@/lib/wallet/config';
import { queryREST, queryContractSmart } from './fetchers';

const REST_BASE = CHAIN_CONFIG.rest;

interface TextRecord {
  account: string;
  value: string;
}

interface ContractsByCreatorResponse {
  contract_addresses: string[];
  pagination: { next_key: string | null; total: string };
}

/**
 * Resolve the calendar contract address.
 *
 * 1. Try indexer: GET /indexer/dao-calendar/resolve/{account}
 *    Returns { calendar: "terp1..." } or 501 if not implemented.
 *
 * 2. Fallback — manual chain query sequence:
 *    a. Query terp721-account billboard for text records
 *    b. Find the "subdao" text record → DAO address
 *    c. Query contracts-by-creator(daoAddr) to find the calendar contract
 *    d. Verify it's a calendar by calling { dao: {} } on each candidate
 */
export async function resolveCalendarAddress(
  account: string = BILLBOARD_ACCOUNT,
): Promise<string> {
  // Static override — if calendar address is set in config, use it directly
  if (CONTRACTS.calendar) return CONTRACTS.calendar;

  // 1. Try indexer route
  try {
    const result = await queryREST<{ calendar: string }>(
      `/indexer/dao-calendar/resolve/${encodeURIComponent(account)}`,
    );
    if (result.calendar) return result.calendar;
  } catch {
    // Indexer not available or returned error — fall through to chain query
  }

  // 2. Fallback: billboard text records → DAO → contracts-by-creator
  return resolveFromChain(account);
}

/**
 * Manual chain resolution:
 * billboard text records → subdao address → contracts-by-creator → verify calendar
 */
async function resolveFromChain(account: string): Promise<string> {
  // 2a. Query billboard text records
  const records = await queryContractSmart<TextRecord[]>(
    CONTRACTS.terp721Account,
    { text_records: { account } },
  );

  // 2b. Find the subdao text record
  const subdaoRecord = records.find(r => r.account === 'subdao');
  if (!subdaoRecord?.value) {
    throw new Error(`No "subdao" text record found for account "${account}"`);
  }
  const daoAddr = subdaoRecord.value;

  // 2c. Query contracts instantiated by this DAO
  const res = await fetch(
    `${REST_BASE}/cosmwasm/wasm/v1/contracts/creator/${daoAddr}`,
  );
  if (!res.ok) {
    throw new Error(`Failed to query contracts by creator: ${res.status}`);
  }
  const data: ContractsByCreatorResponse = await res.json();
  const candidates = data.contract_addresses;

  if (!candidates.length) {
    throw new Error(`No contracts found instantiated by DAO ${daoAddr}`);
  }

  // 2d. Probe each candidate with { dao: {} } to find the calendar
  for (const addr of candidates) {
    try {
      const dao = await queryContractSmart<string>(addr, { dao: {} });
      // If it responds to { dao: {} } and returns the expected DAO address,
      // this is a dao-calendar contract
      if (dao === daoAddr) return addr;
    } catch {
      // Not a calendar contract — continue
    }
  }

  throw new Error(
    `Could not find calendar contract among ${candidates.length} contracts from DAO ${daoAddr}`,
  );
}
