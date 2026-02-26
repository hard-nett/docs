---
title: Developer tools FAQs
---

In this section we address some common questions that developers may have.

## How can i limit a query to transactions sent from a specific address?

You can also filter based on the RPC API query using the following:

<Tabs>
<Tab value="mainnet" label="mainnet">

```bash
terpd query txs --events 'wasm._contract_address=<contract-address>&message.sender=<address>
```

</Tab>
<Tab value="testnet" label="testnet">

```bash
terpd query txs --events 'wasm._contract_address=<contract-address>&message.sender=<address>
```

</Tab>
</Tabs>

You can also filter based on the RPC API query using the following:

<Tabs>
<Tab value="mainnet" label="mainnet">

```bash
https://rpc-terp.zenchainlabs.io/tx_search?query=message.sender=<address>ANDmessage.action=/cosmwasm.wasm.v1.MsgInstantiateContract&order_by=desc 
```

</Tab>
<Tab value="testnet" label="testnet">

```bash
https://rpc-t.terp.nodestake.top/tx_search?query=message.sender=<address>ANDmessage.action=/cosmwasm.wasm.v1.MsgInstantiateContract&order_by=desc 
```

</Tab>
</Tabs>

## How can I query the bank module and filter for a particular action type?

You can use the **events** flag and filter events based on various actions, for example:

<Tabs>
<Tab value="mainnet" label="mainnet">

```bash
terpd query txs --events 'message.action=/cosmos.bank.v1beta1.MsgSend' --node https://rpc.mainnet.terp.network:443
```

</Tab>
<Tab value="testnet" label="testnet">

```bash
terpd query txs --events 'message.action=/cosmos.bank.v1beta1.MsgSend' --node https://rpc.testnet.terp.network:443

```

</Tab>
</Tabs>

## How can I convert an address from one network to another?

You can get a network address from an address of a different network via Javascript using the CosmosJS library **@cosmjs/encoding** which you can find inside the cosmjs. The following code snippet shows how to convert from a JUNO address to Terp:

```javascript
import { fromBech32, toBech32 } from ""@cosmjs/encoding""

const { data } = fromBech32('juno1xxxyyy...')
const terpAddress = toBech32('terp', data)"
```

if you want to convert an public address manually, you can use the terpd cli like this:

```
terpd debug bech32-convert <address> terp
```

```
Usage:
  terpd debug bech32-convert [bech32 string] [flags]

Flags:
  -h, --help            help for bech32-convert
  -p, --prefix string   Bech32 Prefix to encode to (default "terp")

Global Flags:
      --home string         directory for config and data (default "/Users/returniflost/.terp")
      --log_format string   The logging format (json|plain) (default "plain")
      --log_level string    The logging level (trace|debug|info|warn|error|fatal|panic) (default "info")
      --trace               print out full stack trace on errors
```

## How can I query paginated data?

To query paginated data, append the **--page 1** flag to the command for the page you required, where 1 in this example signifies the first page. By default 100 records are returned per page.

## How can I output data in JSON format?

To output data in a JSON format, you can append the **--output "json"** flag to the command.

## Troubleshooting issues with developer tools

| **Tool**                  | **Error Log** | **Solution** |
| ----------- | ----------- | ----------- |
| terpd      | providing flags to docker run become flags for docker and not for terpd       | run docker in interactive mode: *docker run -it* ... |
| terpd   | *raw_log: 'out of gas in location: ReadFlat; gasWanted: 0, gasUsed: 1000: out of gas'**        | Make sure to add the correct flags by checking the [fees page](/developers/getting-started/understanding-gas-fees) |
| terpd   | *Error: error:0308010C:digital envelope routines::unsupported* |If you are using Linux or Unix, run: *export NODE_OPTIONS=--openssl-legacy-provider.**For windows, run**set NODE_OPTIONS=--openssl-legacy-provider*|
| terpd   | *Error: Error: spawn terpd ENOENT** |Please make sure to add the *GOPATH*. From your Linux shell, you can launch: *export GOPATH=$HOME/go export PATH=$PATH:$GOROOT/bin:$GOPATH/bin** and then update your terminal shell by launching: *source ~/.profile*|
| all   | *Error: Transaction with ID … was submitted but was not yet found on the chain. You might want to check later* | Each chain has a max gas setting that depends on the genesis file, and if the computation requires more gas than that it will never be included in a block|
