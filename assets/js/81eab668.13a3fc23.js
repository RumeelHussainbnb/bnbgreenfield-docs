"use strict";(self.webpackChunkgreenfield_docs=self.webpackChunkgreenfield_docs||[]).push([[8228],{8326:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>y,contentTitle:()=>d,default:()=>f,frontMatter:()=>c,metadata:()=>u,toc:()=>g});var i=o(87462),n=(o(67294),o(3905)),s=o(26389),m=o(94891),a=(o(75190),o(47507)),l=o(24310),r=o(63303),p=(o(75035),o(85162));const c={id:"community-pool",title:"CommunityPool queries the community pool coins.",description:"CommunityPool queries the community pool coins.",sidebar_label:"Community Pool Queries",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"CommunityPool",responses:{200:{description:"A successful response.",content:{"*/*":{schema:{type:"object",properties:{pool:{type:"array",items:{type:"object",properties:{denom:{type:"string"},amount:{type:"string"}},description:"DecCoin defines a token with a denomination and a decimal amount.\n\nNOTE: The amount field is an Dec which implements the custom method\nsignatures required by gogoproto."},description:"pool defines community pool's coins."}},description:"QueryCommunityPoolResponse is the response type for the Query/CommunityPool\nRPC method."}}}},default:{description:"An unexpected error response.",content:{"*/*":{schema:{type:"object",properties:{error:{type:"string"},code:{type:"integer",format:"int32"},message:{type:"string"},details:{type:"array",items:{type:"object",properties:{type_url:{type:"string"},value:{type:"string",format:"byte"}}}}}}}}}},tags:["Query"],description:"CommunityPool queries the community pool coins.",method:"get",path:"/cosmos/distribution/v1beta1/community_pool",info:{title:"Greenfield - gRPC Gateway docs",description:"A REST interface for state queries",version:"1.0.0"},postman:{name:"CommunityPool queries the community pool coins.",description:{type:"text/plain"},url:{path:["cosmos","distribution","v1beta1","community_pool"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"*/*"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/greenfield-api/greenfield-grpc-gateway-docs",custom_edit_url:null},d=void 0,u={unversionedId:"greenfield-api/community-pool",id:"greenfield-api/community-pool",title:"CommunityPool queries the community pool coins.",description:"CommunityPool queries the community pool coins.",source:"@site/docs/greenfield-api/community-pool.api.mdx",sourceDirName:"greenfield-api",slug:"/greenfield-api/community-pool",permalink:"/bnbgreenfield/docs/greenfield-api/community-pool",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"community-pool",title:"CommunityPool queries the community pool coins.",description:"CommunityPool queries the community pool coins.",sidebar_label:"Community Pool Queries",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"CommunityPool",responses:{200:{description:"A successful response.",content:{"*/*":{schema:{type:"object",properties:{pool:{type:"array",items:{type:"object",properties:{denom:{type:"string"},amount:{type:"string"}},description:"DecCoin defines a token with a denomination and a decimal amount.\n\nNOTE: The amount field is an Dec which implements the custom method\nsignatures required by gogoproto."},description:"pool defines community pool's coins."}},description:"QueryCommunityPoolResponse is the response type for the Query/CommunityPool\nRPC method."}}}},default:{description:"An unexpected error response.",content:{"*/*":{schema:{type:"object",properties:{error:{type:"string"},code:{type:"integer",format:"int32"},message:{type:"string"},details:{type:"array",items:{type:"object",properties:{type_url:{type:"string"},value:{type:"string",format:"byte"}}}}}}}}}},tags:["Query"],description:"CommunityPool queries the community pool coins.",method:"get",path:"/cosmos/distribution/v1beta1/community_pool",info:{title:"Greenfield - gRPC Gateway docs",description:"A REST interface for state queries",version:"1.0.0"},postman:{name:"CommunityPool queries the community pool coins.",description:{type:"text/plain"},url:{path:["cosmos","distribution","v1beta1","community_pool"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"*/*"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/greenfield-api/greenfield-grpc-gateway-docs",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"SendSequence",permalink:"/bnbgreenfield/docs/greenfield-api/send-sequence"},next:{title:"DelegationTotalRewards",permalink:"/bnbgreenfield/docs/greenfield-api/delegation-total-rewards"}},y={},g=[{value:"Community Pool",id:"community-pool",level:2}],h={toc:g};function f(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,i.Z)({},h,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"community-pool"},"Community Pool"),(0,n.kt)("p",null,"CommunityPool queries the community pool coins."),(0,n.kt)("div",null,(0,n.kt)(s.Z,{mdxType:"ApiTabs"},(0,n.kt)(p.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"A successful response.")),(0,n.kt)("div",null,(0,n.kt)(m.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(p.Z,{label:"*/*",value:"*/*",mdxType:"TabItem"},(0,n.kt)(r.Z,{mdxType:"SchemaTabs"},(0,n.kt)(p.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,n.kt)("details",{style:{}},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"pool"),(0,n.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,n.kt)("div",{style:{marginLeft:"1rem"}},(0,n.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,n.kt)("p",null,"pool defines community pool's coins.")),(0,n.kt)("li",null,(0,n.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,n.kt)(l.Z,{collapsible:!1,name:"denom",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!1,name:"amount",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,n.kt)("li",null,(0,n.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,n.kt)(p.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(a.Z,{responseExample:'{\n  "pool": [\n    {\n      "denom": "string",\n      "amount": "string"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,n.kt)(p.Z,{label:"default",value:"default",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"An unexpected error response.")),(0,n.kt)("div",null,(0,n.kt)(m.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(p.Z,{label:"*/*",value:"*/*",mdxType:"TabItem"},(0,n.kt)(r.Z,{mdxType:"SchemaTabs"},(0,n.kt)(p.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(l.Z,{collapsible:!1,name:"error",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!1,name:"code",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32"},mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,n.kt)("details",{style:{}},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"details"),(0,n.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,n.kt)("div",{style:{marginLeft:"1rem"}},(0,n.kt)("li",null,(0,n.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,n.kt)(l.Z,{collapsible:!1,name:"type_url",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!1,name:"value",required:!1,schemaName:"byte",qualifierMessage:void 0,schema:{type:"string",format:"byte"},mdxType:"SchemaItem"}),(0,n.kt)("li",null,(0,n.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,n.kt)(p.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(a.Z,{responseExample:'{\n  "error": "string",\n  "code": 0,\n  "message": "string",\n  "details": [\n    {\n      "type_url": "string",\n      "value": "string"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}f.isMDXComponent=!0}}]);