---
title: 3 - cosmjs
sidebar_position: 3
---
# Communicate From an App to a Cosmwasm Smart Contract

 CosmJS is a TypeScript/JavaScript library. It helps developers integrate frontend user interfaces and backend servers with Cosmos blockchains that implement distributed applications.

 In general, user interfaces help users interpret the blockchain state, compose and sign transactions, and send them - all things that are potentially accomplished by other less convenient methods. A user interface is supported by servers or micro-services that also interact with the blockchain.

### Packages
CosmJS is a library that consists of many smaller npm packages within the [@cosmjs namespace](https://www.npmjs.com/org/cosmjs), a so-called "monorepo".

Generally people only need the stargate and encoding packages as they contain the main functionality to interact with Cosmos SDK chains version 0.40 and higher.

Among many more, here are some example packages:

![](../../../../static/img/cosmjs.png)

### Modularity
The repository is nicely modular and keeps clean dependencies. This ensures software quality and lets users pick exactly what they need and only what they need.

## [Terp-Ts](https://github.com/terpnetwork/terp-ts)

