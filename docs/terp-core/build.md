---
title: Build and Test
sidebar_position: 2
---


# Build and Test Terp-Core Source Code

This is where the road starts.

Unless using a webapp ui that has already been configured and deployed by other community members, this is one example of how any message can be sent to Terp Network. 

## Types of Ways to Interact With Terp Network:

- Connect a [non-custodial](https://terp.network/ecosystem) wallet to a web app configured to Terp Network 
- Install the Terp Core CLI & **broadcast messages** to an **RPC Endpoint** provider on Terp Network
- Install the Terp Core CLI & **broadcast messages** through your own **full node**
- Install the Terp Core CLI & **broadcast messages** through your own **validator**
- Cross Chain Communication (Interchaintx, interchain accounts) *Coming Soon*  

### For now, we will focus on installing the Terp Core CLI, & setting the RPC endpoint to an RPC provider on Terp Network.

Everything described below are commands that are given to a computer to run through what is called the Command-Line-Interface (CLI). There are many ways to maximize user sercurity that this quick introduction does not cover, however resources will be added to this source repo as we continue. 

## Step 1: Install the Terp Core CLI

### Minimum Requirements

**Linux OS**
Terp Core works best if you are using a computer that is compatible with linux.  There are dozens of platforms optimized for linux, but for those just starting out with command line interaction, its reccomended to use either Unbuntu or a Mac device. 
**Hardware**
The minimum recommended specs for running terpd is as follows:
- 1 physical core x86_64 architecture processor
- 8GB RAM (or equivalent swap file set up)
- 100 GB of storage space

## Commands
Go to [commands](#commands) to learn more.

## Install pre-requisites (Linux)
```
sudo apt-get update && sudo apt upgrade -y && sudo apt-get install make build-essential gcc git jq chrony -y
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
git checkout 0.4.0
```
Once you're on the correct tag, you can build normally, or being custom testing
