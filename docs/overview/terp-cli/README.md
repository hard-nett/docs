---
title: Terp-CLI
sidebar_position: 1
---

# Terp-Core Command Line Interface (Terpd)

`terpd` is the all-in-one command-line interface (CLI). It allows you to run an Terp node, manage wallets and interact with the Terp Network through queries and transactions. This introduction will explain how to install the terpd binary onto your system and guide you through some simple examples how to use terpd.

## Prerequisites 

### Go
Terp Core is build using Go verison 1.19+. Check your version with:
```
go verison
```
Once the correct version is installed, confirm that your GOPATH is correctly configured by running the following command and adding it to your shell startup script:
```
export PATH=$PATH:$(go env GOPATH)/bin

```

## Manual Installation
```
# install dependencies, if needed
sudo apt update
sudo apt install -y curl git jq lz4 build-essential unzip
```
### Install [Terp-Core](https://github.com/terpnetwork/terp-core.git)
```
git clone https://github.com/terpnetwork/terp-core.git
cd terp-core || return
git checkout barberry
make install
terpd version # 1.0.1
```
### Terp-Core Installed 🌌
Boom! You are now set up to interact with Terp Network via command-line-interface. Now that you know install terp-core, lets take a look at how we set up & run our terp-node. 