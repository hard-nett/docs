# Feeshare

Share contract execution fees with smart contract developers.

## Available Commands

## Query Commands
| Name | Description |
| :--- | :--- |
| [contract](feeshare.md#tx-distribution-fund-community-pool) | Query a registered contract for fee distribution by its bech32 address |
| [contracts](feeshare.md#tx-distribution-set-withdraw-addr) | Query all FeeShares |
| [deployer-contracts](feeshare.md#tx-distribution-withdraw-all-rewards) | Query all contracts that a given deployer has registered for feeshare distribution |
| [params](feeshare.md#tx-distribution-withdraw-all-rewards) | Query the current feeshare module parameters |
| [withdrawer-contracts](feeshare.md#tx-distribution-withdraw-all-rewards) | Query all contracts that have been registered for feeshare distribution with a given withdrawer address |


## TX Commands
| Name | Description |
| :--- | :--- |
| [cancel](feeshare.md#tx-distribution-fund-community-pool) | Cancel a contract from feeshare distribution |
| [register](feeshare.md#tx-distribution-set-withdraw-addr) | Register a contract for fee distribution. Only the contract admin can register a contract. |
| [update](feeshare.md#tx-distribution-withdraw-all-rewards) | Update withdrawer address for a contract registered for feeshare distribution. |