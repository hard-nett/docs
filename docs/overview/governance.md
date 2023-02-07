# Governance
Governance exists for the community of token holders to decide on key issues involving the blockchain and its development. This is achieved by proposing items of business to be voted on by the token holders.
## Voting

There are four forms of governance proposal:
- Text proposal - this type of proposal is text only. The outcome is not automatically implemented and may require actions by third parties to implement.
- Community spend - the outcome of this type of proposal will be the transfer of funds from the community pool to the address and for the amount nominated in the proposal.
- Parameter change - the outcome of this proposal will be modified blockchain parameters in accordance with the proposal submission.
- Software upgrade - the outcome of this proposal will be validators and node operators undertaking a coordinated software upgrade at the block height specified in the proposal.

Please refer to the following best practice for developing and submitting governance proposals. This procedure is intended to enable discussion and gauging support for the proposal prior to submitting on-chain.Please note the following special circumstances before proceeding:
- If the proposal is a parameter change with implications for development or smart contract usage, consider speaking to your friendly neighborhood core dev.
- If the proposal will result in significant engineering effort to implement, definitely ask a member of the core team about what would happen if the proposal passes. 

## a. Begin the conversation 
Raise your proposal in the Matrix, Discord, or Commonwealth chat. This will give you the opportunity to discuss with other network users and developers and further develop your ideas. Other participants may have some interest in the proposal and offer to further improve your proposal, or you may find that this idea has no support or maybe has already been satisfied in some other way.Check via the block explorer that there is not already a past or present proposal that already directly deals with your issue.

## b. Seek feedback on commonwealth.im
Once you have a clearly defined proposal idea. Fully draft your proposal text and submit to the Terp commonwealth.im project page. To make your proposal easily identifiable, please use the following format for the discussion    `title:PROPOSAL: <name-of-proposal>` . Please avoid using numbering in your proposal discussion. Should the proposal not go ahead, the numbering of the discussion can become confusing.

It is recommended to keep your proposal discussion open for at least seven days prior to formalizing the proposal on-chain. To get the most exposure for your conversation, advertise the link in the Element & Discord.  Consider contacting the core devs to advertise the discussion on the official @terpculture Twitter account. Consider making appropriate changes to your proposal based on feedback from the discussion.

## c. Submit your proposal on-chain
Once you are confident about your proposal, you can submit on-chain for voting. You can find guidance on submitting your proposal here.Please note that the fee to fully fund a governance deposit is ! TERP. These funds will be returned to the depositor following completion of the voting period. If there are sufficient NO WITH VETO votes, the depositors will lose their funds. The depositor will also lose their funds if quorum of ! is not reached.
## UI 
Block explorers provide a user-friendly interface for vieweing existing proposals, however there currently is not an alternative to broadcasting governance message only through a CLI for the TestNET currently.

## Closing thoughts
These are just guidelines to think about - obviously, Terp Network is a community initiative, and what the community proposes and passes will be actioned. The core team does not always know what is best for the project. For more information on the governance process, see the cosmos governance process.
## Creating a Proposal

Governance proposals can be added through CLI.
Proposers should use the following format when recommending allocation points for a new gauge:

```bash
terpd tx gov 
```
