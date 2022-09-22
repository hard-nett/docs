# Terpd

## Minimum Requirements

The minimum recommended specs for running terpd is as follows:
- 8-core (4 physical core), x86_64 architecture processor
- 32 GB RAM (or equivalent swap file set up)
- 1 TB of storage space



## Commands

Go to [commands](https://docs.terp.network/developing/tools/terpd.html#commands-2) to learn more.


## Quick Start

Go to [https://get.terp.network/](https://get.terp.network/) or copy and past the following into your terminal, then follow the onscreen instructions:

```
curl -sL https://get.terp.network/install > i.py && python3 i.py
```

![](../../assets/installer.png)

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
wget -q -O - https://git.io/vQhTU | bash -s -- --version 1.18.1
```

After installed, open new terminal to properly load go

## Install Terp-Core Binary

Clone the Terp Network repo, checkout and install v11.0.1:

```bash
cd $HOME
git clone https://github.com/terpnetwork/terp-core
cd terp-core
git checkout v11.0.1
make install
```
::: tip Note
If you came from the testnet node instruction, [click here to return](../network/join-testnet)

If you came from the mainnet node instruction, [click here to return](../network/join-mainnet)
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
terpd add-genesis-account acc1 '200000000uterp,550000upersy'
```

### `collect-gentxs`

Collects genesis transactions and outputs them to `genesis.json`.

**Syntax**
```bash
terpd collect-gentxs
```

### `debug`

Helps debug the application. For a list of syntax and subcommands, see the [debug subcommands](subcommands.md#debug-addr).

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
terpd gentx myKey 1000000uterp--home=/path/to/home/dir --keyring-backend=os --chain-id=test-chain-1 \
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

Manages Keyring commands. For a list of syntax and subcommands, see the [keys subcommands](subcommands.md#keys-add).


### `migrate`
Migrates the source genesis into the target version and prints to STDOUT.

**Syntax**
```bash
terpd migrate <path-to-genesis-file>
```

**Example**
```bash
terpd migrate /genesis.json --chain-id=testnet --genesis-time=2020-04-19T17:00:00Z --initial-height=4000
```

### `query`

Manages queries. For a list of syntax and subcommands, see the [query subcommands](subcommands.md#query-account).

### `rosetta`

Creates a Rosetta server.

**Syntax**
```bash
terpd rosetta
```

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

Manages the Tendermint protocol. For a list of subcommands, see []()

### `testnet`

Creates a testnet with the specified number of directories and populates each directory with the necessary files.

**Syntax**
```bash
terpd testnet
```

**Example**
```bash
terpd testnet --v 6 --output-dir ./output --starting-ip-address 192.168.10.2
```

### `tx`

Retrieves a transaction by its hash, account sequence, or signature. For a list of full syntax and subcommands, see the [tx subcommands](subcommands.md#tx-authz-exec).

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

### `txs`

Retrieves transactions that match the specified events where results are paginated.

**Syntax**
```bash
terpd query txs --events '<event>' --page <page-number> --limit <number-of-results>
```

**Example**
```bash
terpd query txs --events 'message.sender=cosmos1...&message.action=withdraw_delegator_reward' --page 1 --limit 30
```

### `unsafe-reset-all`

Resets the blockchain database, removes address book files, and resets `data/priv_validator_state.json` to the genesis state.

**Syntax**
```bash
terpd unsafe-reset-all
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
