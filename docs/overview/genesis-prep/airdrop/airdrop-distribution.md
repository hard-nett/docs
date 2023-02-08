# Airdrop 
Checkout [this article](https://akash.network/blog/a-founders-guide-to-the-secs-safe-harbor-proposal-for-utility-tokens/) that describes a framework that puts true decentralized initiatives in a good position to bootstrap. 

The process of finding a fair airdrop method is based on WyndDAOs decentralized airdrop process, which uses percentiles and normalization for each projects token holder map statistics included via consensus of various TestNET DAOs and subDAOs. This process involves the following steps:

## Determination of percentiles
Percentiles are calculated for each project based on how many holders there are, and the distribution of supply between those holders. If you are a holder of a project with X amount of tokens, then your X amount ownership would fall into one of the ownership percentile ranges. 

## Normalization 
For each defi community holder distribution calculated, a tier system was needed for allocating a set number of points for holders who land in each percentile range.

## Consensus
First, the Genesis-prep subDAO will vote on the communities we are adding, the validity of the percentile ranges & normalization rates. Once this process has passed the final consensus determining the accuracy of the information will be done by the TerpNET Foundation DAO. 
**Calculations:**
We use piecewise linear curves for all items, constant above a minimum and maximum.
Given user $X$ is percentile $\rho$ in some metric (balance), we define the reward formula as:
```
Reward(R)= func(p, a, b, min, max)

    =a ; if p < min
    =b ; if p > max 
    =a + ((b-a) * (p-min)/(max-min)) ; otherwise 
```
Where a,b are for percentile cutoffs over a range of points in terms of min,max.

This process ensures that the decision-making process is transparent, fair, and inclusive, and that the communities that could utilize this project most is selected for the decentralized protocol bootstrapping.

**Airdrop Communities:**

| Project Name  |  % of airdrop allocation  | piecewise range - min | piecewise range - max |   |
|---------|:----------------:|:------:|:-----------:|---|
| Bitcanna               | 7.5%      | 0   |  85 |   
| Cannalabs              | 2%        | -   |  -  | 
| Chronic Token          | 15%       | 14  |  84 | 
| Cosmos Hub Stakers     | 24%       | -   |  -  | 
| Crypto Canna Club      | 10%       | 0   |  95 | 
| Galaktic Gang          | 6%        | 0   |  95 | 
| Monster Buds           | 9%        | 0   |  90 | 
| Secret Sesh            | 3.5%      | 0   |  95 | 
| Scavenger Hunt Winners | 9.23%     |  -  | -   | 
| Terp-OG Membership     | 0.87%     |  -  | -   | 
| Other CannabisxWeb3    | 12.65%    |  -  | -   | 


## Vesting 
As Terp Network continues to progressively decentralize, there are many techniques and methods applied to minimize risk inherited with networks in their infancy. One of these techniques is vesting, which to encourage sustainability & long-term commitment, we will be using vesting plans on all of the genesis TERP tokens airdropped (not including the protocol owned treasury). You can learn more about the [standard Cosmos SDK vesting account](https://docs.cosmos.network/main/modules/auth/vesting). 

Tokens that are vesting will only be able to be used for delegating to validators for things like governance and earning rewards. a [Cliff Vesting](https://legalnodes.com/article/unpaid-token-distribution) structure will give us time to do things where having tokens in active circulation would not permit viable bootstrapping opportunities.\

**General Wallets:**
Most wallets airdropped TERP's will be for 6 months, & after 6 months 100% of tokens will be avaialable to claim 
 - 6 months linear vesting 

**Foundation Ownership (24% of Terp Supply) :**
 - 10% unlocked initially
 - 5% unlocked every 24 months, until 50 % of Foundation Tokens have been fully vested
 - 25% unlocked after 144 months from 50% of inital Foundation DAO tokens 

 It is the intention that the foundation holds the tokens much longer than strictly necessary