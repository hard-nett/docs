---
title: d. archive node tutorial
sidebar_position: 4
---

Archive nodes save the raw historical state of the blockchain for full nodes to reference. These require a large amount of storage.

## Solution
To setup an archive node, you will need to customize your nodes pruning settings. To do this, we can run the following command to update the setting located in `~/.terp/config/app.toml`:
```sh
sed -i -e "s/^pruning *=.*/pruning = \"nothing\"/" $HOME/.terp/config/app.toml
```

now your node will keep the entire state saved, without pruning. 
