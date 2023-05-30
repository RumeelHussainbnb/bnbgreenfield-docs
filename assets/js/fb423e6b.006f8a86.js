"use strict";(self.webpackChunkgreenfield_docs=self.webpackChunkgreenfield_docs||[]).push([[4142],{84456:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>g,contentTitle:()=>y,default:()=>h,frontMatter:()=>c,metadata:()=>u,toc:()=>f});var i=a(87462),s=(a(67294),a(3905)),r=a(26389),n=a(94891),l=a(75190),o=a(47507),m=a(24310),d=a(63303),p=(a(75035),a(85162));const c={id:"head-object-nft",title:"Queries a object with EIP712 standard metadata info",description:"Queries a object with EIP712 standard metadata info",sidebar_label:"Queries a object with EIP712 standard metadata info",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"HeadObjectNFT",responses:{200:{description:"A successful response.",content:{"*/*":{schema:{type:"object",properties:{meta_data:{type:"object",properties:{description:{type:"string",title:"description"},external_url:{type:"string",title:"externalUrl a link to external site to view NFT"},object_name:{type:"string",title:"name of object NFT"},image:{type:"string",title:"image is the link to image"},attributes:{type:"array",items:{type:"object",properties:{trait_type:{type:"string"},value:{type:"string"}}},title:"attributes"}}}}}}}},default:{description:"An unexpected error response.",content:{"*/*":{schema:{type:"object",properties:{error:{type:"string"},code:{type:"integer",format:"int32"},message:{type:"string"},details:{type:"array",items:{type:"object",properties:{type_url:{type:"string"},value:{type:"string",format:"byte"}}}}}}}}}},parameters:[{name:"token_id",in:"path",required:!0,schema:{type:"string"}}],tags:["Query"],description:"Queries a object with EIP712 standard metadata info",method:"get",path:"/greenfield/storage/head_object_nft/{token_id}",info:{title:"Greenfield - gRPC Gateway docs",description:"A REST interface for state queries",version:"1.0.0"},postman:{name:"Queries a object with EIP712 standard metadata info",description:{type:"text/plain"},url:{path:["greenfield","storage","head_object_nft",":token_id"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"token_id"}]},header:[{key:"Accept",value:"*/*"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/greenfield-api/greenfield-grpc-gateway-docs",custom_edit_url:null},y=void 0,u={unversionedId:"greenfield-api/head-object-nft",id:"greenfield-api/head-object-nft",title:"Queries a object with EIP712 standard metadata info",description:"Queries a object with EIP712 standard metadata info",source:"@site/docs/greenfield-api/head-object-nft.api.mdx",sourceDirName:"greenfield-api",slug:"/greenfield-api/head-object-nft",permalink:"/bnbgreenfield-docs/docs/greenfield-api/head-object-nft",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"head-object-nft",title:"Queries a object with EIP712 standard metadata info",description:"Queries a object with EIP712 standard metadata info",sidebar_label:"Queries a object with EIP712 standard metadata info",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"HeadObjectNFT",responses:{200:{description:"A successful response.",content:{"*/*":{schema:{type:"object",properties:{meta_data:{type:"object",properties:{description:{type:"string",title:"description"},external_url:{type:"string",title:"externalUrl a link to external site to view NFT"},object_name:{type:"string",title:"name of object NFT"},image:{type:"string",title:"image is the link to image"},attributes:{type:"array",items:{type:"object",properties:{trait_type:{type:"string"},value:{type:"string"}}},title:"attributes"}}}}}}}},default:{description:"An unexpected error response.",content:{"*/*":{schema:{type:"object",properties:{error:{type:"string"},code:{type:"integer",format:"int32"},message:{type:"string"},details:{type:"array",items:{type:"object",properties:{type_url:{type:"string"},value:{type:"string",format:"byte"}}}}}}}}}},parameters:[{name:"token_id",in:"path",required:!0,schema:{type:"string"}}],tags:["Query"],description:"Queries a object with EIP712 standard metadata info",method:"get",path:"/greenfield/storage/head_object_nft/{token_id}",info:{title:"Greenfield - gRPC Gateway docs",description:"A REST interface for state queries",version:"1.0.0"},postman:{name:"Queries a object with EIP712 standard metadata info",description:{type:"text/plain"},url:{path:["greenfield","storage","head_object_nft",":token_id"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"token_id"}]},header:[{key:"Accept",value:"*/*"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/greenfield-api/greenfield-grpc-gateway-docs",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Queries an object by id",permalink:"/bnbgreenfield-docs/docs/greenfield-api/head-object-by-id"},next:{title:"ListBuckets",permalink:"/bnbgreenfield-docs/docs/greenfield-api/list-buckets"}},g={},f=[{value:"Queries a object with EIP712 standard metadata info",id:"queries-a-object-with-eip712-standard-metadata-info",level:2}],b={toc:f};function h(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,i.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"queries-a-object-with-eip712-standard-metadata-info"},"Queries a object with EIP712 standard metadata info"),(0,s.kt)("p",null,"Queries a object with EIP712 standard metadata info"),(0,s.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Path Parameters")),(0,s.kt)("div",null,(0,s.kt)("ul",null,(0,s.kt)(l.Z,{className:"paramsItem",param:{name:"token_id",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,s.kt)("div",null,(0,s.kt)(r.Z,{mdxType:"ApiTabs"},(0,s.kt)(p.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"A successful response.")),(0,s.kt)("div",null,(0,s.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(p.Z,{label:"*/*",value:"*/*",mdxType:"TabItem"},(0,s.kt)(d.Z,{mdxType:"SchemaTabs"},(0,s.kt)(p.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(m.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"meta_data"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(m.Z,{collapsible:!1,name:"description",required:!1,schemaName:"description",qualifierMessage:void 0,schema:{type:"string",title:"description"},mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"external_url",required:!1,schemaName:"externalUrl a link to external site to view NFT",qualifierMessage:void 0,schema:{type:"string",title:"externalUrl a link to external site to view NFT"},mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"object_name",required:!1,schemaName:"name of object NFT",qualifierMessage:void 0,schema:{type:"string",title:"name of object NFT"},mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"image",required:!1,schemaName:"image is the link to image",qualifierMessage:void 0,schema:{type:"string",title:"image is the link to image"},mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"attributes"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,s.kt)(m.Z,{collapsible:!1,name:"trait_type",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"value",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))))))))),(0,s.kt)(p.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(o.Z,{responseExample:'{\n  "meta_data": {\n    "description": "string",\n    "external_url": "string",\n    "object_name": "string",\n    "image": "string",\n    "attributes": [\n      {\n        "trait_type": "string",\n        "value": "string"\n      }\n    ]\n  }\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,s.kt)(p.Z,{label:"default",value:"default",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"An unexpected error response.")),(0,s.kt)("div",null,(0,s.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(p.Z,{label:"*/*",value:"*/*",mdxType:"TabItem"},(0,s.kt)(d.Z,{mdxType:"SchemaTabs"},(0,s.kt)(p.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(m.Z,{collapsible:!1,name:"error",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"code",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32"},mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"details"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,s.kt)(m.Z,{collapsible:!1,name:"type_url",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(m.Z,{collapsible:!1,name:"value",required:!1,schemaName:"byte",qualifierMessage:void 0,schema:{type:"string",format:"byte"},mdxType:"SchemaItem"}),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,s.kt)(p.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(o.Z,{responseExample:'{\n  "error": "string",\n  "code": 0,\n  "message": "string",\n  "details": [\n    {\n      "type_url": "string",\n      "value": "string"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}h.isMDXComponent=!0}}]);