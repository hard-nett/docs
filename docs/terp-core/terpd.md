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
### Set the chain-id
```
terpd config chain-id athena-3
```
### Set the public RPC node 

This command requres an RPC endpoint. By default, your rpc endpoint is set to your localhost:26657 reach out in the discord to find which ones are available
```
terpd config node --help
```
### RPC Providers
| Provider                         | URL  
|----------------------------------|------------------------------------------------------|
| ZenChainLabs                     | https://rpc-terp.zenchainlabs.io/                    |    
| Nodejumpers                      | https://terp-testnet.nodejumper.io:443/              |    
| KjNodes                          | https://terp-testnet.rpc.kjnodes.com:443/            |      
| BccNodes                         | https://terp-testnet.rpc.kjnodes.com:443/            |   
| AmSolutions                      | https://terp-test-rpc.theamsolutions.info:443/       |    
## Commands

Get standard debug info from the terp-core daemon:

```terpd status```
Check if your node is catching up:
```
# Query via the RPC (default port: 26657)
curl http://localhost:26657/status | jq .result.sync_info.catching_up
```
### Get your node ID:
```
terpd tendermint show-node-id
```
### See keys on the current box: 
Learn more about **why proper key management is so crucial** here: [Link](https://www.figment.io/resources/what-does-ownership-mean-in-web3) 
```
terpd keys list
```
### Import a key from a mnemonic: 
```
terpd keys add <new-key-name> --recover 
```
### Export a private key(WARNING: don't do this unless you know what you're doing!)
```
terpd keys export <your-key-name> --unsafe --unarmored-hex 
```
### Withdraw rewards (including validator commission), where terpvaloper1... is the validator address:
```
terpd tx distribution withdraw-rewards <terpvaloper1...> --from <your-key>  --commission
```
### Stake:
```
terpd tx staking delegate <terpvaloper1...> --from <your-key> '200000000uterpx,550000upersyx'
```
