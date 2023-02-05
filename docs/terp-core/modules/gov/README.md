# Gov

The ```gov``` module enables on-chain governance which allows Terp token holders to participate in a community led decision-making process. For example, users can:

- Form an idea and seek feedback
- Create a proposal and adjust according to feedback as needed
- Submit a proposal along with an initial deposit
- Deposit tokens and fund an active proposal
- Vote for an active proposal

## Available Commands

| Name | Description |
| :--- | :--- |
| [proposal](gov.md#terp-query-gov-proposal) | Query details of a single proposal |
| [proposals](gov.md#terp-query-gov-proposals) | Query proposals with optional filter |
| [vote](gov.md#terp-query-gov-vote) | Query details of a single vote |
| [votes](gov.md#terp-query-gov-votes) | Query votes on a proposal |
| [deposit](gov.md#terp-query-gov-deposit) | Query details of a deposit |
| [deposits](gov.md#terp-query-gov-deposits) | Query deposits on a proposal |
| [tally](gov.md#terp-query-gov-tally) | Get the tally of a proposal vote |
| [param](gov.md#terp-query-gov-param) | Query the parameters \(voting |
| [params](gov.md#terp-query-gov-params) | Query the parameters of the governance process |
| [proposer](gov.md#terp-query-gov-proposer) | Query which address proposed a proposal with a given ID. |
| [submit-proposal](gov.md#terp-tx-gov-submit-proposal) | Submit a proposal along with an initial deposit |
| [deposit](gov.md#terp-tx-gov-deposit) | Deposit tokens for an active proposal |
| [vote](gov.md#terp-tx-gov-vote) | Vote for an active proposal, options: yes/no/no\_with\_veto/abstain |

### terpd query gov proposal <a id="terp-query-gov-proposal"></a>

Query details of a single governance proposal:

```text
terpd query gov proposal [proposal-id] [flags]
```

**Flags:**

| Name, shorthand | Type | Required | Default | Description |
| :--- | :--- | :--- | :--- | :--- |
| --depositor | Address |  |  | Filter proposals by depositor address |
| --limit | uint |  | 100 | Limit to the latest \[number\] of proposals. Default to all proposals |
| --status | string |  |  | Filter proposals by status |
| --voter | Address |  |  | Filter proposals by voter address |

### terpd query gov proposals <a id="terp-query-gov-proposals"></a>

Query all proposals:

```text
terpd query gov proposals
```

Query proposals with conditions filters:

```text
terpd query gov proposals --limit=3 --status=Passed --depositor=<terp...>
```

### terpd query gov vote <a id="terp-query-gov-vote"></a>

Query details of a single vote.

```text
terpd query gov vote [proposal-id] [voter-addr] [flags]
```

### terpd query gov votes <a id="terp-query-gov-votes"></a>

Query votes on a proposal.

```text
terpd query gov votes [proposal-id] [flags]
```

### terpd query gov deposit <a id="terp-query-gov-deposit"></a>

Query details for a single proposal deposit on a proposal by its identifier.

```text
terpd query gov deposit [proposal-id] [depositer-addr] [flags]
```

### terpd query gov deposits <a id="terp-query-gov-deposits"></a>

Query details for all deposits on a proposal.

```text
terpd query gov deposits [proposal-id] [flags]
```

### terpd query gov tally <a id="terp-query-gov-tally"></a>

Query tally of votes on a proposal.

```text
terpd query gov tally [proposal-id] [flags]
```

### terpd query gov param <a id="terp-query-gov-param"></a>

Query the parameters \(voting \| tallying \| deposit\) of the governance process.

```text
terpd query gov param [param-type] [flags]
```

Example:

```text
# query voting parameters
terpd query gov param voting

# query tallying parameters
terpd query gov param tallying

# query deposit parameters
terpd query gov param deposit
```

### terpd query gov params <a id="terp-query-gov-params"></a>

Query the all the parameters for the governance process.

```text
terpd query gov params [flags]
```

### terpd query gov proposer <a id="terp-query-gov-proposer"></a>

Query which address proposed a proposal with a given ID.

```text
terpd query gov proposer [proposal-id] [flags]
```

### terpd tx gov submit-proposal <a id="terp-tx-gov-submit-proposal"></a>

Submit a proposal along with an initial deposit. Proposal title, description, type and deposit can be given directly or through a proposal JSON file. Available Commands:

| Name | Description |
| :--- | :--- |
| cancel-software-upgrade | Cancel the current software upgrade proposal |
| community-pool-spend | Submit a community pool spend proposal |
| param-change | Submit a parameter change proposal |
| software-upgrade | Submit a software upgrade proposal |

#### terpd tx gov submit-proposal community-pool-spend <a id="terp-tx-gov-submit-proposal-community-pool-spend"></a>

Submit a community pool spend proposal along with an initial deposit. The proposal details must be supplied via a JSON file.

```text
terpd tx gov submit-proposal community-pool-spend <path/to/proposal.json> --from=<key_or_address>
```

Where proposal.json contains, for example:

```text
{
    "title": "Community Pool Spend",
    "description": "Send me tokens, to benefit the Terp community",
    "recipient": "terp1ludczrvlw36fkur9vy49lx4vjqhppn30h42ufg",
    "amount": "1000000uterp",
    "deposit": "1000uterp"
}
```

#### terpd tx gov submit-proposal param-change <a id="terp-tx-gov-submit-proposal-param-change"></a>

Submit a parameter proposal along with an initial deposit. The proposal details must be supplied via a JSON file. For values that contains objects, only non-empty fields will be updated.

{% hint style="warning" %}
**IMPORTANT**

Currently parameter changes are evaluated but not validated, so it is very important that any "value" change is valid \(ie. correct type and within bounds\) for its respective parameter, eg. "MaxValidators" should be an integer and not a decimal.
{% endhint %}

Proper vetting of a parameter change proposal should prevent this from happening \(no deposits should occur during the governance process\), but it should be noted regardless.

```text
terpd tx gov submit-proposal param-change <path/to/proposal.json> --from=<key_or_address>
```

Where proposal.json contains, for example:

```text
{
    "title": "Staking Param Change",
    "description": "Update max validators",
    "changes": [
        {
        "subspace": "staking",
        "key": "MaxValidators",
        "value": 105
        }
    ],
    "deposit": "1000uterp"
}
```

#### terpd tx gov submit-proposal software-upgrade <a id="terp-tx-gov-submit-proposal-software-upgrade"></a>

Submit a software upgrade along with an initial deposit. Please specify a unique name and height OR time for the upgrade to take effect.

```text
terpd tx gov submit-proposal software-upgrade [name] (--upgrade-height [height] | --upgrade-time [time]) (--upgrade-info [info]) [flags]
```

**Flags:**

| Name, shorthand | Type | Required | Default | Description |
| :--- | :--- | :--- | :--- | :--- |
| --deposit | Coin | Yes |  | Deposit of the proposal |
| --title | string | Yes |  | Title of proposal |
| --description | string | Yes |  | Description of proposal |
| --upgrade-height | int64 |  |  | The height at which the upgrade must happen \(not to be used together with --upgrade-time\) |
| --time | string |  |  | The time at which the upgrade must happen \(not to be used together with --upgrade-height\) |
| --info | string |  |  | Optional info for the planned upgrade such as commit hash, etc. |

{% hint style="info" %}
**TIP**

To enable nodes managed by [forbole/cosmovisor](https://github.com/forbole/cosmovisor) to undertake an automatic upgrade, where the operator has the required environment variable set.

Store an os/architecture -&gt; binary URI map in the upgrade plan `info` field as JSON under the `"binaries"` key, eg:

```text
{
  "binaries": {
    "linux/amd64":"https://example.com/terp.zip?checksum=sha256:aec070645fe53ee3b3763059376134f058cc337247c978add178b6ccdfb0019f"
  }
}
```
{% endhint %}

#### terpd tx gov submit-proposal cancel-software-upgrade <a id="terp-tx-gov-submit-proposal-cancel-software-upgrade"></a>

Cancel a software upgrade along with an initial deposit.

```text
terpd tx gov submit-proposal cancel-software-upgrade [flags]
```

**Flags:**

| Name, shorthand | Type | Required | Default | Description |
| :--- | :--- | :--- | :--- | :--- |
| --deposit | Coin | Yes |  | Deposit of the proposal |
| --title | string | Yes |  | Title of proposal |
| --description | string | Yes |  | Description of proposal |

### terpd tx gov deposit <a id="terp-tx-gov-deposit"></a>

Submit a deposit for an active proposal. You can find the `proposal-id` by running `terpd query gov proposals`.

```text
terpd tx gov deposit [proposal-id] [deposit] [flags]
```

### terpd tx gov vote <a id="terp-tx-gov-vote"></a>

Submit a vote for an active proposal. You can find the `proposal-id` by running `terpd query gov proposals`. Vote for an active proposal, options: \(yes \| no \| no\_with\_veto \| abstain\).

```text
terpd tx gov vote [proposal-id] [option] [flags]
```

Example vote, voting `yes` on proposal number `1`:

```text
terpd tx gov vote 1 yes --from=<key_or_address> --fees=1terp
```
