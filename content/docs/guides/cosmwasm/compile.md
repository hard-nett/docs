---
title: 2. compiling a contract
---

In this section, we will download the code for a sample contract and compile it into a wasm binary executable.


## Prerequisites

Please refer to the [Setting up environment](/cosmwasm/getting-started/set-up-environment) guide to install the required dependencies before proceeding.

## Download contract
Begin by downloading the [cw-contracts](https://github.com/InterWasm/cw-contracts) repository. You will be compiling the nameservice contract.

Clone the repository:
```
git clone https://github.com/InterWasm/cw-contracts
cd cw-contracts
git checkout main
cd contracts/nameservice
```

## Compile contract

#### Compile using cargo
Execute the following command to compile the contract:
```bash
cargo wasm
```
Upon compilation, the file `target/wasm32-unknown-unknown/release/cw_nameservice.wasm` should be generated. The file size is approximately 1.9 MB, indicating that it is a release build but has not yet been stripped of all unnecessary code. To store the contract on-chain, optimization is required. See the [Optimized compilation](#optimize-using-rust-optimizer) section below for instructions on optimizing a contract.

## Optimized compilation

#### Optimize using cargo
The following command should give an optimized contract that can be stored on chain:
```bash
RUSTFLAGS='-C link-arg=-s' cargo wasm
```

#### Optimize using rust-optimizer

You will need [Docker](https://www.docker.com/) installed in order to run **rust-optimizer**.

Navigate to the project root and run the following command:
```
docker run --rm -v "$(pwd)":/code \
  --mount type=volume,source="$(basename "$(pwd)")_cache",target=/code/target \
  --mount type=volume,source=registry_cache,target=/usr/local/cargo/registry \
  cosmwasm/rust-optimizer:0.12.12
```
This command will optimize the **.wasm** file and generate an optimized **.wasm** file in the **artifacts** directory.


---
title: 1. setting up environment
---

You can choose to either set up a local testnet or connect to an existing network. For easy testing, the Terp Network 90u testnet is available for deploying and running your contracts.

To set up a local testnet, see [Running a Local Testnet](/networks/localterp). For details on the available Terp Network networks, see the [Networks](../../validators/join-a-network/overview) page.

The `90u-4` testnet utilizes the `thiolx` native tokens, which is required for paying transaction fees. To obtain these free testnet tokens, see the [Requesting Testnet Tokens](/guides/network/faucet) page.

# Install prerequisites

We have put together an Installation guide to help you set up all the necessary software tooling for developing CosmWasm smart contracts on the Terp Network.

You can access the Terp networks through the following methods:
- Install `terpd` and interact with the network via the CLI. For an overview of terpd, see [Terpd CLI](../../overview/terp-cli/).

# Set up your IDE
A reliable IDE is essential for developing smart contracts using Rust. [Visual Studio Code (VSCode)](https://code.visualstudio.com/) is a highly popular IDE for software development. For more information on setting up VSCode for CosmWasm development, see the [Basic Workspace Environment](/developers/getting-started/ide-setup) guide.

# Set up wallets
To execute transactions using terpd, you need to set up an Terp account. The Project Setup guide will walk you through creating an account.

---
title: 3. integrate with smart contracts
---
To integrate with other CosmWasm contracts, it's crucial to understand what entry points are and how to use them. Entry points in a smart contract are the methods that allow interaction with it.

Smart contracts in CosmWasm define three primary entry points: instantiate, execute, and query.

- **instantiate:** This is the method that's called when the contract is deployed to the network. It's typically used to initialize the contract's state.
- **execute:** This method is called when a transaction is sent to the contract. It's used to update the contract's state.
- **query:** This method is called to read data from the contract's state. It doesn't alter the state.

When you are creating a smart contract that needs to interact with another contract, you need to look into what these entry points do, and handle the interaction within these methods. For this reason, you would need to know what parameters each method accepts and what it returns.

For example, if the other contract has an execute method that accepts a **Transfer** message, you need to know what fields the **Transfer** message expects.

In CosmWasm, inter-contract calls are facilitated using the `CosmosMsg::Wasm(WasmMsg::Execute{})` message type. This allows your contract to define a set of messages that it wishes to send to other contracts on execution. These messages will be returned to the runtime and executed after your contract's execution is successfully completed.

The `WasmMsg::Execute` type takes the following arguments:

- **contract_addr:** The address of the contract you wish to call.
- **msg:** The message you wish to send to the contract. This must be a JSON object that matches the contract's message schema.
- **send:** The coins you wish to transfer to the contract as part of the call.

# Making Calls to the Other Contract's Entry Points

You can use the CosmosMsg::Wasm(WasmMsg::Execute{}) message type to interact with the other contract's execute method. Here's an example of how to do this:

```rust
// Construct the Transfer message for the other contract
let transfer_msg = to_binary(&Transfer {    
    recipient: deps.api.addr_humanize(&recipient_raw)?,   
    amount,
    })?;
    
// Construct the WasmMsg
let msg = WasmMsg::Execute {    
    contract_addr: other_contract_addr.to_string(),    
    msg: transfer_msg,    
    send: vec![],
    };
    
// Return the WasmMsg to be executed by the runtime
Ok(Response::new()    
.add_attribute("action", "call_other_contract")    
.add_message(msg))
```


In this example, **Transfer** is one of the entry points in the other contract. Keep in mind that the above is just for explanatory purpose, and we recommend you to check our guides to learn more.

It's important to remember that the `WasmMsg::Execute` message will be executed after your contract's execution is successfully completed. If your contract's execution fails, the `WasmMsg::Execute` message will not be executed.