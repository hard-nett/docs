/* eslint-disable */

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/vsDark');

// const UIKitReferencePlugins = require('./plugins/ui-kit-reference-plugin.cjs');
const { webpackPlugin } = require('./plugins/webpack-plugin.cjs');
const posthogPlugin = require('./plugins/posthog-plugin.cjs');

/** @type {import('@docusaurus/preset-classic').Options} */ defaultSettings = {
  remarkPlugins: [
    [require('@docusaurus/remark-plugin-npm2yarn'), { sync: true }],
  ],
};

/**
 * Defines a section with overridable defaults
 * @param {string} section
 * @param {import('@docusaurus/plugin-content-docs').Options} options
 */
function defineSection(section, options = {}) {
  return [
    '@docusaurus/plugin-content-docs',
    /** @type {import('@docusaurus/plugin-content-docs').Options} */
    ({
      path: `docs/${section}`,
      routeBasePath: section,
      id: section,
      sidebarPath: require.resolve('./sidebars-default.js'),
      breadcrumbs: false,
      editUrl: 'https://github.com/terpnetwork/docs/tree/main/',
      ...defaultSettings,
      ...options,
    }),
  ];
}

const SECTIONS = [
  defineSection('networks'),
  defineSection('cosmwasm'),
  defineSection('overview'),
  defineSection('apis'),
  defineSection('developers'),
  defineSection('guides'),
  defineSection('governance'),
];

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Terp-Core Docs',
  tagline: 'Build on the leading decentralized Cosmos exchange. 🚀',
  // TODO: Update base url
  url: 'https://docs.terp.network',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: '/favicon.png',
  trailingSlash: false,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'terpnetworkcommunity', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  clientModules: [require.resolve('./src/client/define-ui-kit.js')],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'docs/home',
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars-home.js'),
          breadcrumbs: false,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/terpnetwork/docs/tree/main/',
          ...defaultSettings,
        },
        blog: false,
        theme: {
          customCss: [
            require.resolve('./src/css/custom.css'),
            require.resolve('./src/css/api-reference.css'),
          ],
        },
      }),
    ],
  ],

  plugins: [
    ...SECTIONS,
    // ...UIKitReferencePlugins,
    webpackPlugin,
    posthogPlugin,
  ],

  themes: ['@docusaurus/theme-live-codeblock'],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: '/img/terp-logo-colorful.png',
      colorMode: {
        defaultMode: 'dark',
      },
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      navbar: {
        // NOTE: hideOnScroll breaks on `/api`, enable when fixed
        // hideOnScroll: true,
        logo: {
          href: '/',
          src: '/logo/light.svg',
          srcDark: '/logo/dark.svg',
          alt: 'Terp-Core Docs',
          height: '26px',
          width: '114px',
        },
        items: [
          {
            label: 'Overview',
            to: '/overview',
            position: 'left',
          },
          {
            label: 'Develop',
            to: 'developers',
            position: 'left',
            // className: 'new-badge',
            activeBaseRegex: '(.*ui-kit|.*web-core)',
          },
          {
            label: 'CLI',
            to: '/developers/developer-tools/cli',
            position: 'left',
          },
          {
          label: 'Governance',
          to: 'governance',
          position: 'left',
          className: 'new-badge'
          },
          {
            label: 'API Reference',
            to: 'apis',
            position: 'right',
          },
          {
            href: 'https://github.com/terpnetwork',
            className: 'pseudo-icon github-icon',
            position: 'right',
          },
          {
            href: 'https://discord.gg/SYEjMwAac7',
            className: 'pseudo-icon discord-icon',
            position: 'right',
          },
          {
            type: 'search',
            position: 'right',
          },
          {
            label: 'Launch Satellite Bridge',
            href: 'https://satellite.money/',
            position: 'right',
            className: 'dev-portal-signup dev-portal-link',
          },
          {
            label: 'Launch Osmosis Swap',
            href: 'https://app.osmosis.zone/',
            position: 'right',
            className: 'dev-portal-signup dev-portal-link',
          },
        
        ],
      },
      footer: {
        logo: {
          href: '/',
          src: '/logo/light.svg',
          srcDark: '/logo/dark.svg',
          alt: 'Terp-Core Docs',
          height: '36px',
        },
        links: [
          {
            title: 'Product',
            items: [
              {
                label: 'Launch App',
                href: 'https://app.terp.network',
              },
              {
                label: 'Developer Portal',
                href: 'https://docs.terp.network',
              },
              {
                label: 'Ecosystem',
                href: 'https://terp.network/ecosystem',
              },
            ],
          },
          {
            title: 'Resources',
            items: [
              {
                label: 'Documentation',
                href: 'https://docs.terp.network',
              },
              {
                label: 'Medium',
                href: 'https://medium.com/@terpnetwork',
              },
              {
                label: 'Community',
                href: 'https://commonwealth.im/terpnetwork/',
              },
            ],
          },
        ],
        copyright: 'Copyright © TerpNET Foundation since 2023. All rights reserved.',
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: [
          'dart',
          'ruby',
          'groovy',
          'kotlin',
          'java',
          'swift',
          'objectivec',
        ],
      },
      liveCodeBlock: {
        playgroundPosition: 'bottom',
      },
      algolia: {
        appId: '2CBDVP21VK',
        apiKey: 'd983fd8603756b134758592e0334d240',
        indexName: 'Docs',
        contextualSearch: true,
        searchParameters: {},
      },
      posthog: {
        apiKey: '00',
      },
    }),
};

module.exports = config;
