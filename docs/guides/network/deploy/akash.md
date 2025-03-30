---
title:  Using Akash
sidebar_position: 2
---

# What is Akash Network?

[Akash Network](https://akash.network) is a decentralized compute market, allowing permissionless auctions and bids on deployments of software images to hardware. This allows anyone to do thinks like host their own websites, or utilize available GPU's to run LLM & AI models. 

## Goal
This guide will cover a basic example to setup a public RPC & Sentry Node via resources rented on Akash.

## Akash Account    
First, we will need an account with at minimum 1 AKT token to place our ask. 

## Akash Console
Akash Console is a helpful web-app for deployment creation and management on Akash. After accepting the terms & conditions, in the top-left corner you will find the button to create a new deployment.

Here, you will see a few options to choose from:

- **Hello World** Simple next.js web application showing hello world.
- **Rent Gpu's** - Rent GPUs from the Akash Network providers to run your AI workloads
- **Build Your Template** - With our new SDL Builder, you can create your own SDL from scratch in a few clicks!
- **Upload SDL** - upload a deploy.yml file from the computer

### SDL File
On Akash, .sdl files are Server Description Language files that define the configuration and requirements for a server instance. To learn more on cull customization of SDL files, [view here](https://akash.network/docs/getting-started/stack-definition-language/)


#### O-Line - Terp Network Template
O-Line *A Cosmos Omnibis Fork* is a repo containing docker images and configuration meant to make deploying onto Akash easy and standardized across cosmos. [Here you can find Terp Network's configuration](https://github.com/terpnetwork/o-line/tree/master/terpnetwork).


:::info 
the SDL within GitHub currently has a storage > size value of 120Gi. O-line uses a compressed snapshot of the blockchain and when expanded 120GB of storage for the deployment will not be enough. At the time of this writing adjusting the storage size to 350GB will suffice and allow some growth. Please adjust the storage appropriately and as shown in the screenshot below.
::: 

* Accept the initial deposit of 5 AKT into the deployment’s escrow account
* The escrow can be refilled easily within Cloudmos Deploy at any time
* Approve the transaction fee to allow the deployment to continue
* Select a provider from the bid list
* Accept the transaction fee to create a lease with the provider
* Once the deployment is complete the lease details are shown
* After some time the Available/Ready Replicas fields will update to show the current node count. It may be necessary to refresh the screen for this count to update.

### HTTPS
review here on how to [configure your deployment for end to end encryption](https://akash.network/docs/guides/tls-termination-of-akash-deployment/). 

## Further Resources

- [Akash Documentation](https://docs.akash.network)