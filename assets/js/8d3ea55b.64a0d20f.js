"use strict";(self.webpackChunkgreenfield_docs=self.webpackChunkgreenfield_docs||[]).push([[791],{76150:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>l,frontMatter:()=>n,metadata:()=>s,toc:()=>c});var a=r(87462),i=(r(67294),r(3905));const n={title:"Architecture",order:2},o=void 0,s={unversionedId:"guide/storage-provider/introduction/architecture",id:"guide/storage-provider/introduction/architecture",title:"Architecture",description:"SP provides storage service with a modular microservice architecture.",source:"@site/docs/guide/storage-provider/introduction/architecture.md",sourceDirName:"guide/storage-provider/introduction",slug:"/guide/storage-provider/introduction/architecture",permalink:"/bnbgreenfield/docs/guide/storage-provider/introduction/architecture",draft:!1,editUrl:"https://github.com/RumeelHussainbnb/bnbgreenfield/docs/guide/storage-provider/introduction/architecture.md",tags:[],version:"current",frontMatter:{title:"Architecture",order:2},sidebar:"guideSidebar",previous:{title:"Overview",permalink:"/bnbgreenfield/docs/guide/storage-provider/introduction/overview"},next:{title:"Manager",permalink:"/bnbgreenfield/docs/guide/storage-provider/services/manager"}},p={},c=[],d={toc:c};function l(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"SP provides storage service with a modular microservice architecture."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"architecture",src:r(11856).Z,width:"1696",height:"1152"})),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("i",null,"Storage Provider Architecture")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Gateway")," is the entry point of each SP. It parses requests from the  client and dispatches them to special service.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Uploader")," receives the object's payload data, splits it into segments, and stores them in piece store.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Downloader")," handles the user's downloading request and gets object data from the piece store.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Receiver")," receives data pieces from Primary SP and stores them in the piece store when SP works as a secondary SP.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Challenge")," handles HA challenge requests and returns the challenged piece data and other pieces' hashes of the object.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"TaskNode")," works as the execute unit, it watches tasks(the smallest unit of a job) and executes them.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Manager")," responsible for the service management of SP.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Signer")," signs the transaction messages to the  Greenfield chain with the SP's private key.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"P2P"),"  used to interact with the control flow of the payload data, eg: GetSecondaryApproval.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Metadata"),"  used to provide efficient query interface to achieve low latency and high-performance SP requirements.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"PieceStore")," interacts with underlying storage vendors, eg. AWS S3, MinIO.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"SPDB")," stores all the contexts of the background jobs and the metadata of the SP.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"BSDB")," stores all the events' data from the greenfield chain and provides them to the metadata service of SP."))))}l.isMDXComponent=!0},11856:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/09-SP-Arch-cc51997d515f4ff634c456a004ee7715.jpg"}}]);