# Validating On Testnet

## Install Go and Cosmovisor
Feel free to skip this step if you already have Go and Cosmovisor.

#### Install Go 
We will use Go `v1.19.2` as example here. The code below also cleanly removes any previous Go installation.
```
sudo rm -rvf /usr/local/go/
wget https://golang.org/dl/go1.19.2.linux-amd64.tar.gz
sudo tar -C /usr/local -xzf go1.19.2.linux-amd64.tar.gz
rm go1.19.3.linux-amd64.tar.gz
```
#### Configure Go 
Unless you want to configure in a non-standard way, then set these in the `~/.profile` file.
```
export GOROOT=/usr/local/go
export GOPATH=$HOME/go
export GO111MODULE=on
export PATH=$PATH:/usr/local/go/bin:$HOME/go/bin
```
#### Install Cosmovisor
We will use Cosmovisor v1.0.0 as example here.
```
go install github.com/cosmos/cosmos-sdk/cosmovisor/cmd/cosmovisor@v1.0.0

```
## Install Node 
Install the current version of node binary.
```
git clone https://github.com/terpnetwork/terp-core terp-core
cd terp-core
git checkout v0.4.0
make install
```
## Configure Node 
#### Initialize Node
Please replace `YOUR_MONIKER` with your own moniker.
```
terpd init YOUR_MONIKER --chain-id athena-4
```
#### Download Genesis
 The best practice is to find the official genesis download link.
 ```
wget -O genesis.json https://raw.githubusercontent.com/terpnetwork/test-net/master/athena-4/genesis.json 
mv genesis.json ~/.terp/config/
 ```
#### Configure Seed
Using a seed node to bootstrap is the best practice in our view. Alternatively, you can use [addrbook](https://nodejumper.io/terpnetwork-testnet/sync) or [persistent_peers](https://github.com/terpnetwork/chain-registry/blob/master/testnets/terpnettestnet/chain.json).
```
sed -i 's/seeds = ""/seeds = ""/' ~/.terp/config/config.toml
```
## Launch Node 
#### Configure Cosmovisor Folder
Create Cosmovisor folders and load the node binary.
```
# Create Cosmovisor Folders
mkdir -p ~/.terp/cosmovisor/genesis/bin
mkdir -p ~/.terp/cosmovisor/upgrades

# Load Node Binary into Cosmovisor Folder
cp ~/go/bin/terpd ~/.terp/cosmovisor/genesis/bin
```
#### Create Service File
```
touch /etc/systemd/system/terpd.service

```
#### Configure `terpd.service`
Make sure to replace USER with your Linux user name. You need sudo previlege to do this step.
```
[Unit]
Description="terp node"
After=network-online.target

[Service]
User=USER
ExecStart=/home/USER/go/bin/cosmovisor start
Restart=always
RestartSec=3
LimitNOFILE=4096
Environment="DAEMON_NAME=terpd"
Environment="DAEMON_HOME=/home/USER/.terp"
Environment="DAEMON_ALLOW_DOWNLOAD_BINARIES=false"
Environment="DAEMON_RESTART_AFTER_UPGRADE=true"
Environment="UNSAFE_SKIP_BACKUP=true"

[Install]
WantedBy=multi-user.target
```
#### Download Snapshot
[Highstakes Validators](https://highstakes.ch/) has provided us with a daily snapshot to quickly catch up your new node to the latest block height. Below are instructions to fetch a snapshot of the test network
```
wget https://tools.highstakes.ch/files/terp.tar.gz
```
extract to `~/.terp`:
```
tar -xvf terp.tar.gz -C ~/.terp
```

### Start Node Service
```
systemctl daemon-reload
# enable service - this means the service will start up automatically after a system reboot
systemctl enable terpd.service
# start daemon
systemctl start terpd.service
```