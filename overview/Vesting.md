# Vesting Plans 

As the Terp-NET project seeks to encourage sustainability and long-term commuttment, we will be using vesting plans on almost all the genesis tokens (except for a small amount of liquidity immediately avialable by the Foundation to bootstrapp the AMM Pools). This design is based on the [standard Cosmos SDK vesting account](https://docs.cosmos.network/v0.45/modules/auth/05_vesting.html#vesting).

Tokens that are vesting will only be able to be used with the DAO staking contract to get voting rights. All other tokens in the account (including liquid tokens sent to the account later) will be able to be used normally.

While reasearching this design, we discovered that we are not the only project to provide vesting on the airdrops, WYNDDAO & Asset Mantle is using a similar approach.

## Curves Used 

The basic approach would be a linear vesting curve. This has a start date an end date and an inital amount. Up until the start date, the entire amount is vesting; after the end date, zero tokens are vesting; between those periods the number decreases linearly, so after 25% of the time between start and end, 25% of the tokens have vested (are unlocked).

{Insert Linear Chart}

We belive the first 6 months are going to be pivitol for the protocol and prove the value of holding $TERP & $PERSY for the longer term, so we would like to vest a bit slower in the intial region. For that purpose, we plan to use "piecewise linear" vesting curve, using the same math as [AAve interest rates.](https://docs.aave.com/risk/liquidity-risk/borrow-interest-rate#interest-rate-model)

## Vesting Periods

Given the market's extreme voalitity as we launch, and as we want to focus on long-term holders, dissuading perople who claim and then dump in a panic to cover their other losses, **no airdrop tokens will be liquid until TBD** The airdrop will be closed, and the foundation aims to propose a decentralized bootstrapping loan. 

All airdrop tokens will be subject to the same vesting rate. This is the piecewise linear curve above. The liquid tokens will range from 0 on TBD, to 25% of the airdrop claim on TBD. After that time, the Terp AO should have established solid use-cases and market, and we speed up the vesting by a factor of 3, such that the entire airdrop claim is fully liquid by *(1 year from inital Liquid date)* 

25% of the Foundation tokens is to be proposed to be matched with 10% of tokens from the foundation pool, for the purpose of bootstrapping AMM LP's.

The remaining 75% will be subject to a vesting period. This will be a three-year linear vesting period, releasing 25% of their allocation each year. This ensures the foundation spreads the grant funding over more extended periods.

It is the intentiono that the foundation holds the tokens much longer than strictly nessesary, but the vesting curve can give room for certainty while this project grows.