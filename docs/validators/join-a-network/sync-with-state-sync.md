---
title: sync from state-sync
sidebar_position: 3
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

**state-sync** is a feature that allows nodes to quickly sync their state by fetching a snapshot of the application state at a specific block height. This greatly reduces the time required for node to sync with the network, compared to the default method of replaying all blocks from the genesis block. The syncing happens through a snapshot-enabled RPC and from a trusted block height.

An advantage of state-sync is that the database is very small in comparison to a fully synced node, therefore using state-sync to resync your node to the network can help keep running costs lower by minimizing storage usage.

