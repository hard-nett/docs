---
title: Submission Guidelines
sidebar_position: 4
---

# Proposal Submission for Voting

## Preparing the Proposal Payload
___
Many proposals allow for long form text to be included, usually under the key description. These provide the opportunity to include markdown if formatted correctly as well as line breaks with \n. If you're using markdown or line breaks it's recommended to put the proposal text into a json file and include that file as part of the CLI proposal, as opposed to individual fields in flags.

### Using terpd tx gov

Coming Soon

### Text Proposals 
TextProposal are used by delegators to agree to a certain strategy, plan, commitment, future upgrade, or any other statement in the form of text. Aside from having a record of the proposal outcome on the Terp Network chain, a text proposal has no direct effect on Terp Network.

### Community Pool
For community pool spend proposals, there are five components:
1. **Title** - the distinguishing name of the proposal, typically the way the that explorers list proposals
2. **Description** - the body of the proposal that further describes what is being proposed and details surrounding the proposal
3. **Recipient** - the Terp Network (bech32-based) address that will receive funding from the Community Pool
4. **Amount** - the amount of funding that the recipient will receive in `uterp` or `uthiol`.
5. **Deposit** - the amount that will be contributed to the deposit (in `uterp`) from the account submitting the proposal

**Community Pool Spend SubDaos**1. **Title** - the distinguishing name of the proposal, typically the way the that explorers list proposals
2. **Description** - the body of the proposal that further describes what is being proposed and details surrounding the proposal
3. **Recipient** - the Terp (bech32-based) address that will receive funding from the Community Pool
4. **Amount** - the amount of funding that the recipient will receive in `uterp` or `uthiol`.
5. **Deposit** - the amount that will be contributed to the deposit (in `uterp`) from the account submitting the proposal

 When an observer selects the proposal, they'll see the description. Not all explorers will show the recipient and amount, so ensure that you verify that the description aligns with the what the governance proposal is programmed to enact. If the description says that a certain address will receive a certain number of TERP, it should also be programmed to do that, but it's possible that that's not the case (accidentally or otherwise).

### Parameter Change

>> Changes to the `gov` module are different from the other kinds of parameter changes because `gov` has subkeys, [as discussed here](https://github.com/cosmos/cosmos-sdk/issues/5800).
