"use strict";(self.webpackChunkgreenfield_docs=self.webpackChunkgreenfield_docs||[]).push([[3863],{90286:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var n=i(87462),a=(i(67294),i(3905));const o={title:"Gateway",order:6},l="Gateway",r={unversionedId:"guide/storage-provider/services/gateway",id:"guide/storage-provider/services/gateway",title:"Gateway",description:"The Gateway service is the unified entrance of SP, which provides a unified application programming interface (HTTP Restful API).",source:"@site/docs/guide/storage-provider/services/gateway.md",sourceDirName:"guide/storage-provider/services",slug:"/guide/storage-provider/services/gateway",permalink:"/bnbgreenfield-docs/docs/guide/storage-provider/services/gateway",draft:!1,editUrl:"https://github.com/RumeelHussainbnb/bnbgreenfield-docs/docs/guide/storage-provider/services/gateway.md",tags:[],version:"current",frontMatter:{title:"Gateway",order:6},sidebar:"guideSidebar",previous:{title:"Signer",permalink:"/bnbgreenfield-docs/docs/guide/storage-provider/services/signer"},next:{title:"Uploader",permalink:"/bnbgreenfield-docs/docs/guide/storage-provider/services/uploader"}},s={},d=[{value:"Overview",id:"overview",level:2},{value:"Authorization Checker",id:"authorization-checker",level:3},{value:"Request Router",id:"request-router",level:3},{value:"Flow Controller",id:"flow-controller",level:3},{value:"Load Balancer",id:"load-balancer",level:3},{value:"Micro Service Clients",id:"micro-service-clients",level:3},{value:"Universal Endpoint",id:"universal-endpoint",level:3},{value:"Download File",id:"download-file",level:4},{value:"View File",id:"view-file",level:4},{value:"Public File Access",id:"public-file-access",level:4},{value:"Private File Access",id:"private-file-access",level:4}],c={toc:d};function p(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"gateway"},"Gateway"),(0,a.kt)("p",null,"The Gateway service is the unified entrance of SP, which provides a unified application programming interface (HTTP Restful API).\nIf you are interested in the specific programming interface, we invite you to the ",(0,a.kt)("a",{parentName:"p",href:"#gateway"},"following page"),"."),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"SP-Gateway",src:i(63394).Z,width:"936",height:"652"})),(0,a.kt)("div",{style:{textAlign:"center"}},">",(0,a.kt)("i",null,"Gateway Architecture")),(0,a.kt)("h3",{id:"authorization-checker"},"Authorization Checker"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Verifies the signature of request to ensure that the request has not been tampered with."),(0,a.kt)("li",{parentName:"ul"},"Checks the authorization to ensure the corresponding account has permissions on resources."),(0,a.kt)("li",{parentName:"ul"},"Checks the object state and payment account state to ensure the object is sealed and the payment account is active.")),(0,a.kt)("h3",{id:"request-router"},"Request Router"),(0,a.kt)("p",null,"According to the type of specific request, it is forwarded to the corresponding backend microservice."),(0,a.kt)("h3",{id:"flow-controller"},"Flow Controller"),(0,a.kt)("p",null,"In the future, according to the flow control configuration information, flow control will be performed to provide\nhigher-quality services and avoid service overload."),(0,a.kt)("h3",{id:"load-balancer"},"Load Balancer"),(0,a.kt)("p",null,"In the future, when routing back-end microservices, load balancing will be done according to policies such as\nservice quality."),(0,a.kt)("h3",{id:"micro-service-clients"},"Micro Service Clients"),(0,a.kt)("p",null,"Various microservice clients inside SP, including Uploader, Downloader, etc."),(0,a.kt)("h3",{id:"universal-endpoint"},"Universal Endpoint"),(0,a.kt)("p",null,"We implement the Universal Endpoint according to ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/bnb-chain/greenfield-whitepaper/blob/main/part3.md#231-universal-endpoint"},"Greenfield Whitepaper's this chapter"),"."),(0,a.kt)("p",null,"All objects can be identified and accessed via a universal path:"),(0,a.kt)("p",null,"gnfd://<bucket_name><object_name>?","[parameter]","*"),(0,a.kt)("p",null,"where:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},'"gnfd://" is the fixed leading identifier, which is mandatory')),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"bucket_name is the bucket name of the object, which is mandatory")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"object_name is the name of the object, which is mandatory")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"parameter is a list of key-value pair for the additional information for the URI, which is optional"))),(0,a.kt)("p",null,'Each SP will register multiple endpoints to access their services, e.g. "SP1" may ask their users to download objects via ',(0,a.kt)("a",{parentName:"p",href:"https://greenfield.sp1.com/download"},"https://greenfield.sp1.com/download"),".\nAnd the full download RESTful API would be like: ",(0,a.kt)("a",{parentName:"p",href:"https://greenfield.sp1.com/download/mybucket/myobject.jpg"},"https://greenfield.sp1.com/download/mybucket/myobject.jpg"),"."),(0,a.kt)("p",null,"Universal Endpoint supports using any valid endpoint for any SP, and automatically redirects to the correct endpoint containing\nthe object for download."),(0,a.kt)("p",null,"For instance, when users access a testnet endpoint greenfield.sp1.com of SP1, the request url will be:\n",(0,a.kt)("a",{parentName:"p",href:"https://greenfield.sp1.com/download/mybucket/myobject.jpg"},"https://greenfield.sp1.com/download/mybucket/myobject.jpg"),".\nUniversal Endpoint will find the correct endpoint for myobject.jpg, here SP3, and redirect the user to:\n",(0,a.kt)("a",{parentName:"p",href:"https://greenfield.sp3.com/download/mybucket/myobject.jpg"},"https://greenfield.sp3.com/download/mybucket/myobject.jpg")," and download the file."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"SP-Gateway-Universal-Endpoint",src:i(26338).Z,width:"556",height:"461"})),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("i",null,"Universal Endpoint Logic Flow")),(0,a.kt)("h4",{id:"download-file"},"Download File"),(0,a.kt)("p",null,"If you want to download a file using Universal Endpoint, the url is like: ",(0,a.kt)("a",{parentName:"p",href:"https://greenfield.sp1.com/download/mybucket/myobject.jpg"},"https://greenfield.sp1.com/download/mybucket/myobject.jpg"),".\nThis is enforced by adding to the header:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-md"},"    Content-Disposition=attachment\n")),(0,a.kt)("h4",{id:"view-file"},"View File"),(0,a.kt)("p",null,"If you want to view a file using Universal Endpoint without download, the url is like: ",(0,a.kt)("a",{parentName:"p",href:"https://greenfield.sp1.com/view/mybucket/myobject.jpg"},"https://greenfield.sp1.com/view/mybucket/myobject.jpg"),".\nThis is enforced by adding to the header:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-md"},"    Content-Disposition=inline\n")),(0,a.kt)("h4",{id:"public-file-access"},"Public File Access"),(0,a.kt)("p",null,"Public files can be downloaded/viewed with the following points to notice:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Downloader/viewer's quota will not be deducted, but the object owner's quota will be deducted per download/view."),(0,a.kt)("li",{parentName:"ol"},"If a file is not specified public or private, the status (public/private) of the bucket containing the file determines if the file can be downloaded/viewd as public file."),(0,a.kt)("li",{parentName:"ol"},"If a file is not sealed, it cannot be downloaded/viewed.")),(0,a.kt)("h4",{id:"private-file-access"},"Private File Access"),(0,a.kt)("p",null,"In design and will be provided in the new few releases. Currently, if you try to download/view a private file, an error will be thrown to let you know the object key is illegal for use."))}p.isMDXComponent=!0},63394:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/05-SP-Gateway-2d65267227e945992d587cf3601b3fe9.jpg"},26338:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/501-SP-Gateway-Universal-Endpoint-55c84f274d8c6fb2a0db778399552c25.png"}}]);