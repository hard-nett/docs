# Group

Creation and management of on-chain multisig accounts and enables voting for message execution based on configurable decision policies.

## Available Commands

## Query Commands

| Name | Description |
| :--- | :--- |
| [group-info](group.md#) | Query for group info by group id |
| [group-members](group.md#) | Query for group policies by admin account address with pagination flags |
| [group-policies-by-admin](group.md#) | Query for group policies by admin account address with pagination flags |
| [group-policies-by-group](group.md#) |  Query for group policies by group id with pagination flags |
| [group-policy-info](group.md#) | Query for group policy info by account address of group policy |
| [groups](group.md#) |  Query for groups present in the state |
| [groups-by-admin](group.md#) | Query for groups by admin account address with pagination flags |
| [groups-by-member](group.md#) | Query for groups by member address with pagination flags |
| [proposal](group.md#) | Update a group's members. Set a member's weight to "0" to delete it. |
| [proposals-by-group-policy](group.md#) | Query for proposals by account address of group policy with pagination flags |
| [tally-result](group.md#) | Query tally result of proposal |
| [vote](group.md#) | Query for vote by proposal id and voter account address |
| [votes-by-proposal](group.md#) | Query for vote by proposal id and voter account address |
| [votes-by-voter](group.md#) | Query for votes by voter account address with pagination flags |


## TX Commands
| Name | Description |
| :--- | :--- |
| [create-group](group.md#) | Create a group which is an aggregation of member accounts with associated weights and an administrator account. |
| [create-group-policy](group.md#) | Create a group policy which is an account associated with a group and a decision policy. Note, the '--from' flag is ignored as it is implied from [admin]. |
| [create-group-with-policy](group.md#) | Create a group with policy which is an aggregation of member accounts with associated weights, an administrator account and decision policy. |
| [draft-proposal](group.md#) | Generate a draft proposal json file. The generated proposal json contains only one message (skeleton). |
| [exec](group.md#) | Execute a proposal |
| [leave-group](group.md#) | Remove member from the group |
| [submit-proposal](group.md#) | Submit a new proposal |
| [update-group-admin](group.md#) | Update a group's admin |
| [update-group-members](group.md#) | Update a group's members. Set a member's weight to "0" to delete it. |
| [update-group-metadata](group.md#) | Update a group's metadata |
| [update-group-policy-admin](group.md#) | Update a group policy admi |
| [update-group-policy-decision-policy](group.md#) | Update a group policy's decision policy |
| [update-group-policy-metadata](group.md#) | Update a group policy metadata |
| [vote](group.md#) | Vote on a proposal |
| [withdraw-proposal](group.md#) | Withdraw a submitted proposal ||