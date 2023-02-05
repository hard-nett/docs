---
title: Terp-Core CLI
sidebar_position: 3
---

# Terpd

## Tips 
### Gas CLI Config
As of now, please use the following as a reference for gas fees on terp network:
```
--gas 500000 --fees 500000upersyx
```
## Commands

Get standard debug info from the terp-core daemon:`

```terpd status```
Check if your node is catching up:
```
# Query via the RPC (default port: 26657)
curl http://localhost:26657/status | jq .result.sync_info.catching_up
```
Get your node ID:
```
terpd tendermint show-node-id
```
See keys on the current box: 
```
terpd keys list
```
Import a dkey from a mnemonic: 
```
terpd keys add <new-key-name> --recover 
```
Export a private key(WARNING: don't do this unless you know what you're doing!)
```
terpd keys export <your-key-name> --unsafe --unarmored-hex 
```
Withdraw rewards (including validator commission), where terpvaloper1... is the validator address:
```
terpd tx distribution withdraw-rewards <terpvaloper1...> --from <your-key>  --commission
```
Stake:
```
terpd tx staking delegate <terpvaloper1...> --from <your-key> '200000000uterpx,550000upersyx'
```
