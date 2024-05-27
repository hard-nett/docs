---
title: e. full node tutorial
sidebar_position: 6
---

A full node is a node that is not a validator, but can verify & update the network state.
## Solution
A full node is a node that has more than the minimum unbonding length for the network saved to its local state. This will allow ibc clients to be used with the full node.

```sh
# config pruning
sed -i -e "s/^pruning *=.*/pruning = \"custom\"/" $HOME/.terp/config/app.toml
sed -i -e "s/^pruning-keep-recent *=.*/pruning-keep-recent = \"100\"/" $HOME/.terp/config/app.toml
sed -i -e "s/^pruning-interval *=.*/pruning-interval = \"200000\"/" $HOME/.terp/config/app.toml

# set minimum gas price, enable prometheus and disable indexing
sed -i 's|minimum-gas-prices =.*|minimum-gas-prices = "0.05uthiol"|g' $HOME/.terp/config/app.toml
sed -i -e "s/prometheus = false/prometheus = true/" $HOME/.terp/config/config.toml
sed -i -e "s/^indexer *=.*/indexer = \"null\"/" $HOME/.terp/config/config.toml
```