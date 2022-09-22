# Submit a wasm Governance Proposal

The following is a quick guide to provide a basic example on how submit a wasm binary proposal in Terp-NET. This particular example will be with LocalTerp-Core but it can also be used with testnet.

## LocalTerp-Core
The easiest way to setup your LocalTerp-Core is by downloading the [automated installer](https://get.terp.network/). You can learn more about LocalTerp-Core by reading the [README](https://github.com/terpnetwork/localterp-core) in the official repo. 

Run the following and choose option #3.
```
curl -sL https://get.terp.network/install > i.py && python3 i.py
```
![](https://hackmd.io/_uploads/SybyH7A8q.png)



### Start LocalTerp-Core

Inside a separate bash window start your LocalTerp-Core which was installed in ~/localterp-core

```
cd ~/localterp-core
docker-compose up

```
You will start seeing LocalTerp-Core block activity in your terminal. Keep LocalTerp-Core running while you perform the next steps in a new terminal window.

::: tip
If you had previously installed LocalTerp-Core, it's a good idea to start fresh and delete ~/localterp-core `rm -rf ~/localterp-core` before installing it again.
::: 

## Download sample contract

``` 
curl -s -L -O https://github.com/CosmWasm/cw-plus/releases/download/v0.12.1/cw20_base.wasm
```

## Define variables 

```
CHAIN_ID=localterp-core
CONTRACT=cw20_base
```

## Define proposal ID
We cannot really do this progamatically. Proposal `1` will come out after submitting it for the first time on a new chain. You can always update this manually when testing multiple times on the same state.

```
PROPOSAL=1
```

## Create local wallet from seed
Note that this seed is already part of LocalTerp-Core as shown [here](https://github.com/terpnetwork/localterp-core#accounts).
```
echo "satisfy adjust timber high purchase tuition stool faith fine install that you unaware feed domain license impose boss human eager hat rent enjoy dawn" | terpdys add validator --keyring-backend test --recover
VAL=$(terpd keys show -a validator --keyring-backend test)
```

## Submit proposal

```
terpde $CONTRACT.wasm --title "Add $CONTRACT" \
  --description "Let's upload this contract" --run-as $VAL \
  --from validator --keyring-backend test --chain-id $CHAIN_ID -y -b block \
  --gas 9000000 --gas-prices 0.025upersyx
```

## Query proposal
```
terpdroposal $PROPOSAL
```

## Deposit on proposal
```
terpd tx gov deposit $PROPOSAL 10000000uterpx --from validator --keyring-backend test \
    --chain-id $CHAIN_ID -y -b block --gas 6000000 --gas-prices 0.025upersyx
```

## Vote
```
terpd tx gov vote $PROPOSAL yes --from validator --keyring-backend test \
    --chain-id $CHAIN_ID -y -b block --gas 600000 --gas-prices 0.025upersyx
```

## Check the results
Wait 1 or two minutes for the results to show up. 

```
terpd wasm list-code
```

### Learn more:
[https://github.com/CosmWasm/wasmd/blob/main/x/wasm/Governance.md](https://github.com/CosmWasm/wasmd/blob/main/x/wasm/Governance.md)
