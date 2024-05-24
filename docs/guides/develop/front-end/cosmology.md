---
title: deploy basic template with Cosmology
sidebar_position: 1
---
# Introduction
There are many ways to build a dapp that can connect & communicate with Terp Network.

 **This guide will show you how to setup a minimal template for creating an application.** We will be using **[Cosmology](https://cosmology.tech)**, a package library specifically for network using Cosmos-SDK.

## The Server <--> Client Tech

:::info
Often, applications grapple with multple or heavy computations, as well as the challenge of securing sensitive communication like passwords and wallet keys on public websites.
:::



Web-apps are usually both a server and client. It serves the HTML code for the components of the app, and also can make request to other servers to use in its own processes. 

If we have built a web-app and have a component that queries & displays my token balance, the communication flow for that request will look like:

 `my-device --> web-app --> blockchain-node --> web-app --> my-device`  
 
  Notice that the web-app will translate the balance request, then request a public-endpoint of Terp Network, which will provide a response back to the web-apps server, which can then provide a response back to my device.

## Creating a project


### 1.Setup Environment

:::info
**First, we must prepare our device we are using to setup the folder repository our application will need.**
:::

To build an app, you will need to have installed [npm](https://docs.npmjs.com/). To install npm using [nvm](https://github.com/nvm-sh/nvm), open up a new terminal and copy & paste the following:

```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
``` 
The script clones the nvm repository to ~/.nvm, and attempts to add the source lines from the snippet below to the correct profile file

```
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
```

#### Verify Installation 
To verify that nvm has been installed, do:
```
command -v nvm
```

#### Install Node
Now with nvm, do:
```
nvm install node
```
```
nvm use node
```
This should install node & npm


### Install Create-Cosmos-App
With npm now installed, we can download the scripts to create our folder layout for our dapp. run:

```
npm install -g create-cosmos-app
```

### Create a New Dapp
To create a new dapp using cosmology:


<Container>
<Tabs>
<TabItem value="send-tokens" label="send-token-template">

```toml
cca --name send-example --example --template send-tokens
```
</TabItem>
<TabItem value="gov" label="governance-template">

```toml
cca --name cosmwasm-example --example --template cosmwasm
```
</TabItem>
<TabItem value="cosmwasm" label="cosmwasm-minimal">

```toml
cca --name cosmwasm-example --example --template cosmwasm
```
</TabItem>
<TabItem value="ibc" label="ibc-transfer">

```toml
cca --name ibc-example --example --template ibc-transfer
```
</TabItem>
</Tabs>
</Container>


# App Layout

Now we have a basic application ready for customization! Lets dive into the folder layout of our new app:

*[send-token example](https://github.com/cosmology-tech/create-cosmos-app/tree/main/examples/send-tokens)*
```bash
.                                   
  ├── components/      # Contains the ui components logic (buttons, widgets, navbar, etc)
      ├── wallet.tsx   # wallet component
  ├── config/          # General app configuration 
  ├── pages/           # Web-app pages
      ├── _app.tsx     # setup global app (wallet router, toast, etc.).
      ├── index.tsx    # home page of web-app
  ├── public/          # Images, fonts, and content consumed by UI
  └── styles/          # CSS & SCSS files for making your app beautiful
  ├── next.config.js   # Configuration file for Next.Js apps. 
  ├── package.json/    # node modules dependency list. 
  ├── tsconfig.json/   # Typescript config file. 
```

You may choose whichever folder structure works best for you during customization.
