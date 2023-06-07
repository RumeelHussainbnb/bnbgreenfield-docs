"use strict";(self.webpackChunkgreenfield_docs=self.webpackChunkgreenfield_docs||[]).push([[9845],{98171:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var i=n(87462),o=(n(67294),n(3905));const a={title:"Token Economics",order:3},r="Token Economics",s={unversionedId:"guide/introduction/token-economics",id:"guide/introduction/token-economics",title:"Token Economics",description:"BNB remains the main utility token on Greenfield.",source:"@site/docs/guide/introduction/token-economics.md",sourceDirName:"guide/introduction",slug:"/guide/introduction/token-economics",permalink:"/bnbgreenfield/docs/guide/introduction/token-economics",draft:!1,editUrl:"https://github.com/RumeelHussainbnb/bnbgreenfield-docs/docs/guide/introduction/token-economics.md",tags:[],version:"current",frontMatter:{title:"Token Economics",order:3},sidebar:"guideSidebar",previous:{title:"Ecosystem",permalink:"/bnbgreenfield/docs/guide/introduction/ecosystem"},next:{title:"Overview",permalink:"/bnbgreenfield/docs/guide/getting-started/overview"}},l={},d=[{value:"Revenue Sharing",id:"revenue-sharing",level:2},{value:"Circulation Model",id:"circulation-model",level:2},{value:"Genesis Setup",id:"genesis-setup",level:2}],c={toc:d};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"token-economics"},"Token Economics"),(0,o.kt)("p",null,"BNB remains the main utility token on Greenfield."),(0,o.kt)("p",null,"BNB can be transferred from BSC to Greenfield blockchain, and vice versa. It is used as:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Staking token"),": This token allows user to self-delegate and delegate as stake, which can earn gas rewards but may result in slash for improper behavior."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Gas token"),": This token is used to pay the gas to submit transactions on the Greenfield blockchain. This includes both Greenfield local transactions or cross-chain transactions between Greenfield and BSC. The fee is charged at the time of transaction submission and dispatched to Greenfield ",(0,o.kt)("inlineCode",{parentName:"li"},"validators"),", and potentially to Greenfield ",(0,o.kt)("inlineCode",{parentName:"li"},"Storage Providers")," for certain transactions. The fee distribution is done in-protocol and a protocol specification is ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/bnb-chain/greenfield-cosmos-sdk/blob/master/docs/spec/fee_distribution/f1_fee_distr.pdf"},"described here"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Storage service fee token"),": This token is used to pay fees for object storage and download bandwidth data package. Fees are charged as time goes on and dispatched to Greenfield ",(0,o.kt)("inlineCode",{parentName:"li"},"Storage Providers"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Governance token"),": BNB holders may govern the Greenfield by voting on proposals with their staked BNB (not available at launch).")),(0,o.kt)("h2",{id:"revenue-sharing"},"Revenue Sharing"),(0,o.kt)("p",null,"The main economic drive of Greenfield comes from their ",(0,o.kt)("inlineCode",{parentName:"p"},"storage providers")," who charge users fees for their storage services.\nMeanwhile, ",(0,o.kt)("inlineCode",{parentName:"p"},"validators")," play a crucial role in supervising the network's security, maintaining stability and ensuring service quality.\nWhile ",(0,o.kt)("inlineCode",{parentName:"p"},"validators")," may earn transaction fees, this alone may not be enough to guarantee sufficient staking for network security.\nTherefore, Greenfield has designed ",(0,o.kt)("inlineCode",{parentName:"p"},"validators")," to receive a reasonable proportion of fees from the storage services they provide.\nThis approach ensures that users' data is not only stored but that the network is also safe and secure."),(0,o.kt)("h2",{id:"circulation-model"},"Circulation Model"),(0,o.kt)("p",null,"In Greenfield, there is no inflation of BNB because of its dual-chain structure. Instead, cross-chain transfers are used to allow BNB to flow bi-directionally between Greenfield and Smart Chain. As a result, the total circulation of BNB on Greenfield can fluctuate."),(0,o.kt)("p",null,"Greenfield use Lock/Unlock mechanism to ensure the total circulation of BNB on both chain is always less than the initial\ntotal supply:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"The transfer-out blockchain will lock the amount from source owner addresses into a module account or smart contract."),(0,o.kt)("li",{parentName:"ol"},"The transfer-in blockchain will unlock the amount from module account or contract and send it to target addresses."),(0,o.kt)("li",{parentName:"ol"},"Both networks will never mint BNB.")),(0,o.kt)("p",null,"Refer to ",(0,o.kt)("a",{parentName:"p",href:"/bnbgreenfield/docs/guide/concept/programmability"},"cross chain model")," to get more details about the mechanism."),(0,o.kt)("h2",{id:"genesis-setup"},"Genesis Setup"),(0,o.kt)("p",null,"BNB is transferred from BSC to Greenfield as the first cross-chain action. The initial validator set and ",(0,o.kt)("inlineCode",{parentName:"p"},"storage provider"),'\nof Greenfield at the genesis will first lock a certain amount of BNB into the "Greenfield Token Hub" contract on BSC. This contract\nis used as part of the native bridge for BNB transferring after the genesis. These initial locked BNB will be used as\nthe self-stake of ',(0,o.kt)("inlineCode",{parentName:"p"},"validators"),", the deposit of ",(0,o.kt)("inlineCode",{parentName:"p"},"storage provider")," and early days gas fees."),(0,o.kt)("p",null,"The initial BNB allocation on greenfield is around 1M BNB. (TODO: not finalized)"),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"No initial donors, foundation, or company will get funds in the genesis setup."),(0,o.kt)("p",{parentName:"admonition"},"No token inflation.")))}u.isMDXComponent=!0}}]);