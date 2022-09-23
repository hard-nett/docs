# Validator and Public Sentries

This example shows 2 sentry nodes [statesynced from other nodes](../statesync), 
with a single private validator node which only connects to the sentries. 

You should know your sentry and validator node IDs beforehand, which involves controlling a `node_key.json` for each. 
The first time you run a node, if the `KEY_PATH` is set but doesn't exist on the storage provider, the `node_key.json` and `priv_validator_key.json` will be uploaded. You can use this method to obtain the private keys easily before re-configuring the nodes.

You should wait for the sentries to get up to date before running the validator, as it will statesync from those sentries. You can expand the sentry setup to as many nodes as required. Ideally some would be on other clouds for redundancy.

Akash is also very new - you should be prepared to run your validator on another cloud entirely at a moments notice. You should also setup a lot of monitoring. 

## sentries-deploy.yml 

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
      - AKASH_MODE=full
      - AKASH_P2P_PEX=true
      - AKASH_PRIVATE_PEER_IDS=<validatorid>
      - AKASH_UNCONDITIONAL_PEER_IDS=<validatorid>
      - AKASH_ADDR_BOOK_STRICT=false
      - STATESYNC_RPC_SERVERS=<publicnode1:26657,publicnode2:26657>
      - STATESYNC_SNAPSHOT_INTERVAL=500
      - S3_KEY=<s3-key>
      - S3_SECRET=<s3-secret>
      - KEY_PASSWORD=<key password>
      - KEY_PATH=<bucket/node2>
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
      - MONIKER=private_node_2
      - CHAIN_JSON=https://raw.githubusercontent.com/ovrclk/net/master/mainnet/meta.json
      - MINIMUM_GAS_PRICES=0.025uakt
      - FASTSYNC_VERSION=v0
      - AKASH_MODE=full
      - AKASH_P2P_PEX=true
      - AKASH_PRIVATE_PEER_IDS=<validatorid>
      - AKASH_UNCONDITIONAL_PEER_IDS=<validatorid>
      - AKASH_ADDR_BOOK_STRICT=false
      - STATESYNC_RPC_SERVERS=<publicnode1:26657,publicnode2:26657>
      - STATESYNC_SNAPSHOT_INTERVAL=500
      - S3_KEY=<s3-key>
      - S3_SECRET=<s3-secret>
      - KEY_PASSWORD=<key password>
      - KEY_PATH=<bucket/node2>
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

## validator-deploy.yml
```yaml 
---
version: "2.0"

services:
  validator:
    image: ghcr.io/ovrclk/cosmos-omnibus:v0.3.3-akash-v0.16.3
    env:
      - MONIKER=validator
      - CHAIN_JSON=https://raw.githubusercontent.com/ovrclk/net/master/mainnet/meta.json
      - MINIMUM_GAS_PRICES=0.025uakt
      - FASTSYNC_VERSION=v0
      - AKASH_MODE=validator
      - AKASH_P2P_PEX=false
      - AKASH_UNCONDITIONAL_PEER_IDS=<node-1-id>,<node-2-id>...
      - AKASH_ADDR_BOOK_STRICT=false
      - AKASH_DOUBLE_SIGN_CHECK_HEIGHT=10
      - P2P_PERSISTENT_PEERS=<id@node1:port,id@node2:port>
      - STATESYNC_RPC_SERVERS=<node1:80>,<node2:80>
      - S3_KEY=<s3-key>
      - S3_SECRET=<s3-secret>
      - KEY_PASSWORD=<key password>
      - KEY_PATH=<bucket/validator>
    expose:
      - port: 26657
        as: 80
        to:
          - global: true # debug
    # params:
    #   storage:
    #     data:
    #       mount: /root/.akash

profiles:
  compute:
    validator:
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
        validator:
          denom: uakt
          amount: 1000

deployment:
  validator:
    dcloud:
      profile: validator
      count: 1
``` 
