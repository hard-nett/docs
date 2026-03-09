---
title: Submission Guidelines
---

---
# Proposals Framework

## Terp Community Proposals (TCPs)

TCPs are standardized proposals (not transmission control ;;) ) subject to voting that, once enacted regulate and define the behavior of the Terp DAO Governance system, and provides a funding mechanism for special projects and workstreams.

## The Terp Community Proposal Framework 
The Terp Community Proposal (TCP) Framework provides guidance for all future TCPs, and the first TCP is essential in creating templates, processes, and guidelines for working within the framework. It also identifies the necessary roles for implementing and enforcing the TCP process. In summary, this TCP establishes the foundation for the TCP framework

## TCP Components

### 1. **Definitions of the TCP Framework** 
*Defines core concepts of the TCP Framework and the different types of proposals*
### 2. **The TCP Lifecycle** 
*Defines the formal stages in the lifecycle of proposals from conception to approval, rejection, or deferral.*
### 3. **TCP Standards & Templates** 
*Defines the processes, rules, and components required for all proposals before going to vote.*
### 4. **TCP Submission Guidelines** 
*Defines the proposal submission procedures and guidelines for on-chain voting.*
### 5. **Terp Governance Council** 
*Defines the responsibilities and enforcement powers reserved to the Governance Council of Terp DAO*


# The Terp Network Community Proposal Lifecycle 

## Phase 1: Discussion & Ideation
The purpose of this phase is to vet ideas with the active Terp community members. Each idea for a proposal should have its own Commonwealth thread, and discussions should be as narrowly focused as possible. Anyone can participate and is encouraged to provide feedback in this phase of governance. The goal of Phase 1 discussion is to gain a rough community consensus, and refine the idea so that it can be formalized. The thread author should make an effort to address all comments and take them into consideration.

- **Minimum Duration**: 48 hours
- **Forum Tag**: [IDEATION]

## Phase 2: TCP Formalization 


Phase 2 is where the idea is formalized into an TCP that includes all of the criteria specified in the TCP Template. It must be a clear and complete description of the proposed enhancement. All TCPs must have the following core components, with additional/varying sections for certain proposal types (refer to the templates page):

___
**Title:** - Short and sweet, with the correct tags prefixed.


**Summary** - A brief, high-level summary of what changes are being suggested. Summary should be a single sentence, or a bulleted list.

**Authors** - List of authors and contributors involved in the writing of the proposal.

**Abstract** - Abstract is a multi-sentence (short paragraph) technical summary. This should be a very terse and human-readable version of the motivation and specification sections. Someone should be able to read only the abstract to get the gist of what this specification does.

**Motivation** - The motivation section should describe the "why" of this proposal. What problem does it solve? What benefit does it provide to the Terp network?

**Proposal Type Specific Content**

