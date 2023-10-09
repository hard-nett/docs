---
title: Run LocalTerp with mainnet state
sidebar_position: 3
---
## LocalTerp with Mainnet State

Running LocalTerp with mainnet state is resource intensive and can take a bit of time. It is recommended to only use this method if you are testing a new feature that must be thoroughly tested before pushing to production.

A few things to note before getting started. The below method will only work if you are using the same version as mainnet. In other words, if mainnet is on v8.0.0 and you try to do this on a v9.0.0 tag or on main, you will run into an error when initializing the genesis. (yes, it is possible to create a state exported testnet on a upcoming release, but that is out of the scope of this tutorial)

