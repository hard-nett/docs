# TODO

## Integrations

~~- openapi integration: solidify api/rpc/grpc integration into ui: example: <https://www.fumadocs.dev/docs/openapi> <https://www.fumadocs.dev/docs/integrations/openapi/api-page>~~~~terp-network openapi yaml: `static/api/openapi.yaml`~~

All integrations will have queries to either:

- a. an indexer
- b.direct sources (remote/static url/apis, smart contracts, terp-modules)
  
we will provide in our docs support for displaying up to date info for:

- ibc channel support: query ibc module to display all channel/client information
- docker support: query docker /ghcr registries for latest releases of terp images

### Chain/Indexer Client

We will tune <https://github.com/noahsaso/argus> to provide support & keep track of:

- [chain registry support](https://github.com/cosmos/chain-registry): query chain registry for latest versions and client informations:
  - checks daily for changes to terp network params
  - checks weekely for changes to connected ibc chains params

- terp-account-billboards: query text records of relevant information about deployments (for trustlessness)
  - ts/js generated clients (will be easy to wire in): <https://github.com/permissionlessweb/terp-account-billboards/tree/main/scripts/ts/dist>

- deployed contract page: display information about all deployed contracts: inspo by <https://github.com/burnt-labs/deployed-contract-listings>, but we will populate values from indexer querying from live contract data, more trustless.`~

## Smart Contracts

- calender smart contract support: implement design for on-chain calender contract to display community events
  - unix timestamps start<->end for meetings
  - title, description, meeting url, working group categories
  - event attributes on meeting
  - reoccuring meetings

## Calendar
`
- default display of calender with daily events summary
  - smart contract query for raw schedule of week, default to indexer query
  - filters for calander display filtered by specific working grop, default to display all events for all working groups
  - modal for when connected wallet is a dao member with ability to schedule event for specific working group calander

Requires:

- tanstack query manifold integration
- specification and client for calander contract
- indexer and chain fallback design support for docs

## Generative MD Table Script

- generate md table mapping to guides paths (table of contets usage: content/docs/guides/index.md)

## TADR's

- TNDAR: terp net decision architecture records import: dedicated repo of standards adopted with terp network, can be imported into docs website
  - tadr formatting
  - docuemntation addition + design for contributing
  - testing baseline spec
  -
