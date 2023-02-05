# Distribution

The distribution module allows you to manage your staking rewards

## Available Commands

| Name | Description |
| :--- | :--- |
| [commission](distribution.md#terpd-query-distribution-commission) | Query distribution validator commission |
| [community-pool](distribution.md#query-distribution-community-pool) | Query the amount of coins in the community pool |
| [params](distribution.md#query-distribution-rewards) | Query distribution params |
| [rewards](distribution.md#query-distribution-rewards) | Query all distribution delegator rewards or rewards from a particular validator |
| [slashes](distribution.md#query-distribution-slashes) | Query distribution validator slashes. |
| [validator-outstanding-rewards](distribution.md#query-distribution-validator-outstanding-rewards) | Query distribution outstanding \(un-withdrawn\) rewards for a validator and all their delegations |
| [fund-community-pool](distribution.md#tx-distribution-fund-community-pool) | Funds the community pool with the specified amount |
| [set-withdraw-addr](distribution.md#tx-distribution-set-withdraw-addr) | Set the withdraw address for rewards associated with a delegator address |
| [withdraw-all-rewards](distribution.md#tx-distribution-withdraw-all-rewards) | Withdraw all rewards for a single delegator |
| [withdraw-rewards](distribution.md#tx-distribution-withdraw-rewards) | Withdraw rewards from a given delegation address, and optionally withdraw validator commission if the delegation address given is a validator operator |