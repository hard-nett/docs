---
title: sync from state-sync
sidebar_position: 3
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

**state-sync** is a feature that allows nodes to quickly sync their state by fetching a snapshot of the application state at a specific block height. This greatly reduces the time required for node to sync with the network, compared to the default method of replaying all blocks from the genesis block. The syncing happens through a snapshot-enabled RPC and from a trusted block height.

An advantage of state-sync is that the database is very small in comparison to a fully synced node, therefore using state-sync to resync your node to the network can help keep running costs lower by minimizing storage usage.

:::info
When syncing a node with state-sync , you won't have the full transaction history of the network, but only the most recent state that the state-sync RPC has stored.
:::

## How to sync with state-sync

First,make sure to have installed the necessary [dependencies](../nodes/prerequisites.md), installed [terpd](../nodes/installation.md) and set up [your keys](../nodes/keys.md).

1. in the `.terp/config` folder, open the config.toml file with:
```bash
nano ~/.terp/config/config.toml
```
and go to in the statesync section.

2. Set enable to true to enable state sync:
```
enable = true
```
3. Set **rpc_servers** to a list of trusted nodes with state sync enabled:
For example: 

<Container>
<Tabs>
<TabItem value="testnet" label="testnet">

```bash
rpc_servers = "https://testnet.rpc.terp.network:443"

```
</TabItem>
<TabItem value="py" label="mainnet">

```bash
rpc_servers = "https://rpc.terp.network:443"

```
</TabItem></Tabs>
</Container>

Alternatively, if you prefer using snap, you could also set a local variable in your terminal shell, by typing:

<Container>
<Tabs>
<TabItem value="testnet" label="testnet">

```bash
SNAP_RPC= https://testnet.rpc.terp.network:443
```

</TabItem>
<TabItem value="py" label="mainnet">

```bash
SNAP_RPC= https://rpc.terp.network:443
```
</TabItem></Tabs>
</Container>

and making sure that the local variable is correctly set:
```bash
echo $SNAP_RPC
```
4. Set trust_height and trust_hash to the block height and hash of a trusted block, and replace `<trusted_block_height>` and `<trusted_block_hash>` with the actual values:
```
trust_height = <trusted_block_height>
trust_hash = "<trusted_block_hash>"
```
For example:
```
trust_height = 1354507
trust_hash = 0101585D26CB0CCB1FBDADA8A91DB88A9FE4D15D517804EEFA337613F07F3F36
```
In order to fetch the correct values, we can use local variable and use curl.

In your terminal shell, get the latest block height by launching:
```bash
LATEST_HEIGHT=$(curl -s $SNAP_RPC/block | jq -r .result.block.header.height)
```
Then you can get the trusted block height, which is a previous block:
```bash
BLOCK_HEIGHT=$((LATEST_HEIGHT - 100))
```
And then get the hash of the trusted block by launching:
```bash
TRUST_HASH=$(curl -s "$SNAP_RPC/block?height=$BLOCK_HEIGHT" | jq -r .result.block_id.hash)

```
Now, make sure that those variables are properly set:
```bash
echo $LATEST_HEIGHT $BLOCK_HEIGHT $TRUST_HASH
```
The console should output some values, such as:

`1355507 1354507 0101585D26CB0CCB1FBDADA8A91DB88A9FE4D15D517804EEFA337613F07F3F36
`
You can update the config.toml with those values:
```bash
sed -i.bak -E "s|^(enable[[:space:]]+=[[:space:]]+).*$|\1true| ; \s|^(rpc_servers[[:space:]]+=[[:space:]]+).*$|\1\"$SNAP_RPC,$SNAP_RPC\"| ; \s|^(trust_height[[:space:]]+=[[:space:]]+).*$|\1$BLOCK_HEIGHT| ; \s|^(trust_hash[[:space:]]+=[[:space:]]+).*$|\1\"$TRUST_HASH\"| ; \s|^(seeds[[:space:]]+=[[:space:]]+).*$|\1\"\"|" $HOME/.terp/config/config.toml
```

## Start the node
### Starting terpd

Now you can start the node:

### Mainnet

<Container>
<Tabs>
<TabItem value="binary" label="binary">

```bash
terpd start 
```
</TabItem>
<TabItem value="docker" label="docker">

```bash
docker run -v ${HOME}/.terp:/root/.terp -p 9091:9091 -p 9090:9090 -p 26656:26656 -p 26657:26657 -p 1317:1317 ghcr.io/terpnetwork/terp-core:barberry\
  start \
  --p2p.seeds 

```
</TabItem></Tabs>
</Container>

### Testnet

<Container>
<Tabs>
<TabItem value="binary" label="binary">

```bash
terpd start
```
</TabItem>
<TabItem value="docker" label="docker">

```bash
docker run -v ${HOME}/.terp:/root/.terp -p 9091:9091 -p 9090:9090 -p 26656:26656 -p 26657:26657 -p 1317:1317 ghcr.io/terpnetwork/terp-core:barberry\
  start \
  --p2p.seeds 
```
</TabItem></Tabs>
</Container>

#### start terpd as a service
Remember that you can start the node as a service by creating a service file:
```bash
sudo /etc/systemd/system/terpd.service
```
```bash
[Unit]
Description=TerpNetwork Node
After=network-online.target
[Service]
User=$USER
ExecStart=$(which terpd) start
Restart=on-failure
RestartSec=10
LimitNOFILE=10000
[Install]
WantedBy=multi-user.target
```
Start the service by: Reloading the daemon:
```bash
sudo systemctl daemon-reload
```
Enable terpd:
```bash
sudo systemctl enable terpd
```
Start terpd as a service:

```bash
sudo systemctl restart terpd
```
Keep track of the logs:

```bash
sudo journalctl -u terpd -f -o cat
```

#### start the terpd docker as a service
A service file can be used to allow the automatic restart of the service, and it helps to enhance the reliability of your node.