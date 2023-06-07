"use strict";(self.webpackChunkgreenfield_docs=self.webpackChunkgreenfield_docs||[]).push([[3688],{28395:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>E,contentTitle:()=>y,default:()=>_,frontMatter:()=>c,metadata:()=>u,toc:()=>T});var a=i(87462),s=(i(67294),i(3905)),r=i(26389),n=i(94891),o=i(75190),m=i(47507),l=i(24310),p=i(63303),d=(i(75035),i(85162));const c={id:"verify-permission",title:"Queries a list of VerifyPermission items.",description:"Queries a list of VerifyPermission items.",sidebar_label:"VerifyPermission",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"VerifyPermission",responses:{200:{description:"A successful response.",content:{"*/*":{schema:{type:"object",properties:{effect:{type:"string",enum:["EFFECT_UNSPECIFIED","EFFECT_ALLOW","EFFECT_DENY"],default:"EFFECT_UNSPECIFIED",title:"Effect define the effect of the operation permission, include Allow or deny"}}}}}},default:{description:"An unexpected error response.",content:{"*/*":{schema:{type:"object",properties:{error:{type:"string"},code:{type:"integer",format:"int32"},message:{type:"string"},details:{type:"array",items:{type:"object",properties:{type_url:{type:"string"},value:{type:"string",format:"byte"}}}}}}}}}},parameters:[{name:"operator",in:"path",required:!0,schema:{type:"string"}},{name:"bucket_name",in:"path",required:!0,schema:{type:"string"}},{name:"object_name",in:"path",required:!0,schema:{type:"string"}},{name:"action_type",in:"path",required:!0,schema:{type:"string",enum:["ACTION_UNSPECIFIED","ACTION_UPDATE_BUCKET_INFO","ACTION_DELETE_BUCKET","ACTION_CREATE_OBJECT","ACTION_DELETE_OBJECT","ACTION_COPY_OBJECT","ACTION_GET_OBJECT","ACTION_EXECUTE_OBJECT","ACTION_LIST_OBJECT","ACTION_UPDATE_GROUP_MEMBER","ACTION_DELETE_GROUP","ACTION_UPDATE_OBJECT_INFO","ACTION_TYPE_ALL"]}}],tags:["Query"],description:"Queries a list of VerifyPermission items.",method:"get",path:"/greenfield/storage/verify_permission/{operator}/{bucket_name}/{object_name}/{action_type}",info:{title:"Greenfield - gRPC Gateway docs",description:"A REST interface for state queries",version:"1.0.0"},postman:{name:"Queries a list of VerifyPermission items.",description:{type:"text/plain"},url:{path:["greenfield","storage","verify_permission",":operator",":bucket_name",":object_name",":action_type"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"operator"},{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"bucket_name"},{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"object_name"},{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"action_type"}]},header:[{key:"Accept",value:"*/*"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/greenfield-api/greenfield-grpc-gateway-docs",custom_edit_url:null},y=void 0,u={unversionedId:"greenfield-api/verify-permission",id:"greenfield-api/verify-permission",title:"Queries a list of VerifyPermission items.",description:"Queries a list of VerifyPermission items.",source:"@site/docs/greenfield-api/verify-permission.api.mdx",sourceDirName:"greenfield-api",slug:"/greenfield-api/verify-permission",permalink:"/bnbgreenfield/docs/greenfield-api/verify-permission",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"verify-permission",title:"Queries a list of VerifyPermission items.",description:"Queries a list of VerifyPermission items.",sidebar_label:"VerifyPermission",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"VerifyPermission",responses:{200:{description:"A successful response.",content:{"*/*":{schema:{type:"object",properties:{effect:{type:"string",enum:["EFFECT_UNSPECIFIED","EFFECT_ALLOW","EFFECT_DENY"],default:"EFFECT_UNSPECIFIED",title:"Effect define the effect of the operation permission, include Allow or deny"}}}}}},default:{description:"An unexpected error response.",content:{"*/*":{schema:{type:"object",properties:{error:{type:"string"},code:{type:"integer",format:"int32"},message:{type:"string"},details:{type:"array",items:{type:"object",properties:{type_url:{type:"string"},value:{type:"string",format:"byte"}}}}}}}}}},parameters:[{name:"operator",in:"path",required:!0,schema:{type:"string"}},{name:"bucket_name",in:"path",required:!0,schema:{type:"string"}},{name:"object_name",in:"path",required:!0,schema:{type:"string"}},{name:"action_type",in:"path",required:!0,schema:{type:"string",enum:["ACTION_UNSPECIFIED","ACTION_UPDATE_BUCKET_INFO","ACTION_DELETE_BUCKET","ACTION_CREATE_OBJECT","ACTION_DELETE_OBJECT","ACTION_COPY_OBJECT","ACTION_GET_OBJECT","ACTION_EXECUTE_OBJECT","ACTION_LIST_OBJECT","ACTION_UPDATE_GROUP_MEMBER","ACTION_DELETE_GROUP","ACTION_UPDATE_OBJECT_INFO","ACTION_TYPE_ALL"]}}],tags:["Query"],description:"Queries a list of VerifyPermission items.",method:"get",path:"/greenfield/storage/verify_permission/{operator}/{bucket_name}/{object_name}/{action_type}",info:{title:"Greenfield - gRPC Gateway docs",description:"A REST interface for state queries",version:"1.0.0"},postman:{name:"Queries a list of VerifyPermission items.",description:{type:"text/plain"},url:{path:["greenfield","storage","verify_permission",":operator",":bucket_name",":object_name",":action_type"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"operator"},{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"bucket_name"},{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"object_name"},{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"action_type"}]},header:[{key:"Accept",value:"*/*"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/greenfield-api/greenfield-grpc-gateway-docs",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"QueryPolicyForGroup",permalink:"/bnbgreenfield/docs/greenfield-api/query-policy-for-group"},next:{title:"Get All Existing Accounts",permalink:"/bnbgreenfield/docs/greenfield-api/accounts"}},E={},T=[{value:"VerifyPermission",id:"verifypermission",level:2}],f={toc:T};function _(e){let{components:t,...i}=e;return(0,s.kt)("wrapper",(0,a.Z)({},f,i,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"verifypermission"},"VerifyPermission"),(0,s.kt)("p",null,"Queries a list of VerifyPermission items."),(0,s.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Path Parameters")),(0,s.kt)("div",null,(0,s.kt)("ul",null,(0,s.kt)(o.Z,{className:"paramsItem",param:{name:"operator",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,s.kt)(o.Z,{className:"paramsItem",param:{name:"bucket_name",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,s.kt)(o.Z,{className:"paramsItem",param:{name:"object_name",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,s.kt)(o.Z,{className:"paramsItem",param:{name:"action_type",in:"path",required:!0,schema:{type:"string",enum:["ACTION_UNSPECIFIED","ACTION_UPDATE_BUCKET_INFO","ACTION_DELETE_BUCKET","ACTION_CREATE_OBJECT","ACTION_DELETE_OBJECT","ACTION_COPY_OBJECT","ACTION_GET_OBJECT","ACTION_EXECUTE_OBJECT","ACTION_LIST_OBJECT","ACTION_UPDATE_GROUP_MEMBER","ACTION_DELETE_GROUP","ACTION_UPDATE_OBJECT_INFO","ACTION_TYPE_ALL"]}},mdxType:"ParamsItem"})))),(0,s.kt)("div",null,(0,s.kt)(r.Z,{mdxType:"ApiTabs"},(0,s.kt)(d.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"A successful response.")),(0,s.kt)("div",null,(0,s.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(d.Z,{label:"*/*",value:"*/*",mdxType:"TabItem"},(0,s.kt)(p.Z,{mdxType:"SchemaTabs"},(0,s.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(l.Z,{collapsible:!1,name:"effect",required:!1,schemaName:"Effect define the effect of the operation permission, include Allow or deny",qualifierMessage:"**Possible values:** [`EFFECT_UNSPECIFIED`, `EFFECT_ALLOW`, `EFFECT_DENY`]",schema:{type:"string",enum:["EFFECT_UNSPECIFIED","EFFECT_ALLOW","EFFECT_DENY"],default:"EFFECT_UNSPECIFIED",title:"Effect define the effect of the operation permission, include Allow or deny"},mdxType:"SchemaItem"})))),(0,s.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(m.Z,{responseExample:'{\n  "effect": "EFFECT_UNSPECIFIED"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,s.kt)(d.Z,{label:"default",value:"default",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"An unexpected error response.")),(0,s.kt)("div",null,(0,s.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(d.Z,{label:"*/*",value:"*/*",mdxType:"TabItem"},(0,s.kt)(p.Z,{mdxType:"SchemaTabs"},(0,s.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(l.Z,{collapsible:!1,name:"error",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"code",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"details"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,s.kt)(l.Z,{collapsible:!1,name:"type_url",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"value",required:!1,schemaName:"byte",qualifierMessage:void 0,schema:{type:"string",format:"byte"},mdxType:"SchemaItem"}),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,s.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(m.Z,{responseExample:'{\n  "error": "string",\n  "code": 0,\n  "message": "string",\n  "details": [\n    {\n      "type_url": "string",\n      "value": "string"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}_.isMDXComponent=!0}}]);