# Authz
Allows granting arbitrary privileges from one account (the granter) to another account (the grantee). 

## Available Commands

## Query Commands

| Name | Description |
| :--- | :--- |
| [grants](authz.md#) | grants for a granter-grantee pair and optionally a msg-type-url |
| [grants-by-grantee](authz.md#) | query authorization grants granted to a grantee |
| [grants-by-granter](authz.md#=) | query authorization grants granted by granter |

## TX Commands

| Name | Description |
| :--- | :--- |
| [exec](authz.md#) | Execute tx on behalf of granter account |
| [grant](authz.md#terpd-query-bank-total) | Grant authorization to an address |
| [revoke](authz.md#terpd-tx-bank-send) | Revoke authorization |