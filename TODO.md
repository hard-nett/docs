# TODO

## Docs

- connect to terp network
- public resources links
- validator & full node guides (key saftey, metrics & notifications,)
- upgrades

## Integrations

~~- openapi integration~~

- tanstack query design
  ~~- ts-codegen -> tanstack query client template: scripts/generate-hooks.ts~~
  - tune <https://github.com/noahsaso/argus> for:
    - ibc channel support: query ibc module to display all channel/client information
    - docker support: query docker /ghcr registries for latest releases of terp images
    - [chain registry support](https://github.com/cosmos/chain-registry): query chain registry for latest versions and client informations:
      - checks daily for changes to terp network params
      - checks weekely for changes to connected ibc chains params
- community calendar event support:
  - queries text records of calender modules registered to daos
  - template to register your dao with a calendar
- terp-account-billboards: query text records of relevant information about deployments (for trustlessness)
- deployed contract page: display information about all deployed contracts: inspo by <https://github.com/burnt-labs/deployed-contract-listings>, but we will populate values from indexer querying from live contract data.
- cw-calendar: default display of calender with daily events summary
  - smart contract query for raw schedule of week, default to indexer query
  - filters for calander display filtered by specific working grop, default to display all events for all working groups
  - modal for when connected wallet is a dao member with ability to schedule event for specific working group calander
- dev-ops scripts via just file:
  - generate md table mapping to guides paths
  - automate tanstack-query hooks for client format
  - ensure each file has headers for fumadocs format
  - check broken links rlm workflow
- TNDAR: terp net decision architecture records import: dedicated repo of standards adopted with terp network, can be imported into docs website
  - tadr formatting
  - docuemntation addition + design for contributing
  - testing baseline spec
