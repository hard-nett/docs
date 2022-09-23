# Load Balanced RPC Nodes

This details two or more deployments of RPC nodes, and an nginx deployment to load balance them.

The node deployment shows running multiple RPC containers under a single domain (note the `count` in the deployment section). 
This deployment can be run multiple times to provide multiple domains, which can then be load balanced using the load balancer deployment (which can also be run as multiple containers, see `count` again). 
We don't map 26657 to port 80 in this instance, as all deployments would need to accept the same load balanced domain, which isn't possible currently.

The load balancer deployment uses a simple nginx container with a script to 
define dynamic upstream servers using an environment variable. See [tombeynon/nginx-dynamic-lb](https://github.com/tombeynon/nginx-dynamic-lb)

Currently adding/removing nodes will require updating the load balancer deployment
which should occur pretty quickly. 

Note that the RPC nodes would ideally be configured to sync with statesync nodes as detailed in the [main README](/README.md#statesync)

## lb-deloy.yml 

``` yaml 
---
version: "2.0"

services:
  node:
    image: ghcr.io/tombeynon/nginx-dynamic-lb:v0.0.2
    env:
      - HOST=mylbdomain.com
      - HOSTS=<node_deploy_1:port,node_deploy_2:port...>
    expose:
      - port: 80
        to:
          - global: true

profiles:
  compute:
    node:
      resources:
        cpu:
          units: 1
        memory:
          size: 2Gi
        storage:
          size: 0.5Gi
  placement:
    dcloud:
      attributes:
        host: akash
      signedBy:
        anyOf:
          - akash1365yvmc4s7awdyj3n2sav7xfx76adc6dnmlx63
      pricing:
        node:
          denom: uakt
          amount: 1000

deployment:
  node:
    dcloud:
      profile: node
      count: 2
``` 

## node_deploy.yml

```yaml
---
version: "2.0"

services:
  node:
    image: ghcr.io/ovrclk/cosmos-omnibus:v0.3.3-akash-v0.16.3
    env:
      - MONIKER=my-moniker-1
      - CHAIN_JSON=https://raw.githubusercontent.com/ovrclk/net/master/mainnet/meta.json
      - SNAPSHOT_JSON=https://cosmos-snapshots.s3.filebase.com/akash/pruned/snapshot.json
      - MINIMUM_GAS_PRICES=0.025uakt
      - FASTSYNC_VERSION=v0
    expose:
      - port: 26657
        to:
          - global: true
    # params:
    #   storage:
    #     data:
    #       mount: /root/.akash

profiles:
  compute:
    node:
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
        node:
          denom: uakt
          amount: 1000

deployment:
  node:
    dcloud:
      profile: node
      count: 2
```