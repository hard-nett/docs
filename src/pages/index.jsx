import React from 'react';
import Layout from '@theme/Layout';
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

  return (
    <Layout
      description="Terp Network is a blockchain protocol built for ownership by community members of the cannabis culture."
      wrapperClassName="homepage"
    >
      <div className="pad">
        <div className="center homepage-content">
          <div className='margin-bottom--lg'>
            <h2>Terp-Core Docs</h2>
            <p>Welcome! Terp Network, verifiable way we approach infusing nfts & cryptography within cannabis communities. Here you will find guides & resources to understanding what exact tools we have available for doing so.
            </p>
          </div>
          <Section title="Learn more about Terp Network">
            <Card
              title="Overview"
              description="Introduction to the Terp Network ecosystem."
              to="/overview/"
            />
            <Card
              title="Guides"
              description="Basics to configure nodes, interact with smart contracts, and more."
              to="/guides"
            />
            <Card
              title="TERP & THIOL"
              description="Details about the 2 native tokens of Terp Network."
              to="/overview/terp-and-thiol"
            />
          </Section>
          <Section title="Get Started">
            <Card
              title="Deploy a node"
              description="Setup a local node to connect, permissionlessly."
              to="/validators"
              icon={<Terpjs />}
              svgFile=""
            />
            <Card
              title="Censorship Resistant Applications"
              description="Basic overview on front ends, smart contracts & decentralized hosting tech."
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
          </Section>
{/*      
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
