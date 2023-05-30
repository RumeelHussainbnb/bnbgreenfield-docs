"use strict";(self.webpackChunkgreenfield_docs=self.webpackChunkgreenfield_docs||[]).push([[2693],{52162:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>y,contentTitle:()=>g,default:()=>v,frontMatter:()=>m,metadata:()=>u,toc:()=>f});var r=s(87462),i=(s(67294),s(3905)),a=s(26389),o=s(94891),d=s(75190),n=s(47507),p=s(24310),l=s(63303),c=(s(75035),s(85162));const m={id:"storage-provider",title:"Queries a storage provider with specify address",description:"Queries a storage provider with specify address",sidebar_label:"StorageProvider",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"StorageProvider",responses:{200:{description:"A successful response.",content:{"*/*":{schema:{type:"object",properties:{storageProvider:{type:"object",properties:{operator_address:{type:"string",description:"operator_address defines the account address of the storage provider's operator; It also is the unique index key of sp."},funding_address:{type:"string",description:"funding_address defines one of the storage provider's accounts which is used to deposit and reward."},seal_address:{type:"string",title:"seal_address defines one of the storage provider's accounts which is used to SealObject"},approval_address:{type:"string",title:"approval_address defines one of the storage provider's accounts which is used to approve use's createBucket/createObject request"},gc_address:{type:"string",description:"gc_address defines one of the storage provider's accounts which is used for gc purpose."},total_deposit:{type:"string",description:"total_deposit defines the number of tokens deposited by this storage provider for staking."},status:{title:"status defines the current service status of this storage provider",type:"string",enum:["STATUS_IN_SERVICE","STATUS_IN_JAILED","STATUS_GRACEFUL_EXITING","STATUS_OUT_OF_SERVICE"],default:"STATUS_IN_SERVICE",description:"Status is the status of a storage provider."},endpoint:{type:"string",title:"endpoint define the storage provider's network service address"},description:{description:"description defines the description terms for the storage provider.",type:"object",properties:{moniker:{type:"string",title:"moniker defines a human-readable name for the storage provider"},identity:{type:"string",description:"identity defines an optional identity signature (ex. UPort or Keybase)."},website:{type:"string",description:"website defines an optional website link."},security_contact:{type:"string",description:"security_contact defines an optional email for security contact."},details:{type:"string",description:"details define other optional details."}}}},title:"StorageProvider defines the meta info of storage provider"}}}}}},default:{description:"An unexpected error response.",content:{"*/*":{schema:{type:"object",properties:{error:{type:"string"},code:{type:"integer",format:"int32"},message:{type:"string"},details:{type:"array",items:{type:"object",properties:{type_url:{type:"string"},value:{type:"string",format:"byte"}}}}}}}}}},parameters:[{name:"spAddress",in:"path",required:!0,schema:{type:"string"}}],tags:["Query"],description:"Queries a storage provider with specify address",method:"get",path:"/greenfield/storage_provider/{spAddress}",info:{title:"Greenfield - gRPC Gateway docs",description:"A REST interface for state queries",version:"1.0.0"},postman:{name:"Queries a storage provider with specify address",description:{type:"text/plain"},url:{path:["greenfield","storage_provider",":spAddress"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"spAddress"}]},header:[{key:"Accept",value:"*/*"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/greenfield-api/greenfield-grpc-gateway-docs",custom_edit_url:null},g=void 0,u={unversionedId:"greenfield-api/storage-provider",id:"greenfield-api/storage-provider",title:"Queries a storage provider with specify address",description:"Queries a storage provider with specify address",source:"@site/docs/greenfield-api/storage-provider.api.mdx",sourceDirName:"greenfield-api",slug:"/greenfield-api/storage-provider",permalink:"/bnbgreenfield-docs/docs/greenfield-api/storage-provider",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"storage-provider",title:"Queries a storage provider with specify address",description:"Queries a storage provider with specify address",sidebar_label:"StorageProvider",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"StorageProvider",responses:{200:{description:"A successful response.",content:{"*/*":{schema:{type:"object",properties:{storageProvider:{type:"object",properties:{operator_address:{type:"string",description:"operator_address defines the account address of the storage provider's operator; It also is the unique index key of sp."},funding_address:{type:"string",description:"funding_address defines one of the storage provider's accounts which is used to deposit and reward."},seal_address:{type:"string",title:"seal_address defines one of the storage provider's accounts which is used to SealObject"},approval_address:{type:"string",title:"approval_address defines one of the storage provider's accounts which is used to approve use's createBucket/createObject request"},gc_address:{type:"string",description:"gc_address defines one of the storage provider's accounts which is used for gc purpose."},total_deposit:{type:"string",description:"total_deposit defines the number of tokens deposited by this storage provider for staking."},status:{title:"status defines the current service status of this storage provider",type:"string",enum:["STATUS_IN_SERVICE","STATUS_IN_JAILED","STATUS_GRACEFUL_EXITING","STATUS_OUT_OF_SERVICE"],default:"STATUS_IN_SERVICE",description:"Status is the status of a storage provider."},endpoint:{type:"string",title:"endpoint define the storage provider's network service address"},description:{description:"description defines the description terms for the storage provider.",type:"object",properties:{moniker:{type:"string",title:"moniker defines a human-readable name for the storage provider"},identity:{type:"string",description:"identity defines an optional identity signature (ex. UPort or Keybase)."},website:{type:"string",description:"website defines an optional website link."},security_contact:{type:"string",description:"security_contact defines an optional email for security contact."},details:{type:"string",description:"details define other optional details."}}}},title:"StorageProvider defines the meta info of storage provider"}}}}}},default:{description:"An unexpected error response.",content:{"*/*":{schema:{type:"object",properties:{error:{type:"string"},code:{type:"integer",format:"int32"},message:{type:"string"},details:{type:"array",items:{type:"object",properties:{type_url:{type:"string"},value:{type:"string",format:"byte"}}}}}}}}}},parameters:[{name:"spAddress",in:"path",required:!0,schema:{type:"string"}}],tags:["Query"],description:"Queries a storage provider with specify address",method:"get",path:"/greenfield/storage_provider/{spAddress}",info:{title:"Greenfield - gRPC Gateway docs",description:"A REST interface for state queries",version:"1.0.0"},postman:{name:"Queries a storage provider with specify address",description:{type:"text/plain"},url:{path:["greenfield","storage_provider",":spAddress"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"spAddress"}]},header:[{key:"Accept",value:"*/*"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/greenfield-api/greenfield-grpc-gateway-docs",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"SpParams",permalink:"/bnbgreenfield-docs/docs/greenfield-api/sp-params"},next:{title:"StorageProviders",permalink:"/bnbgreenfield-docs/docs/greenfield-api/storage-providers"}},y={},f=[{value:"StorageProvider",id:"storageprovider",level:2}],h={toc:f};function v(e){let{components:t,...s}=e;return(0,i.kt)("wrapper",(0,r.Z)({},h,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"storageprovider"},"StorageProvider"),(0,i.kt)("p",null,"Queries a storage provider with specify address"),(0,i.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"Path Parameters")),(0,i.kt)("div",null,(0,i.kt)("ul",null,(0,i.kt)(d.Z,{className:"paramsItem",param:{name:"spAddress",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,i.kt)("div",null,(0,i.kt)(a.Z,{mdxType:"ApiTabs"},(0,i.kt)(c.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"A successful response.")),(0,i.kt)("div",null,(0,i.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(c.Z,{label:"*/*",value:"*/*",mdxType:"TabItem"},(0,i.kt)(l.Z,{mdxType:"SchemaTabs"},(0,i.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"storageProvider"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(p.Z,{collapsible:!1,name:"operator_address",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"operator_address defines the account address of the storage provider's operator; It also is the unique index key of sp."},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"funding_address",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"funding_address defines one of the storage provider's accounts which is used to deposit and reward."},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"seal_address",required:!1,schemaName:"seal_address defines one of the storage provider's accounts which is used to SealObject",qualifierMessage:void 0,schema:{type:"string",title:"seal_address defines one of the storage provider's accounts which is used to SealObject"},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"approval_address",required:!1,schemaName:"approval_address defines one of the storage provider's accounts which is used to approve use's createBucket/createObject request",qualifierMessage:void 0,schema:{type:"string",title:"approval_address defines one of the storage provider's accounts which is used to approve use's createBucket/createObject request"},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"gc_address",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"gc_address defines one of the storage provider's accounts which is used for gc purpose."},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"total_deposit",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"total_deposit defines the number of tokens deposited by this storage provider for staking."},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"status",required:!1,schemaName:"status defines the current service status of this storage provider",qualifierMessage:"**Possible values:** [`STATUS_IN_SERVICE`, `STATUS_IN_JAILED`, `STATUS_GRACEFUL_EXITING`, `STATUS_OUT_OF_SERVICE`]",schema:{title:"status defines the current service status of this storage provider",type:"string",enum:["STATUS_IN_SERVICE","STATUS_IN_JAILED","STATUS_GRACEFUL_EXITING","STATUS_OUT_OF_SERVICE"],default:"STATUS_IN_SERVICE",description:"Status is the status of a storage provider."},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"endpoint",required:!1,schemaName:"endpoint define the storage provider's network service address",qualifierMessage:void 0,schema:{type:"string",title:"endpoint define the storage provider's network service address"},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"description"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,i.kt)("p",null,"description defines the description terms for the storage provider.")),(0,i.kt)(p.Z,{collapsible:!1,name:"moniker",required:!1,schemaName:"moniker defines a human-readable name for the storage provider",qualifierMessage:void 0,schema:{type:"string",title:"moniker defines a human-readable name for the storage provider"},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"identity",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"identity defines an optional identity signature (ex. UPort or Keybase)."},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"website",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"website defines an optional website link."},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"security_contact",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"security_contact defines an optional email for security contact."},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"details",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"details define other optional details."},mdxType:"SchemaItem"})))))))))),(0,i.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(n.Z,{responseExample:'{\n  "storageProvider": {\n    "operator_address": "string",\n    "funding_address": "string",\n    "seal_address": "string",\n    "approval_address": "string",\n    "gc_address": "string",\n    "total_deposit": "string",\n    "status": "STATUS_IN_SERVICE",\n    "endpoint": "string",\n    "description": {\n      "moniker": "string",\n      "identity": "string",\n      "website": "string",\n      "security_contact": "string",\n      "details": "string"\n    }\n  }\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,i.kt)(c.Z,{label:"default",value:"default",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"An unexpected error response.")),(0,i.kt)("div",null,(0,i.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(c.Z,{label:"*/*",value:"*/*",mdxType:"TabItem"},(0,i.kt)(l.Z,{mdxType:"SchemaTabs"},(0,i.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(p.Z,{collapsible:!1,name:"error",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"code",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32"},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"details"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)("li",null,(0,i.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,i.kt)(p.Z,{collapsible:!1,name:"type_url",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(p.Z,{collapsible:!1,name:"value",required:!1,schemaName:"byte",qualifierMessage:void 0,schema:{type:"string",format:"byte"},mdxType:"SchemaItem"}),(0,i.kt)("li",null,(0,i.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,i.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(n.Z,{responseExample:'{\n  "error": "string",\n  "code": 0,\n  "message": "string",\n  "details": [\n    {\n      "type_url": "string",\n      "value": "string"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}v.isMDXComponent=!0}}]);