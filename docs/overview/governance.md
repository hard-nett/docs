# Governance

## Voting

Staked TERP holders are eligible to vote on governance proposals. Browse the available proposals, and use one's staked tokens to cast a vote.

## UI 
Block explorers provide a user-friendly interface for vieweing existing proposals, however there currently is not an alternative to broadcasting governance message only through a CLI for the TestNET currently.

## Creating a Proposal

Governance proposals can be added through CLI.
Proposers should use the following format when recommending allocation points for a new gauge:

```bash
terpd tx gov submit-proposal pin-codes [code-ids] [flags] 
```


```
terpd tx gov submit-proposal community-pool-spend [proposal-file] [flags]
```
