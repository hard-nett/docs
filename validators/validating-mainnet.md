# Validating On Mainnet

## Synced Node

Before creating a mainnet validator, ensure you have first followed the instructions on how to [join the mainnet](../developing/network/join-mainnet)

## Initialize Wallet Keyring

If you decide you want to turn your node into a validator, you will first need to add a wallet to your keyring.

While you can add an existing wallet through your seed phrase, we will create a new wallet in this example (replace KEY_NAME with a name of your choosing):

```bash
terpd keys add KEY_NAME
```
Ensure you write down the mnemonic as you can not recover the wallet without it. To ensure your wallet was saved to your keyring, the WALLET_NAME is in your keys list:

```bash
terpd keys list
```

## Validator Public Key

The last thing needed before initializing the validator is to obtain your validator public key which was created when you first initialized your node. To obtain your validator pubkey:

```bash
terpd tendermint show-validator
```

## Create Validator Command

Ensure you have a small amount of OSMO on the wallet address you are using on your keyring in order to successfully send a transaction. Once you have have a balance on the address on your keyring, you can now send the create-validator transaction.

Here is the empty command:

```bash
terpd tx staking create-validator \
--from=[KEY_NAME] \
--amount=[staking_amount_uterp] \
--pubkey=$(terpd tendermint show-validator) \
--moniker="[moniker_id_of_your_node]" \
--security-contact="[security contact email/contact method]" \
--chain-id="[chain-id]" \
--commission-rate="[commission_rate]" \
--commission-max-rate="[maximum_commission_rate]" \
--commission-max-change-rate="[maximum_rate_of_change_of_commission]" \
--min-self-delegation="[min_self_delegation_amount]" \
--gas="auto" \
--gas-prices="[gas_price]" \
```

Here is the same command but with example values:

```bash
terpd tx staking create-validator \
--from=wallet1 \
--amount=400000000uterp \
--pubkey=terpnetvalconspub1zcjduepqrevtrgcntyz04w9yzwvpy2ddf2h5pyu2tczgf9dssmywty0tzqzs0gwu0r  \
--moniker="TerpNet Lover" \
--security-contact="officialterpnettoken@gmail.com" \
--chain-id="morocco-1" \
--commission-rate="0.1" \
--commission-max-rate="0.2" \
--commission-max-change-rate="0.05" \
--min-self-delegation="400000000" \
```

If you need further explanation for each of these command flags:
- the `from` flag is the KEY_NAME you created when initializing the key on your keyring
- the `amount` flag is the amount you will place in your own validator in uterp (in the example, 500000000uterp is 500cht)
- the `pubkey` is the validator public key found earlier
- the `moniker` is a human readable name you choose for your validator
- the `security-contact` is an email your delegates are able to contact you at
- the `chain-id` is whatever chain-id you are working with (in the TerpNet mainnet case it is morocco-1)
- the `commission-rate` is the rate you will charge your delegates (in the example above, 10 percent)
- the `commission-max-rate` is the most you are allowed to charge your delegates (in the example above, 20 percent)
- the `commission-max-change-rate` is how much you can increase your commission rate in a 24 hour period (in the example above, 5 percent per day until reaching the max rate)
- the `min-self-delegation` is the lowest amount of personal funds the validator is required to have in their own validator to stay bonded (in the example above, 500terp)
- the `gas-prices` is the amount of gas used to send this create-validator transaction

## Track Validator Active Set

To see the current validator active set:

```bash
terpd query staking validators --limit 300 -o json | jq -r '.validators[] |
[.operator_address, .status, (.tokens|tonumber / pow(10; 6)),
.commission.update_time[0:19], .description.moniker] | @csv' | column -t -s","
```

You can search for your specific moniker by adding grep MONIKER at the end:

```bash
terpd query staking validators -o --limit 300 json | jq -r '.validators[] |
[.operator_address, .status, (.tokens|tonumber / pow(10; 6)),
.commission.update_time[0:19], .description.moniker] | @csv' | column -t -s"," | grep 'Terp Lover'
```

If your bond status is `BOND_STATUS_BONDED`, congratulations, your validator is part of the active validator set!

Please note, as of this writing, you must be in the top 100 validators (in other words, must have more OSMO delegated to your validator than the 100th validator in the active validator set) to be bonded. If you did everything above correct but do not have more OSMO delegated to your validator than the 100th validator, you will stay unbonded.

## Track Validator Signing

To track your validator's signing history, copy the validator public key:

```bash
terpd tendermint show-validator
```

Use your validators public key queried above as the validator-pubkey below:


```bash
terpd query slashing signing-info [validator-pubkey]
```

Example:

```bash
terpd query slashing signing-info '{"@type":"/cosmos.crypto.ed25519.PubKey","key":"HlixoxNZBPq4pBOYEimtSq9Ak4peBISVsIbI5ZHrEAU="}'
```
