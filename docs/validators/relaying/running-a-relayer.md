---
title: 2. run a relayer
sidebar_position: 2
---
# Relayer Guide
In this section, you will find relevant information and guides in order to run a relayer and forward Inter-Blockchain Communication Protocol (IBC) packets between chains.

## Requirements

- Get the information specific to those chains by looking into the [Chain Registry](#chain-registry). As the IBC protocol relies on light clients, connections, and channels (with ports),you need to make sure to set up the proper paths for the chains you are relaying to.
- Set up addresses on all those chains. You would need to have a private key and enough funds to pay for transaction fees when submitting IBC messages.
- Being able to query and submit transactions. The relayer must listen for events related to packet commitments, subscribe to events through the Tendermint WebSocket, and query proofs via the Tendermint RPC endpoint. The relayer must also be able to create and update light clients, connections, and channels. This allows the relayer to submit a notice of misbehavior for validators, and relay packets, acknowledgments, and timeouts.

:::info
Not every relayer operator needs to initialize their own channel when starting to relay a certain path.
:::

## Guides
When it comes to spinning up a relayer, you can either use:

- ### <a href="https://github.com/cosmos/relayer" target="_blank">IBC Go</a>
- ### <a href="https://hermes.informal.systems/" target="_blank">Hermes</a>

As an additional resource, you can have a look at the <a href="https://tutorials.cosmos.network/hands-on-exercise/5-ibc-adv/3-go-relayer.html" target="_blank">Go Relayer Tutorial</a> .

## Chain Registry

In order to get reliable information about the chains you are relaying between, you can have a look at the  <a href="https://github.com/cosmos/chain-registry" target="_blank">chain-registry Github repository</a>. This repository
provides detailed parameters about chains, their assets, and other relevant IBC data.

:::info
Check the [active channels](./channels.md) to learn more about current relayer channels for all of Terp Network's networks.
:::

## Operational Costs

Even if the activity of relaying is permissionless, significant hardware requirements and know-how is required. As the volume of RPC calls can be high, relayers operators usually run full nodes for the chains they want to. Because of the single-threaded nature of Tendermint RPC, those large amounts ofqueries may cause the node to run out of sync.

As relaying IBC packets can incur considerable operational costs, relayers operators may want to look into starting validation activities in order to receive delegations and manage their costs.