Make sure to double check your proposal type to see what [additional information or details are required](/connect/community/proposals#templates). **Especially for funding proposals!**
___


- **Minimum Duration:** 72 hours (3 days)
- **Forum Tag:** `[PRE-PROPOSAL]`


## Phase 3: TCP Signaling (Temperature Check)
At any point during Phase 2, the author may finalize the TCP by initiating a community temperature check. To do this, the author must change the tag of the forum post to `[PROPOSAL]`, and add a forum poll to gauge the community sentiment.

Proposals should only move to Phase 3 once the author has considered all community comments, responded to all concerns and questions, and believes that the proposal is ready to go on-chain for a final network-wide vote. Proposals in Phase 3 should not be edited further with the exception of minor mistakes. 

**Forum Tag:** `[PROPOSAL]`

## Phase 4: On-Chain Voting

If the signaling polls in Phase 3 show an overall positive sentiment and no major issues are brought up, the proposal may be submitted on-chain for the formal voting. Submission guidelines are listed here in [connect/community/proposals](/connect/community/proposals).

**Forum Tag (Depending on Outcome):** `[VOTING]`, `[PASSED]`, `[REJECTED]`, `[VETO]`

## Proposal Lifecycle Flowchart

## Other TCP Statuses
- **Withdrawn:** Assigned when a member withdraws their proposal, or if the proposal is abandoned with no activity. **Forum Tag:** `[WITHDRAWN]`
- **Deferred:** Assigned when a proposal has been deemed as not ready or not a priority but can be re-proposed at a later date. This status can be assigned during Phase 3 with a failed forum poll or signaling. **Forum Tag:** `[DEFER]`


## Assistance & Review
All proposers are welcome to approach the Governance subDAO for assistance in any part of the Proposal Lifecycle. In addition, proposers may request a formal review of the proposal before going on chain.


## **Proposal Types**

### **On-Chain Governance**

On-chain governance refers to all protocol level execution of proposals using Cosmos SDK's `gov` module. Anyone who holds or stakes TERP can participate in these votes, regardless of the voter's validator choices.

### **Off-Chain Governance**

Off-chain governance refers to all community decisions that do not require an on-chain protocol-level change. These types of decisions include a wide variety of topics and concepts, from passing meta-governance proposals to the formation of special task forces or workstreams.

> All proposals are assumed to be On-Chain Proposals until the necessary infrastructure and toolings for Off-Chain Voting is established. Cosmos SDK's TextProposal will be used for Off-Chain Proposals for the time being.

## **Proposal Types by Category**

### **Protocol Proposals**

Proposals that contain state changing logic that will be run by the protocol itself, if approved via governance consensusn.- *Most commonly used for software upgrades, parameter changes, & smart contract interactions.*  

### **Community Proposals**

Proposals that only require to be posted as a `TextProposal` on the Cosmos SDK - *Most commonly used for meta-governance proposals.*  

### **SubDAO**

subDAOs are teams with a recurring budget with no termination date (i.e., Community Outreach, Marketing & Creative Services, etc). More information on SubDAO can be found on the [SubDAO page.](/connect/community/daos),

SubDAos are the sub-units of how Terp DAO advances its purpose. A subDAO is a group of people actively working on tasks that align with Terp Networks' Constitutional Values and community run initiatives. As such, ratifying workstreams sets boundaries on what is and isn't in scope for Terp DAO's governance.

Anyone may start a subDAO and gather momentum behind it by posting on Commonwealth. Until a formal proposal for a budget is made, this subDAO is considered “informal.” A workstream can be as broad or narrow as its initiators like, but workstream proposals must satisfy the following criteria:

Proposals that requests any type of funding from the `CommunityPool` or the DAO's treasury to form an in-house workstream (team, squad, sub-DAO, guild) or project with the direct purpose of benefiting the Terp ecosystem.

- Have a clear objective that aligns with Terp Networks' values and objectives as listed in the [Constitution](/connect/community/proposals).
- Distinguish itself from or explicitly state its improvements on existing workstreams.
- Propose clear budgets and timelines for producing outcomes and all in line with the budget proposal flow.

SubDAOs have five potential states. Each of the five states and the requirements for a subDAO in each state are outlined below:

- **Informal:** The workstream is not funded by the DAO, and has not made a formal proposal with its goals and a budgetary request.
- **Proposed:** The workstream has made a formal proposal to the DAO for a working budget.
- **Active:** The workstream is active and funded by the DAO.
- **Inactive:** The workstream has been discontinued and is no longer being funded by the DAO.

#### **Special Initiatives / Projects**  

Special Initiatives and Projects are DAO-funded projects with a set budget and "completion" goal or date (i.e., Governance Tooling Project, Event Sponsorships, etc.)  

### **Network Upgrades & Security**

### **Proposal Phase & Identification Tags**

**You do not need to know the proposal phase and identification naming conventions! A Governance Council member will assist -- the content below is for reference.**

Proposal Phases are denoted as: `[IDEATION]`, `[PRE-PROPOSAL]`, `[PROPOSAL]`, `[VOTING]` for the 4-phases, and `[PASSED]`, `[REJECTED]`, `[DEFERRED]` for proposals in the other stages. Refer to the [Proposal Lifecycle](/connect/community/proposals) page for more information on proposal lifecycle phases.


---
title: Submission Guidelines
---

# Proposal Submission for Voting

## Preparing the Proposal Payload
___
Many proposals allow for long form text to be included, usually under the key description. These provide the opportunity to include markdown if formatted correctly as well as line breaks with \n. If you're using markdown or line breaks it's recommended to put the proposal text into a json file and include that file as part of the CLI proposal, as opposed to individual fields in flags.

### Using terpd tx gov

Coming Soon

### Text Proposals 
TextProposal are used by delegators to agree to a certain strategy, plan, commitment, future upgrade, or any other statement in the form of text. Aside from having a record of the proposal outcome on the Terp Network chain, a text proposal has no direct effect on Terp Network.

### Community Pool
For community pool spend proposals, there are five components:
1. **Title** - the distinguishing name of the proposal, typically the way the that explorers list proposals
2. **Description** - the body of the proposal that further describes what is being proposed and details surrounding the proposal
3. **Recipient** - the Terp Network (bech32-based) address that will receive funding from the Community Pool
4. **Amount** - the amount of funding that the recipient will receive in `uterp` or `uthiol`.
5. **Deposit** - the amount that will be contributed to the deposit (in `uterp`) from the account submitting the proposal

**Community Pool Spend SubDaos**1. **Title** - the distinguishing name of the proposal, typically the way the that explorers list proposals
2. **Description** - the body of the proposal that further describes what is being proposed and details surrounding the proposal
3. **Recipient** - the Terp (bech32-based) address that will receive funding from the Community Pool
4. **Amount** - the amount of funding that the recipient will receive in `uterp` or `uthiol`.
5. **Deposit** - the amount that will be contributed to the deposit (in `uterp`) from the account submitting the proposal

 When an observer selects the proposal, they'll see the description. Not all explorers will show the recipient and amount, so ensure that you verify that the description aligns with the what the governance proposal is programmed to enact. If the description says that a certain address will receive a certain number of TERP, it should also be programmed to do that, but it's possible that that's not the case (accidentally or otherwise).

### Parameter Change

>> Changes to the `gov` module are different from the other kinds of parameter changes because `gov` has subkeys, [as discussed here](https://github.com/cosmos/cosmos-sdk/issues/5800).

---
title:  Standardized Proposal Templates
---
# Standardized Proposal Templates

The Terp Network Governance Framework allows for various different types of proposals, both on-chain and off-chain. This section serves as a basic guide for the necessary components of proposals. Depending on the proposal type, certain components may be required. Use this table as a reference sheet for which of the following components are required for your type.

## A. Universal Components

All proposals must include the following **Proposal Components**.
___
**Title** - Short and sweet, with the [correct tags](/connect/community/proposals) prefixed.
**Author(s)** - List of authors and contributors involved in the writing of the proposal.
**Summary** - A brief, high-level summary of what changes are being suggested. Summary should be a single sentence, or a bulleted list.
**Abstract** - Abstract is a multi-sentence (short paragraph) technical summary. This should be a very terse and human-readable version of the motivation and specification sections. Someone should be able to read only the abstract to get the gist of what this specification does.
**Motivation** - The motivation section should describe the "why" of this proposal. What problem does it solve? What benefit does it provide to the Terp network?
___

## B. Project/Protocol Introduction

___

### Project / Initiative Specification

#### Project & Team Introduction

A quick introduction to the project or initiative: what it is, how it works, why the project is unique, and why your team can knock it out of the park.

#### Background & Context

Background information on the project, such as where the inspiration came from, why you're passionate about it, how long you have been working on it, previous funding rounds (if applicable).

#### Achievements & Obstacles

List all the achievements you have managed to accomplish so far, and the obstacles or blockers that you have hit.

#### Project Goals

## C.SubDAOs & Special Initiatives

Anyone may start a subdao and gather momentum behind it by posting on Commonwealth. For more information on Subdao proposals, refer to [this section](/connect/community/daos).

## D. Protocol (ParamChange) Proposals
