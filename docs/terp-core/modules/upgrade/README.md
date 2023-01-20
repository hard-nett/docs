# Txfees

The txfees modules allows nodes to easily support many tokens for usage as txfees, while letting node operators only specify their tx fee parameters for a single "base" asset.
This is done by having this module maintain an allow-list of token denoms which can be used as tx fees, each with some associated metadata.
Then this metadata is used in tandem with a "Spot Price Calculator" provided to the module, to convert the provided tx fees into their equivalent value in the base denomination.
Currently the only supported metadata & spot price calculator is using a GAMM pool ID & the GAMM keeper.

## Future directions

* Want to add in a system to add in general "tx fee credits" for different on-chain usages
  * e.g. making 0 fee txs under certain usecases
* If other chains would like to use this, we should brainstorm mechanisms for extending the metadata proto fields