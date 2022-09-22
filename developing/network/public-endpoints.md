# Public endpoints

Terp Network supports the following  RPC protocols:

- URI over HTTP
- JSON-RPC 2.0 over HTTP
- JSON-RPC 2.0 over websockets (might be deprecated in the future).

Anyone can setup a node exposing endpoints to communicate with the Terp Network blockchain, for convenience there are also some public endpoints available for querying the chain. These are recommended for development and testing purposes. For maximun control and reliability it's recommended to run your own node. This can be easility accomplsihed by using the get.terp.network installer. 

## Official endpoints 

|  | Mainnet | Testnet | 
| -------- | -------- | -------- | 
| **Network** | Mainnet | Testnet|
| **Chain ID**  | TBD| TBD |
| **GRPC endpoint**  | grpc.terp.network | grpc-test.terp.network |
| **RPC endpoint**  | rpc.terp.network  | rpc-test.terp.network |
| **RPC Docs**  |  [Swagger](https://rpc-docs.terp.network/) | [Swagger](https://rpc-docs.terp.network/) |
| **LCD endpoint**  | lcd.terp.network | lcd.testnet.terp.network  |
| **LCD Docs**  |  [Swagger](https://lcd.terp.network/swagger/) |  [ Swagger](https://lcd.testnet.terp.network/swagger/) |
| **Faucet** | I wish 🤑 | [faucet.terp.network](https://faucet.terp.network/) |


### RPC URI over HTTP Example

```sh
curl https://rpc.terp.network/abci_info?
```
or simply open [this url](https://rpc.terp.network/abci_info?) on your browswer 

### JSON-RPC 2.0 over HTTP Example

```sh
curl --header "Content-Type: application/json" --request POST --data '{"method": "block", "params": ["4261881"], "id": 1}' https://rpc.terp.network:443
```

### LCD URI over HTTP example
```
curl -X GET "https://lcd.terp.network/" -H "accept: application/json"
```
or simply open [this url](https://lcd.terp.network/) on your browswer. 

## Chain Registry

This repo contains a chain.json and assetlist.json for a number of cosmos-sdk based chains. A chain.json contains data that makes it easy to start running or interacting with a node. 
- [Chain Registry](https://github.com/cosmos/chain-registry) : `https://github.com/cosmos/chain-registry`

::: tip
Did you know there is also an NPM package that fetch chain-registry data? <br>
**Learn more** : [https://www.npmjs.com/package/chain-registry](https://www.npmjs.com/package/chain-registry) 
:::


## Other providers

