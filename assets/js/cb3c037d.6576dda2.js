"use strict";(self.webpackChunkgreenfield_docs=self.webpackChunkgreenfield_docs||[]).push([[4750],{46866:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var n=a(87462),s=(a(67294),a(3905));const i={title:"Data Storage",order:8},o=void 0,r={unversionedId:"guide/concept/data-storage",id:"guide/concept/data-storage",title:"Data Storage",description:"An object on the Greenfield is stored among multi-SPs like below, for example, 50MB:",source:"@site/docs/guide/concept/data-storage.md",sourceDirName:"guide/concept",slug:"/guide/concept/data-storage",permalink:"/bnbgreenfield/docs/guide/concept/data-storage",draft:!1,editUrl:"https://github.com/RumeelHussainbnb/bnbgreenfield/docs/guide/concept/data-storage.md",tags:[],version:"current",frontMatter:{title:"Data Storage",order:8},sidebar:"guideSidebar",previous:{title:"Transaction Lifecycle",permalink:"/bnbgreenfield/docs/guide/concept/transaction-lifecycle"},next:{title:"Overview",permalink:"/bnbgreenfield/docs/guide/greenfield-blockchain/overview"}},h={},c=[{value:"Segment",id:"segment",level:2},{value:"EC Chunk",id:"ec-chunk",level:2},{value:"Piece",id:"piece",level:2},{value:"Primary SP",id:"primary-sp",level:2},{value:"Secondary SP",id:"secondary-sp",level:2},{value:"Redundancy Strategy",id:"redundancy-strategy",level:2},{value:"Integrity Hash",id:"integrity-hash",level:2}],l={toc:c};function d(e){let{components:t,...i}=e;return(0,s.kt)("wrapper",(0,n.Z)({},l,i,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"An object on the Greenfield is stored among multi-SPs like below, for example, 50MB:"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"EC.png",src:a(45368).Z,width:"1300",height:"614"})),(0,s.kt)("p",null,"We will introduce some concepts about data storage before describing in detail."),(0,s.kt)("h2",{id:"segment"},"Segment"),(0,s.kt)("p",null,"Segment is the basic storage unit of an object. An object payload is composed of one\nor many segments in sequence. The segment size is globally configured on the Greenfield\nblockchain. The default segment size is 16MB.  For larger objects, the payload data will\nbe broken into many segments. If the object's size is less than 16MB, it has only one\nsegment and the segment size is the same as the object's size."),(0,s.kt)("p",null,"Please note the payload data of an object will be split into the same size segment\nbut the last segment, which is the actual size. For example, if one object has a size\n50MB, only the size of the last segment is 2 MB and the other segments' sizes are all 16MB."),(0,s.kt)("h2",{id:"ec-chunk"},"EC Chunk"),(0,s.kt)("p",null,"Erasure Code (EC) is introduced to get efficient data redundancy on Greenfield. Segment\nis the boundary to perform erasure encoding. Some EC chunks are generated by erasure\nencoding one segment at a time. EC strategy is globally configured on the Greenfield block\nchain. The default EC strategy is 4+2, 4 data chunks, and 2 parity chunks for one segment.\nThe data chunk size is \xbc of the segment. As one typical segment is 16M, one typical data chunk\nof EC is 4M."),(0,s.kt)("h2",{id:"piece"},"Piece"),(0,s.kt)("p",null,"Piece is the basic storage unit for backend storage on Greenfield. Each segment or EC chunk\ncan be regarded as one data piece. And the key for each piece is generated based on the\npolicy on the Greenfield chain."),(0,s.kt)("h2",{id:"primary-sp"},"Primary SP"),(0,s.kt)("p",null,"Each bucket on the Greenfield is bound with one SP, which is called primary SP. And the user\nneeds to select an SP as the primary SP when creating a bucket. For all the objects stored\nunder the bucket, primary SP will store one complete copy, all segments of the objects\u2019\npayload data. And only the primary SP serves users\u2019 read or download requests."),(0,s.kt)("h2",{id:"secondary-sp"},"Secondary SP"),(0,s.kt)("p",null,"EC chunks of an object payload data are stored on some SPs, which are called secondary SPs.\nEach secondary SP stores part of payload data, which is used for better data availability.\nThe object payload can be recovered from EC chunks."),(0,s.kt)("h2",{id:"redundancy-strategy"},"Redundancy Strategy"),(0,s.kt)("p",null,"Redundancy strategy defines how an object payload is stored among SPs, which is globally\nconfigured on the Greenfield blockchain. Below is the current strategy:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"The data stream of the file will be split into segments according to the granularity of the segment size.\nIf the size of the data is less than the segment size, it will be split according to the size of the data itself.\nThe default segment size is 16MB;"),(0,s.kt)("li",{parentName:"ul"},"Greenfield uses Reed-Solomon algorithm ",(0,s.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Reed%E2%80%93Solomon_error_correction"},"Reed-Solomon"),"\nas its EC strategy, the default data blocks are 4, and the default parity blocks are 2 ."),(0,s.kt)("li",{parentName:"ul"},"All the segment pieces of an object are stored on the Primary SP;"),(0,s.kt)("li",{parentName:"ul"},"After EC encoding with the segment, the EC encoding module will generate six EC chunk pieces.\nAll the EC chunk pieces of the segment will be stored to the six chosen secondary SPs.")),(0,s.kt)("p",null,"For example, when processing a 32MB file, the object is split into two segments. These two segments are stored in the primary storage provider, and each segment is encoded using erasure coding to generate six 4MB pieces. These six pieces are stored in six secondary storage providers in numerical order."),(0,s.kt)("h2",{id:"integrity-hash"},"Integrity Hash"),(0,s.kt)("p",null,"The integrity hashes include a root hash of the primary SP and several root hashes for each secondary SP which\nbased on the EC strategy. The number of secondary hashes is equal dataBlocks plus parityBlock\n(it is six for now). Each piece's hash is computed\nby using hash algorithm (default is sha256) on the data piece's content. The pieces' root hash is computed based\non all the pieces' hashes."),(0,s.kt)("p",null,"The calculation process can be represented as follows:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"// secondaryHashN represents the Integrity Hash calculated by the Nth secondary SP.\n// segmentN_pieceN represents the Nth piece of the Nth segment of the object after EC encoding\nIntegrityHashes = [primaryHash, secondaryHash1 ...secondaryHash6]\nprimaryHash := hash(hash(segment1)+hash(segment2)..+hash(segmentN))\nsecondaryHashN := hash(hash(segment1_pieceN)+hash(segment2_pieceN)..+hash(segmentN_pieceN))\n")),(0,s.kt)("p",null,"For example, when processing a 32MB file, we got two segments called segment1 and segment2.\nThe integrity hash of the primary SP is equal with hash(hash(segment1) + hash(segment2)).\nFor each secondary SP, it stored piece1 and piece2  which is the encoding  result by the segments.\nThe integrity hash of the first secondary SP is equal with hash(hash(segment1_piece1) + hash(segment2_piece1))."),(0,s.kt)("p",null,"Integrity hash is an important metadata of objects on the chain. During the process of creating an object, the integrity hash of each object is calculated and this information is recorded on the blockchain to ensure the accuracy of the data."))}d.isMDXComponent=!0},45368:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/10-SP-EC-a6d9a06707fe1498ae2406b1cf065e73.jpg"}}]);