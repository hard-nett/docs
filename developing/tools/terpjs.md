# TerpJS 🔭
## usage

```sh
npm install terpjs    
```

### Terp-Core Stargate Client

Use `getSigningTerpClient` to get your `SigningStargateClient`, with the Terp-Core protobuf messages full-loaded:

```js
import { getSigningTerpClient } from 'terpjs';
import { SigningStargateClient } from "@cosmjs/stargate";

const client: SigningStargateClient = await getSigningTerpClient({
  rpcEndpoint: rpcEndpoint,
  signer // OfflineSigner
});
```

### Composing Messages

NOTE: this API is in alpha, and will be rapidly changing over the coming weeks. Please send us feedback!

```js
import * as gamm from 'terpjs/main/proto/terpnetwork/wasm/v1/tx.registry';
import { coin } from '@cosmjs/amino';
const { swapExactAmountIn } = gamm.MessageComposer.withTypeUrl;

const msg = swapExactAmountIn({
  sender,
  routes,
  tokenIn: coin(amount, denom),
  tokenOutMinAmount
});
```

### Advanced Usage

[documentation](https://github.com/terpnetwork/telescope/tree/master/packages/terpjs/docs)

## Disclaimer

AS DESCRIBED IN THE TERP NETWORK LICENSES, THE SOFTWARE IS PROVIDED “AS IS”, AT YOUR OWN RISK, AND WITHOUT WARRANTIES OF ANY KIND.

No developer or entity involved in creating Telescope will be liable for any claims or damages whatsoever associated with your use, inability to use, or your interaction with other users of the Telescope code or Telescope CLI, including any direct, indirect, incidental, special, exemplary, punitive or consequential damages, or loss of profits, cryptocurrencies, tokens, or anything else of value.
