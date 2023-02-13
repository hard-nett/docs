---
sidebar_position: 4
---

# Verifying Smart Contracts (Current Example: DAO-DAO V2 smart contracts)

The following are the steps needed to verify any contract from the chain. If you're planning on doing anything mission critical with a set of pre-existing contracts,you should consider verifying it is configured correctly.


### Verifying the code IDs
To verify that a code ID matches:
1. Clone and build the source repo
To clone, [install git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git), and then run:
```
git clone https://github.com/DA0-DA0/dao-contracts.git
 ```

To build, [install docker](https://docs.docker.com/get-docker/), and then run:
```
docker run --rm -v "$(pwd)":/code \
--mount type=volume,source="$(basename "$(pwd)")_cache",target=/code/target \
--mount type=volume,source=registry_cache,target=/usr/local/cargo/registry \
cosmwasm/workspace-optimizer:0.12.6
```
from inside the dao-contracts directory. Your built wasm contracts will be placed in the artifacts subdirectory.

2. Download the code for the code ID by running:
```
terpd query wasm code <CODE_ID> check.wasm
``` 
This downloads the code being used and places it in a file called check.wasm.

3. Verify that the shasum of the downloaded code matches the shasum of the program you have built locally. To compute the shasum:
```
shasum <WASM_FILE>
```
For example, to check if a code ID matches the cw-proposal-single contract, run: 

    shasum artifacts/cw_proposal_single.wasm






