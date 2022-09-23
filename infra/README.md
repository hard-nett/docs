
# Infrastructure

Please use the links below to reference architectures for common terpnet infrastructure setups. 
The reference architecture is specified ad Infrastructure As Code (IAC) using [Terraform](https://www.terraform.io/) and can be used as a starting point to deploy blockchain nodes.

::: tip
More Terraform  configurations will be open sourced soon. 
 :::
 
 ## Resources
 <div class="cards twoColumn" >
   <a href="https://github.com/TerpNetwork/infrastructure" class="card">
     <img src="/img/infra.svg"  />
     <div class="title">
     Infrastructure
     </div>
     <div class="text">
    Main repository containing all of the open sourced infrastructure.
     </div>
   </a>
</div>

 ## Akash: The Decentralized Cloud 
<div class="cards twoColumn" >

  <a href="akash/validator-and-tmkms" class="card">
    <img src="/img/do.svg"  />
    <div class="title">
   Validator and TMKMS
    </div>
    <div class="text">
   This example outlines how to run a node on Akash, connected to a TMKMS signer hosted elsewhere. 
    </div>
  </a>  
  <a href="akash/load-balanced-rpc-nodes" class="card">
    <img src="/img/do.svg"  />
    <div class="title">
    Load Balanced RPC node
    </div>
    <div class="text">
        This details two or more deployments of RPC nodes, and an nginx deployment to load balance them.
    </div>
  </a>
  <a href="akash/snapshot-backup" class="card">
    <img src="/img/do.svg"  />
    <div class="title">
    Snapshop Backup
    </div>
    <div class="text">
        The snapshot script will shutdown the node for as long as the archive and upload process takes, so use a dedicated node for creating snapshots. 
    </div>
  </a>
<a href="akash/state-sync" class="card">
    <img src="/img/do.svg"  />
    <div class="title">
    State-sync
    </div>
    <div class="text">
       The statesync allows validators to rapidly join the network by syncing your node with a snapshot enabled RPC from a trusted block height. 
    </div>
  </a>
  <a href="akash/validator-and-private-sentries" class="card">
    <img src="/img/do.svg"  />
    <div class="title">
    Validator & Private Sentries
    </div>
    <div class="text">
       This example shows 2 sentry nodes statesynced from other nodes, with a single private validator node which only connects to the sentries. [private] 
    </div>
  </a>
  <a href="akash/validator-and-public-sentries" class="card">
    <img src="/img/do.svg"  />
    <div class="title">
    Validator & Public Sentries
    </div>
    <div class="text">
      This example shows 2 sentry nodes statesynced from other nodes, with a single private validator node which only connects to the sentries.
    </div>
  </a>
  

 </div>
