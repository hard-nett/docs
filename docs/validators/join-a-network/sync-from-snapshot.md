---
title: sync from snapshot
sidebar_position: 2
---
A snapshot is a compressed archive of the state of a blockchain node at a specific block height. Syncing a node with a snapshot speeds up the process of catching up with the network, as the node starts from the snapshot's block height instead of from the genesis block.

In order to sync your node through a snapshot, you will need to:
- Download the snapshot (from a trusted source).
- Start your node.

## Download the snapshot

You can download the latest snapshot from:
<Container>
<Tabs>
<TabItem value="testnet" label="testnet">

```bash
## Coming soon

```
</TabItem>
<TabItem value="py" label="mainnet">

```bash
## Coming soon

```
</TabItem></Tabs>
</Container>


## Start the node
### Start terpd
:::info
Before going any further, it is recommended to set up Cosmovisor
:::info 

Now you can start the node with:
```bash
terpd start 
```
### Start terpd as a service
You can start the node as a service by creating a service file:
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
EOF
```
Start the service by: Reloading the daemon:
```bash
sudo systemctl daemon-reload
```
Enable `terpd:`
```
sudo systemctl enable terpd
```
Start `terpd` as a service:
```bash
sudo systemctl restart terpd
```
Keep track of logs:
```bash
sudo journalctl -u terpd -f -o cat
```

You can then check that the service is properly running with:
```bash

sudo systemctl status terpd
```