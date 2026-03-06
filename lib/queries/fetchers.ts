const REST_BASE = 'https://api.terp.network';
const RPC_BASE = 'https://rpc.terp.network';

export async function queryREST<T>(path: string): Promise<T> {
  const res = await fetch(`${REST_BASE}${path}`);
  if (!res.ok) throw new Error(`REST ${res.status}: ${path}`);
  return res.json() as Promise<T>;
}

export async function queryRPC<T>(
  method: string,
  params?: Record<string, string>,
): Promise<T> {
  const url = new URL(RPC_BASE);
  url.pathname = method;
  if (params) {
    for (const [k, v] of Object.entries(params)) url.searchParams.set(k, v);
  }
  const res = await fetch(url);
  if (!res.ok) throw new Error(`RPC ${res.status}: ${method}`);
  const json = await res.json();
  return json.result as T;
}

export async function queryWithFallback<T>(
  restPath: string,
  rpcFallback?: () => Promise<T>,
): Promise<T> {
  try {
    return await queryREST<T>(restPath);
  } catch (err) {
    if (rpcFallback) return rpcFallback();
    throw err;
  }
}
