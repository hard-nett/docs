---
title: Build and Test
sidebar_position: 2
---


# Build and Test Terp-Core Source Code

This is where the road starts.

Unless using a webapp ui that has already been configured and deployed by other community members, this is one example of how any message can be sent to Terp Network. 

## Types of Ways to Interact With Terp Network:

- Connect a Keplr wallet to a web app configured to Terp Network 
- Install the Terp Core CLI & broadcast messages to an RPC Endpoint provider on Terp Network
- Install the Terp Core CLI & create a new full node
- Install the Terp Core CLI & create a validator
- Cross Chain Communication (Interchaintx, interchain accounts)  

### For now, we will focus on installing the Terp Core CLI, & setting the RPC endpoint to an RPC provider on Terp Network.

Everything described below are commands that are given to a computer to run through what is called the Command-Line-Interface (CLI). 

## Step 1: Install the Terp Core CLI

Terp Core works best if you are using a computer that is compatible with linux.  There are dozens of platforms optimized for linux, but for those just starting out with command line interaction, its reccomended to use either Unbuntu or a Mac device. 



## Install pre-requisites (Linux)
```
# Update the local package list and install any available upgrades

sudo apt-get update && sudo apt upgrade -y

# install toolchain and ensure accurate time synchronization

sudo apt-get install make build-essential gcc git jq chrony -y
```

## Install Go

For an Ubuntu, you can probably use:
```
wget https://golang.org/dl/go1.19.2.linux-amd64.tar.gz
sudo tar -C /usr/local -xzf go1.19.2.linux-amd64.tar.gz
```
Please install Go v1.19.2 or later.

Unless you want to configure in a non standard way, then set these in the .profile in the user's home (i.e. ~/) folder.
```
export GOROOT=/usr/local/go
export GOPATH=$HOME/go
export GO111MODULE=on
export PATH=$PATH:/usr/local/go/bin:$HOME/go/bin
```
After updating your ~/.profile you will need to source it:
```
source ~/.profile
```
## Build Terp-Core from source
```
git clone https://github.com/terpnetwork/terp-core
cd terp-core
git fetch
git checkout 0.2.0-3-g2b8926a
```
Once you're on the correct tag, you can build:
```
make install
```
Configure `terpd` to connect to public RPC

Follow these instructions to configure your terpd binary to connect to public RPC for submitting transactions and making queries to the Terp network if you will not be syncing a node.

## Set the chain-id
```
terpd config chain-id athena-3
```
Set the public RPC node 

This command requres an RPC endpoint. By default, your rpc endpoint is set to your localhost:26657 reach out in the discord to find which ones are available
```
terpd config node --help
```
You will now be able to make transactions and queries with terpd. For more information on terpd commands, execute terpd --help

RPC Providers
```
# Nodejumpers: 
https://terp-testnet.nodejumper.io:443/

# KjNodes: 
https://terp-testnet.rpc.kjnodes.com:443/

# BccNodes:
https://terp-testnet.rpc.kjnodes.com:443/

# AmSolutions:
https://terp-test-rpc.theamsolutions.info:443/ 
``` 

Thats it! You should now be ready to set up your keyring & send transactions to Terp Network

to verify, run the following command
```
terpd status
```

you should see as a response something similar to this
```
{
    "NodeInfo": {
        "protocol_version": {
            "p2p": "8",
            "block": "11",
            "app": "0"
        },
        "id": "15f5bc75be9746fd1f712ca046502cae8a0f6ce7",
        "listen_addr": "tcp://0.0.0.0:26656",
        "network": "athena-3",
        "version": "0.34.23",
        "channels": "40202122233038606100",
        "moniker": "nodejumper",
        "other": {
            "tx_index": "on",
            "rpc_address": "tcp://0.0.0.0:26657"
        }
    },
    "SyncInfo": {
        "latest_block_hash": "BB1EAD0071B622F7669AFF03933A55E997F4C945A4263B947498B68E73D27B5B",
        "latest_app_hash": "60B8765A9D258C108751D84F758A07F8B57DD6D124592EF707DAF1E88165DC7C",
        "latest_block_height": "49149",
        "latest_block_time": "2022-12-31T22:13:52.313529733Z",
        "earliest_block_hash": "0610F2022010E8EE5A54850A9C19C991FFBE5081E43B318DB7E3CEDE5513AD35",
        "earliest_app_hash": "E3B0C44298FC1C149AFBF4C8996FB92427AE41E4649B934CA495991B7852B855",
        "earliest_block_height": "1",
        "earliest_block_time": "2022-10-28T16:00:00Z",
        "catching_up": false
    },
    "ValidatorInfo": {
        "Address": "931EB74876A29620C665594DA852E5DD43DA312B",
        "PubKey": {
            "type": "tendermint/PubKeyEd25519",
            "value": "Ov5KC5QjtrvbB3sxanRXgJ7TfZfgmDJaIODalD4kXIA="
        },
        "VotingPower": "0"
    }
}
```