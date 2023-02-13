# Staking

The staking module provides a set of subcommands to query the staking state and send staking transactions.

## Available Commands

| Name | Description |
| :--- | :--- |
| [validator](staking.md#query-staking-validator) | Query a validator |
| [validators](staking.md#query-staking-validators) | Query for all validators |
| [delegation](staking.md#query-staking-delegation) | Query a delegation based on address and validator address |
| [delegations](staking.md#query-staking-delegations) | Query all delegations made from one delegator |
| [delegations-to](staking.md#query-staking-delegations-to) | Query all delegations to one validator |
| [unbonding-delegation](staking.md#query-staking-unbonding-delegation) | Query an unbonding-delegation record based on delegator and validator address |
| [unbonding-delegations](staking.md#query-staking-unbonding-delegations) | Query all unbonding-delegations records for one delegator |
| [unbonding-delegations-from](staking.md#query-staking-unbonding-delegations-from) | Query all unbonding delegatations from a validator |
| [redelegations-from](staking.md#query-staking-redelegations-from) | Query all outgoing redelegatations from a validator |
| [redelegation](staking.md#query-staking-redelegation) | Query a redelegation record based on delegator and a source and destination validator address |
| [redelegations](staking.md#query-staking-redelegations) | Query all redelegations records for one delegator |
| [pool](staking.md#query-staking-pool) | Query the current staking pool values |
| [params](staking.md#query-staking-params) | Query the current staking parameters information |
| [historical-info](staking.md#query-staking-historical-info) | Query historical info at given height |
| [create-validator](staking.md#tx-staking-create-validator) | Create new validator initialized with a self-delegation to it |
| [edit-validator](staking.md#tx-staking-edit-validator) | Edit existing validator account |
| [delegate](staking.md#tx-staking-delegate) | Delegate liquid tokens to an validator |
| [unbond](staking.md#tx-staking-unbond) | Unbond shares from a validator |
| [redelegate](staking.md#tx-staking-redelegate) | Redelegate illiquid tokens from one validator to another |