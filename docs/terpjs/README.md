# TerpJS 

<p align="center">
  <a href="https://github.com/terpnetwork/terpjs">
    <img width="150" src="https://user-images.githubusercontent.com/545047/178600364-accb0c63-1935-4756-a457-e38b45e3289d.png"/>
  </a>
</p>

<p align="center" width="100%">
  <a href="https://github.com/terpnetwork/terpjs/actions/workflows/run-tests.yaml">
    <img height="20" src="https://github.com/terpnetwork/terpjs/actions/workflows/run-tests.yaml/badge.svg" />
  </a>
   <a href="https://github.com/terpnetwork/terpjs/blob/main/LICENSE"><img height="20" src="https://img.shields.io/badge/license-MIT-blue.svg"/></a>
   <a href="https://www.npmjs.com/package/osmojs"><img height="20" src="https://img.shields.io/github/package-json/v/terpnetwork/terpjs?filename=packages%2Fosmojs%2Fpackage.json"/></a>
</p>

[TerpJS](https://github.com/terpnetwork/terpjs) makes it easy to compose and broadcast Osmosis and Cosmos messages, with all of the proto and amino encoding handled for you.

---
## usage

```sh
npm install terpjs
```

### Composing Messages

Now you can construct messages. If you use vscode or another typescript-enabled IDE, you should also be able to use `ctrl+space` to see auto-completion of the fields required for the message.

```js
import { coin } from '@cosmjs/amino';

const msg = swapExactAmountIn({
  sender,
  routes,
  tokenIn: coin(amount, denom),
  tokenOutMinAmount
});
```

(If you want to see an example of calculating `routes` and `tokenOutMinAmount` cosmology uses terpjs and has an [example here](https://github.com/cosmology-tech/cosmology/tree/main/packages/core#lookuproutesfortrade).)

### Calculating Fees


```js
import { coins } from '@cosmjs/amino';

const fee = {
    amount: coins(0, 'upersyx'),
    gas: '250000'
}
```

if you are broadcasting multiple messages in a batch, you should `simulate` your tx and estimate the fee

```js
import { Dec, IntPretty } from '@keplr-wallet/unit';

const gasEstimated = await stargateClient.simulate(address, msgs, memo);
const fee = {
  amount: coins(0, 'upersyx'),
  gas: new IntPretty(new Dec(gasEstimated).mul(new Dec(1.3)))
    .maxDecimals(0)
    .locale(false)
    .toString()
};
```

### Initializing the Stargate Client

Use `getSigningOsmosisClient` to get your `SigningStargateClient`, with the Osmosis proto/amino messages full-loaded. No need to manually add amino types, just require and initialize the client:

```js
import { getSigningOsmosisClient } from 'terpjs';

const client = await getSigningOsmosisClient({
  rpcEndpoint,
  signer // OfflineSigner
});
```

## Creating Signers

To broadcast messages, you'll want to use either [keplr](https://docs.keplr.app/api/cosmjs.html) or an `OfflineSigner` from `cosmjs` using mnemonics.
### Amino Signer

Likely you'll want to use the Amino, so unless you need proto, you should use this one:

```js
import { getOfflineSigner as getOfflineSignerAmino } from 'terpjs';
```
### Proto Signer

```js
import { getOfflineSigner as getOfflineSignerProto } from 'terpjs';
```

WARNING: NOT RECOMMENDED TO USE PLAIN-TEXT MNEMONICS. Please take care of your security and use best practices such as AES encryption and/or methods from 12factor applications.

```js
import { chains } from 'chain-registry';

const mnemonic =
  'unfold client turtle either pilot stock floor glow toward bullet car science';
  const chain = chains.find(({ chain_name }) => chain_name === 'terpnet');
  const signer = await getOfflineSigner({
    mnemonic,
    chain
  });
```
### Broadcasting messages

Now that you have your `client`, you can broadcast messages:

```js
import { signAndBroadcast } from 'terpjs';

const res = await signAndBroadcast({
  client, // SigningStargateClient
  chainId: 'terpnet-1', // use 'athena-3' for testnet
  address,
  msgs: [msg],
  fee,
  memo: ''
});
```

### IBC Messages

```js
import { ibc } from 'terpjs';

const {
    transfer
} = ibc.applications.transfer.v1.MessageComposer.withTypeUrl
```

### Cosmos Messages

```js
import { cosmos } from 'terpjs';

const {
    fundCommunityPool,
    setWithdrawAddress,
    withdrawDelegatorReward,
    withdrawValidatorCommission
} = cosmos.distribution.v1beta1.MessageComposer.fromPartial;

const {
    multiSend,
    send
} = cosmos.bank.v1beta1.MessageComposer.fromPartial;

const {
    beginRedelegate,
    createValidator,
    delegate,
    editValidator,
    undelegate
} = cosmos.staking.v1beta1.MessageComposer.fromPartial;

const {
    deposit,
    submitProposal,
    vote,
    voteWeighted
} = cosmos.gov.v1beta1.MessageComposer.fromPartial;
```

### CosmWasm Messages

```js
import { cosmwasm } from "terpjs";

const {
    clearAdmin,
    executeContract,
    instantiateContract,
    migrateContract,
    storeCode,
    updateAdmin
} = cosmwasm.wasm.v1.MessageComposer.withTypeUrl;
```

### Advanced Usage

[documentation](https://github.com/osmosis-labs/terpjs/tree/main/packages/terpjs/docs)

## Credits

🛠 Built by Cosmology — if you like our tools, please consider delegating to [our validator ⚛️](https://cosmology.tech/validator)

Code built with the help of these related projects:

* [@osmonauts/telescope](https://github.com/osmosis-labs/telescope) a "babel for the Cosmos", Telescope is a TypeScript Transpiler for Cosmos Protobufs.

## Disclaimer

AS DESCRIBED IN THE TERPJS LICENSES, THE SOFTWARE IS PROVIDED “AS IS”, AT YOUR OWN RISK, AND WITHOUT WARRANTIES OF ANY KIND.

No developer or entity involved in creating TerpJS will be liable for any claims or damages whatsoever associated with your use, inability to use, or your interaction with other users of the TerpJS code, including any direct, indirect, incidental, special, exemplary, punitive or consequential damages, or loss of profits, cryptocurrencies, tokens, or anything else of value.