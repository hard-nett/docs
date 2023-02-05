# Airdrop 
Process: percentile based, normalized for each project included via consensus of various TestNET DAOs & subDAOs

**Airdrop recipients:**

| Project Name  |  % of airdrop allocation  | Estimated Token Amount | Number of Holders |   |
|---------|:----------------:|:------:|:-----------:|---|
| Bitcanna               | 5%       | -  |  - |   |
| Cannalabs              | 2.5%     | -  |  - | 
| Chronic Token          | 2.5%     | -  |  - | 
| Cosmos Hub Stakers     | 25%      | -  |  - | 
| Crypto Canna Club      | 10.25%   | -  |  - | 
| Galaktic Gang          | 6%       | -  |  - | 
| Monster Buds           | 9%       | -  |  - | 
| Secret Sesh            | 3.5%     | -  |  - | 
| Scavenger Hunt Winners | -        |    | -  | 
| Terp-OG Membership     | -        |    | -  | 

 - Any other Cannabis + Web3 Community Token Projects
**Calculations:**
piecewise linear function:
```
Reward(R)= func(p, a, b, min, max)

    =a ; if p < min
    =b ; if p > max 
    =a + ((b-a) * (p-min)/(max-min)) ; otherwise 
```

## Vesting 

**General Wallets:**

 - 6 months linear vesting 

**Foundation Ownership (24% of Terp Supply) :**
 - 10% unlocked initially
 - 5% unlocked every 24 months, until 50 % of Foundation Tokens have been fully vested
 - 25% unlocked after 144 months from 50% of inital Foundation DAO tokens 