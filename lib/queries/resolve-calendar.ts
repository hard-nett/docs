import { CHAIN_CONFIG, CONTRACTS, BILLBOARD_ACCOUNT } from '@/lib/wallet/config';
import { queryREST, queryContractSmart } from './fetchers';
// TODO: remove account billboard text record from defualt traitt, dedicat its own helper function to define any value via specifi text record key query (argus api should already have this spec, fallback to chain query)
// TODO: resolve calendar needs to be tuned to use accurate query api defintions for calendars (generated from utils)
// utilize a nostr relayer query client design to access specific information 
const REST_BASE = CHAIN_CONFIG.rest;

// ── Client-side cache (sessionStorage) ────────────────────────────────
// Avoids expensive fallback chain queries on every page navigation.
// The calendar contract address almost never changes after deployment.

const CACHE_KEY = 'dao-calendar-address';
const CACHE_TTL = 60 * 60 * 1000; // 1 hour

interface CacheEntry {
  address: string;
  expiresAt: number;
}

function getCachedAddress(account: string): string | null {
  try {
    const raw = sessionStorage.getItem(`${CACHE_KEY}:${account}`);
    if (!raw) return null;
    const entry: CacheEntry = JSON.parse(raw);
    if (Date.now() > entry.expiresAt) {
      sessionStorage.removeItem(`${CACHE_KEY}:${account}`);
      return null;
    }
    return entry.address;
  } catch {
    return null;
  }
}

function setCachedAddress(account: string, address: string): void {
  try {
    const entry: CacheEntry = { address, expiresAt: Date.now() + CACHE_TTL };
    sessionStorage.setItem(`${CACHE_KEY}:${account}`, JSON.stringify(entry));
  } catch {
    // sessionStorage full or unavailable — silently skip cache
  }
}

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

  // Client-side cache hit — avoids expensive chain fallback
  const cached = getCachedAddress(account);
  if (cached) return cached;

  // 1. Try indexer route
  try {
    const result = await queryREST<{ calendar: string }>(
      `/indexer/dao-calendar/resolve/${encodeURIComponent(account)}`,
    );
    if (result.calendar) {
      setCachedAddress(account, result.calendar);
      return result.calendar;
    }
  } catch {
    // Indexer not available or returned error — fall through to chain query
  }

  // 2. Fallback: billboard text records → DAO → contracts-by-creator
  const address = await resolveFromChain(account);
  setCachedAddress(account, address);
  return address;
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
