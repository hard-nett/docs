---
title: 3. initialize a node
sidebar_position: 3
---

# Initialize a node

A **moniker** is a human-readable name that represents the validator node. It's a way to identify your validator to other participants in the network, much like a username or a handle. It's intended to be easier to remember and recognize than the validator's public key or operator address, which are long and difficult to distinguish at a glance. The moniker shows the activity of your node on the block explorer.

You can set up the moniker of your node by launching the following command:

<Container>
<Tabs>
<TabItem value="testnet" label="testnet">

```bash
terpd init <YOUR_NODE_MONIKER> --chain-id 90u-2
```
</TabItem>
<TabItem value="mainnet" label="mainnet">

```bash
terpd init <YOUR_NODE_MONIKER> --chain-id morocco-1
```

</TabItem>
</Tabs>
</Container>

## Next Steps

you can now set up the [node keys](./keys.md)