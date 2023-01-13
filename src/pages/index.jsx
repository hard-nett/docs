import React from 'react';
import Layout from '@theme/Layout';
import { useHistory } from '@docusaurus/router';
import { DyteButton } from '@dytesdk/react-ui-kit';

import {
  HomepageCard as Card,
  HomepageSection as Section,
} from '../components/HomepageComponents';
import {
  APIReferenceIcon,
  TerminalIcon,
  IDEIcon,
  ModulesIcon,
  RelayerIcon,
  AssetIcon,
  Telescope,
  Osmojs,
  Createapp,
  Cosmoskit,
  Tscodegen,
  KeysIcon,
  Transaction,
  TerpCore,
  Contribute,
} from '../icons';
import GuidesSection from '../components/GuidesSection';

export default function Homepage() {
  const router = useHistory();

  return (
    <Layout
      description="The Terp Network blockchain is a decentralized network, ran by 100+ validators and full nodes, with many front-ends and development teams on it. 🚀"
      wrapperClassName="homepage"
    >
      <div className="pad">
        <div className="center homepage-content">
          <div className='margin-bottom--lg'>
            <h2>Terp-Core Docs</h2>
            <p>
            The TerpNET blockchain is a decentralized network, ran by 100+ validators and full nodes, with many front-ends and development teams on it. Explore our docs and examples to quickly learn, develop & integrate with the TerpNET blockchain.
            </p>
            <DyteButton onClick={() => router.push('/terp-core/')}>
              Get Started &rarr;
            </DyteButton>
          </div>



          <Section title="Learn about Terp-Core">
            <Card
              title="What is Terp-Core?"
              description="pools."
              to="/overview/"
            />
            <Card
              title="How to Interact with Terp Core"
              description="Learn about how to swap, provide liquidity and more."
              to="/overview/getting-started"
            />
            <Card
              title="The Terp Token"
              description="The TERP token is a governance token that allows staked token holders to decide the future of the protocol, including every implementation detail. "
              to="/overview/getting-started"
            />
          </Section>

          <Section title="Developers" id="web-sdks" hasSubSections>
            <Section
              title="⚙️ Chain Development"
              id="core-sdks"
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
    title="Terpd CLI"
    description="Install terpd to join the network or simple query it."
    to="/terp-core/terpd"
    icon={<TerminalIcon />}
    svgFile="/icons/cli.svg"
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
          </Section>

    
   <Section title="Frontend Libraries & Utilities" id="front-end">
    <Card
    title="TerpJs"
    description="Compose and broadcast Terp-Core and Cosmos messages, with all of the proto and amino encoding handled for you."
    to="/terpjs"
    icon={<Osmojs />}
    svgFile="/icons/osmojs.svg"
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
 
  </Section>


          <Section title="🛠 Tools">
            <Card
              title="Terpd CLI"
              description="A command line tool to get things done quick!"
              to="/terp-core/terpd"
              icon={<TerminalIcon />}
              svgFile="/icons/cli.svg"
            />
          </Section>

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
