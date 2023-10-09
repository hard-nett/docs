---
title: 6. Using Cosmovisor 
sidebar_position: 6
---

## What is cosmovisor?

Cosmovisor is a powerful utility for managing the binary version of Cosmos SDK-based chains. Its primary function is to enable seamless binary upgrades without requiring a full node restart or manual intervention. In essence, Cosmovisor provides for automated processes to handle upgrades, reducing downtime or manual intervention.

Even when automatic upgrades are not enabled, Cosmovisor remains a valuable tool for managing different versions of the **terpd** binary. It simplifies the process of managing different versions of the binary by automatically switching to the appropriate binary version based on the block height. This helps reduce potential errors or missed upgrades during the manual process, allowing validators to maintain their nodes with greater ease and accuracy.

While Cosmovisor can **also** automate the process of downloading and installing new binaries, it's important to note that node operators bear the responsibility of ensuring the binaries they are running are trustworthy. Therefore, even when using Cosmovisor, it is recommended for operators to remain vigilant of upgrade proposals and verify new binaries independently.

In cases where a node operator prefers or requires a greater degree of control, manual upgrades are preferable.
:::danger
Make sure you have backed up the key mnemonic before removing any of your keys, as there will be no way to recover your key without the mnemonic.
:::

:::

### Install
You can install Cosmovisor with:
```bash
go install github.com/cosmos/cosmos-sdk/cosmovisor/cmd/cosmovisor@latest
```
and check that the installation has been successful with:
```bash 
cosmovisor
```
:::info
### You can learn more about Cosmovisor and how to configure it [here](./cosmovisor.md).
::: 

