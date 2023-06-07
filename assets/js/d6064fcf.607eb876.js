"use strict";(self.webpackChunkgreenfield_docs=self.webpackChunkgreenfield_docs||[]).push([[2618],{71213:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>h,contentTitle:()=>p,default:()=>y,frontMatter:()=>d,metadata:()=>u,toc:()=>f});var a=r(87462),i=(r(67294),r(3905)),s=r(26389),n=r(94891),o=(r(75190),r(47507)),m=r(24310),l=r(63303),c=(r(75035),r(85162));const d={id:"storage-params",title:"Parameters queries the parameters of the module.",description:"Parameters queries the parameters of the module.",sidebar_label:"StorageParams",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"StorageParams",responses:{200:{description:"A successful response.",content:{"*/*":{schema:{type:"object",properties:{params:{description:"params holds all the parameters of this module.",type:"object",properties:{max_segment_size:{type:"string",format:"uint64",title:"max_segment_size is the maximum size of a segment. default: 16M"},redundant_data_chunk_num:{type:"integer",format:"int64",title:"redundant_data_check_num is the num of data chunks of EC redundancy algorithm"},redundant_parity_chunk_num:{type:"integer",format:"int64",title:"redundant_data_check_num is the num of parity chunks of EC redundancy algorithm"},max_payload_size:{type:"string",format:"uint64",title:"max_payload_size is the maximum size of the payload, default: 2G"},min_charge_size:{type:"string",format:"uint64",title:"min_charge_size is the minimum charge size of the payload, objects smaller than this size will be charged as this size"},mirror_bucket_relayer_fee:{type:"string",title:"relayer fee for the mirror bucket tx"},mirror_bucket_ack_relayer_fee:{type:"string",title:"relayer fee for the ACK or FAIL_ACK package of the mirror bucket tx"},mirror_object_relayer_fee:{type:"string",title:"relayer fee for the mirror object tx"},mirror_object_ack_relayer_fee:{type:"string",title:"Relayer fee for the ACK or FAIL_ACK package of the mirror object tx"},mirror_group_relayer_fee:{type:"string",title:"relayer fee for the mirror object tx"},mirror_group_ack_relayer_fee:{type:"string",title:"Relayer fee for the ACK or FAIL_ACK package of the mirror object tx"},max_buckets_per_account:{type:"integer",format:"int64",title:"The maximum number of buckets that can be created per account"},discontinue_counting_window:{type:"string",format:"uint64",title:"The window to count the discontinued objects or buckets"},discontinue_object_max:{type:"string",format:"uint64",title:"The max objects can be requested in a window"},discontinue_bucket_max:{type:"string",format:"uint64",title:"The max buckets can be requested in a window"},discontinue_confirm_period:{type:"string",format:"int64",title:"The object will be deleted after the confirm period in seconds"},discontinue_deletion_max:{type:"string",format:"uint64",title:"The max delete objects in each end block"}}}},description:"QueryParamsResponse is response type for the Query/Params RPC method."}}}},default:{description:"An unexpected error response.",content:{"*/*":{schema:{type:"object",properties:{error:{type:"string"},code:{type:"integer",format:"int32"},message:{type:"string"},details:{type:"array",items:{type:"object",properties:{type_url:{type:"string"},value:{type:"string",format:"byte"}}}}}}}}}},tags:["Query"],description:"Parameters queries the parameters of the module.",method:"get",path:"/greenfield/storage/params",info:{title:"Greenfield - gRPC Gateway docs",description:"A REST interface for state queries",version:"1.0.0"},postman:{name:"Parameters queries the parameters of the module.",description:{type:"text/plain"},url:{path:["greenfield","storage","params"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"*/*"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/greenfield-api/greenfield-grpc-gateway-docs",custom_edit_url:null},p=void 0,u={unversionedId:"greenfield-api/storage-params",id:"greenfield-api/storage-params",title:"Parameters queries the parameters of the module.",description:"Parameters queries the parameters of the module.",source:"@site/docs/greenfield-api/storage-params.api.mdx",sourceDirName:"greenfield-api",slug:"/greenfield-api/storage-params",permalink:"/bnbgreenfield/docs/greenfield-api/storage-params",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"storage-params",title:"Parameters queries the parameters of the module.",description:"Parameters queries the parameters of the module.",sidebar_label:"StorageParams",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"StorageParams",responses:{200:{description:"A successful response.",content:{"*/*":{schema:{type:"object",properties:{params:{description:"params holds all the parameters of this module.",type:"object",properties:{max_segment_size:{type:"string",format:"uint64",title:"max_segment_size is the maximum size of a segment. default: 16M"},redundant_data_chunk_num:{type:"integer",format:"int64",title:"redundant_data_check_num is the num of data chunks of EC redundancy algorithm"},redundant_parity_chunk_num:{type:"integer",format:"int64",title:"redundant_data_check_num is the num of parity chunks of EC redundancy algorithm"},max_payload_size:{type:"string",format:"uint64",title:"max_payload_size is the maximum size of the payload, default: 2G"},min_charge_size:{type:"string",format:"uint64",title:"min_charge_size is the minimum charge size of the payload, objects smaller than this size will be charged as this size"},mirror_bucket_relayer_fee:{type:"string",title:"relayer fee for the mirror bucket tx"},mirror_bucket_ack_relayer_fee:{type:"string",title:"relayer fee for the ACK or FAIL_ACK package of the mirror bucket tx"},mirror_object_relayer_fee:{type:"string",title:"relayer fee for the mirror object tx"},mirror_object_ack_relayer_fee:{type:"string",title:"Relayer fee for the ACK or FAIL_ACK package of the mirror object tx"},mirror_group_relayer_fee:{type:"string",title:"relayer fee for the mirror object tx"},mirror_group_ack_relayer_fee:{type:"string",title:"Relayer fee for the ACK or FAIL_ACK package of the mirror object tx"},max_buckets_per_account:{type:"integer",format:"int64",title:"The maximum number of buckets that can be created per account"},discontinue_counting_window:{type:"string",format:"uint64",title:"The window to count the discontinued objects or buckets"},discontinue_object_max:{type:"string",format:"uint64",title:"The max objects can be requested in a window"},discontinue_bucket_max:{type:"string",format:"uint64",title:"The max buckets can be requested in a window"},discontinue_confirm_period:{type:"string",format:"int64",title:"The object will be deleted after the confirm period in seconds"},discontinue_deletion_max:{type:"string",format:"uint64",title:"The max delete objects in each end block"}}}},description:"QueryParamsResponse is response type for the Query/Params RPC method."}}}},default:{description:"An unexpected error response.",content:{"*/*":{schema:{type:"object",properties:{error:{type:"string"},code:{type:"integer",format:"int32"},message:{type:"string"},details:{type:"array",items:{type:"object",properties:{type_url:{type:"string"},value:{type:"string",format:"byte"}}}}}}}}}},tags:["Query"],description:"Parameters queries the parameters of the module.",method:"get",path:"/greenfield/storage/params",info:{title:"Greenfield - gRPC Gateway docs",description:"A REST interface for state queries",version:"1.0.0"},postman:{name:"Parameters queries the parameters of the module.",description:{type:"text/plain"},url:{path:["greenfield","storage","params"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"*/*"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/greenfield-api/greenfield-grpc-gateway-docs",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"ListObjectsByBucketId",permalink:"/bnbgreenfield/docs/greenfield-api/list-objects-by-bucket-id"},next:{title:"QueryPolicyForAccount",permalink:"/bnbgreenfield/docs/greenfield-api/query-policy-for-account"}},h={},f=[{value:"StorageParams",id:"storageparams",level:2}],_={toc:f};function y(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},_,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"storageparams"},"StorageParams"),(0,i.kt)("p",null,"Parameters queries the parameters of the module."),(0,i.kt)("div",null,(0,i.kt)(s.Z,{mdxType:"ApiTabs"},(0,i.kt)(c.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"A successful response.")),(0,i.kt)("div",null,(0,i.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(c.Z,{label:"*/*",value:"*/*",mdxType:"TabItem"},(0,i.kt)(l.Z,{mdxType:"SchemaTabs"},(0,i.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(m.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"params"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,i.kt)("p",null,"params holds all the parameters of this module.")),(0,i.kt)(m.Z,{collapsible:!1,name:"max_segment_size",required:!1,schemaName:"uint64",qualifierMessage:void 0,schema:{type:"string",format:"uint64",title:"max_segment_size is the maximum size of a segment. default: 16M"},mdxType:"SchemaItem"}),(0,i.kt)(m.Z,{collapsible:!1,name:"redundant_data_chunk_num",required:!1,schemaName:"int64",qualifierMessage:void 0,schema:{type:"integer",format:"int64",title:"redundant_data_check_num is the num of data chunks of EC redundancy algorithm"},mdxType:"SchemaItem"}),(0,i.kt)(m.Z,{collapsible:!1,name:"redundant_parity_chunk_num",required:!1,schemaName:"int64",qualifierMessage:void 0,schema:{type:"integer",format:"int64",title:"redundant_data_check_num is the num of parity chunks of EC redundancy algorithm"},mdxType:"SchemaItem"}),(0,i.kt)(m.Z,{collapsible:!1,name:"max_payload_size",required:!1,schemaName:"uint64",qualifierMessage:void 0,schema:{type:"string",format:"uint64",title:"max_payload_size is the maximum size of the payload, default: 2G"},mdxType:"SchemaItem"}),(0,i.kt)(m.Z,{collapsible:!1,name:"min_charge_size",required:!1,schemaName:"uint64",qualifierMessage:void 0,schema:{type:"string",format:"uint64",title:"min_charge_size is the minimum charge size of the payload, objects smaller than this size will be charged as this size"},mdxType:"SchemaItem"}),(0,i.kt)(m.Z,{collapsible:!1,name:"mirror_bucket_relayer_fee",required:!1,schemaName:"relayer fee for the mirror bucket tx",qualifierMessage:void 0,schema:{type:"string",title:"relayer fee for the mirror bucket tx"},mdxType:"SchemaItem"}),(0,i.kt)(m.Z,{collapsible:!1,name:"mirror_bucket_ack_relayer_fee",required:!1,schemaName:"relayer fee for the ACK or FAIL_ACK package of the mirror bucket tx",qualifierMessage:void 0,schema:{type:"string",title:"relayer fee for the ACK or FAIL_ACK package of the mirror bucket tx"},mdxType:"SchemaItem"}),(0,i.kt)(m.Z,{collapsible:!1,name:"mirror_object_relayer_fee",required:!1,schemaName:"relayer fee for the mirror object tx",qualifierMessage:void 0,schema:{type:"string",title:"relayer fee for the mirror object tx"},mdxType:"SchemaItem"}),(0,i.kt)(m.Z,{collapsible:!1,name:"mirror_object_ack_relayer_fee",required:!1,schemaName:"Relayer fee for the ACK or FAIL_ACK package of the mirror object tx",qualifierMessage:void 0,schema:{type:"string",title:"Relayer fee for the ACK or FAIL_ACK package of the mirror object tx"},mdxType:"SchemaItem"}),(0,i.kt)(m.Z,{collapsible:!1,name:"mirror_group_relayer_fee",required:!1,schemaName:"relayer fee for the mirror object tx",qualifierMessage:void 0,schema:{type:"string",title:"relayer fee for the mirror object tx"},mdxType:"SchemaItem"}),(0,i.kt)(m.Z,{collapsible:!1,name:"mirror_group_ack_relayer_fee",required:!1,schemaName:"Relayer fee for the ACK or FAIL_ACK package of the mirror object tx",qualifierMessage:void 0,schema:{type:"string",title:"Relayer fee for the ACK or FAIL_ACK package of the mirror object tx"},mdxType:"SchemaItem"}),(0,i.kt)(m.Z,{collapsible:!1,name:"max_buckets_per_account",required:!1,schemaName:"int64",qualifierMessage:void 0,schema:{type:"integer",format:"int64",title:"The maximum number of buckets that can be created per account"},mdxType:"SchemaItem"}),(0,i.kt)(m.Z,{collapsible:!1,name:"discontinue_counting_window",required:!1,schemaName:"uint64",qualifierMessage:void 0,schema:{type:"string",format:"uint64",title:"The window to count the discontinued objects or buckets"},mdxType:"SchemaItem"}),(0,i.kt)(m.Z,{collapsible:!1,name:"discontinue_object_max",required:!1,schemaName:"uint64",qualifierMessage:void 0,schema:{type:"string",format:"uint64",title:"The max objects can be requested in a window"},mdxType:"SchemaItem"}),(0,i.kt)(m.Z,{collapsible:!1,name:"discontinue_bucket_max",required:!1,schemaName:"uint64",qualifierMessage:void 0,schema:{type:"string",format:"uint64",title:"The max buckets can be requested in a window"},mdxType:"SchemaItem"}),(0,i.kt)(m.Z,{collapsible:!1,name:"discontinue_confirm_period",required:!1,schemaName:"int64",qualifierMessage:void 0,schema:{type:"string",format:"int64",title:"The object will be deleted after the confirm period in seconds"},mdxType:"SchemaItem"}),(0,i.kt)(m.Z,{collapsible:!1,name:"discontinue_deletion_max",required:!1,schemaName:"uint64",qualifierMessage:void 0,schema:{type:"string",format:"uint64",title:"The max delete objects in each end block"},mdxType:"SchemaItem"}))))))),(0,i.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(o.Z,{responseExample:'{\n  "params": {\n    "max_segment_size": "string",\n    "redundant_data_chunk_num": 0,\n    "redundant_parity_chunk_num": 0,\n    "max_payload_size": "string",\n    "min_charge_size": "string",\n    "mirror_bucket_relayer_fee": "string",\n    "mirror_bucket_ack_relayer_fee": "string",\n    "mirror_object_relayer_fee": "string",\n    "mirror_object_ack_relayer_fee": "string",\n    "mirror_group_relayer_fee": "string",\n    "mirror_group_ack_relayer_fee": "string",\n    "max_buckets_per_account": 0,\n    "discontinue_counting_window": "string",\n    "discontinue_object_max": "string",\n    "discontinue_bucket_max": "string",\n    "discontinue_confirm_period": "string",\n    "discontinue_deletion_max": "string"\n  }\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,i.kt)(c.Z,{label:"default",value:"default",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"An unexpected error response.")),(0,i.kt)("div",null,(0,i.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(c.Z,{label:"*/*",value:"*/*",mdxType:"TabItem"},(0,i.kt)(l.Z,{mdxType:"SchemaTabs"},(0,i.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(m.Z,{collapsible:!1,name:"error",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(m.Z,{collapsible:!1,name:"code",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32"},mdxType:"SchemaItem"}),(0,i.kt)(m.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(m.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"details"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)("li",null,(0,i.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,i.kt)(m.Z,{collapsible:!1,name:"type_url",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(m.Z,{collapsible:!1,name:"value",required:!1,schemaName:"byte",qualifierMessage:void 0,schema:{type:"string",format:"byte"},mdxType:"SchemaItem"}),(0,i.kt)("li",null,(0,i.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,i.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(o.Z,{responseExample:'{\n  "error": "string",\n  "code": 0,\n  "message": "string",\n  "details": [\n    {\n      "type_url": "string",\n      "value": "string"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}y.isMDXComponent=!0}}]);