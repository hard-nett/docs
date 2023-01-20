import {
  TerpCore,
  localterp,
  Network,
  Cosmwasm,
  Beaker,
  Terpjs,
  Telescope,
  Frontend,
} from './icons';

const SECTIONS = [
  // no sections for default section, i.e; home
  {
    id: 'default',
    section: false,
  },
  {
    id: 'guides',
    section: false,
  },

  // Core Development
  {
    name: 'Terp Core',
    id: 'terp-core',
    icon: TerpCore,
    section: 'core-sdk',
  },
  {
    name: 'Local Terp',
    id: 'localterp',
    icon: localterp,
    section: 'core-sdk',
  },
  {
    name: 'Networks',
    id: 'networks',
    icon: Network,
    section: 'core-sdk',
  },
  //Cosmwasm
  {
    name: 'Cosmwasm',
    id: 'cosmwasm',
    icon: Cosmwasm,
    section: 'cosmwasm',
  },
  {
    name: 'Beaker',
    id: 'beaker',
    icon: Beaker,
    section: 'cosmwasm',
  },

  // UI SDKs
  {
    name: 'Frontend',
    id: 'frontend',
    icon: Frontend,
    section: 'frontend',
  },
  {
    name: 'TerpJS',
    id: 'terpjs',
    icon: Terpjs,
    section: 'frontend',
  },
  {
    name: 'Telescope',
    id: 'telescope',
    icon: Telescope,
    section: 'frontend',
  },

];

const MULTI_SECTIONS = [
  [
    {
      name: 'Terp Core',
      section: 'core-sdk',
      description: 'Terp Network Chain Development documentation.',
    },
    {
      name: 'CosmWasm',
      section: 'cosmwasm',
      description:
        'Building and interacting with Smart contracts on Terp Network.',
    },
    {
      name: 'Frontend & SDKs',
      section: 'frontend',
      description:
        'Libraries & UI components to build on top of Terp-Core.',
    }

  ],
  [
    {
      name: 'Terp Core',
      section: 'mobile-core',
      isNew: true,
      description: 'Terp Core Chain Development documentation.',
    },
    {
      name: 'Prebuilt SDK',
      section: 'mobile-sdk',
      description: 'Use our pre-built mobile SDK, ready to go',
    }
  ]
];

export { SECTIONS, MULTI_SECTIONS };
