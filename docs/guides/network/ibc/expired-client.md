---
title: expired-client
sidebar_position: 2
---

## Goal

- review why and how clients expire
- review the process to update an expired client


## Why Do Clients Expire?

## How is a Client Updated Normally?

<Container>
<Tabs>

<TabItem value="hermes" label="hermes">

```sh
hermes update client --host-chain <chain-id> --client <client>
```



</TabItem>

<TabItem value="rly" label="rly">

```sh
rly tx update-clients <path-name>
```

</TabItem>
</Tabs>
</Container>

### Query Clients 

<Container>
<Tabs>
<TabItem value="hermes" label="hermes">

</TabItem>
<TabItem value="rly" label="rly">

```sh
rly q clients <chain-name>
```
</TabItem>
</Tabs>
</Container>

details about each `client_id` that exists are returned

```json
{
    "client_id": "07-tendermint-6",
    "client_state": {
        "@type": "/ibc.lightclients.tendermint.v1.ClientState",
        "chain_id": "pulsar-3",
        "trust_level": {
            "numerator": "1",
            "denominator": "3"
        },
        "trusting_period": "25100s",
        "unbonding_period": "86400s",
        "max_clock_drift": "55s",
        "frozen_height": {
            "revision_number": "0",
            "revision_height": "0"
        },
        "latest_height": {
            "revision_number": "3",
            "revision_height": "226705"
        },
        "proof_specs": [],
        "upgrade_path": [
            "upgrade",
            "upgradedIBCState"
        ],
        "allow_update_after_expiry": true,
        "allow_update_after_misbehaviour": true
    }
}
```
