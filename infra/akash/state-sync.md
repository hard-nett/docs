# Statesync

To statesync a node, you need at least 2x existing nodes with `state-sync.snapshot-interval` set to a non-zero value (`{NAMESPACE}_SNAPSHOT_INTERVAL`). 

This example includes 2 deploy files - `snapshot-deploy.yml` for the two snapshotting nodes, and `statesync-deploy` for a third statesynced node. 

We use the `STATESYNC_RPC_SERVERS` option which automatically configures statesync from the first node's RPC server, and configures both as the `statesync.rpc-servers`.

Alternatively you can configure statesync manually using the [options in the docs](/README.md#Statesync)

## snapshot-deploy.yml
```yaml
---
version: "2.0"

services:
  node1:
    image: ghcr.io/ovrclk/cosmos-omnibus:v0.3.3-akash-v0.16.3
    env:
      - MONIKER=public-node-1
      - CHAIN_JSON=https://raw.githubusercontent.com/ovrclk/net/master/mainnet/meta.json
      - SNAPSHOT_JSON=https://cosmos-snapshots.s3.filebase.com/akash/pruned/snapshot.json
      - MINIMUM_GAS_PRICES=0.025uakt
      - FASTSYNC_VERSION=v0
      - PRUNING=nothing
      - STATESYNC_SNAPSHOT_INTERVAL=500
    expose:
      - port: 26657
        as: 80
        to:
          - global: true
      - port: 26656
        to:
          - global: true
    # params:
    #   storage:
    #     data:
    #       mount: /root/.akash
  node2:
    image: ghcr.io/ovrclk/cosmos-omnibus:v0.3.3-akash-v0.16.3
    env:
      - MONIKER=public-node-2
      - CHAIN_JSON=https://raw.githubusercontent.com/ovrclk/net/master/mainnet/meta.json
      - SNAPSHOT_JSON=https://cosmos-snapshots.s3.filebase.com/akash/pruned/snapshot.json
      - MINIMUM_GAS_PRICES=0.025uakt
      - FASTSYNC_VERSION=v0
      - PRUNING=nothing
      - STATESYNC_SNAPSHOT_INTERVAL=500
    expose:
      - port: 26657
        as: 80
        to:
          - global: true
      - port: 26656
        to:
          - global: true
    # params:
    #   storage:
    #     data:
    #       mount: /root/.akash

profiles:
  compute:
    node1:
      resources:
        cpu:
          units: 4
        memory:
          size: 8Gi
        storage:
          size: 100Gi
          # - size: 100Mi
          # - name: data
          #   size: 400Gi
          #   attributes:
          #     persistent: true
    node2:
      resources:
        cpu:
          units: 4
        memory:
          size: 8Gi
        storage:
          size: 100Gi
          # - size: 100Mi
          # - name: data
          #   size: 400Gi
          #   attributes:
          #     persistent: true
  placement:
    dcloud:
      attributes:
        host: akash
      signedBy:
        anyOf:
          - akash1365yvmc4s7awdyj3n2sav7xfx76adc6dnmlx63
      pricing:
        node1:
          denom: uakt
          amount: 1000
        node2:
          denom: uakt
          amount: 1000

deployment:
  node1:
    dcloud:
      profile: node1
      count: 1
  node2:
    dcloud:
      profile: node2
      count: 1
``` 

## statesynce-deploy.yml 
```yaml
---
version: "2.0"

services:
  node1:
    image: ghcr.io/ovrclk/cosmos-omnibus:v0.3.3-akash-v0.16.3
    env:
      - MONIKER=private_node_1
      - CHAIN_JSON=https://raw.githubusercontent.com/ovrclk/net/master/mainnet/meta.json
      - MINIMUM_GAS_PRICES=0.025uakt
      - FASTSYNC_VERSION=v0
      - STATESYNC_RPC_SERVERS=<publicnode1:26657,publicnode2:26657>
    expose:
      - port: 26657
        as: 80
        to:
          - global: true
      - port: 26656
        to:
          - global: true
    # params:
    #   storage:
    #     data:
    #       mount: /root/.akash

profiles:
  compute:
    node1:
      resources:
        cpu:
          units: 4
        memory:
          size: 8Gi
        storage:
          size: 100Gi
          # - size: 100Mi
          # - name: data
          #   size: 400Gi
          #   attributes:
          #     persistent: true
  placement:
    dcloud:
      attributes:
        host: akash
      signedBy:
        anyOf:
          - akash1365yvmc4s7awdyj3n2sav7xfx76adc6dnmlx63
      pricing:
        node1:
          denom: uakt
          amount: 1000

deployment:
  node1:
    dcloud:
      profile: node1
      count: 1
``` 

