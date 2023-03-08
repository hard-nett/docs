# Cosmwasm testnet deployment
The following is a quick guide that shows the basics of deploying a contract to a Terp Network Testnet (`athena-4`). It covers:

- Initial Setup
    - Setup Rust
    - Setup Terp Network Testnet via Terp Installer
    - Setup Client
- Deploy a Smart Contract
    - Clone cw-template
    - Compile the wasm contract with stable toolchain
    - Optimized Compilation
    - Store to Terp Network Testnet chain
    - Instantiate the contract
- Execute the Contract
    - Get contract’s count
    - Increment contract’s count
    - Reset contract’s count
- Osmo Contract Explorer
    - Upload the code
    - Execute the contract

:::tip
Please note this a detailed guide on how to deploy via `terpd`, it also covers additional tooling and useful tips.  You can also deploy to testnet with [Beaker](./cosmwasm-beaker.md) with a couple of commands. 
:::


## Initial Setup

This tutorial uses a Terp-Core specific development tools to deploy contracts to Ter Testnet(`athena-4`).

### Setup Rust

Rust is the main programming language used for CosmWasm smart contracts. While WASM smart contracts can theoretically be written in any programming language, CosmWasm libraries and tooling work best with Rust.

First, [install rustup](https://rustup.rs/).

Then run the following commands:

```bash
# 1. Set 'stable' as the default release channel:
rustup default stable
cargo version
# If this is lower than 1.50.0+, update
rustup update stable

# 2. Add WASM as the compilation target:
rustup target list --installed
rustup target add wasm32-unknown-unknown

# 3. Install the following packages to generate the contract:
cargo install cargo-generate --features vendored-openssl
cargo install cargo-run-script
```

### Setup Terp-Core Testnet

You can easily set up an Terp-Core Testnet environment using the [Terp-Core Installer](https://get.terp.network). 

Run the following and choose option #2 (Client Node) and #2 (Testnet) in order.

```bash
curl -sL https://get.terp.network/install > i.py && python3 i.py
```
Now you have successfully completed setting up an Terp Network client node in Testnet. In order to use `terpd` from the cli, either reload your terminal or refresh your profile with : `‘source ~/.profile’`

Updated tutorial coming soon! TBD

Congratulations! Now you deployed your wasm smart contract on Terp Network Testnet successfully.