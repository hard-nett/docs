---
title: Terp-Core CLI
sidebar_position: 3
---

# Terpd

## Minimum Requirements

The minimum recommended specs for running terpd is as follows:
- 1 physical core x86_64 architecture processor
- 8GB RAM (or equivalent swap file set up)
- 100 GB of storage space


## Commands
Go to [commands](#commands) to learn more.

## Quick Start (DISREGARD, NOT YET FUNCTIONING)

Go to [https://get.terp.network/](https://get.terp.network/) or copy and past the following into your terminal, then follow the onscreen instructions:

```
curl -sL https://get.terp.network/install > i.py && python3 i.py
```



If you are running on an Apple M1 Chip and are running into issues with terpd not being a recognized command: 

```
git clone https://github.com/terpnetwork/terp-core.git
make build
sudo cp build/terpd /usr/local/bin
```

## Manual Installation
### Update System

This guide will explain how to install the terpd binary onto your system.


On Ubuntu, start by updating your system:
```bash
sudo apt update
```
```bash
sudo apt upgrade --yes
```

## Install Build Requirements

Install make and gcc.
```bash
sudo apt install git build-essential ufw curl jq snapd --yes
```

Install go:

```bash
wget -q -O - https://git.io/vQhTU | bash -s -- --version 1.19.2
```

After installed, open new terminal to properly load go

## Install Terp-Core Binary

Clone the terp-core repo, checkout and install v11.0.1:


```bash
cd $HOME
git clone https://github.com/terpnetwork/terp-core
cd terp-core

git checkout v0.2.0

make install
```
:::tip Note
If you came from the testnet node instruction, [click here to return](../networks/join-testnet)

If you came from the mainnet node instruction, [click here to return](../networks/join-mainnet)
:::



## Commands

This section describes the commands available from `terpd`, the command line interface that connects a running `terpd` process.

### `add-genesis-account`

Adds a genesis account to `genesis.json`.

**Syntax**
```bash
terpd add-genesis-account <address-or-key-name> '<amount><coin-denominator>,<amount><coin-denominator>'
```

**Example**
```bash
terpd add-genesis-account acc1 '200000000uterpx,550000upersyx'
```

### `collect-gentxs`

Collects genesis transactions and outputs them to `genesis.json`.

**Syntax**
```bash
terpd collect-gentxs
```

### `debug`

Helps debug the application. 

### `export`

Exports the state to JSON.

**Syntax**
```bash
terpd export
```

### `gentx`

Adds a genesis transaction to `genesis.json`.

**Syntax**
```bash
terpd gentx <key-name> <amount><coin-denominator>
```

**Example**
```bash
terpd gentx myKey 1000000uterpx --home=/path/to/home/dir --keyring-backend=os --chain-id=test-chain-1 \
    --moniker="myValidator" \
    --commission-max-change-rate=0.01 \
    --commission-max-rate=1.0 \
    --commission-rate=0.07 \
    --details="..." \
    --security-contact="..." \
    --website="..."
```

### `help`

Shows help information.

**Syntax**
```bash
terpd help
```

### `init`

Initializes the configuration files for a validator and a node.

**Syntax**
```bash
terpd init <moniker>
```

**Example**
```bash
terpd init myNode
```

### `keys`

Manages Keyring commands. 


### `query`

Manages queries. 

### `start`

Runs the full node application with Tendermint in or out of process. By default, the application runs with Tendermint in process.

**Syntax**
```bash
terpd start
```

### `status`

Displays the status of a remote node.

**Syntax**
```bash
terpd status
```

### `tendermint`

Manages the Tendermint protocol. 


### `tx`

Retrieves a transaction by its hash, account sequence, or signature. 

**Syntax to query by hash**
```bash
terpd query tx <hash>
```

**Syntax to query by account sequence**
```bash
terpd query tx --type=acc_seq <address>:<sequence>
```

**Syntax to query by signature**
```bash
terpd query tx --type=signature <sig1_base64,sig2_base64...>
```


### `validate-genesis`

Validates the genesis file at the default location or at the location specified.

**Syntax**
```bash
terpd validate-genesis </path-to-file>
```

**Example**
```bash
terpd validate-genesis </genesis.json>
```

### `version`

Returns the version of Terp-Core you're running.

**Syntax**
```bash
terpd version
```
