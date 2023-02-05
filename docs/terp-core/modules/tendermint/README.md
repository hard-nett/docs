# Tendermint 
The tendermint module allows for querying of validator and node addresses.

## Available Commands

| Name, shorthand | Description |
| :--- | :--- |
| [show-address](tendermint.md#terpd-tendermint-show-address) | Shows this node's tendermint validator consensus address |
| [show-node-id](tendermint.md#iris-tendermint-show-node-id) | Show this node's ID |
| [show-validator](tendermint.md#iris-tendermint-show-validator) | Show this node's tendermint validator info |
| [version](tendermint.md#iris-tendermint-version) | Print tendermint libraries' version |

### terpd tendermint show-address

The following command will show the tendermint validator address of the local node.

```text
terpd tendermint show-address
```

Returns the bech32 encoded validator consensus address `<terpvalcon...>`:

```text
terpvalcons1xyld7wpwjwx5reu8k0rrveceqztyp3h3fy3m6m
```

### terpd tendermint show-node-id 

The following command will show the nodes ID

```text
terpd tendermint show-node-id
```

Returns something similar to:

```text
ec730773944fbdc6a8c4918984f571aa57c975a3
```

### terpd tendermint show-validator 

The following command will show the validators tendermint consensus pubkey:

```text
terpd tendermint show-validator
```

Returns something similar to:

```text
terpvalconspub1zcjduepqltmy70ayq5c52fqga7xv336wv3jn8wxjcqra72amp6gcm7l8jwkss0ekqe
```

### terpd tendermint version 

```text
terpd tendermint version
```

Returns something similar to:

```text
tendermint: ""
abci: 0.17.0
blockprotocol: 11
p2pprotocol: 8
```