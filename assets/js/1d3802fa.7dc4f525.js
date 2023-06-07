"use strict";(self.webpackChunkgreenfield_docs=self.webpackChunkgreenfield_docs||[]).push([[3],{51001:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>b,frontMatter:()=>c,metadata:()=>y,toc:()=>f});var a=n(87462),i=(n(67294),n(3905)),s=n(26389),o=n(94891),r=n(75190),m=n(47507),l=n(24310),d=n(63303),p=(n(75035),n(85162));const c={id:"denoms-metadata",title:"DenomsMetadata queries the client metadata for all registered coin denominations.",description:"DenomsMetadata queries the client metadata for all registered coin",sidebar_label:"DenomsMetadata",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"DenomsMetadata",responses:{200:{description:"A successful response.",content:{"*/*":{schema:{type:"object",properties:{metadatas:{type:"array",items:{type:"object",properties:{description:{type:"string"},denom_units:{type:"array",items:{type:"object",properties:{denom:{type:"string",description:"denom represents the string name of the given denom unit (e.g uatom)."},exponent:{type:"integer",format:"int64",description:"exponent represents power of 10 exponent that one must\nraise the base_denom to in order to equal the given DenomUnit's denom\n1 denom = 10^exponent base_denom\n(e.g. with a base_denom of uatom, one can create a DenomUnit of 'atom' with\nexponent = 6, thus: 1 atom = 10^6 uatom)."},aliases:{type:"array",items:{type:"string"},title:"aliases is a list of string aliases for the given denom"}},description:"DenomUnit represents a struct that describes a given\ndenomination unit of the basic token."},title:"denom_units represents the list of DenomUnit's for a given coin"},base:{type:"string",description:"base represents the base denom (should be the DenomUnit with exponent = 0)."},display:{type:"string",description:"display indicates the suggested denom that should be\ndisplayed in clients."},name:{type:"string",description:"Since: cosmos-sdk 0.43",title:"name defines the name of the token (eg: Cosmos Atom)"},symbol:{type:"string",description:"symbol is the token symbol usually shown on exchanges (eg: ATOM). This can\nbe the same as the display.\n\nSince: cosmos-sdk 0.43"},uri:{type:"string",description:"URI to a document (on or off-chain) that contains additional information. Optional.\n\nSince: cosmos-sdk 0.46"},uri_hash:{type:"string",description:"URIHash is a sha256 hash of a document pointed by URI. It's used to verify that\nthe document didn't change. Optional.\n\nSince: cosmos-sdk 0.46"}},description:"Metadata represents a struct that describes\na basic token."},description:"metadata provides the client information for all the registered tokens."},pagination:{description:"pagination defines the pagination in the response.",type:"object",properties:{next_key:{type:"string",format:"byte",description:"next_key is the key to be passed to PageRequest.key to\nquery the next page most efficiently. It will be empty if\nthere are no more results."},total:{type:"string",format:"uint64",title:"total is total number of results available if PageRequest.count_total\nwas set, its value is undefined otherwise"}}}},description:"QueryDenomsMetadataResponse is the response type for the Query/DenomsMetadata RPC\nmethod."}}}},default:{description:"An unexpected error response.",content:{"*/*":{schema:{type:"object",properties:{error:{type:"string"},code:{type:"integer",format:"int32"},message:{type:"string"},details:{type:"array",items:{type:"object",properties:{type_url:{type:"string"},value:{type:"string",format:"byte"}}}}}}}}}},parameters:[{name:"pagination.key",description:"key is a value returned in PageResponse.next_key to begin\nquerying the next page most efficiently. Only one of offset or key\nshould be set.",in:"query",required:!1,schema:{type:"string",format:"byte"}},{name:"pagination.offset",description:"offset is a numeric offset that can be used when key is unavailable.\nIt is less efficient than using key. Only one of offset or key should\nbe set.",in:"query",required:!1,schema:{type:"string",format:"uint64"}},{name:"pagination.limit",description:"limit is the total number of results to be returned in the result page.\nIf left empty it will default to a value to be set by each app.",in:"query",required:!1,schema:{type:"string",format:"uint64"}},{name:"pagination.count_total",description:"count_total is set to true  to indicate that the result set should include\na count of the total number of items available for pagination in UIs.\ncount_total is only respected when offset is used. It is ignored when key\nis set.",in:"query",required:!1,schema:{type:"boolean"}},{name:"pagination.reverse",description:"reverse is set to true if results are to be returned in the descending order.\n\nSince: cosmos-sdk 0.43",in:"query",required:!1,schema:{type:"boolean"}}],tags:["Query"],description:"DenomsMetadata queries the client metadata for all registered coin\ndenominations.",method:"get",path:"/cosmos/bank/v1beta1/denoms_metadata",info:{title:"Greenfield - gRPC Gateway docs",description:"A REST interface for state queries",version:"1.0.0"},postman:{name:"DenomsMetadata queries the client metadata for all registered coin\ndenominations.",description:{type:"text/plain"},url:{path:["cosmos","bank","v1beta1","denoms_metadata"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"key is a value returned in PageResponse.next_key to begin\nquerying the next page most efficiently. Only one of offset or key\nshould be set.",type:"text/plain"},key:"pagination.key",value:""},{disabled:!1,description:{content:"offset is a numeric offset that can be used when key is unavailable.\nIt is less efficient than using key. Only one of offset or key should\nbe set.",type:"text/plain"},key:"pagination.offset",value:""},{disabled:!1,description:{content:"limit is the total number of results to be returned in the result page.\nIf left empty it will default to a value to be set by each app.",type:"text/plain"},key:"pagination.limit",value:""},{disabled:!1,description:{content:"count_total is set to true  to indicate that the result set should include\na count of the total number of items available for pagination in UIs.\ncount_total is only respected when offset is used. It is ignored when key\nis set.",type:"text/plain"},key:"pagination.count_total",value:""},{disabled:!1,description:{content:"reverse is set to true if results are to be returned in the descending order.\n\nSince: cosmos-sdk 0.43",type:"text/plain"},key:"pagination.reverse",value:""}],variable:[]},header:[{key:"Accept",value:"*/*"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/greenfield-api/greenfield-grpc-gateway-docs",custom_edit_url:null},u=void 0,y={unversionedId:"greenfield-api/denoms-metadata",id:"greenfield-api/denoms-metadata",title:"DenomsMetadata queries the client metadata for all registered coin denominations.",description:"DenomsMetadata queries the client metadata for all registered coin",source:"@site/docs/greenfield-api/denoms-metadata.api.mdx",sourceDirName:"greenfield-api",slug:"/greenfield-api/denoms-metadata",permalink:"/bnbgreenfield/docs/greenfield-api/denoms-metadata",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"denoms-metadata",title:"DenomsMetadata queries the client metadata for all registered coin denominations.",description:"DenomsMetadata queries the client metadata for all registered coin",sidebar_label:"DenomsMetadata",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"DenomsMetadata",responses:{200:{description:"A successful response.",content:{"*/*":{schema:{type:"object",properties:{metadatas:{type:"array",items:{type:"object",properties:{description:{type:"string"},denom_units:{type:"array",items:{type:"object",properties:{denom:{type:"string",description:"denom represents the string name of the given denom unit (e.g uatom)."},exponent:{type:"integer",format:"int64",description:"exponent represents power of 10 exponent that one must\nraise the base_denom to in order to equal the given DenomUnit's denom\n1 denom = 10^exponent base_denom\n(e.g. with a base_denom of uatom, one can create a DenomUnit of 'atom' with\nexponent = 6, thus: 1 atom = 10^6 uatom)."},aliases:{type:"array",items:{type:"string"},title:"aliases is a list of string aliases for the given denom"}},description:"DenomUnit represents a struct that describes a given\ndenomination unit of the basic token."},title:"denom_units represents the list of DenomUnit's for a given coin"},base:{type:"string",description:"base represents the base denom (should be the DenomUnit with exponent = 0)."},display:{type:"string",description:"display indicates the suggested denom that should be\ndisplayed in clients."},name:{type:"string",description:"Since: cosmos-sdk 0.43",title:"name defines the name of the token (eg: Cosmos Atom)"},symbol:{type:"string",description:"symbol is the token symbol usually shown on exchanges (eg: ATOM). This can\nbe the same as the display.\n\nSince: cosmos-sdk 0.43"},uri:{type:"string",description:"URI to a document (on or off-chain) that contains additional information. Optional.\n\nSince: cosmos-sdk 0.46"},uri_hash:{type:"string",description:"URIHash is a sha256 hash of a document pointed by URI. It's used to verify that\nthe document didn't change. Optional.\n\nSince: cosmos-sdk 0.46"}},description:"Metadata represents a struct that describes\na basic token."},description:"metadata provides the client information for all the registered tokens."},pagination:{description:"pagination defines the pagination in the response.",type:"object",properties:{next_key:{type:"string",format:"byte",description:"next_key is the key to be passed to PageRequest.key to\nquery the next page most efficiently. It will be empty if\nthere are no more results."},total:{type:"string",format:"uint64",title:"total is total number of results available if PageRequest.count_total\nwas set, its value is undefined otherwise"}}}},description:"QueryDenomsMetadataResponse is the response type for the Query/DenomsMetadata RPC\nmethod."}}}},default:{description:"An unexpected error response.",content:{"*/*":{schema:{type:"object",properties:{error:{type:"string"},code:{type:"integer",format:"int32"},message:{type:"string"},details:{type:"array",items:{type:"object",properties:{type_url:{type:"string"},value:{type:"string",format:"byte"}}}}}}}}}},parameters:[{name:"pagination.key",description:"key is a value returned in PageResponse.next_key to begin\nquerying the next page most efficiently. Only one of offset or key\nshould be set.",in:"query",required:!1,schema:{type:"string",format:"byte"}},{name:"pagination.offset",description:"offset is a numeric offset that can be used when key is unavailable.\nIt is less efficient than using key. Only one of offset or key should\nbe set.",in:"query",required:!1,schema:{type:"string",format:"uint64"}},{name:"pagination.limit",description:"limit is the total number of results to be returned in the result page.\nIf left empty it will default to a value to be set by each app.",in:"query",required:!1,schema:{type:"string",format:"uint64"}},{name:"pagination.count_total",description:"count_total is set to true  to indicate that the result set should include\na count of the total number of items available for pagination in UIs.\ncount_total is only respected when offset is used. It is ignored when key\nis set.",in:"query",required:!1,schema:{type:"boolean"}},{name:"pagination.reverse",description:"reverse is set to true if results are to be returned in the descending order.\n\nSince: cosmos-sdk 0.43",in:"query",required:!1,schema:{type:"boolean"}}],tags:["Query"],description:"DenomsMetadata queries the client metadata for all registered coin\ndenominations.",method:"get",path:"/cosmos/bank/v1beta1/denoms_metadata",info:{title:"Greenfield - gRPC Gateway docs",description:"A REST interface for state queries",version:"1.0.0"},postman:{name:"DenomsMetadata queries the client metadata for all registered coin\ndenominations.",description:{type:"text/plain"},url:{path:["cosmos","bank","v1beta1","denoms_metadata"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"key is a value returned in PageResponse.next_key to begin\nquerying the next page most efficiently. Only one of offset or key\nshould be set.",type:"text/plain"},key:"pagination.key",value:""},{disabled:!1,description:{content:"offset is a numeric offset that can be used when key is unavailable.\nIt is less efficient than using key. Only one of offset or key should\nbe set.",type:"text/plain"},key:"pagination.offset",value:""},{disabled:!1,description:{content:"limit is the total number of results to be returned in the result page.\nIf left empty it will default to a value to be set by each app.",type:"text/plain"},key:"pagination.limit",value:""},{disabled:!1,description:{content:"count_total is set to true  to indicate that the result set should include\na count of the total number of items available for pagination in UIs.\ncount_total is only respected when offset is used. It is ignored when key\nis set.",type:"text/plain"},key:"pagination.count_total",value:""},{disabled:!1,description:{content:"reverse is set to true if results are to be returned in the descending order.\n\nSince: cosmos-sdk 0.43",type:"text/plain"},key:"pagination.reverse",value:""}],variable:[]},header:[{key:"Accept",value:"*/*"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/greenfield-api/greenfield-grpc-gateway-docs",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"DenomOwners",permalink:"/bnbgreenfield/docs/greenfield-api/denom-owners"},next:{title:"DenomsMetadata ",permalink:"/bnbgreenfield/docs/greenfield-api/denom-metadata"}},h={},f=[{value:"DenomsMetadata",id:"denomsmetadata",level:2}],g={toc:f};function b(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"denomsmetadata"},"DenomsMetadata"),(0,i.kt)("p",null,"DenomsMetadata queries the client metadata for all registered coin\ndenominations."),(0,i.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"Query Parameters")),(0,i.kt)("div",null,(0,i.kt)("ul",null,(0,i.kt)(r.Z,{className:"paramsItem",param:{name:"pagination.key",description:"key is a value returned in PageResponse.next_key to begin\nquerying the next page most efficiently. Only one of offset or key\nshould be set.",in:"query",required:!1,schema:{type:"string",format:"byte"}},mdxType:"ParamsItem"}),(0,i.kt)(r.Z,{className:"paramsItem",param:{name:"pagination.offset",description:"offset is a numeric offset that can be used when key is unavailable.\nIt is less efficient than using key. Only one of offset or key should\nbe set.",in:"query",required:!1,schema:{type:"string",format:"uint64"}},mdxType:"ParamsItem"}),(0,i.kt)(r.Z,{className:"paramsItem",param:{name:"pagination.limit",description:"limit is the total number of results to be returned in the result page.\nIf left empty it will default to a value to be set by each app.",in:"query",required:!1,schema:{type:"string",format:"uint64"}},mdxType:"ParamsItem"}),(0,i.kt)(r.Z,{className:"paramsItem",param:{name:"pagination.count_total",description:"count_total is set to true  to indicate that the result set should include\na count of the total number of items available for pagination in UIs.\ncount_total is only respected when offset is used. It is ignored when key\nis set.",in:"query",required:!1,schema:{type:"boolean"}},mdxType:"ParamsItem"}),(0,i.kt)(r.Z,{className:"paramsItem",param:{name:"pagination.reverse",description:"reverse is set to true if results are to be returned in the descending order.\n\nSince: cosmos-sdk 0.43",in:"query",required:!1,schema:{type:"boolean"}},mdxType:"ParamsItem"})))),(0,i.kt)("div",null,(0,i.kt)(s.Z,{mdxType:"ApiTabs"},(0,i.kt)(p.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"A successful response.")),(0,i.kt)("div",null,(0,i.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(p.Z,{label:"*/*",value:"*/*",mdxType:"TabItem"},(0,i.kt)(d.Z,{mdxType:"SchemaTabs"},(0,i.kt)(p.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"metadatas"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,i.kt)("p",null,"metadata provides the client information for all the registered tokens.")),(0,i.kt)("li",null,(0,i.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,i.kt)(l.Z,{collapsible:!1,name:"description",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"denom_units"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)("li",null,(0,i.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,i.kt)(l.Z,{collapsible:!1,name:"denom",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"denom represents the string name of the given denom unit (e.g uatom)."},mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"exponent",required:!1,schemaName:"int64",qualifierMessage:void 0,schema:{type:"integer",format:"int64",description:"exponent represents power of 10 exponent that one must\nraise the base_denom to in order to equal the given DenomUnit's denom\n1 denom = 10^exponent base_denom\n(e.g. with a base_denom of uatom, one can create a DenomUnit of 'atom' with\nexponent = 6, thus: 1 atom = 10^6 uatom)."},mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"aliases",required:!1,schemaName:"string[]",qualifierMessage:void 0,schema:{type:"array",items:{type:"string"},title:"aliases is a list of string aliases for the given denom"},mdxType:"SchemaItem"}),(0,i.kt)("li",null,(0,i.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,i.kt)(l.Z,{collapsible:!1,name:"base",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"base represents the base denom (should be the DenomUnit with exponent = 0)."},mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"display",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"display indicates the suggested denom that should be\ndisplayed in clients."},mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"name",required:!1,schemaName:"name defines the name of the token (eg: Cosmos Atom)",qualifierMessage:void 0,schema:{type:"string",description:"Since: cosmos-sdk 0.43",title:"name defines the name of the token (eg: Cosmos Atom)"},mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"symbol",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"symbol is the token symbol usually shown on exchanges (eg: ATOM). This can\nbe the same as the display.\n\nSince: cosmos-sdk 0.43"},mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"uri",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"URI to a document (on or off-chain) that contains additional information. Optional.\n\nSince: cosmos-sdk 0.46"},mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"uri_hash",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"URIHash is a sha256 hash of a document pointed by URI. It's used to verify that\nthe document didn't change. Optional.\n\nSince: cosmos-sdk 0.46"},mdxType:"SchemaItem"}),(0,i.kt)("li",null,(0,i.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,i.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"pagination"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,i.kt)("p",null,"pagination defines the pagination in the response.")),(0,i.kt)(l.Z,{collapsible:!1,name:"next_key",required:!1,schemaName:"byte",qualifierMessage:void 0,schema:{type:"string",format:"byte",description:"next_key is the key to be passed to PageRequest.key to\nquery the next page most efficiently. It will be empty if\nthere are no more results."},mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"total",required:!1,schemaName:"uint64",qualifierMessage:void 0,schema:{type:"string",format:"uint64",title:"total is total number of results available if PageRequest.count_total\nwas set, its value is undefined otherwise"},mdxType:"SchemaItem"}))))))),(0,i.kt)(p.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(m.Z,{responseExample:'{\n  "metadatas": [\n    {\n      "description": "string",\n      "denom_units": [\n        {\n          "denom": "string",\n          "exponent": 0,\n          "aliases": [\n            "string"\n          ]\n        }\n      ],\n      "base": "string",\n      "display": "string",\n      "name": "string",\n      "symbol": "string",\n      "uri": "string",\n      "uri_hash": "string"\n    }\n  ],\n  "pagination": {\n    "next_key": "string",\n    "total": "string"\n  }\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,i.kt)(p.Z,{label:"default",value:"default",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"An unexpected error response.")),(0,i.kt)("div",null,(0,i.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(p.Z,{label:"*/*",value:"*/*",mdxType:"TabItem"},(0,i.kt)(d.Z,{mdxType:"SchemaTabs"},(0,i.kt)(p.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(l.Z,{collapsible:!1,name:"error",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"code",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32"},mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"details"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)("li",null,(0,i.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,i.kt)(l.Z,{collapsible:!1,name:"type_url",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(l.Z,{collapsible:!1,name:"value",required:!1,schemaName:"byte",qualifierMessage:void 0,schema:{type:"string",format:"byte"},mdxType:"SchemaItem"}),(0,i.kt)("li",null,(0,i.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,i.kt)(p.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(m.Z,{responseExample:'{\n  "error": "string",\n  "code": 0,\n  "message": "string",\n  "details": [\n    {\n      "type_url": "string",\n      "value": "string"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}b.isMDXComponent=!0}}]);