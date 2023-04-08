# Joining Mainnet

## Install Go and Cosmovisor

Feel free to skip this step if you already have Go and Cosmovisor.

### Install Go

We will use Go v1.20.3 as an example.
```Go
sudo rm -rvf /usr/local/go/
wget https://golang.org/dl/go1.19.3.linux-amd64.tar.gz
sudo tar -C /usr/local -xzf go1.19.3.linux-amd64.tar.gz
rm go1.19.3.linux-amd64.tar.gz
```
### Configure Go
Unless you want to configure in a non-standard way, then set these in the `~/.profile` file.
```bash
export GOROOT=/usr/local/go
export GOPATH=$HOME/go
export GO111MODULE=on
export PATH=$PATH:/usr/local/go/bin:$HOME/go/bin
```
### Install Cosmovisor
We will use [Cosmovisor](https://docs.cosmos.network/v0.47/tooling/cosmovisor) v1.0.0 as example here.
```
go install github.com/cosmos/cosmos-sdk/cosmovisor/cmd/cosmovisor@v1.0.0
```
## Install Node
Install the current version of node binary.
```bash
git clone https://github.com/terpnetwork/terp-core
cd terp-core
git checkout v1.0.0 
make install
```
## Configure Node
### Initialize Node
Please replace `YOUR_MONIKER` with your own moniker.
```bash
terpd init YOUR_MONIKER --chain-id morocco-1
```
### Download Genesis
The best practice is to find the official genesis download link, located here:
```bash
wget -O genesis.json
mv genesis.json ~/.terp/config
```
### Configure Seed
Using a seed node to bootstrap is the best practice in our view. Alternatively, you can use addrbook or persistent_peers.
```
sed -i 's/seeds = ""/seeds = ""/' ~/.terp/config/config.toml
```
## Launch Node
### Configure Cosmovisor Folder
Create Cosmovisor folders and load the node binary.
```
# Create Cosmovisor Folders
mkdir -p ~/.terp/cosmovisor/genesis/bin
mkdir -p ~/.terp/cosmovisor/upgrades

# Load Node Binary into Cosmovisor Folder
cp ~/go/bin/terpd ~/.terp/cosmovisor/genesis/bin
```
### Create Service File
Create a terp.service file in the /etc/systemd/system folder with the following code snippet. Make sure to replace USER with your Linux user name. You need sudo previlege to do this step.
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
### Download Snapshot
Please use our popular **snapshot** download service to download and extract Bitcanna snapshot.
### Start Node Service
```
# Enable service
sudo systemctl enable bitcanna.service

# Start service
sudo service bitcanna start

# Check logs
sudo journalctl -fu bitcanna
```
## Other Considerations
This installation guide is the bare minimum to get a node started. You should consider the following as you become a more experienced node operator.

- Use Ansible script to automate the node installation process
- Configure firewall to close most ports while only leaving the p2p port (typically 26656) open
Use custom ports for each node so you can run multiple nodes on the same server
- If you find a bug in this installation guide, please reach out to our Discord Server and let us know.