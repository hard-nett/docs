---
title: run a GoLang relayer 
sidebar_position: 2
---

A relayer communicates with 2 networks in order for packets (msgs) to be sent between them sercurely & with finality.

## GUIDE
Instructions for setting up a relayer via hermes.

## Goals

- install go relayer relayer
- customize config file for networks you would like to use
- configure keys for relayer to sign msgs with
- configure channels, clients, and connections
- run and create service for persistent operations

## Step 1: Install Relayer

build the relayer directly from the source code:
```sh
git clone https://github.com/cosmos/relayer.git
cd relayer
git checkout $(git describe --tags $(git rev-list --tags --max-count=1))
make install
```
to verify it was installed correctly:
```sh
rly version
version: 2.1.2
commit: unknown
cosmos-sdk: v0.46.0
go: go1.18 linux/amd64
```

*If you get an output like `'rly' not found` you should probably add `/srv/rly/go/bin` to your PATH*


# Step 2: Configure Relayer
First, we need to init rly so it will create the default configuration `~/.relayer/config/config.yaml` maybe with a custom memo that will be written on relayed transactions

```bash
rly config init --memo "My custom memo"
```

Then we will add the chains (Terp Network, Cosmos and Secret Network here) on the config file with a simple command:

```bash
rly chains add terpnetwork secretnetwork cosmoshub
```

*Chains configuration will be pulled from chain-registry https://github.com/cosmos/chain-registry so if you find misconfigurations (like gas fees or other) feel free to contribute.*
Aso RPCs will be chosen from chain-registry, so feel free to change them to your local nodes' RPCs or to a preferred public RPC.


## Step 3: Configure Your Relayer Keys

Your relayer will need to sign & broadcast messages on chain, so first the private keys that we will grant to the relayer must be set up. Generally it is ideal to utilize a fresh wallet and private key, not associated with any personal or critical keys in your possession.

Cosmos blockchains enable various methods for handling how the messages are signed, for example a **fee grant** for a key a relayer is using, by a completely different key, and ONLY for the messages that are used when relayed packets are received is possible.

To add keys, this example uses a **mnemonic-file,** which contains just the mnemonic seed phrase of the account you want the relayer to sign & broadcast messages with:

```bash
MNEMONIC="<your_mnemonic_here>"
rly keys add terpnetwork terp-1 $MNEMONIC 
```

Now edit the configuration file (under `~/.relayer/config/config.yaml`) changing the key values according to the you had defined above. Example:
```yaml
    terpnetwork:
        type: cosmos
        value:
            key: <YOUR-KEY-NAME-HERE>
            chain-id: morocco-1
            rpc-addr: https://rpc.terp.network:443

```
In the last step of wallet configuration you can fund your wallets and check balances:
```
rly q balance terpnetwork
```

## Step 4: Configuring paths


### linking two blockchains




## Step 5: Spinning Up A Fresh Channel 

## Step 6: Setup Continuous Relay Service
Create the following configuration to `/etc/systemd/system/rly.service`
```sh
sudo tee /etc/systemd/system/rly.service > /dev/null <<EOF  
[Unit]
Description=Rly IBC relayer
ConditionPathExists=/srv/rly/relayer
After=network.target
[Service]
Type=simple
User=rly
ExecStart=/srv/rly/go/bin/rly start
Restart=always
RestartSec=15
# start of parameters to improve connections with public RPCs
RuntimeMaxSec=14400s
StartLimitInterval=200
StartLimitBurst=10
# end of parameters for external RPCs
[Install]
WantedBy=multi-user.target
EOF
```

Then we well start rly with the newly created service and enable it. Note that this step is done from your normal user account that has sudo privileges, so no longer as a rly user.

```sh
systemctl enable rly
systemctl daemon-reload
systemctl start rly
```

## Step 7: Monitering IBC Relaying on Terp Network
COMING SOON

___
> Sources:
* https://hermes.informal.systems/
* https://docs.junonetwork.io/validators/relaying
>