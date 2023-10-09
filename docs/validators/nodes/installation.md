---
title: 2. install a node
sidebar_position: 2
---

This guide provides instructions on how various methods to install and run a full node on the Terp Network blockchain.

## Option 1: Build from source
### Build Terp-Core from source
```bash
# from $HOME dir
git clone https://github.com/terpnetwork/terp-core
cd terp-core
git fetch
git checkout <version-tag>
```
The `<version-tag>` will need to be set to either a **[testnet chain-id](../../networks/join-testnet)** or the **[latest mainnet version tag](../../networks/join-mainnet)**.

Do the following to build and install the terpd  daemon:

```bash
cd terp-core
make install
```


### Ensure that terpd is installed
You can now verify that **terpd** has been correctly installed by launching:

```bash
terpd version 
```
The version you installed should be returned.
## Option 2: Use the pre-built binary

### Download the binary

You can download the latest release of the pre-built binary from the [**releases page**](https://github.com/terpnetwork/terp-core/releases).

For Linux, depending on your architechture:

<Container>
<Tabs>
<TabItem value="amd64" label="amd64">

```bash
wget https://github.com/terpnetwork/terp-core/releases/download/barberry/terpd_linux_amd64
```
</TabItem>
<TabItem value="arm64" label="arm64">

```bash
wget https://github.com/terpnetwork/terp-core/releases/download/barberry/terpd_linux_arm64
```
</TabItem>
</Tabs>
</Container>


### Verify the integrity of the binary

You can now verify the download by generating the sha256 hash for the downloaded file:

<Container>
<Tabs>
<TabItem value="amd64" label="amd64">

```bash
sha256sum terpd_linux_amd64
```
</TabItem>
<TabItem value="arm64" label="arm64">

```bash
sha256sum terpd_linux_arm64
```

</TabItem>
</Tabs>
</Container>

Using the *sha256sum* should give you a string (i.e.
*07e5d6994f7f157a1f1d07698947a731a4daf7908cd2480d7cc9898e8e4ca77c*).

## Use the terpd docker image

### Build or Pull the docker image

You can pull the docker image from the following repositories:

- **Production** *Image coming soon*
- **[End to End Repo](https://github.com/terpnetwork/terp-core/pkgs/container/terp-core-e2e)** *Currently configured to v2.0.0*
:::info 
Make sure to always use the image tag that points to the network you want to connect.
:::

You can build a docker image locally by running this command in the root of the terp-core repository:
```
docker build -t terpnetwork/terp-core:<version-info> .
```
This will generate a docker image locally, named `terpnetwork/terp-core:<version-info>`.

### Set up the PATH
By default, the Docker image runs the `terpd` binary, so you should specify the arguments for `terpd` right after the image name. For better usage, mount an external volume at `/root/.terp` to persist the daemon home path across different runs. For example, if you want to add a key:


```bash
docker run --rm -it \
  -v ~/.terp:/root/.terp \
  terpnetwork/terp-core:<version-info> \
  keys add test-key
```

And then list all keys:
```bash
docker run --rm -it \
  -v ~/.terp:/root/.terp \
  terpnetwork/terp-core:<version-info> \
  keys list
```

It's also important to notice that, when running a node in a network, you'll need to expose the container ports for external connectivity. The image exposes the following ports:

- **1317**: Rest server
- **26656**: Tendermint P2P
- **26657**: Tendermint RPC

:::info
To simplify using the Docker container, you can set an alias with the home path and the proper image tag, like:

```
alias terpd="docker run --rm -it -v ~/.terp:/root/.terp terpnetwork/terp-core:<version-info>"

```

After setting the alias with the above tip, you can use the other terpd commands without typing the verbose Docker run command. For the sake of comprehensive documentation, the full Docker command is shown. Just remember that by setting the alias you can simply use terpd instead of the Docker command.
:::

# Next steps
Now its time to initialize your [node](./configure)

