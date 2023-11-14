import React from 'react';
import Layout from '@theme/Layout';
// import { useHistory } from '@docusaurus/router';

import {
  HomepageCard as Card,
  HomepageSection as Section,
} from '../components/HomepageComponents';
import {
  APIReferenceIcon,
  Terpjs,
  Telescope,
  Tscodegen,
} from '../icons';

export default function Homepage() {
  // const router = useHistory();

  return (
    <Layout
      description="Terp Network is a blockchain protocol built for ownership by community members of the cannabis culture.

      "
      wrapperClassName="homepage"
    >
      <div className="pad">
        <div className="center homepage-content">
          <div className='margin-bottom--lg'>
            <h2>Terp-Core Docs</h2>
            <p>
              Welcome! Terp network is changing the way we approach infusing nfts & cryptography within cannabis communities. Here you will find guides & resources to understanding what exact tools we have available for doing so.
            </p>
          </div>

<Section title="Get Started">

<Card
title="Run a node"
description="Getting started with Terp Network is simple & easy with a local node"
to="/validators"
icon={<Terpjs />}
svgFile=""
/>
<Card
title="Build Censorship Resistant Applications"
description="Front End, Smart Contract, Decentralized Hosting, and so much more!"
to="developers/"
icon={<Tscodegen />}
svgFile="/icons/tscodegen.svg"
/>
<Card
title="Participate"
description="Learn how to participate in governance on Terp Network."
to="/governance"
icon={<Telescope />}
svgFile=""
/>
{/* <Card
title="Learn About Wallet Tech "
description="Introduction to compatible cryptographic wallets, also basic guidelines & security best practices."
to="/overview/wallets"
icon=""
svgFile="/icons/bag.svg"
/>


<Card
title="Glossary"
description="The npm package for the Official Cosmos chain registry"
to="overview/terminology"
icon={<Cosmoskit />}
svgFile="/icons/registry.svg"
/> */}

</Section>

          <Section title="Learn more about Terp Network">
            <Card
              title="Overview"
              description="Introduction to Terp Network & its ecosystem."
              to="/overview/"
            />
            <Card
              title="Guides"
              description="Learn about how to configure nodes, interact with smart contracts, and more."
              to="/guides"
            />
            <Card
              title="TERP & THIOL"
              description="The native tokens of Terp Network."
              to="/overview/terp-and-thiol"
            />
          </Section>

          <Section title="Participate">
            <Card
              title="Governance Basics"
              description="Discover what and how you, as a community member, make the difference."
              to="/governance/"
            />
            <Card
              title="Governance Proposal Resources"
              description="Learn about the proposal framework - the workflow for broacasting proposals, and more! "
              to="/governance/proposals"
            />

            <Card
title="DAO Tech"
description="Learn about the ways we can utilize on chain features to self-govern"
to="/governance/daos/subdaos"
/>
          </Section>
          

          {/* <Section title="Developers" id="web-sdks" hasSubSections>
            <Section
              title="⚙️ Chain Development"
              id="terp-core-sdks"
              HeadingTag="h4"
              description={
                <>
                  Everything that is needed to learn about the Terp-Core chain development. 
                </>
              }
            >
             

             <Card
    title="Build and Test Terp-Core Source Code"
    description="Getting started with building and testing Terp-Core codebase"
    to="/terp-core/build"
    icon={<TerpCore />}
  />
  <Card
    title="IDE Setup"
    description="Recommended IDE setup for developing on Terp-Core in Go"
    to="/terp-core/ide-guide"
    icon={<IDEIcon />}
  />
  <Card
    title="Modules"
    description="Terp-Core modules and their respective CLI commands"
    to="/terp-core/modules"
    icon={<ModulesIcon />}
    svgFile="/icons/modules.svg"
  />
  <Card
    title="Relaying"
    description=" Relay IBC packets between Terp-Core and other chains"
    to="/terp-core/relaying"
    icon=""
    svgFile="/icons/relayer.svg"
  />
  <Card
    title="Assets"
    description="     Currently supported assets on Terp-Core with their corresponding channels and IBC denoms."
    to="/terp-core/asset-info"
    icon={<AssetIcon />}
  />
  <Card
    title="Key Management"
    description="Managing keys via CLI and advanced operations such as multisig wallets"
    to="/terp-core/category/keys-management"
    icon={<KeysIcon />}
  />
  <Card
    title="Transaction Structure"
    description=" Understanding the structure of a transaction on the Terp-Core blockchain"
    to="/terp-core/guides/structure"
    icon={<Transaction />}
    svgFile="/icons/transaction.svg"
  />
  <Card
    title="Contributing"
    description=" Guidelines to contributing to Terp-Core core development."
    to="/terp-core/contributing"
    icon={<Contribute />}
    svgFile="/icons/octocat.svg"
  />

            </Section>
          </Section> */}

          <Section  id="start" hasSubSections >
</Section>

   {/* <Section title="Frontend Libraries & Utilities" id="front-end">
    <Card
    title="TerpJs"
    description="Compose and broadcast Terp-Core and Cosmos messages, with all of the proto and amino encoding handled for you."
    to="/terpjs"
    icon={<Terpjs />}
    svgFile="/icons/terpjs.svg"
  />

<Card
    title="Cosmos Kit"
    description="A wallet adapter for react with mobile WalletConnect support for the Cosmos ecosystem."
    to="https://github.com/cosmology-tech/cosmos-kit"
    icon=""
    svgFile="/icons/bag.svg"
  />

  <Card
    title="Telescope"
    description="TypeScript Transpiler for Cosmos Protobufs. Telescope is used to generate libraries for Cosmos blockchains."
    to="/telescope"
    svgFile="/icons/telescope.svg"
  />

<Card
    title="Create Cosmos App"
    description="Set up a modern Cosmos app by running one command"
    to="https://github.com/cosmology-tech/create-cosmos-app"
    icon={<Createapp />}
    svgFile="/icons/create-cosmos-app.svg"
  />



 <Card
    title="Chain Registry"
    description="The npm package for the Official Cosmos chain registry"
    to="https://github.com/cosmology-tech/chain-registry"
    icon={<Cosmoskit />}
    svgFile="/icons/registry.svg"
  />

  <Card
    title="TS Codegen"
    description="The quickest and easiest way to interact with CosmWasm Contracts"
    to="https://github.com/CosmWasm/ts-codegen"
    icon={<Tscodegen />}
    svgFile="/icons/tscodegen.svg"
  />   
 
  </Section> */}

{/* 
<Section title="🛠 Tools">

</Section> */}

          <Section title="📜 API Reference">
            <Card
              title="API Reference"
              description="Terp-Core RPC and LCD API Reference"
              to="/api/"
              icon={<APIReferenceIcon />}
            />
          </Section>

        </div>
      </div>
    </Layout>
  );
}
