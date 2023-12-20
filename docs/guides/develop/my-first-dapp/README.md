---
title: my first dapp
sidebar_position: 1
---
# Introduction
There are many ways to build a dapp that can connect & communicate with Terp Network. The most common languages used are **[react](https://nextjs.org/)**, **[react-native](https://reactnative.dev/)**, & **[vue](https://github.com/ping-pub/explorer)**.

 **This guide will show you how to setup a minimal template for creating an application.** We will be using **[Cosmology](https://cosmology.tech)**, an exellect package library specifically for network using Cosmos-SDK.

## The Server <--> Client Tech
Often, applications grapple with multple or heavy computations, as well as the challenge of securing sensitive communication like passwords and wallet keys on public websites. The client-server model, akin to a farmers market, offers a straightforward solution.

 Imagine the client as a shopper making a request. a reliable vendor selling goods (the server), takes requests from clients. The client **requests** specific items, and if the server both **speaks the same language** as the request, and **can provide** that specific request from the client, the transfer is made.

**This is how applications work when communicating with Terp Network.** 

Web-apps are usually both a server and client. It serves the HTML code for the components of the app, and also can make request to other servers to use in its own processes. 

If we have built a web-app and have a component that queries & displays my token balance, the communication flow for that request will look like:

 `my-device --> web-app --> blockchain-node --> web-app --> my-device`  
 
  Notice that the web-app will translate the balance request, then request a public-endpoint of Terp Network, which will provide a response back to the web-apps server, which can then provide a response back to my device.

