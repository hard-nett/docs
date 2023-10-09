---
title: Terp-CLI
sidebar_position: 1
---

# Terp-Core Command Line Interface (Terpd)


The Terpd CLI is a tool that empowers you to interact seamlessly with the Terp Network protocol. Leveraging **terpd**, it allows you to execute a wide array of operations, from sending transactions to querying the blockchain's state and beyond.

The Terpd CLI is not strictly limited to those running their own nodes. You can engage with the network even without hosting a node personally. You can utilize the Terpd CLI to submit transactions or probe the network's state via RPC. This opens up opportunities for a variety of users to interact with the Terp Network blockchain, making it a versatile tool for a range of operations.

:::info
Please note that even if you can use the Terpd CLI to store, instantiate and manage contracts, it is recommended to use the [Developer CLI](/developers/developer-tools/developer-cli) for these purposes, as it provides a smoother developer experience.
:::
## Installation

You can download the latest release of the pre-built binary from the <a href='https://github.com/terpnetwork/terp-core/releases' target='_blank'>releases page</a>.

For Linux, and depending on your architecture:

<Container>
<Tabs>
<TabItem value="amd64" label="amd64">

```
wget https://github.com/terpnetwork/terp-core/releases/download/barberry/terpd_linux_amd64
```

</TabItem>
<TabItem value="arm64" label="arm64">

```
wget https://github.com/terpnetwork/terp-core/releases/download/barberry/terpd_linux_arm64
```

</TabItem>
</Tabs>
</Container>

You can now verify the download by generating the sha256 hash for the downloaded file:
:::info
Using the sha256sum should give you a string *(i.e. 4dd95ee0729b6593c9c390bde6e0c7bf3af0957d7f323e216b76ddb663fa7bc7)*.
:::

You can then download the sha256 checksum file relative to the release file:

```
wget terpdsha256.txt https://github.com/terpnetwork/terp-core/releases/download/barberry/terpd_checksums.txt
```

and you can compare that the sha256 hash strings match, By doing so, you are ensuring that the downloaded file matches the actual release file.

## Scope

The full scope of **terpd** commands can be viewed using the command **terpd --help**:

```
Terp Network Community Network

Usage:
  terpd [command]

Available Commands:
  add-ica-config Add ICA config to genesis.json
  config         Create or query an application CLI configuration file
  debug          Tool for helping with debugging your application
  export         Export state to JSON
  genesis        Application's genesis-related subcommands
  help           Help about any command
  init           Initialize private validator, p2p, genesis, and application configuration files
  keys           Manage your application's keys
  prune          Prune app history states by keeping the recent heights and deleting old heights
  query          Querying subcommands
  rollback       rollback cosmos-sdk and tendermint state by one height
  rosetta        spin up a rosetta server
  start          Run the full node
  status         Query remote node for status
  tendermint     Tendermint subcommands
  tx             Transactions subcommands
  version        Print the application binary version information

Flags:
  -h, --help                help for terpd
      --home string         directory for config and data (default "/home/terps/.terp")
      --log_format string   The logging format (json|plain) (default "plain")
      --log_level string    The logging level (trace|debug|info|warn|error|fatal|panic) (default "info")
      --trace               print out full stack trace on errors

Use "terpd [command] --help" for more information about a command.
```