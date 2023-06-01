"use strict";(self.webpackChunkgreenfield_docs=self.webpackChunkgreenfield_docs||[]).push([[6178],{51426:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>p,frontMatter:()=>n,metadata:()=>o,toc:()=>c});var r=i(87462),a=(i(67294),i(3905));const n={title:"Receiver",order:8},s="Receiver",o={unversionedId:"guide/storage-provider/services/receiver",id:"guide/storage-provider/services/receiver",title:"Receiver",description:"Receiver is responsible for accepting the piece data that replicated from the primary SP.",source:"@site/docs/guide/storage-provider/services/receiver.md",sourceDirName:"guide/storage-provider/services",slug:"/guide/storage-provider/services/receiver",permalink:"/bnbgreenfield-docs/docs/guide/storage-provider/services/receiver",draft:!1,editUrl:"https://github.com/RumeelHussainbnb/bnbgreenfield-docs/docs/guide/storage-provider/services/receiver.md",tags:[],version:"current",frontMatter:{title:"Receiver",order:8},sidebar:"guideSidebar",previous:{title:"Uploader",permalink:"/bnbgreenfield-docs/docs/guide/storage-provider/services/uploader"},next:{title:"Downloader",permalink:"/bnbgreenfield-docs/docs/guide/storage-provider/services/downloader"}},d={},c=[{value:"Key Workflow",id:"key-workflow",level:2},{value:"Verify the replicate approval",id:"verify-the-replicate-approval",level:3},{value:"Store the replicated piece data",id:"store-the-replicated-piece-data",level:3},{value:"Generate integrity hash and signature",id:"generate-integrity-hash-and-signature",level:3}],l={toc:c};function p(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"receiver"},"Receiver"),(0,a.kt)("p",null,"Receiver is responsible for accepting the piece data that replicated from the primary SP."),(0,a.kt)("h2",{id:"key-workflow"},"Key Workflow"),(0,a.kt)("h3",{id:"verify-the-replicate-approval"},"Verify the replicate approval"),(0,a.kt)("p",null,"Receiver receives the ReceivePieceRequest from Gateway that has been basic authenticated, and Gateway will also verify\nthe replicate approval whether t signed by self."),(0,a.kt)("h3",{id:"store-the-replicated-piece-data"},"Store the replicated piece data"),(0,a.kt)("p",null,"Receiver receives data stream and store in piece store."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-protobuf"},"// ReceivePieceRequest is request type for the ReceivePiece RPC method.\nmessage ReceivePieceRequest {\n  // object_info defines the information of the object.\n  bnbchain.greenfield.storage.ObjectInfo object_info = 1;\n  // segment_idx defines the index of segment for piece data.\n  uint32 segment_idx = 2;\n  // replica_idx defines the index of replicate for piece data.\n  uint32 replicate_idx = 3;\n  // piece_size defines the size of piece data.\n  bytes checksum = 4;\n  // piece_data defines the data that replicate piece to storage provider.\n  bytes piece_data = 5;\n}\n")),(0,a.kt)("h3",{id:"generate-integrity-hash-and-signature"},"Generate integrity hash and signature"),(0,a.kt)("p",null,"After receiving all the replication piece data, calculate the integrity hash and send it to ",(0,a.kt)("a",{parentName:"p",href:"./signer"},"sign"),".\nReturn the integrity hash and signature to the primary SP for sealing object."))}p.isMDXComponent=!0}}]);