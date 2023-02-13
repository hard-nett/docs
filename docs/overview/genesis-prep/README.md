---
title: "NEW: Introduction"
sidebar_position: 3
---
# 🚨Phase I: Network Gains Stability 🚨
One of the core ideologies around blockchains is immutability. This is the idea that we don’t go back and edit past state transitions. While this notion of immutability is implemented directly via consensus protocols in the software, it is ultimately upheld by social contract among participants.

That said, the technology underlying Terp Network was intentionally developed to enable low-friction forks and rollbacks. We’ve seen the community practice these techniques numerous times on the test networks. It’s likely they will need to be used on a mainnet as well. Ultimately, they are a countervailing force to the risk of cartel takeover.

Reverting state is often seen as highly grievous, as it compromises the network’s economic finality. Hence it should only be used in extreme conditions, as witnessed in the case of Ethereum with the DAO Hard Fork. That said, in the early days of the Terp Network, transfers will not be active, and hence the severity of state reversions will be reduced, as state transitions will be much less “economically final”. If necessary in case of bugs, the state can be exported from a past height and the network restarted, as practiced on the testnets.

Once governance chooses to enable transfers, the importance of economic finality must be respected by the network.

To summarize, if there are errors or vulnerabilities in the Terp Network in the days before transfers are enabled, users should expect arbitrary state rollbacks even to genesis. Once transfers are enabled, state rollbacks will be much more difficult to justify.

# Overview | Initial Validator Coordination

## **What is it?**

This validator set is computed from the set of signed gentx transactions during this genesis transaction, and initially includes various validators who were considered reputable by the TerpNET Foundation.

### What this means for users:

The Team will recommend a particular genesis file and software version, but there is no guarantee a network will ever start from it - nodes and validators may never come online, the community may disregard the recommendation and choose different genesis files, and/or they may modify the software in arbitrary ways. Such outcomes and many more are outside the teams control and completely in the hands of the community.

On initialization of the software, the Terp Network Bonded Proof-of-Stake system will kick in to determine the initial validator set (max TBD) from the set of gentx transactions. More than 2/3 of the voting power of this set must be online and participating in consensus in order to create the first block and start Terp Network.

We expect and hope that TERP holders will exercise discretion in initial staking to ensure the network does not ever become excessively centralized as we move steadily to the target of 66% TERPS staked. This is not a first of its kind experiment in bootstrapping a decentralized network, however other proof of stake networks have bootstrapped with the aid of a foundation or other administrator. We hope to bootstrap as a decentralized community, building on the shared experiences of many many testnets.

# **Phase II: Governance Consensus Begins**

Summary: Once mainnet is deemed sufficiently stable, bonded Terp holders will vote to decide whether or not Terp-Core functions like uploading contracts & enabling transfering should be enabled. This procedure will happen through on-chain governance. 

The best way to check on the status of governance proposals is to view them through Terp explorers. A list of explorers can be found on the launch page: [*docs.terp.network/overview/genesis-prep*](https://docs.terp.network/overview/genesis-prep).

What this means for users: If the proposal is accepted and transfers are enabled, then it becomes possible to transfer This will not enable the transfers of vesting tokens, which most inital Terp Token holders will have. 

# **Disclaimer**

Terp Network is *highly* experimental software. In these early days, we can expect to have issues, updates, and bugs. The existing tools require advanced technical skills and involve risks which are outside of the control of the Terp Network and/or the TerpNET Foundation team . Any use of this open source Apache 2.0 licensed software is done at your *own risk and on a “AS IS” basis, without warranties or conditions of any kind*, and any and all liability of the teams for damages arising in connection to the software is excluded. **Please exercise extreme caution!**

Furthermore, it must be noted that it remains in the community's discretion to adopt or not to adopt the Genesis State that the TerpNET Foundation DAO recommends within the Genesis Block Software. Therefore, The dev team *cannot* guarantee that (i) TERPS will be created and (ii) the recommended allocation as set forth herein will actually take place.