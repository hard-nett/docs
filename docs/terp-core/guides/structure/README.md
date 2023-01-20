# Transaction Structure

Each block on a blockchain, including Cosmos-based ones like Terp Network, are constructed of a series
of transactions.

Each transaction, in turn, has its own internal structure. This document describes the structure
of those transactions.

## Retrieving a block

You can retrieve a single block by any one of:

* using the RPC API
* using the REST API
* running a full node (using `terpd`)

For our examples, we use `terpd` to retrieve a single block:

```sh
terpd query block 2836990
```

The above retrieves the block `2836990`. The result generally is in json without any formatting,
so we run it through `jq` to clean it up:

```sh
terpd query block 2836990 | jq '.'
```
