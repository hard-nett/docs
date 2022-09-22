# History of Changes

This is a history of changes to the  repository.

## v1.0.0 (Morocco-1) - April 16, 2022 - Height 0 

This was the genesis block of [TERPNET.](https://github.com/TerpNetwork/net/blob/main/mainnet/genesis.json)  

Since August 2021, the repository for a TERPNET node has evolved through 4 multi-peer test networks, & dozens of local instances while initially compiling & debugging.
From Jan 2022 to May 2022, more than 40 validator teams & node operators have either connected to a test network or are actively participating in consensus & expansion of TERPNET’s main network, tagged morocco-1.

A brief description of each of the changes and how they impact folks:


## v1.1.0 (Morocco-1) - Dec 16, 2021 - Height 2464000

This upgrade includes the first stable release of cosmwasm V1.0.0. Along with this the CosmosSDk is also upgraded to v0.45.4 , which included extensive upgrades in the network repository.  

### API Breaking

- Add cosmwasm project prefix to REST query paths 
- Add support for old contract addresses of length 20 
- Update wasmvm to 1.0.0-beta7 (incl wasmer 2.2) 
- Upgrade wasmvm to v1.0.0-beta10 

### Fixed bugs

- Add missing colons in String of some proposals 
- Replace custom codec with SDK codec (needed for rosetta) 
- Support --no-admin flag on cli for gov instantiation 
- Unpack contract details from genesis 
- Fix: allow no admin in instantiation through proposal (jhernandezb)
- Fix SudoContractProposal and ExecuteContractProposal (the-frey)
- Fix: Make events in reply completely determinisitic by stripping out anything coming from Cosmos SDK (not CosmWasm codebase) (assafmo)

### Implemented Enhancements

- Add support for Buf Build 
- Redact most errors sent to contracts, for better determinism guarantees 
- Fix: close iterators 
- Use callback pattern for contract state iterator 
- Bump github.com/stretchr/testify from 1.7.0 to 1.7.1 
- Bump github.com/cosmos/ibc-go/v2 from 2.0.3 to 2.2.0 
- Make MaxLabelSize a var not const 
- Add UpdateInstantiateConfig governance proposal  (jhernandezb)
- Upgrade wasmvm to v1.0.0  and 
- Support state sync 
- Upgrade to ibc-go v3 
- Initial ICA integration  (ethanfrey)
- Consolidate MaxWasmSize constraints into a single var 
- Add AccessConfig to CodeInfo query response 
- Bump sdk to v0.45.4  (alpe)
- Bump buf docker image to fix proto generation issues  (alpe)
- Add MsgStoreCode and MsgInstantiateContract support to simulations (pinosu)

### Merged Pull Request

- Disable stargate queries 
- Gov param change examples 
- Create link to SECURITY.md in other repo 
- Tests some event edge cases 

### Closed Issues

Issue Updating uploadAccess Param 
Add tx query to wasmd QueryPlugins for smart contract 


### Testing methodology

This upgrade has been tested to be compatible with v5.0.0 until the upgrade height on a testnet. This was done by having a v6.0.0 validator and a v5.0.0 full node peered to each other. Prior to upgrade height, both would reject channel open txs. Past upgrade height, the validator would accept channel opens, and the v5.0.0 full node would crash with a conflicting state hash (as expected). The v6.0.0 node could then receive IBC sends/receives.

