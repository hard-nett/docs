---
title: d. indexer tutorial
sidebar_position: 8
---

indexer's take historical data and performs logic to anazlyze and extract details of on-chain interactions. 
## GUIDE
This guide takes the steps to setup an indexer to liten for any time someone interacts with smart contracts. 

## Requirements 
- [Rust](https://www.rust-lang.org/tools/install)
- [Postgres](https://www.postgresql.org/)
- [Diesel](https://diesel.rs/)
- [Cosmwasm Indexer](https://github.com/permissionless-web/cosmwasm-indexer)
- [Local Fullnode RPC](https://github.com/terpnetwork/terp-core) - by default the indexer expects a full node running locally. 
-  > 500 GB of SSD Storage & 8GB RAM are a conservative overspec for a small network. As the network grows, this minimum is expected to increase.


## Install Postgres & Required Compilation Libraries
first, update your terminal dependencies, if needed:
```sh
sudo apt update && sudo apt upgrade -y
sudo apt install pkg-config postgresql postgresql-contrib libpq-dev
```

### Database Setup 
first, switch to postgres user
```sh
sudo -i -u postgres
```

then you can access the postgres db cli from a sudo-privleged user
```sh
sudo -u postgres psql
```

create a db
```sh
createdb --host=localhost --port=5432 --username=postgres --no-password myindexer
```

create a password for the db user. in this example the username is `postgres`
```sh
ALTER USER username WITH PASSWORD 'new_password';
```

### Install Diesel
make sure you have installed rust before running this command
```sh 
cargo install diesel_cli --no-default-features --features postgres
```

## Database Config
Copy `.env.example` to `.env` on your local system and edit the DATABASE_URL value to match your target postgres instance:
```sh
cp .env.example .env
```
`DATABASE_URL=postgres://dbusername:MY_PASSWORD@localhost:5432/dbname`

Example of what james has:

inside: example .env file

```sh
DATABASE_URL=postgres://james:MY_PASSWORD@localhost:5432/postgres
```

## Running migrations 
using diesel, we setup the initial tables in your database.
```sh
diesel migration run
```

## Run Rust

```sh
cargo build 
```

```sh
cargo run --bin auction_indexer
```
Thats it! an indexer is now waiting to store custom msgs to the postgres database.


___
> Sources:
* https://www.digitalocean.com/community/tutorials/how-to-install-postgresql-on-ubuntu-20-04-quickstart
* https://github.com/DA0-DA0/dao-indexer
* https://diesel.rs/guides/getting-started
>

