"use strict";(self.webpackChunkgreenfield_docs=self.webpackChunkgreenfield_docs||[]).push([[1335],{40416:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>g,contentTitle:()=>u,default:()=>f,frontMatter:()=>h,metadata:()=>m,toc:()=>y});var a=s(87462),n=(s(67294),s(3905)),r=s(26389),i=s(94891),o=s(75190),c=s(47507),l=s(24310),d=s(63303),p=(s(75035),s(85162));const h={id:"upgraded-consensus-state",title:"UpgradedConsensusState queries the consensus state that will serve as a trusted kernel for the next version of this chain. It will only be stored at the last height of this chain. UpgradedConsensusState RPC not supported with legacy querier This rpc is deprecated now that IBC has its own replacement (https://github.com/cosmos/ibc-go/blob/2c880a22e9f9cc75f62b527ca94aa75ce1106001/proto/ibc/core/client/v1/query.proto#L54)",description:"UpgradedConsensusState queries the consensus state that will serve",sidebar_label:"UpgradedConsensusState",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"UpgradedConsensusState",responses:{200:{description:"A successful response.",content:{"*/*":{schema:{type:"object",properties:{upgraded_consensus_state:{type:"string",format:"byte",title:"Since: cosmos-sdk 0.43"}},description:"QueryUpgradedConsensusStateResponse is the response type for the Query/UpgradedConsensusState\nRPC method."}}}},default:{description:"An unexpected error response.",content:{"*/*":{schema:{type:"object",properties:{error:{type:"string"},code:{type:"integer",format:"int32"},message:{type:"string"},details:{type:"array",items:{type:"object",properties:{type_url:{type:"string"},value:{type:"string",format:"byte"}}}}}}}}}},parameters:[{name:"last_height",description:"last height of the current chain must be sent in request\nas this is the height under which next consensus state is stored",in:"path",required:!0,schema:{type:"string",format:"int64"}}],tags:["Query"],description:"UpgradedConsensusState queries the consensus state that will serve\nas a trusted kernel for the next version of this chain. It will only be\nstored at the last height of this chain.\nUpgradedConsensusState RPC not supported with legacy querier\nThis rpc is deprecated now that IBC has its own replacement\n(https://github.com/cosmos/ibc-go/blob/2c880a22e9f9cc75f62b527ca94aa75ce1106001/proto/ibc/core/client/v1/query.proto#L54)",method:"get",path:"/cosmos/upgrade/v1beta1/upgraded_consensus_state/{last_height}",info:{title:"Greenfield - gRPC Gateway docs",description:"A REST interface for state queries",version:"1.0.0"},postman:{name:"UpgradedConsensusState queries the consensus state that will serve\nas a trusted kernel for the next version of this chain. It will only be\nstored at the last height of this chain.\nUpgradedConsensusState RPC not supported with legacy querier\nThis rpc is deprecated now that IBC has its own replacement\n(https://github.com/cosmos/ibc-go/blob/2c880a22e9f9cc75f62b527ca94aa75ce1106001/proto/ibc/core/client/v1/query.proto#L54)",description:{type:"text/plain"},url:{path:["cosmos","upgrade","v1beta1","upgraded_consensus_state",":last_height"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) last height of the current chain must be sent in request\nas this is the height under which next consensus state is stored",type:"text/plain"},type:"any",value:"",key:"last_height"}]},header:[{key:"Accept",value:"*/*"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/greenfield-api/greenfield-grpc-gateway-docs",custom_edit_url:null},u=void 0,m={unversionedId:"greenfield-api/upgraded-consensus-state",id:"greenfield-api/upgraded-consensus-state",title:"UpgradedConsensusState queries the consensus state that will serve as a trusted kernel for the next version of this chain. It will only be stored at the last height of this chain. UpgradedConsensusState RPC not supported with legacy querier This rpc is deprecated now that IBC has its own replacement (https://github.com/cosmos/ibc-go/blob/2c880a22e9f9cc75f62b527ca94aa75ce1106001/proto/ibc/core/client/v1/query.proto#L54)",description:"UpgradedConsensusState queries the consensus state that will serve",source:"@site/docs/greenfield-api/upgraded-consensus-state.api.mdx",sourceDirName:"greenfield-api",slug:"/greenfield-api/upgraded-consensus-state",permalink:"/bnbgreenfield-docs/docs/greenfield-api/upgraded-consensus-state",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"upgraded-consensus-state",title:"UpgradedConsensusState queries the consensus state that will serve as a trusted kernel for the next version of this chain. It will only be stored at the last height of this chain. UpgradedConsensusState RPC not supported with legacy querier This rpc is deprecated now that IBC has its own replacement (https://github.com/cosmos/ibc-go/blob/2c880a22e9f9cc75f62b527ca94aa75ce1106001/proto/ibc/core/client/v1/query.proto#L54)",description:"UpgradedConsensusState queries the consensus state that will serve",sidebar_label:"UpgradedConsensusState",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"UpgradedConsensusState",responses:{200:{description:"A successful response.",content:{"*/*":{schema:{type:"object",properties:{upgraded_consensus_state:{type:"string",format:"byte",title:"Since: cosmos-sdk 0.43"}},description:"QueryUpgradedConsensusStateResponse is the response type for the Query/UpgradedConsensusState\nRPC method."}}}},default:{description:"An unexpected error response.",content:{"*/*":{schema:{type:"object",properties:{error:{type:"string"},code:{type:"integer",format:"int32"},message:{type:"string"},details:{type:"array",items:{type:"object",properties:{type_url:{type:"string"},value:{type:"string",format:"byte"}}}}}}}}}},parameters:[{name:"last_height",description:"last height of the current chain must be sent in request\nas this is the height under which next consensus state is stored",in:"path",required:!0,schema:{type:"string",format:"int64"}}],tags:["Query"],description:"UpgradedConsensusState queries the consensus state that will serve\nas a trusted kernel for the next version of this chain. It will only be\nstored at the last height of this chain.\nUpgradedConsensusState RPC not supported with legacy querier\nThis rpc is deprecated now that IBC has its own replacement\n(https://github.com/cosmos/ibc-go/blob/2c880a22e9f9cc75f62b527ca94aa75ce1106001/proto/ibc/core/client/v1/query.proto#L54)",method:"get",path:"/cosmos/upgrade/v1beta1/upgraded_consensus_state/{last_height}",info:{title:"Greenfield - gRPC Gateway docs",description:"A REST interface for state queries",version:"1.0.0"},postman:{name:"UpgradedConsensusState queries the consensus state that will serve\nas a trusted kernel for the next version of this chain. It will only be\nstored at the last height of this chain.\nUpgradedConsensusState RPC not supported with legacy querier\nThis rpc is deprecated now that IBC has its own replacement\n(https://github.com/cosmos/ibc-go/blob/2c880a22e9f9cc75f62b527ca94aa75ce1106001/proto/ibc/core/client/v1/query.proto#L54)",description:{type:"text/plain"},url:{path:["cosmos","upgrade","v1beta1","upgraded_consensus_state",":last_height"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) last height of the current chain must be sent in request\nas this is the height under which next consensus state is stored",type:"text/plain"},type:"any",value:"",key:"last_height"}]},header:[{key:"Accept",value:"*/*"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/greenfield-api/greenfield-grpc-gateway-docs",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"ModuleVersions",permalink:"/bnbgreenfield-docs/docs/greenfield-api/module-versions"},next:{title:"ABCI Query",permalink:"/bnbgreenfield-docs/docs/greenfield-api/abci-query"}},g={},y=[{value:"UpgradedConsensusState",id:"upgradedconsensusstate",level:2}],b={toc:y};function f(e){let{components:t,...s}=e;return(0,n.kt)("wrapper",(0,a.Z)({},b,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"upgradedconsensusstate"},"UpgradedConsensusState"),(0,n.kt)("p",null,"UpgradedConsensusState queries the consensus state that will serve\nas a trusted kernel for the next version of this chain. It will only be\nstored at the last height of this chain.\nUpgradedConsensusState RPC not supported with legacy querier\nThis rpc is deprecated now that IBC has its own replacement\n(",(0,n.kt)("a",{parentName:"p",href:"https://github.com/cosmos/ibc-go/blob/2c880a22e9f9cc75f62b527ca94aa75ce1106001/proto/ibc/core/client/v1/query.proto#L54"},"https://github.com/cosmos/ibc-go/blob/2c880a22e9f9cc75f62b527ca94aa75ce1106001/proto/ibc/core/client/v1/query.proto#L54"),")"),(0,n.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"Path Parameters")),(0,n.kt)("div",null,(0,n.kt)("ul",null,(0,n.kt)(o.Z,{className:"paramsItem",param:{name:"last_height",description:"last height of the current chain must be sent in request\nas this is the height under which next consensus state is stored",in:"path",required:!0,schema:{type:"string",format:"int64"}},mdxType:"ParamsItem"})))),(0,n.kt)("div",null,(0,n.kt)(r.Z,{mdxType:"ApiTabs"},(0,n.kt)(p.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"A successful response.")),(0,n.kt)("div",null,(0,n.kt)(i.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(p.Z,{label:"*/*",value:"*/*",mdxType:"TabItem"},(0,n.kt)(d.Z,{mdxType:"SchemaTabs"},(0,n.kt)(p.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(l.Z,{collapsible:!1,name:"upgraded_consensus_state",required:!1,schemaName:"byte",qualifierMessage:void 0,schema:{type:"string",format:"byte",title:"Since: cosmos-sdk 0.43"},mdxType:"SchemaItem"})))),(0,n.kt)(p.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(c.Z,{responseExample:'{\n  "upgraded_consensus_state": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,n.kt)(p.Z,{label:"default",value:"default",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"An unexpected error response.")),(0,n.kt)("div",null,(0,n.kt)(i.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(p.Z,{label:"*/*",value:"*/*",mdxType:"TabItem"},(0,n.kt)(d.Z,{mdxType:"SchemaTabs"},(0,n.kt)(p.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(l.Z,{collapsible:!1,name:"error",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!1,name:"code",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32"},mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,n.kt)("details",{style:{}},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"details"),(0,n.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,n.kt)("div",{style:{marginLeft:"1rem"}},(0,n.kt)("li",null,(0,n.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,n.kt)(l.Z,{collapsible:!1,name:"type_url",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!1,name:"value",required:!1,schemaName:"byte",qualifierMessage:void 0,schema:{type:"string",format:"byte"},mdxType:"SchemaItem"}),(0,n.kt)("li",null,(0,n.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,n.kt)(p.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(c.Z,{responseExample:'{\n  "error": "string",\n  "code": 0,\n  "message": "string",\n  "details": [\n    {\n      "type_url": "string",\n      "value": "string"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}f.isMDXComponent=!0}}]);