"use strict";(self.webpackChunkgreenfield_docs=self.webpackChunkgreenfield_docs||[]).push([[1401],{72320:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>E,contentTitle:()=>d,default:()=>T,frontMatter:()=>u,metadata:()=>y,toc:()=>_});var s=i(87462),r=(i(67294),i(3905)),a=i(26389),n=i(94891),o=i(75190),p=i(47507),l=i(24310),c=i(63303),m=(i(75035),i(85162));const u={id:"query-policy-for-group",title:"Queries a policy that grants permission to a group",description:"Queries a policy that grants permission to a group",sidebar_label:"QueryPolicyForGroup",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"QueryPolicyForGroup",responses:{200:{description:"A successful response.",content:{"*/*":{schema:{type:"object",properties:{policy:{type:"object",properties:{id:{type:"string",title:"id is an unique u256 sequence for each policy. It also be used as NFT tokenID"},principal:{title:"principal defines the accounts/group which the permission grants to",type:"object",properties:{type:{type:"string",enum:["PRINCIPAL_TYPE_UNSPECIFIED","PRINCIPAL_TYPE_GNFD_ACCOUNT","PRINCIPAL_TYPE_GNFD_GROUP"],default:"PRINCIPAL_TYPE_UNSPECIFIED",description:"PrincipalType refers to the identity type of system users or entities.\nIn Greenfield, it usually refers to accounts or groups."},value:{type:"string",title:"When the type is an account, its value is sdk.AccAddress().String();\nwhen the type is a group, its value is math.Uint().String()"}},description:"Principal define the roles that can grant permissions. Currently, it can be account or group."},resource_type:{title:"resource_type defines the type of resource that grants permission for",type:"string",enum:["RESOURCE_TYPE_UNSPECIFIED","RESOURCE_TYPE_BUCKET","RESOURCE_TYPE_OBJECT","RESOURCE_TYPE_GROUP"],default:"RESOURCE_TYPE_UNSPECIFIED"},resource_id:{type:"string",title:"resource_id defines the bucket/object/group id of the resource that grants permission for"},statements:{type:"array",items:{type:"object",properties:{effect:{title:"effect define the impact of permissions, which can be Allow/Deny",type:"string",enum:["EFFECT_UNSPECIFIED","EFFECT_ALLOW","EFFECT_DENY"],default:"EFFECT_UNSPECIFIED"},actions:{type:"array",items:{type:"string",enum:["ACTION_UNSPECIFIED","ACTION_UPDATE_BUCKET_INFO","ACTION_DELETE_BUCKET","ACTION_CREATE_OBJECT","ACTION_DELETE_OBJECT","ACTION_COPY_OBJECT","ACTION_GET_OBJECT","ACTION_EXECUTE_OBJECT","ACTION_LIST_OBJECT","ACTION_UPDATE_GROUP_MEMBER","ACTION_DELETE_GROUP","ACTION_UPDATE_OBJECT_INFO","ACTION_TYPE_ALL"],default:"ACTION_UNSPECIFIED",title:"ActionType defines the operations you can execute in greenfield storage network"},description:"action_type define the operation type you can act. greenfield defines a set of permission\nthat you can specify in a permissionInfo. see ActionType enum for detail."},resources:{type:"array",items:{type:"string"},description:"CAN ONLY USED IN bucket level. Support fuzzy match and limit to 5\nIf no sub-resource is specified in a statement, then all objects in the bucket are accessible by the principal.\nHowever, if the sub-resource is defined as 'bucket/test_*,' in the statement, then only objects with a 'test_'\nprefix can be accessed by the principal."},expiration_time:{type:"string",format:"date-time",description:"expiration_time defines how long the permission is valid. If not explicitly specified, it means it will not expire."},limit_size:{description:"limit_size defines the total data size that is allowed to operate. If not explicitly specified, it means it will not limit.",type:"object",properties:{value:{type:"string",format:"uint64",description:"The uint64 value."}}}}},title:"statements defines the details content of the permission, including effect/actions/sub-resources"},expiration_time:{type:"string",format:"date-time",title:"expiration_time defines the whole expiration time of all the statements.\nNotices: Its priority is higher than the expiration time inside the Statement"}}}}}}}},default:{description:"An unexpected error response.",content:{"*/*":{schema:{type:"object",properties:{error:{type:"string"},code:{type:"integer",format:"int32"},message:{type:"string"},details:{type:"array",items:{type:"object",properties:{type_url:{type:"string"},value:{type:"string",format:"byte"}}}}}}}}}},parameters:[{name:"resource",in:"path",required:!0,schema:{type:"string"}},{name:"principal_group_id",in:"path",required:!0,schema:{type:"string"}}],tags:["Query"],description:"Queries a policy that grants permission to a group",method:"get",path:"/greenfield/storage/policy_for_group/{resource}/{principal_group_id}",info:{title:"Greenfield - gRPC Gateway docs",description:"A REST interface for state queries",version:"1.0.0"},postman:{name:"Queries a policy that grants permission to a group",description:{type:"text/plain"},url:{path:["greenfield","storage","policy_for_group",":resource",":principal_group_id"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"resource"},{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"principal_group_id"}]},header:[{key:"Accept",value:"*/*"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/greenfield-api/greenfield-grpc-gateway-docs",custom_edit_url:null},d=void 0,y={unversionedId:"greenfield-api/query-policy-for-group",id:"greenfield-api/query-policy-for-group",title:"Queries a policy that grants permission to a group",description:"Queries a policy that grants permission to a group",source:"@site/docs/greenfield-api/query-policy-for-group.api.mdx",sourceDirName:"greenfield-api",slug:"/greenfield-api/query-policy-for-group",permalink:"/bnbgreenfield-docs/docs/greenfield-api/query-policy-for-group",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"query-policy-for-group",title:"Queries a policy that grants permission to a group",description:"Queries a policy that grants permission to a group",sidebar_label:"QueryPolicyForGroup",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"QueryPolicyForGroup",responses:{200:{description:"A successful response.",content:{"*/*":{schema:{type:"object",properties:{policy:{type:"object",properties:{id:{type:"string",title:"id is an unique u256 sequence for each policy. It also be used as NFT tokenID"},principal:{title:"principal defines the accounts/group which the permission grants to",type:"object",properties:{type:{type:"string",enum:["PRINCIPAL_TYPE_UNSPECIFIED","PRINCIPAL_TYPE_GNFD_ACCOUNT","PRINCIPAL_TYPE_GNFD_GROUP"],default:"PRINCIPAL_TYPE_UNSPECIFIED",description:"PrincipalType refers to the identity type of system users or entities.\nIn Greenfield, it usually refers to accounts or groups."},value:{type:"string",title:"When the type is an account, its value is sdk.AccAddress().String();\nwhen the type is a group, its value is math.Uint().String()"}},description:"Principal define the roles that can grant permissions. Currently, it can be account or group."},resource_type:{title:"resource_type defines the type of resource that grants permission for",type:"string",enum:["RESOURCE_TYPE_UNSPECIFIED","RESOURCE_TYPE_BUCKET","RESOURCE_TYPE_OBJECT","RESOURCE_TYPE_GROUP"],default:"RESOURCE_TYPE_UNSPECIFIED"},resource_id:{type:"string",title:"resource_id defines the bucket/object/group id of the resource that grants permission for"},statements:{type:"array",items:{type:"object",properties:{effect:{title:"effect define the impact of permissions, which can be Allow/Deny",type:"string",enum:["EFFECT_UNSPECIFIED","EFFECT_ALLOW","EFFECT_DENY"],default:"EFFECT_UNSPECIFIED"},actions:{type:"array",items:{type:"string",enum:["ACTION_UNSPECIFIED","ACTION_UPDATE_BUCKET_INFO","ACTION_DELETE_BUCKET","ACTION_CREATE_OBJECT","ACTION_DELETE_OBJECT","ACTION_COPY_OBJECT","ACTION_GET_OBJECT","ACTION_EXECUTE_OBJECT","ACTION_LIST_OBJECT","ACTION_UPDATE_GROUP_MEMBER","ACTION_DELETE_GROUP","ACTION_UPDATE_OBJECT_INFO","ACTION_TYPE_ALL"],default:"ACTION_UNSPECIFIED",title:"ActionType defines the operations you can execute in greenfield storage network"},description:"action_type define the operation type you can act. greenfield defines a set of permission\nthat you can specify in a permissionInfo. see ActionType enum for detail."},resources:{type:"array",items:{type:"string"},description:"CAN ONLY USED IN bucket level. Support fuzzy match and limit to 5\nIf no sub-resource is specified in a statement, then all objects in the bucket are accessible by the principal.\nHowever, if the sub-resource is defined as 'bucket/test_*,' in the statement, then only objects with a 'test_'\nprefix can be accessed by the principal."},expiration_time:{type:"string",format:"date-time",description:"expiration_time defines how long the permission is valid. If not explicitly specified, it means it will not expire."},limit_size:{description:"limit_size defines the total data size that is allowed to operate. If not explicitly specified, it means it will not limit.",type:"object",properties:{value:{type:"string",format:"uint64",description:"The uint64 value."}}}}},title:"statements defines the details content of the permission, including effect/actions/sub-resources"},expiration_time:{type:"string",format:"date-time",title:"expiration_time defines the whole expiration time of all the statements.\nNotices: Its priority is higher than the expiration time inside the Statement"}}}}}}}},default:{description:"An unexpected error response.",content:{"*/*":{schema:{type:"object",properties:{error:{type:"string"},code:{type:"integer",format:"int32"},message:{type:"string"},details:{type:"array",items:{type:"object",properties:{type_url:{type:"string"},value:{type:"string",format:"byte"}}}}}}}}}},parameters:[{name:"resource",in:"path",required:!0,schema:{type:"string"}},{name:"principal_group_id",in:"path",required:!0,schema:{type:"string"}}],tags:["Query"],description:"Queries a policy that grants permission to a group",method:"get",path:"/greenfield/storage/policy_for_group/{resource}/{principal_group_id}",info:{title:"Greenfield - gRPC Gateway docs",description:"A REST interface for state queries",version:"1.0.0"},postman:{name:"Queries a policy that grants permission to a group",description:{type:"text/plain"},url:{path:["greenfield","storage","policy_for_group",":resource",":principal_group_id"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"resource"},{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"principal_group_id"}]},header:[{key:"Accept",value:"*/*"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/greenfield-api/greenfield-grpc-gateway-docs",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"QueryPolicyForAccount",permalink:"/bnbgreenfield-docs/docs/greenfield-api/query-policy-for-account"},next:{title:"VerifyPermission",permalink:"/bnbgreenfield-docs/docs/greenfield-api/verify-permission"}},E={},_=[{value:"QueryPolicyForGroup",id:"querypolicyforgroup",level:2}],f={toc:_};function T(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,s.Z)({},f,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"querypolicyforgroup"},"QueryPolicyForGroup"),(0,r.kt)("p",null,"Queries a policy that grants permission to a group"),(0,r.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"Path Parameters")),(0,r.kt)("div",null,(0,r.kt)("ul",null,(0,r.kt)(o.Z,{className:"paramsItem",param:{name:"resource",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,r.kt)(o.Z,{className:"paramsItem",param:{name:"principal_group_id",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,r.kt)("div",null,(0,r.kt)(a.Z,{mdxType:"ApiTabs"},(0,r.kt)(m.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"A successful response.")),(0,r.kt)("div",null,(0,r.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,r.kt)(m.Z,{label:"*/*",value:"*/*",mdxType:"TabItem"},(0,r.kt)(c.Z,{mdxType:"SchemaTabs"},(0,r.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Schema")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{}},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"policy"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)(l.Z,{collapsible:!1,name:"id",required:!1,schemaName:"id is an unique u256 sequence for each policy. It also be used as NFT tokenID",qualifierMessage:void 0,schema:{type:"string",title:"id is an unique u256 sequence for each policy. It also be used as NFT tokenID"},mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{}},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"principal"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,r.kt)("p",null,"Principal define the roles that can grant permissions. Currently, it can be account or group.")),(0,r.kt)(l.Z,{collapsible:!1,name:"type",required:!1,schemaName:"string",qualifierMessage:"**Possible values:** [`PRINCIPAL_TYPE_UNSPECIFIED`, `PRINCIPAL_TYPE_GNFD_ACCOUNT`, `PRINCIPAL_TYPE_GNFD_GROUP`]",schema:{type:"string",enum:["PRINCIPAL_TYPE_UNSPECIFIED","PRINCIPAL_TYPE_GNFD_ACCOUNT","PRINCIPAL_TYPE_GNFD_GROUP"],default:"PRINCIPAL_TYPE_UNSPECIFIED",description:"PrincipalType refers to the identity type of system users or entities.\nIn Greenfield, it usually refers to accounts or groups."},mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!1,name:"value",required:!1,schemaName:"When the type is an account, its value is sdk.AccAddress().String();\nwhen the type is a group, its value is math.Uint().String()",qualifierMessage:void 0,schema:{type:"string",title:"When the type is an account, its value is sdk.AccAddress().String();\nwhen the type is a group, its value is math.Uint().String()"},mdxType:"SchemaItem"})))),(0,r.kt)(l.Z,{collapsible:!1,name:"resource_type",required:!1,schemaName:"resource_type defines the type of resource that grants permission for",qualifierMessage:"**Possible values:** [`RESOURCE_TYPE_UNSPECIFIED`, `RESOURCE_TYPE_BUCKET`, `RESOURCE_TYPE_OBJECT`, `RESOURCE_TYPE_GROUP`]",schema:{title:"resource_type defines the type of resource that grants permission for",type:"string",enum:["RESOURCE_TYPE_UNSPECIFIED","RESOURCE_TYPE_BUCKET","RESOURCE_TYPE_OBJECT","RESOURCE_TYPE_GROUP"],default:"RESOURCE_TYPE_UNSPECIFIED"},mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!1,name:"resource_id",required:!1,schemaName:"resource_id defines the bucket/object/group id of the resource that grants permission for",qualifierMessage:void 0,schema:{type:"string",title:"resource_id defines the bucket/object/group id of the resource that grants permission for"},mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{}},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"statements"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)("li",null,(0,r.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,r.kt)(l.Z,{collapsible:!1,name:"effect",required:!1,schemaName:"effect define the impact of permissions, which can be Allow/Deny",qualifierMessage:"**Possible values:** [`EFFECT_UNSPECIFIED`, `EFFECT_ALLOW`, `EFFECT_DENY`]",schema:{title:"effect define the impact of permissions, which can be Allow/Deny",type:"string",enum:["EFFECT_UNSPECIFIED","EFFECT_ALLOW","EFFECT_DENY"],default:"EFFECT_UNSPECIFIED"},mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!1,name:"actions",required:!1,schemaName:"ActionType defines the operations you can execute in greenfield storage network[]",qualifierMessage:"**Possible values:** [`ACTION_UNSPECIFIED`, `ACTION_UPDATE_BUCKET_INFO`, `ACTION_DELETE_BUCKET`, `ACTION_CREATE_OBJECT`, `ACTION_DELETE_OBJECT`, `ACTION_COPY_OBJECT`, `ACTION_GET_OBJECT`, `ACTION_EXECUTE_OBJECT`, `ACTION_LIST_OBJECT`, `ACTION_UPDATE_GROUP_MEMBER`, `ACTION_DELETE_GROUP`, `ACTION_UPDATE_OBJECT_INFO`, `ACTION_TYPE_ALL`]",schema:{type:"array",items:{type:"string",enum:["ACTION_UNSPECIFIED","ACTION_UPDATE_BUCKET_INFO","ACTION_DELETE_BUCKET","ACTION_CREATE_OBJECT","ACTION_DELETE_OBJECT","ACTION_COPY_OBJECT","ACTION_GET_OBJECT","ACTION_EXECUTE_OBJECT","ACTION_LIST_OBJECT","ACTION_UPDATE_GROUP_MEMBER","ACTION_DELETE_GROUP","ACTION_UPDATE_OBJECT_INFO","ACTION_TYPE_ALL"],default:"ACTION_UNSPECIFIED",title:"ActionType defines the operations you can execute in greenfield storage network"},description:"action_type define the operation type you can act. greenfield defines a set of permission\nthat you can specify in a permissionInfo. see ActionType enum for detail."},mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!1,name:"resources",required:!1,schemaName:"string[]",qualifierMessage:void 0,schema:{type:"array",items:{type:"string"},description:"CAN ONLY USED IN bucket level. Support fuzzy match and limit to 5\nIf no sub-resource is specified in a statement, then all objects in the bucket are accessible by the principal.\nHowever, if the sub-resource is defined as 'bucket/test_*,' in the statement, then only objects with a 'test_'\nprefix can be accessed by the principal."},mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!1,name:"expiration_time",required:!1,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time",description:"expiration_time defines how long the permission is valid. If not explicitly specified, it means it will not expire."},mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{}},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"limit_size"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,r.kt)("p",null,"limit_size defines the total data size that is allowed to operate. If not explicitly specified, it means it will not limit.")),(0,r.kt)(l.Z,{collapsible:!1,name:"value",required:!1,schemaName:"uint64",qualifierMessage:void 0,schema:{type:"string",format:"uint64",description:"The uint64 value."},mdxType:"SchemaItem"})))),(0,r.kt)("li",null,(0,r.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,r.kt)(l.Z,{collapsible:!1,name:"expiration_time",required:!1,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time",title:"expiration_time defines the whole expiration time of all the statements.\nNotices: Its priority is higher than the expiration time inside the Statement"},mdxType:"SchemaItem"}))))))),(0,r.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,r.kt)(p.Z,{responseExample:'{\n  "policy": {\n    "id": "string",\n    "principal": {\n      "type": "PRINCIPAL_TYPE_UNSPECIFIED",\n      "value": "string"\n    },\n    "resource_type": "RESOURCE_TYPE_UNSPECIFIED",\n    "resource_id": "string",\n    "statements": [\n      {\n        "effect": "EFFECT_UNSPECIFIED",\n        "actions": [\n          "ACTION_UNSPECIFIED"\n        ],\n        "resources": [\n          "string"\n        ],\n        "expiration_time": "2023-05-26T13:35:10.218Z",\n        "limit_size": {\n          "value": "string"\n        }\n      }\n    ],\n    "expiration_time": "2023-05-26T13:35:10.219Z"\n  }\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,r.kt)(m.Z,{label:"default",value:"default",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"An unexpected error response.")),(0,r.kt)("div",null,(0,r.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,r.kt)(m.Z,{label:"*/*",value:"*/*",mdxType:"TabItem"},(0,r.kt)(c.Z,{mdxType:"SchemaTabs"},(0,r.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Schema")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(l.Z,{collapsible:!1,name:"error",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!1,name:"code",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32"},mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{}},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"details"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)("li",null,(0,r.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,r.kt)(l.Z,{collapsible:!1,name:"type_url",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!1,name:"value",required:!1,schemaName:"byte",qualifierMessage:void 0,schema:{type:"string",format:"byte"},mdxType:"SchemaItem"}),(0,r.kt)("li",null,(0,r.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,r.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,r.kt)(p.Z,{responseExample:'{\n  "error": "string",\n  "code": 0,\n  "message": "string",\n  "details": [\n    {\n      "type_url": "string",\n      "value": "string"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}T.isMDXComponent=!0}}]);