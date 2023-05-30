"use strict";(self.webpackChunkgreenfield_docs=self.webpackChunkgreenfield_docs||[]).push([[820],{49570:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>l,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var r=n(87462),s=(n(67294),n(3905));const i={title:"P2P",order:2},a="P2P",o={unversionedId:"guide/storage-provider/services/p2p",id:"guide/storage-provider/services/p2p",title:"P2P",description:"P2P is responsible for the interaction of control flow between SPs.",source:"@site/docs/guide/storage-provider/services/p2p.md",sourceDirName:"guide/storage-provider/services",slug:"/guide/storage-provider/services/p2p",permalink:"/bnbgreenfield-docs/docs/guide/storage-provider/services/p2p",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/guide/storage-provider/services/p2p.md",tags:[],version:"current",frontMatter:{title:"P2P",order:2},sidebar:"guideSidebar",previous:{title:"Manager",permalink:"/bnbgreenfield-docs/docs/guide/storage-provider/services/manager"},next:{title:"SPDB",permalink:"/bnbgreenfield-docs/docs/guide/storage-provider/services/spdb"}},p={},d=[{value:"Ping Service",id:"ping-service",level:2},{value:"GetReplicateApproval Service",id:"getreplicateapproval-service",level:2}],c={toc:d};function l(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"p2p"},"P2P"),(0,s.kt)("p",null,"P2P is responsible for the interaction of control flow between SPs."),(0,s.kt)("h2",{id:"ping-service"},"Ping Service"),(0,s.kt)("p",null,"SP abandoned the conventional p2p ping service, because the conventional ping service is managed and communicated in\nunits of p2p nodes, without considering the fairness between SPs, the SP's p2p service is more inclined to synchronize\nmessages to different SPs, instead of synchronous p2p nodes. For this purpose we have customized ping service."),(0,s.kt)("p",null,"The customized ping service implements dynamic update of p2p permanent nodes. As usual, permanent nodes should cover as\nmany SPs as possible, which is more decentralized, eg: get replicate approval request needs at least 6 or more replies\nfrom different SPs but p2p node are offline and replacement, which is an inevitable problem, If nodes belonging to the\nsame sp all fail and are replaced, then the sp will be unable to communicate, this requires dynamic updates permanent nodes."),(0,s.kt)("p",null,"The customized ping service also implements the pruning function of permanent nodes. For zombie nodes, pruning strategy\ntakes into account the information of the SP dimension, and uses a very conservative pruning strategy. Nodes are only\npruned if there are enough backups for one SP and multiple failed interactions, can try to keep each SP with enough nodes\nto try to connect, so that each sp has an equal opportunity to receive requests"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-protobuf"},"// Ping defines the heartbeat request between p2p nodes\nmessage Ping {\n  // sp_operator_address define sp operator public key\n  string sp_operator_address = 1;\n  // signature define the signature of sp sign the msg\n  bytes signature = 2;\n}\n\n// Node defines the p2p node info\nmessage Node {\n  // node_id defines the node id\n  string node_id = 1;\n  // multi_addr define the node multi addr\n  repeated string multi_addr = 2;\n}\n\n// Pong defines the heartbeat response between p2p nodes\nmessage Pong {\n  // nodes define the\n  repeated Node nodes = 1;\n  // sp_operator_address define sp operator public key\n  string sp_operator_address = 2;\n  // signature define the signature of sp sign the msg\n  bytes signature = 3;\n}\n\n")),(0,s.kt)("h2",{id:"getreplicateapproval-service"},"GetReplicateApproval Service"),(0,s.kt)("p",null,"rimary SP sends GetApprovalRequest to other SPs, asking if they are willing to serve as obeject's secondary SP through\nthe p2p GetReplicateApproval service. The GetReplicateApproval service offers GetReplicateApproval interface, the params\nincludes ObjectInfo is used to make decisions for other SPs whether they are willing to accept approval, expectedAccept\nexpectedAccept indicates that it can return after receiving the number of approvals, timeout means that it can return\nafter the timeout and has not received expectedAccept approvals in time."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-go"},"GetReplicateApproval(object *storagetypes.ObjectInfo, expectedAccept int, timeout int64) \n")),(0,s.kt)("p",null,"GetApprovalRequest includes in addition to the object info, the primary SP operator address that used to check whether\nit is a valid SP, and signature that generated by primary SP signing the request used to verify the request\nand SP operator address match."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-protobuf"},"// GetApprovalRequest defines the request of getting approval\nmessage GetApprovalRequest {\n  // object_info define the object info for getting approval\n  bnbchain.greenfield.storage.ObjectInfo object_info = 1;\n  // sp_operator_address define sp operator public key\n  string sp_operator_address = 2;\n  // signature define the signature of sp sign the msg\n  bytes signature = 4;\n}\n")),(0,s.kt)("p",null,"GetApprovalResponse additionally adds expired time if the SP ack approval, it will be given a valid deadline and\nrefused reason if the SP refuses the approval, will be given the reason."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-protobuf"},"// GetApprovalResponse defines the response of getting approval\nmessage GetApprovalResponse {\n  // object_info define the object info for getting approval\n  bnbchain.greenfield.storage.ObjectInfo object_info = 1;\n  // sp_operator_address define sp operator public key\n  string sp_operator_address = 2;\n  // expired_time defines the approval valid deadline\n  int64 expired_time = 3;\n  // refused_reason defines the reason of refusing\n  string refused_reason = 4;\n  // signature define the signature of sp sign the msg\n  bytes signature = 5;\n}\n")))}l.isMDXComponent=!0}}]);