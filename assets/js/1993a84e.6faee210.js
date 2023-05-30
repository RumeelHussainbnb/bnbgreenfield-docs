"use strict";(self.webpackChunkgreenfield_docs=self.webpackChunkgreenfield_docs||[]).push([[1082],{45162:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var a=i(87462),n=(i(67294),i(3905));const r={title:"Ecosystem",order:2},o="Ecosystem",s={unversionedId:"guide/introduction/ecosystem",id:"guide/introduction/ecosystem",title:"Ecosystem",description:"From storage provider and BNB staker to developers, there are a variety of individuals and entities that play a critical",source:"@site/docs/guide/introduction/ecosystem.md",sourceDirName:"guide/introduction",slug:"/guide/introduction/ecosystem",permalink:"/bnbgreenfield-docs/docs/guide/introduction/ecosystem",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/guide/introduction/ecosystem.md",tags:[],version:"current",frontMatter:{title:"Ecosystem",order:2},sidebar:"guideSidebar",previous:{title:"Overview",permalink:"/bnbgreenfield-docs/docs/guide/introduction/overview"},next:{title:"Token Economics",permalink:"/bnbgreenfield-docs/docs/guide/introduction/token-economics"}},l={},d=[{value:"Greenfield Actors",id:"greenfield-actors",level:2},{value:"Validators",id:"validators",level:3},{value:"Storage Providers (SPs)",id:"storage-providers-sps",level:3},{value:"Greenfield Features",id:"greenfield-features",level:2},{value:"dApps",id:"dapps",level:3},{value:"Relayers",id:"relayers",level:3},{value:"Challenge Verifier",id:"challenge-verifier",level:3},{value:"How to Participate in the Ecosystem",id:"how-to-participate-in-the-ecosystem",level:2}],c={toc:d};function p(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"ecosystem"},"Ecosystem"),(0,n.kt)("p",null,"From ",(0,n.kt)("inlineCode",{parentName:"p"},"storage provider")," and BNB staker to developers, there are a variety of individuals and entities that play a critical\nrole in the growth and success of Greenfield. We'll dive into the unique contributions and responsibilities of\neach group, and explore how they work together to shape the future of Greenfield."),(0,n.kt)("h2",{id:"greenfield-actors"},"Greenfield Actors"),(0,n.kt)("h3",{id:"validators"},"Validators"),(0,n.kt)("p",null,"The Greenfield blockchain operates as a Proof-of-Stake (PoS) blockchain and has its own set of ",(0,n.kt)("inlineCode",{parentName:"p"},"validators"),"\nthat are chosen through an election process based on PoS logic."),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"validators")," play a crucial role in ensuring the security of the Greenfield blockchain and are actively\ninvolved in the governance and staking of the blockchain. They also form a peer-to-peer network that functions\nsimilarly to other PoS blockchain networks."),(0,n.kt)("p",null,"In addition to their governance responsibilities, ",(0,n.kt)("inlineCode",{parentName:"p"},"validators")," also accept and process transactions, which enables users\nto operate on the objects stored on the Greenfield blockchain. They are responsible for maintaining the metadata of\nGreenfield and ensure that the blockchain state acts as a control panel for both ",(0,n.kt)("inlineCode",{parentName:"p"},"Storage Providers (SPs)")," and users.\nBoth parties rely on the ",(0,n.kt)("inlineCode",{parentName:"p"},"validators")," to accurately update and utilize this state in order to operate, store,\nand access their object storage."),(0,n.kt)("h3",{id:"storage-providers-sps"},"Storage Providers (SPs)"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Storage Providers (SPs)")," are an essential component of the Greenfield blockchain, providing storage service\ninfrastructures that can be offered by both individuals and organizations. ",(0,n.kt)("inlineCode",{parentName:"p"},"SPs")," utilize the Greenfield blockchain\nas the ledger and single source of truth to maintain secure and reliable storage."),(0,n.kt)("p",null,"Each SP is responsible for processing user requests to upload and download data, acting as the gatekeeper for\nuser rights and authentications. As a result, they play a critical role in ensuring that user data remains secure\nand accessible at all times."),(0,n.kt)("p",null,"For more information about the storage providers, have a look at the ",(0,n.kt)("a",{parentName:"p",href:"/bnbgreenfield-docs/docs/guide/greenfield-blockchain/modules/storage-provider"},"Storage Provider's page"),"."),(0,n.kt)("h2",{id:"greenfield-features"},"Greenfield Features"),(0,n.kt)("h3",{id:"dapps"},"dApps"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Greenfield dApps")," are applications that leverage the unique features of the Greenfield blockchain to\nsolve various problems for their users. These ",(0,n.kt)("inlineCode",{parentName:"p"},"dApps")," are designed to utilize Greenfield storage and\nrelated economic traits, providing a reliable and secure platform for creating and managing data."),(0,n.kt)("p",null,"Users can interact with the BNB Greenfield Core Infrastructure through the use of ",(0,n.kt)("inlineCode",{parentName:"p"},"BNB Greenfield dApps"),",\nwhich are decentralized applications that enable seamless interaction with the Greenfield ecosystem. Furthermore,\nthe Greenfield blockchain provides an intuitive smart contract library on the cross-chain facility, making it\neasy for dApp developers to integrate these features into their applications.\nThis user-friendly approach allows developers to efficiently build and deploy\n",(0,n.kt)("inlineCode",{parentName:"p"},"dApps")," that can solve real-world problems."),(0,n.kt)("h3",{id:"relayers"},"Relayers"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"Greenfield Relayer")," is a powerful bi-directional relaying service designed to facilitate seamless communication between\nGreenfield and BSC. It can only be operated by Greenfield validators and functions as a standalone process."),(0,n.kt)("p",null,"This innovative system independently monitors and tracks cross-chain events that take place on both the Greenfield and\nBSC networks, storing this data securely in a database. When an event is confirmed, the ",(0,n.kt)("inlineCode",{parentName:"p"},"relayer")," generates a ",(0,n.kt)("inlineCode",{parentName:"p"},"Boneh\u2013Lynn\u2013Shacham"),'\n(BLS) signed message that is then shared through the P2P network on the Greenfield network, known as "the vote".'),(0,n.kt)("p",null,"As more votes are collected, the ",(0,n.kt)("inlineCode",{parentName:"p"},"Greenfield Relayer")," assembles the necessary cross-chain package transaction and\nsubmits it to either the BSC or Greenfield network. This streamlined process ensures that communication between the two\nnetworks is efficient and error-free."),(0,n.kt)("h3",{id:"challenge-verifier"},"Challenge Verifier"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Challenge Verifier")," is an off-chain service that verifies data availability, data integrity and service quality by monitoring ",(0,n.kt)("inlineCode",{parentName:"p"},"storage provider"),"\u2019s activities. This mechanism works by penalizing and gradually eliminating ",(0,n.kt)("inlineCode",{parentName:"p"},"storage providers")," with poor service quality,\nin order to ensure the good performance and reliability of the entire network."),(0,n.kt)("p",null,"To elaborate, ",(0,n.kt)("inlineCode",{parentName:"p"},"Challenge Verifier")," constantly checks the ",(0,n.kt)("inlineCode",{parentName:"p"},"storage providers")," in the network by tasking them with challenges\nto prove their reliability. The challenges may include storing specific pieces of data or responding to requests within\na certain time limit. Providers that fail these challenges will be punished by slash their staked BNB."),(0,n.kt)("p",null,"By using ",(0,n.kt)("inlineCode",{parentName:"p"},"Challenge Verifier"),", the network can ensure that only reliable and trustworthy ",(0,n.kt)("inlineCode",{parentName:"p"},"storage providers")," are allowed\nto participate, protecting the network from any potential data loss, corruption, or low-quality service.\nAdditionally, ",(0,n.kt)("inlineCode",{parentName:"p"},"Challenge Verifier")," creates a competitive environment for ",(0,n.kt)("inlineCode",{parentName:"p"},"storage providers"),", motivating them to\ncontinuously improve their services to avoid penalties and stay in the network."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Challenge Verifier")," can only be operated by ",(0,n.kt)("inlineCode",{parentName:"p"},"Greenfield validators")," right now, and will open to public in the future."),(0,n.kt)("h2",{id:"how-to-participate-in-the-ecosystem"},"How to Participate in the Ecosystem"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/bnbgreenfield-docs/docs/guide/greenfield-blockchain/cli/validator-staking"},"Become A Validator"),": ",(0,n.kt)("inlineCode",{parentName:"li"},"validators")," secure the Greenfield by validating and relaying transactions,\nproposing, verifying and finalizing blocks."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/bnbgreenfield-docs/docs/guide/greenfield-blockchain/cli/storage-provider"},"Become A Storage Provider"),": SPs store the objects' real data, i.e. the payload data. and get paid\nby providing storage services."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/bnbgreenfield-docs/docs/guide/greenfield-blockchain/cli/storage"},"Control Your Data"),": store and manage your data in a decentralized way, control and own it all by yourself.")))}p.isMDXComponent=!0}}]);