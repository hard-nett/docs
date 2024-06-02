---
title: grasping ibc channels, clients, connections and more.
sidebar_position: 1
---

## Goals 

- describe how ibc protocol works
- describe the lifecycle of an ibc transaction
- describe ibc-denoms

## IBC Transport Layer

The transport layer consists of 4 specific items:

### Light Clients
IBC clients are able to track and effeciently vverify the validity of cross-chain transactions, without the need for an intermediary. A client can be associated with any number of connections to a counterparty chain.

#### Client State

**IF A CLIENT IS NOT UPDATED WITHIN THE `TrustingPeriod`, THE CLIENT WILL EXPIRE**

### Connections

Connections are responsible for facilitation all cross-chain verifications on an IBC state. A connection can be associated with any number of channels, and is associated with a specific light client of the counterparty chain.

The connection handshake is responsible for verifying the light clients on each chain are the correct ones for their respective counterparties.

### Channels

a module on one blockchain can communicate with a other modules on other blockchains by sending, recieving, and acknowledging packets through channels that are uniquely identified by the (`channelId`, `portId`) tuple. Channels encapsulate 2 `ChannelEnds` that are associated with a connection. 

Just like connections, channels are established with a handshake.

`ORDERED` channels process packets in order they were sent.
`UNORDERED` channels process packets in order they arrive.

## Ports

IBC modules can bind to any number of ports. Each port is identified by unique portID. the `portId` denotes the type of application. 

`transfer` is the `portID` for fungible token transfers

## IBC Client, Connection, and Channel Creation Workflow

### Create Client A

### Create Client B

### Initialize Connection A

### Try Open Conection B

### Acknowledge Open Connection A

### Confirm Open Connection B

### Initialize Channel A 

### Try Open Channel B

### Acknowledge Open Channel  A

### Confirm Open Channel B


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