---
title: grasping ibc channels, clients, connections and more.
sidebar_position: 1
---

## Goals 
- describe how ibc protocol works
- describe the lifecycle of an ibc transaction
- describe ibc-denoms

## IBC Protocol

## IBC Transaction Lifecycle

## IBC denoms

### How are IBC denoms derived?
This code is how a denomnication for a token is standardized for the IBC protocol:
```go
// hash() representing a SHA256 hashing function returning a string
ibc_denom := 'ibc/' + hash('path' + 'base_denom')
```

___
> Sources:
* https://ida.interchain.io/
>