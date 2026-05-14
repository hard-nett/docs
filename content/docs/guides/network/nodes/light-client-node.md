---
title: e. light-client node tutorial
---

A full node is a node that is not a validator, but can verify & update the network state.
## Solution
A full node is a node that has the entire network state contained to its ledger.

```sh
# config pruning
sed -i -e "s/^pruning *=.*/pruning = \"custom\"/" $HOME/.terpd/config/app.toml
sed -i -e "s/^pruning-keep-recent *=.*/pruning-keep-recent = \"100\"/" $HOME/.terpd/config/app.toml
sed -i -e "s/^pruning-interval *=.*/pruning-interval = \"200000\"/" $HOME/.terpd/config/app.toml

# set minimum gas price, enable prometheus and disable indexing
sed -i 's|minimum-gas-prices =.*|minimum-gas-prices = "0.05uthiol"|g' $HOME/.terpd/config/app.toml
sed -i -e "s/prometheus = false/prometheus = true/" $HOME/.terpd/config/config.toml
sed -i -e "s/^indexer *=.*/indexer = \"null\"/" $HOME/.terpd/config/config.toml
```