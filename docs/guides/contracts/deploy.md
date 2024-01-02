---
title: a. deploy a contract to a network
sidebar_position: 1
---

# Deploying A CosmWasm Contract

The following is detailed guide that shows the basics of manually deploying a contract to a Terp Network local environment.


You now have the wasm binary ready. It's time to deploy it to the Terp (90-u2) testnet and begin interacting with your smart contract. You can use the [terpd CLI](../../overview/terp-cli/). 

# Deploy contract
In the [Compile Contract](../getting-started/compile-a-contract) page, we generated a wasm binary executable. You can upload the code to the blockchain, and once the process is complete, you can download the bytecode for verification purposes.

### Deploy using terpd

Now you will store the wasm bytecode of the **cw_namespace** contract on chain and obtain the **code id**. This **code id** will be used later to create an instance of the **cw_namespace** contract.
```
RES=$(terpd tx wasm store artifacts/cw_nameservice.wasm --from mywallet --chain-id 90u-2 --gas auto --gas-adjustment 1.3 --fees 30000uthiolx -y --output json -b block --node TBD)
```

The following is an easier way to get the Code Id from the response:
```
CODE_ID=$(echo $RES | jq -r '.logs[0].events[] | select(.type=="store_code") | .attributes[] | select(.key=="code_id") | .value')
echo $CODE_ID
```
You can see the list of contracts instantiated using the CODE_ID generated above by executing the following command:
```
terpd q wasm list-contract-by-code $CODE_ID 
```
The response should be an empty list since no contracts have been instantiated yet.
```
{"contracts":[],"pagination":{"next_key":null,"total":"0"}}
```
Before you instantiate a contract using the Code Id and interact with it, let's verify if the code stored on the blockchain is indeed the **cw_namespace.wasm** binary you uploaded.

Download the wasm binary from the chain and compare it to the original one:
```
terpd q wasm code $CODE_ID download.wasm
```
The two binaries shoud be identical:
```
diff artifacts/cw_nameservice.wasm download.wasm
```
If the **diff** command yields an empty output, this indicates that the two files being compared are identical.

# Instantiating the contract

You can now create an instance of the wasm contract. After instantiation, you can make queries and execute transactions.

# Contract Interaction
Now that the contract is instantiated, you can register a name and transfer it to another address by paying the transfer fee.