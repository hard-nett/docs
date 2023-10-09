---
title: 1. networks
sidebar_position: 1
---
## Network Info

### API Docs

Please visit the [API reference](/api) to interact with these endpoints. 

<Container>
<Tabs>
<TabItem value="testnet-90u" label="testnet: 90u-2">

### Chain ID
```
90u-2
```
### RPC
```
## COMING SOON
```
### GRPC
```
## COMING SOON
```
### GRPC
```
## COMING SOON
```
### GRPC-Web
```
## COMING SOON
```
### LCD
```
## COMING SOON
```
### Block Explorers
```
## COMING SOON
```
### Genesis
```
## COMING SOON
```
### P2P Seed
```
## COMING SOON
```

</TabItem>
<TabItem value="mainnet-morocco" label="mainnet: morocco-1">

### Chain ID
```
morocco-1
```
### RPC
```
## COMING SOON
```
### GRPC
```
## COMING SOON
```
### GRPC
```
## COMING SOON
```
### GRPC-Web
```
## COMING SOON
```
### LCD
```
## COMING SOON
```
### Block Explorers
```
## COMING SOON
```
### Genesis
```
## COMING SOON
```
### P2P Seed
```
## COMING SOON
```
</TabItem>
<TabItem value="testnet-120u" label="experimental: 120u-1">

### Chain ID
```
120u-1
```
### RPC
```
## COMING SOON
```
### GRPC
```
## COMING SOON
```
### GRPC
```
## COMING SOON
```
### GRPC-Web
```
## COMING SOON
```
### LCD
```
## COMING SOON
```
### Block Explorers
```
## COMING SOON
```
### Genesis
```
## COMING SOON
```
### P2P Seed
```
## COMING SOON
```
</TabItem></Tabs>
</Container>

## Syncing Options

- [**Synchronize with state-sync:**](./sync-with-state-sync) quickly sync to the current blockchain state without processing the entire blockchain history. With state-sync, the node downloads a snapshot of the current state from a trusted source and then begins validating new blocks. State-sync is faster than syncing from genesis, but it relies on trusting the source of the snapshot. This method is generally considered secure if you can trust the source, but it might be less secure than syncing from genesis.
- [**Synchronize from snapshot:**](./sync-from-snapshot) from a snapshot is similar to state-sync but involves manually downloading a snapshot of the blockchain state and importing it into the node. This method is also faster than syncing from genesis, but it comes with the same trust issues as state-sync. It is essential to verify the integrity and authenticity of the snapshot before using it.