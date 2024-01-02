# Airdrop 
Checkout [this article](https://akash.network/blog/a-founders-guide-to-the-secs-safe-harbor-proposal-for-utility-tokens/) that describes a framework that puts true decentralized initiatives in a good position to bootstrap. 

The process of finding a fair airdrop method is based percentiles and normalization for each projects token holder map statistics included via consensus of various TestNET DAOs and subDAOs. This process involves the following steps:

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
The following token holders are proposed to be included in the genesis file


| Project Name  |  % of airdrop allocation  | piecewise range - min | piecewise range - max |   |
|---------|:----------------:|:------:|:-----------:|---|
| Bitcanna                       | 24%     | 1   |  100  |   
| Cosmos Hub Stakers             | 75%     | 1   |  100  | 
| OG's & Test-net Scavengers     | 1%      | 1   |  100  | 


## Vesting 
As Terp Network continues to progressively decentralize, there are many techniques and methods applied to minimize risk inherited with networks in their infancy. One of these techniques is vesting, which to encourage sustainability & long-term commitment, we will be using vesting plans on all of the genesis TERP tokens airdropped (not including the protocol owned treasury). You can learn more about the [standard Cosmos SDK vesting account](https://docs.cosmos.network/main/modules/auth/vesting). 

Tokens that are vesting will only be able to be used for delegating to validators for things like governance and earning rewards. a [Cliff Vesting](https://legalnodes.com/article/unpaid-token-distribution) structure will give us time to do things where having tokens in active circulation would not permit viable bootstrapping opportunities.\

