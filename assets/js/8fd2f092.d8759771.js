"use strict";(self.webpackChunkgreenfield_docs=self.webpackChunkgreenfield_docs||[]).push([[8869],{44235:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>g,frontMatter:()=>r,metadata:()=>s,toc:()=>o});var n=i(87462),a=(i(67294),i(3905));const r={title:"Challenge",order:10},l="Challenge",s={unversionedId:"guide/storage-provider/services/challenge",id:"guide/storage-provider/services/challenge",title:"Challenge",description:"It is always the first priority of any decentralized storage network to guarantee data integrity and availability.",source:"@site/docs/guide/storage-provider/services/challenge.md",sourceDirName:"guide/storage-provider/services",slug:"/guide/storage-provider/services/challenge",permalink:"/bnbgreenfield/docs/guide/storage-provider/services/challenge",draft:!1,editUrl:"https://github.com/RumeelHussainbnb/bnbgreenfield-docs/docs/guide/storage-provider/services/challenge.md",tags:[],version:"current",frontMatter:{title:"Challenge",order:10},sidebar:"guideSidebar",previous:{title:"Downloader",permalink:"/bnbgreenfield/docs/guide/storage-provider/services/downloader"},next:{title:"Garbage Collection",permalink:"/bnbgreenfield/docs/guide/storage-provider/services/gc"}},c={},o=[{value:"Overview",id:"overview",level:2},{value:"PieceKey Encoder",id:"piecekey-encoder",level:3},{value:"PieceStore Lib",id:"piecestore-lib",level:3},{value:"Integrity Hash Queryer",id:"integrity-hash-queryer",level:3},{value:"SP DB Lib",id:"sp-db-lib",level:3},{value:"Challenge Piece Workflow",id:"challenge-piece-workflow",level:2},{value:"protocol",id:"protocol",level:2},{value:"RPC Interface",id:"rpc-interface",level:3},{value:"SP DB Interface",id:"sp-db-interface",level:3}],d={toc:o};function g(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"challenge"},"Challenge"),(0,a.kt)("p",null,"It is always the first priority of any decentralized storage network to guarantee data integrity and availability.\nWe use data challenge instead of storage proof to get better HA. There will be some data challenges to random\npieces on greenfield chain continuously. And the SP, which stores the challenged piece, uses the challenge workflow\nto response. Each SP splits the object payload data to segments, and store segment data to piece store and store\nsegment checksum to SP DB."),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,(0,a.kt)("img",{src:i(42191).Z,width:"932",height:"578"})),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("i",null,"Challenge Architecture")),(0,a.kt)("h3",{id:"piecekey-encoder"},"PieceKey Encoder"),(0,a.kt)("p",null,"According to the challenge information, encode into segment piece key or ec piece key."),(0,a.kt)("h3",{id:"piecestore-lib"},"PieceStore Lib"),(0,a.kt)("p",null,"Access the underlying piece storage, which may be different types of storage, such as local files, remote object storage, etc."),(0,a.kt)("h3",{id:"integrity-hash-queryer"},"Integrity Hash Queryer"),(0,a.kt)("p",null,"Query the integrity hash and Piece Hash information stored in this SP for the corresponding Object."),(0,a.kt)("h3",{id:"sp-db-lib"},"SP DB Lib"),(0,a.kt)("p",null,"Lib for accessing the underlying SP DB currently supports MySQL and may adapt to more underlying indexing services in the future."),(0,a.kt)("h2",{id:"challenge-piece-workflow"},"Challenge Piece Workflow"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Receives the Challenge request from the Gateway."),(0,a.kt)("li",{parentName:"ul"},"Returns all piece data checksums and challenge piece data payload to the Gateway service.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Retrieve all piece data checksums from the SP DB."),(0,a.kt)("li",{parentName:"ul"},"Get the challenge piece data from the piece store.")))),(0,a.kt)("h2",{id:"protocol"},"protocol"),(0,a.kt)("h3",{id:"rpc-interface"},"RPC Interface"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-protobuf"},"// ChallengePieceRequest is request type for the ChallengePiece RPC method.\nmessage ChallengePieceRequest {\n  // object_id defines the challenge object id\n  uint64 object_id = 1;\n  // segment_idx defines the challenge segment idx\n  uint32 segment_idx = 2;\n  // redundancy_idx defines the challenge redundancy idx\n  // It is useless iff < 0, and as ec index iff > 0\n  int32 redundancy_idx = 3;\n}\n\n// ChallengePieceResponse is response type for the ChallengePiece RPC method.\nmessage ChallengePieceResponse {\n  // piece_data defines the challenge segment data\n  bytes piece_data = 1;\n  // integrity_hash defines the integrity hash of the challenge replicate payload\n  bytes integrity_hash = 2;\n  // piece_hash defines the checksum of the challenge segment\n  repeated bytes piece_hash = 3;\n}\n")),(0,a.kt)("h3",{id:"sp-db-interface"},"SP DB Interface"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-golang"},"// IntegrityMeta defines the payload integrity hash and piece checksum with objectID\ntype IntegrityMeta struct {\n    ObjectID      uint64\n    Checksum      [][]byte\n    IntegrityHash []byte\n    Signature     []byte\n}\n// ObjectIntegrity abstract object integrity interface\ntype ObjectIntegrity interface {\n    // GetObjectIntegrity get integrity meta info by object id\n    GetObjectIntegrity(objectID uint64) (*IntegrityMeta, error)\n}\n")))}g.isMDXComponent=!0},42191:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/07-SP-Challenge-31e561e2a13b4f665a2837a57927d2c4.jpg"}}]);