# Quickstart
_(Note: This repository is under active development. Architecture and implementation may change without documentation)_

This is what you'd use to get a node up and running, fast. It assumes that it is starting on a blank ubuntu machine.  It eschews a systemd unit, allowing automation to be up to the user.  It assumes that installing Go is in-scope since Ubuntu's repositories aren't up to date and you'll be needing go to use terp-core.  It handles the Go environment variables because those are a common pain point.

#  Terp-Node Base Setup

## Hardware Requirements
* **Minimal**
    * 4 GB RAM
    * 100 GB SSD
    * 3.2 x4 GHz CPU
* **Recommended**
    * 8 GB RAM
    * 1 TB NVME SSD
    * 3.2 GHz x4 GHz CPU

## Operating System

* **Recommended**
    * Linux(x86_64)


## Installation Steps
#### 1. Basic Packages
```bash:
# update the local package list and install any available upgrades 
sudo apt-get update && sudo apt upgrade -y 
# install toolchain and ensure accurate time synchronization 
sudo apt-get install make build-essential gcc git jq chrony -y
```
```bash:
# install gcc & make
sudo apt install gcc && sudo apt install make
```

#### 2. Install Go
Follow the instructions [here](https://golang.org/doc/install) to install Go.

Alternatively, for Ubuntu LTS, you can do:
```bash:
wget https://go.dev/dl/go1.19.2.linux-amd64.tar.gz
sudo tar -C /usr/local -xzf go1.19.2.linux-amd64.tar.gz
```

Unless you want to configure in a non standard way, then set these in the `.profile` in the user's home (i.e. `~/`) folder.

```bash:
cat <<EOF >> ~/.profile
export GOROOT=/usr/local/go
export GOPATH=$HOME/go
export GO111MODULE=on
export PATH=$PATH:/usr/local/go/bin:$HOME/go/bin
EOF
source ~/.profile
go version
```

Output should be: `go version go1.19.2 linux/amd64`

### Install terpd from source

#### 1. Clone repository

* Clone git repository
```shell
git clone https://github.com/terpnetwork/terp-core.git
```
#### 2. Install CLI
```shell
cd terp-core && make build && make install
```

To confirm that the installation was successful, you can run:

```bash:
terpd version
```
Output should be: ``

## Instruction for new validators

### Init
```bash:
terpd init "$MONIKER_NAME" --chain-id $CHAIN_ID
```

### Generate keys

```bash:
# To create new keypair - make sure you save the mnemonics!
terpd keys add <key-name> 
```

or
```
# Restore existing terp wallet with mnemonic seed phrase. 
# You will be prompted to enter mnemonic seed. 
terpd keys add <key-name> --recover
```
or
```
# Add keys using ledger
terpd keys show <key-name> --ledger
```

Check your key:
```
# Query the keystore for your public address 
terpd keys show <key-name> -a
```

## Validator Setup Instructions

### Download new genesis file
```bash:
curl https://raw.githubusercontent.com/terpnetwork/test-net/master/athena-3/genesis.json > ~/.terp/config/genesis.json
```
### Set minimum gas fees
```bash:
perl -i -pe 's/^minimum-gas-prices = .+?$/minimum-gas-prices = "0.0125upersyx"/' ~/.terp/config/app.toml
```
### P2P
Currently there are some great community hosted resources: checkout all of the apps configured to Terp Network here: [All Apps](https://terp.network/ecosystem)

#### Add seeds
```bash:
# Checkout active seeds for testnet & main-net here: https://nodejumper.io/terpnetwork-testnet 
```
### Add persistent peers
```bash:
# Checkout some availible persistent peers for testnet & main-net here: https://nodejumper.io/terpnetwork-testnet 
```
### OR

### Download addrbook.json
```bash:
# Checkout active address book for testnet & main-net here: https://nodejumper.io/terpnetwork-testnet 
```
### (Optional) Snapshot sync
```bash
# Checkout available snapshot sync resource provided by the Highstakes Validator Team: https://tools.highstakes.ch/snapshots
```
### Setup Unit/Daemon file

```bash:
# 1. create daemon file
touch /etc/systemd/system/terpd.service
# 2. run:
cat <<EOF >> /etc/systemd/system/terpd.service
[Unit]
Description=Terp Net daemon
After=network-online.target
[Service]
User=<USER>
ExecStart=/home/<USER>/go/bin/terpd start
Restart=on-failure
RestartSec=3
LimitNOFILE=4096
[Install]
WantedBy=multi-user.target
EOF
# 3. reload the daemon
systemctl daemon-reload
# 4. enable service - this means the service will start up 
# automatically after a system reboot
systemctl enable terpd.service
# 5. start daemon
systemctl start terpd.service
```

In order to watch the service run, you can do the following:
```
journalctl -u terpd.service -f
```

Congratulations! You now have a full node. Once the node is synced with the network, 
you can then make your node a validator.

### Create validator
1. Transfer funds to your validator address. A minimum of 1  (1000000uterpx) is required to start a validator.

2. Confirm your address has the funds.

```
terpd q bank balances $(terpd keys show -a <key-alias>)
```

3. Run the create-validator transaction
**Note: 1,000,000 uterpx = 1 , so this validator will start with 1 **

```bash:
terpd tx staking create-validator \ 
--amount 1000000uterpx \ 
--commission-max-change-rate "0.05" \ 
--commission-max-rate "0.10" \ 
--commission-rate "0.05" \ 
--min-self-delegation "1" \ 
--details "validators write bios too" \ 
--pubkey $(terpd tendermint show-validator) \ 
--moniker $MONIKER_NAME \ 
--chain-id $CHAIN_ID \ 
--gas 400000 \
--fees 400000upersyx \
--from <KEY_NAME>
```

To ensure your validator is active, run:
```
terpd q staking validators | grep moniker
```

### Backup critical files
```bash:
priv_validator_key.json
node_key.json
```

## Instruction for old validators

### Stop node
```bash:
systemctl stop terpd.service
```



### Clean old state

```bash:
terpd tendermint unsafe-reset-all --home ~/.terp --keep-addr-book
```

### Rerun node
```bash:
systemctl daemon-reload
systemctl start terpd.service
```

More Nodes ==> More Network

More Network ==> Faster Sync

Faster Sync ==> Less Developer Friction

Less Developer Friction ==> More Terp Network

Thank you for supporting a healthy blockchain network and community by running an Terp-Network node!