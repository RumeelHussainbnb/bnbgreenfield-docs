"use strict";(self.webpackChunkgreenfield_docs=self.webpackChunkgreenfield_docs||[]).push([[8088],{7196:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const o={title:"Quick Start",order:2},l="Quick Start",i={unversionedId:"guide/dapp/quick-start",id:"guide/dapp/quick-start",title:"Quick Start",description:"In this guide, we will walk you through the process of data permission management using the BSC smart contract as a simple",source:"@site/docs/guide/dapp/quick-start.md",sourceDirName:"guide/dapp",slug:"/guide/dapp/quick-start",permalink:"/bnbgreenfield/docs/guide/dapp/quick-start",draft:!1,editUrl:"https://github.com/RumeelHussainbnb/bnbgreenfield-docs/docs/guide/dapp/quick-start.md",tags:[],version:"current",frontMatter:{title:"Quick Start",order:2},sidebar:"guideSidebar",previous:{title:"Overview",permalink:"/bnbgreenfield/docs/guide/dapp/overview"},next:{title:"Primitive Interfaces",permalink:"/bnbgreenfield/docs/guide/dapp/primitive-interface"}},s={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Steps",id:"steps",level:3}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"quick-start"},"Quick Start"),(0,r.kt)("p",null,"In this guide, we will walk you through the process of data permission management using the BSC smart contract as a simple\nshowcase of cross chain program-ability of Greenfield."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"Before starting, make sure you have the following tools installed:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/bnb-chain/greenfield-cmd"},"gnfd-cmd")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/bnb-chain/greenfield-contracts"},"gnfd-contract"))),(0,r.kt)("p",null,"Please follow the readme of the above two repositories to install the tools and configure the environment."),(0,r.kt)("p",null,"Ensure you get an account that get funds on both BSC and Greenfield network."),(0,r.kt)("h3",{id:"steps"},"Steps"),(0,r.kt)("p",null,"In the following example, Account A(0x0fEd1aDD48b497d619EF50160f9135c6E221D5F0, stored in ",(0,r.kt)("inlineCode",{parentName:"p"},"keyA.json"),") will grant Account B(0x3bD70E10D71C6E882E3C1809d26a310d793646eB, stored in ",(0,r.kt)("inlineCode",{parentName:"p"},"keyB.json"),")\nthe access to his private file through BSC contract."),(0,r.kt)("p",null,"Before starting, please make sure you created related accounts by ",(0,r.kt)("inlineCode",{parentName:"p"},"gnfd-cmd create-keystore")," and have the config.toml file in the current directory.\nThe content of the config.toml is as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-toml"},'rpcAddr = "https://gnfd-testnet-fullnode-tendermint-us.bnbchain.org:443"\nchainId = "greenfield_5600-1"\npasswordFile = "password.txt"\n')),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Prepare environment")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ export AccountA=0x0fEd1aDD48b497d619EF50160f9135c6E221D5F0\n$ export AccountB=0x3bD70E10D71C6E882E3C1809d26a310d793646eB\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Create a temporary file ",(0,r.kt)("inlineCode",{parentName:"li"},"story.txt"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'$ echo "this is a fun story" > story.txt \n')),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Create a bucket named ",(0,r.kt)("inlineCode",{parentName:"li"},"funbucket"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ gnfd-cmd -c config.toml -k keyA.json bucket create gnfd://funbucket\n")),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Create a private object named ",(0,r.kt)("inlineCode",{parentName:"li"},"story.txt")," in the bucket ",(0,r.kt)("inlineCode",{parentName:"li"},"funbucket"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'$ gnfd-cmd -c config.toml -k keyA.json object put --contentType "text/xml" --visibility private ./story.txt  gnfd://funbucket/story.txt\n')),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"Create a group named ",(0,r.kt)("inlineCode",{parentName:"li"},"fungroup"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ gnfd-cmd -c config.toml -k keyA.json group create gnfd://fungroup\ncreate group: fungroup succ, txn hash:17B6AE2C8D30B6D6EEABEE81DB8B37CF735655E9087CB02DC98EFF1DCA9FBE3A, group id: 136 \n")),(0,r.kt)("p",null,"The console will return the id of the group, which is ",(0,r.kt)("inlineCode",{parentName:"p"},"136")," in this case."),(0,r.kt)("ol",{start:6},(0,r.kt)("li",{parentName:"ol"},"Bind the group ",(0,r.kt)("inlineCode",{parentName:"li"},"fungroup")," to the object ",(0,r.kt)("inlineCode",{parentName:"li"},"story.txt"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"## Example, replace the ${GroupId} with the group id you get in the previous step\n$ export GroupId=136\n$ gnfd-cmd -c config.toml -k keyA.json policy put-object-policy --groupId ${GroupId} --actions get gnfd://funbucket/story.txt   \n")),(0,r.kt)("ol",{start:6},(0,r.kt)("li",{parentName:"ol"},"Mirror the group to BSC network.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"## Example, replace the ${GroupId} with the group id you get in the previous step\n$ gnfd-cmd -c config.toml -k keyA.json crosschain mirror --resource group --id ${GroupId} \n")),(0,r.kt)("ol",{start:7},(0,r.kt)("li",{parentName:"ol"},"Try to access the file through AccountB.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"## Example\n$ gnfd-cmd -c config.toml -k keyA.json group head-member --groupOwner ${AccountA} --headMember ${AccountB} gnfd://fungroup\nthe user does not exist in the group\n$ gnfd-cmd -c config.toml -k keyB.json object get gnfd://funbucket/story.txt ./story-copy.txt\nrun command error: statusCode 403 : code : AccessDenied  (Message: Access Denied)\n")),(0,r.kt)("p",null,"It turns out that AccountB is not permitted to access the file, which is expected."),(0,r.kt)("ol",{start:8},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Clone the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/bnb-chain/greenfield-contracts"},"gnfd-contract")," repository and install the dependencies.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Grant the access to Account B through the contract."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'### Example\nexport RPC_TEST=https://gnfd-bsc-testnet-dataseed1.bnbchain.org \n$ forge script foundry-scripts/GroupHub.s.sol:GroupHubScript \\\n--sig "updateGroup(address operator, uint256 groupId, address member)" \\\n${AccountA} ${GroupId} ${AccountB} \\\n-f https://greenfield-bsc-testnet-ap.nodereal.io/ \\\n--private-key 148748590a8b83dxxxxxxxxxxxxxxxxx \\\n--legacy \\\n--broadcast\n')),(0,r.kt)("ol",{start:10},(0,r.kt)("li",{parentName:"ol"},"Wait 30 seconds, and try to access the file through AccountB again.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"## Example\n$ gnfd-cmd -c config.toml -k keyA.json group head-member --groupOwner ${AccountA} --headMember ${AccountB} gnfd://fungroup\nthe user is a member of the group\n$ gnfd-cmd -c config.toml -k keyB.json object get gnfd://funbucket/story.txt ./story-copy.txt\ndownload object story.txt successfully, the file path is ./story-copy.txt, content length:20,\n")))}u.isMDXComponent=!0}}]);