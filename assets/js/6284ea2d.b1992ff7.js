"use strict";(self.webpackChunkgreenfield_docs=self.webpackChunkgreenfield_docs||[]).push([[2662],{19942:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>y,default:()=>b,frontMatter:()=>c,metadata:()=>g,toc:()=>u});var n=a(87462),i=(a(67294),a(3905)),s=a(26389),o=a(94891),r=a(75190),l=a(47507),d=a(24310),p=a(63303),m=(a(75035),a(85162));const c={id:"redelegations",title:"Redelegations queries redelegations of given address.",description:"Redelegations queries redelegations of given address.",sidebar_label:"Redelegations",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"Redelegations",responses:{200:{description:"A successful response.",content:{"*/*":{schema:{type:"object",properties:{redelegation_responses:{type:"array",items:{type:"object",properties:{redelegation:{type:"object",properties:{delegator_address:{type:"string",description:"delegator_address is the bech32-encoded address of the delegator."},validator_src_address:{type:"string",description:"validator_src_address is the validator redelegation source operator address."},validator_dst_address:{type:"string",description:"validator_dst_address is the validator redelegation destination operator address."},entries:{type:"array",items:{type:"object",properties:{creation_height:{type:"string",format:"int64",description:"creation_height  defines the height which the redelegation took place."},completion_time:{type:"string",format:"date-time",description:"completion_time defines the unix time for redelegation completion."},initial_balance:{type:"string",description:"initial_balance defines the initial balance when redelegation started."},shares_dst:{type:"string",description:"shares_dst is the amount of destination-validator shares created by redelegation."}},description:"RedelegationEntry defines a redelegation object with relevant metadata."},description:"entries are the redelegation entries."}},description:"Redelegation contains the list of a particular delegator's redelegating bonds\nfrom a particular source validator to a particular destination validator."},entries:{type:"array",items:{type:"object",properties:{redelegation_entry:{type:"object",properties:{creation_height:{type:"string",format:"int64",description:"creation_height  defines the height which the redelegation took place."},completion_time:{type:"string",format:"date-time",description:"completion_time defines the unix time for redelegation completion."},initial_balance:{type:"string",description:"initial_balance defines the initial balance when redelegation started."},shares_dst:{type:"string",description:"shares_dst is the amount of destination-validator shares created by redelegation."}},description:"RedelegationEntry defines a redelegation object with relevant metadata."},balance:{type:"string"}},description:"RedelegationEntryResponse is equivalent to a RedelegationEntry except that it\ncontains a balance in addition to shares which is more suitable for client\nresponses."}}},description:"RedelegationResponse is equivalent to a Redelegation except that its entries\ncontain a balance in addition to shares which is more suitable for client\nresponses."}},pagination:{description:"pagination defines the pagination in the response.",type:"object",properties:{next_key:{type:"string",format:"byte",description:"next_key is the key to be passed to PageRequest.key to\nquery the next page most efficiently. It will be empty if\nthere are no more results."},total:{type:"string",format:"uint64",title:"total is total number of results available if PageRequest.count_total\nwas set, its value is undefined otherwise"}}}},description:"QueryRedelegationsResponse is response type for the Query/Redelegations RPC\nmethod."}}}},default:{description:"An unexpected error response.",content:{"*/*":{schema:{type:"object",properties:{error:{type:"string"},code:{type:"integer",format:"int32"},message:{type:"string"},details:{type:"array",items:{type:"object",properties:{type_url:{type:"string",description:'A URL/resource name that uniquely identifies the type of the serialized\nprotocol buffer message. This string must contain at least\none "/" character. The last segment of the URL\'s path must represent\nthe fully qualified name of the type (as in\n`path/google.protobuf.Duration`). The name should be in a canonical form\n(e.g., leading "." is not accepted).\n\nIn practice, teams usually precompile into the binary all types that they\nexpect it to use in the context of Any. However, for URLs which use the\nscheme `http`, `https`, or no scheme, one can optionally set up a type\nserver that maps type URLs to message definitions as follows:\n\n* If no scheme is provided, `https` is assumed.\n* An HTTP GET on the URL must yield a [google.protobuf.Type][]\n  value in binary format, or produce an error.\n* Applications are allowed to cache lookup results based on the\n  URL, or have them precompiled into a binary to avoid any\n  lookup. Therefore, binary compatibility needs to be preserved\n  on changes to types. (Use versioned type names to manage\n  breaking changes.)\n\nNote: this functionality is not currently available in the official\nprotobuf release, and it is not used for type URLs beginning with\ntype.googleapis.com.\n\nSchemes other than `http`, `https` (or the empty scheme) might be\nused with implementation specific semantics.'},value:{type:"string",format:"byte",description:"Must be a valid serialized protocol buffer of the above specified type."}},description:'`Any` contains an arbitrary serialized protocol buffer message along with a\nURL that describes the type of the serialized message.\n\nProtobuf library provides support to pack/unpack Any values in the form\nof utility functions or additional generated methods of the Any type.\n\nExample 1: Pack and unpack a message in C++.\n\n    Foo foo = ...;\n    Any any;\n    any.PackFrom(foo);\n    ...\n    if (any.UnpackTo(&foo)) {\n      ...\n    }\n\nExample 2: Pack and unpack a message in Java.\n\n    Foo foo = ...;\n    Any any = Any.pack(foo);\n    ...\n    if (any.is(Foo.class)) {\n      foo = any.unpack(Foo.class);\n    }\n\n Example 3: Pack and unpack a message in Python.\n\n    foo = Foo(...)\n    any = Any()\n    any.Pack(foo)\n    ...\n    if any.Is(Foo.DESCRIPTOR):\n      any.Unpack(foo)\n      ...\n\n Example 4: Pack and unpack a message in Go\n\n     foo := &pb.Foo{...}\n     any, err := ptypes.MarshalAny(foo)\n     ...\n     foo := &pb.Foo{}\n     if err := ptypes.UnmarshalAny(any, foo); err != nil {\n       ...\n     }\n\nThe pack methods provided by protobuf library will by default use\n\'type.googleapis.com/full.type.name\' as the type URL and the unpack\nmethods only use the fully qualified type name after the last \'/\'\nin the type URL, for example "foo.bar.com/x/y.z" will yield type\nname "y.z".\n\n\nJSON\n====\nThe JSON representation of an `Any` value uses the regular\nrepresentation of the deserialized, embedded message, with an\nadditional field `@type` which contains the type URL. Example:\n\n    package google.profile;\n    message Person {\n      string first_name = 1;\n      string last_name = 2;\n    }\n\n    {\n      "@type": "type.googleapis.com/google.profile.Person",\n      "firstName": <string>,\n      "lastName": <string>\n    }\n\nIf the embedded message type is well-known and has a custom JSON\nrepresentation, that representation will be embedded adding a field\n`value` which holds the custom JSON in addition to the `@type`\nfield. Example (for message [google.protobuf.Duration][]):\n\n    {\n      "@type": "type.googleapis.com/google.protobuf.Duration",\n      "value": "1.212s"\n    }'}}}}}}}},parameters:[{name:"delegator_addr",description:"delegator_addr defines the delegator address to query for.",in:"path",required:!0,schema:{type:"string"}},{name:"src_validator_addr",description:"src_validator_addr defines the validator address to redelegate from.",in:"query",required:!1,schema:{type:"string"}},{name:"dst_validator_addr",description:"dst_validator_addr defines the validator address to redelegate to.",in:"query",required:!1,schema:{type:"string"}},{name:"pagination.key",description:"key is a value returned in PageResponse.next_key to begin\nquerying the next page most efficiently. Only one of offset or key\nshould be set.",in:"query",required:!1,schema:{type:"string",format:"byte"}},{name:"pagination.offset",description:"offset is a numeric offset that can be used when key is unavailable.\nIt is less efficient than using key. Only one of offset or key should\nbe set.",in:"query",required:!1,schema:{type:"string",format:"uint64"}},{name:"pagination.limit",description:"limit is the total number of results to be returned in the result page.\nIf left empty it will default to a value to be set by each app.",in:"query",required:!1,schema:{type:"string",format:"uint64"}},{name:"pagination.count_total",description:"count_total is set to true  to indicate that the result set should include\na count of the total number of items available for pagination in UIs.\ncount_total is only respected when offset is used. It is ignored when key\nis set.",in:"query",required:!1,schema:{type:"boolean"}},{name:"pagination.reverse",description:"reverse is set to true if results are to be returned in the descending order.\n\nSince: cosmos-sdk 0.43",in:"query",required:!1,schema:{type:"boolean"}}],tags:["Query"],description:"Redelegations queries redelegations of given address.",method:"get",path:"/cosmos/staking/v1beta1/delegators/{delegator_addr}/redelegations",info:{title:"Greenfield - gRPC Gateway docs",description:"A REST interface for state queries",version:"1.0.0"},postman:{name:"Redelegations queries redelegations of given address.",description:{type:"text/plain"},url:{path:["cosmos","staking","v1beta1","delegators",":delegator_addr","redelegations"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"src_validator_addr defines the validator address to redelegate from.",type:"text/plain"},key:"src_validator_addr",value:""},{disabled:!1,description:{content:"dst_validator_addr defines the validator address to redelegate to.",type:"text/plain"},key:"dst_validator_addr",value:""},{disabled:!1,description:{content:"key is a value returned in PageResponse.next_key to begin\nquerying the next page most efficiently. Only one of offset or key\nshould be set.",type:"text/plain"},key:"pagination.key",value:""},{disabled:!1,description:{content:"offset is a numeric offset that can be used when key is unavailable.\nIt is less efficient than using key. Only one of offset or key should\nbe set.",type:"text/plain"},key:"pagination.offset",value:""},{disabled:!1,description:{content:"limit is the total number of results to be returned in the result page.\nIf left empty it will default to a value to be set by each app.",type:"text/plain"},key:"pagination.limit",value:""},{disabled:!1,description:{content:"count_total is set to true  to indicate that the result set should include\na count of the total number of items available for pagination in UIs.\ncount_total is only respected when offset is used. It is ignored when key\nis set.",type:"text/plain"},key:"pagination.count_total",value:""},{disabled:!1,description:{content:"reverse is set to true if results are to be returned in the descending order.\n\nSince: cosmos-sdk 0.43",type:"text/plain"},key:"pagination.reverse",value:""}],variable:[{disabled:!1,description:{content:"(Required) delegator_addr defines the delegator address to query for.",type:"text/plain"},type:"any",value:"",key:"delegator_addr"}]},header:[{key:"Accept",value:"*/*"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/greenfield-api/greenfield-grpc-gateway-docs",custom_edit_url:null},y=void 0,g={unversionedId:"greenfield-api/redelegations",id:"greenfield-api/redelegations",title:"Redelegations queries redelegations of given address.",description:"Redelegations queries redelegations of given address.",source:"@site/docs/greenfield-api/redelegations.api.mdx",sourceDirName:"greenfield-api",slug:"/greenfield-api/redelegations",permalink:"/bnbgreenfield-docs/docs/greenfield-api/redelegations",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"redelegations",title:"Redelegations queries redelegations of given address.",description:"Redelegations queries redelegations of given address.",sidebar_label:"Redelegations",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"Redelegations",responses:{200:{description:"A successful response.",content:{"*/*":{schema:{type:"object",properties:{redelegation_responses:{type:"array",items:{type:"object",properties:{redelegation:{type:"object",properties:{delegator_address:{type:"string",description:"delegator_address is the bech32-encoded address of the delegator."},validator_src_address:{type:"string",description:"validator_src_address is the validator redelegation source operator address."},validator_dst_address:{type:"string",description:"validator_dst_address is the validator redelegation destination operator address."},entries:{type:"array",items:{type:"object",properties:{creation_height:{type:"string",format:"int64",description:"creation_height  defines the height which the redelegation took place."},completion_time:{type:"string",format:"date-time",description:"completion_time defines the unix time for redelegation completion."},initial_balance:{type:"string",description:"initial_balance defines the initial balance when redelegation started."},shares_dst:{type:"string",description:"shares_dst is the amount of destination-validator shares created by redelegation."}},description:"RedelegationEntry defines a redelegation object with relevant metadata."},description:"entries are the redelegation entries."}},description:"Redelegation contains the list of a particular delegator's redelegating bonds\nfrom a particular source validator to a particular destination validator."},entries:{type:"array",items:{type:"object",properties:{redelegation_entry:{type:"object",properties:{creation_height:{type:"string",format:"int64",description:"creation_height  defines the height which the redelegation took place."},completion_time:{type:"string",format:"date-time",description:"completion_time defines the unix time for redelegation completion."},initial_balance:{type:"string",description:"initial_balance defines the initial balance when redelegation started."},shares_dst:{type:"string",description:"shares_dst is the amount of destination-validator shares created by redelegation."}},description:"RedelegationEntry defines a redelegation object with relevant metadata."},balance:{type:"string"}},description:"RedelegationEntryResponse is equivalent to a RedelegationEntry except that it\ncontains a balance in addition to shares which is more suitable for client\nresponses."}}},description:"RedelegationResponse is equivalent to a Redelegation except that its entries\ncontain a balance in addition to shares which is more suitable for client\nresponses."}},pagination:{description:"pagination defines the pagination in the response.",type:"object",properties:{next_key:{type:"string",format:"byte",description:"next_key is the key to be passed to PageRequest.key to\nquery the next page most efficiently. It will be empty if\nthere are no more results."},total:{type:"string",format:"uint64",title:"total is total number of results available if PageRequest.count_total\nwas set, its value is undefined otherwise"}}}},description:"QueryRedelegationsResponse is response type for the Query/Redelegations RPC\nmethod."}}}},default:{description:"An unexpected error response.",content:{"*/*":{schema:{type:"object",properties:{error:{type:"string"},code:{type:"integer",format:"int32"},message:{type:"string"},details:{type:"array",items:{type:"object",properties:{type_url:{type:"string",description:'A URL/resource name that uniquely identifies the type of the serialized\nprotocol buffer message. This string must contain at least\none "/" character. The last segment of the URL\'s path must represent\nthe fully qualified name of the type (as in\n`path/google.protobuf.Duration`). The name should be in a canonical form\n(e.g., leading "." is not accepted).\n\nIn practice, teams usually precompile into the binary all types that they\nexpect it to use in the context of Any. However, for URLs which use the\nscheme `http`, `https`, or no scheme, one can optionally set up a type\nserver that maps type URLs to message definitions as follows:\n\n* If no scheme is provided, `https` is assumed.\n* An HTTP GET on the URL must yield a [google.protobuf.Type][]\n  value in binary format, or produce an error.\n* Applications are allowed to cache lookup results based on the\n  URL, or have them precompiled into a binary to avoid any\n  lookup. Therefore, binary compatibility needs to be preserved\n  on changes to types. (Use versioned type names to manage\n  breaking changes.)\n\nNote: this functionality is not currently available in the official\nprotobuf release, and it is not used for type URLs beginning with\ntype.googleapis.com.\n\nSchemes other than `http`, `https` (or the empty scheme) might be\nused with implementation specific semantics.'},value:{type:"string",format:"byte",description:"Must be a valid serialized protocol buffer of the above specified type."}},description:'`Any` contains an arbitrary serialized protocol buffer message along with a\nURL that describes the type of the serialized message.\n\nProtobuf library provides support to pack/unpack Any values in the form\nof utility functions or additional generated methods of the Any type.\n\nExample 1: Pack and unpack a message in C++.\n\n    Foo foo = ...;\n    Any any;\n    any.PackFrom(foo);\n    ...\n    if (any.UnpackTo(&foo)) {\n      ...\n    }\n\nExample 2: Pack and unpack a message in Java.\n\n    Foo foo = ...;\n    Any any = Any.pack(foo);\n    ...\n    if (any.is(Foo.class)) {\n      foo = any.unpack(Foo.class);\n    }\n\n Example 3: Pack and unpack a message in Python.\n\n    foo = Foo(...)\n    any = Any()\n    any.Pack(foo)\n    ...\n    if any.Is(Foo.DESCRIPTOR):\n      any.Unpack(foo)\n      ...\n\n Example 4: Pack and unpack a message in Go\n\n     foo := &pb.Foo{...}\n     any, err := ptypes.MarshalAny(foo)\n     ...\n     foo := &pb.Foo{}\n     if err := ptypes.UnmarshalAny(any, foo); err != nil {\n       ...\n     }\n\nThe pack methods provided by protobuf library will by default use\n\'type.googleapis.com/full.type.name\' as the type URL and the unpack\nmethods only use the fully qualified type name after the last \'/\'\nin the type URL, for example "foo.bar.com/x/y.z" will yield type\nname "y.z".\n\n\nJSON\n====\nThe JSON representation of an `Any` value uses the regular\nrepresentation of the deserialized, embedded message, with an\nadditional field `@type` which contains the type URL. Example:\n\n    package google.profile;\n    message Person {\n      string first_name = 1;\n      string last_name = 2;\n    }\n\n    {\n      "@type": "type.googleapis.com/google.profile.Person",\n      "firstName": <string>,\n      "lastName": <string>\n    }\n\nIf the embedded message type is well-known and has a custom JSON\nrepresentation, that representation will be embedded adding a field\n`value` which holds the custom JSON in addition to the `@type`\nfield. Example (for message [google.protobuf.Duration][]):\n\n    {\n      "@type": "type.googleapis.com/google.protobuf.Duration",\n      "value": "1.212s"\n    }'}}}}}}}},parameters:[{name:"delegator_addr",description:"delegator_addr defines the delegator address to query for.",in:"path",required:!0,schema:{type:"string"}},{name:"src_validator_addr",description:"src_validator_addr defines the validator address to redelegate from.",in:"query",required:!1,schema:{type:"string"}},{name:"dst_validator_addr",description:"dst_validator_addr defines the validator address to redelegate to.",in:"query",required:!1,schema:{type:"string"}},{name:"pagination.key",description:"key is a value returned in PageResponse.next_key to begin\nquerying the next page most efficiently. Only one of offset or key\nshould be set.",in:"query",required:!1,schema:{type:"string",format:"byte"}},{name:"pagination.offset",description:"offset is a numeric offset that can be used when key is unavailable.\nIt is less efficient than using key. Only one of offset or key should\nbe set.",in:"query",required:!1,schema:{type:"string",format:"uint64"}},{name:"pagination.limit",description:"limit is the total number of results to be returned in the result page.\nIf left empty it will default to a value to be set by each app.",in:"query",required:!1,schema:{type:"string",format:"uint64"}},{name:"pagination.count_total",description:"count_total is set to true  to indicate that the result set should include\na count of the total number of items available for pagination in UIs.\ncount_total is only respected when offset is used. It is ignored when key\nis set.",in:"query",required:!1,schema:{type:"boolean"}},{name:"pagination.reverse",description:"reverse is set to true if results are to be returned in the descending order.\n\nSince: cosmos-sdk 0.43",in:"query",required:!1,schema:{type:"boolean"}}],tags:["Query"],description:"Redelegations queries redelegations of given address.",method:"get",path:"/cosmos/staking/v1beta1/delegators/{delegator_addr}/redelegations",info:{title:"Greenfield - gRPC Gateway docs",description:"A REST interface for state queries",version:"1.0.0"},postman:{name:"Redelegations queries redelegations of given address.",description:{type:"text/plain"},url:{path:["cosmos","staking","v1beta1","delegators",":delegator_addr","redelegations"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"src_validator_addr defines the validator address to redelegate from.",type:"text/plain"},key:"src_validator_addr",value:""},{disabled:!1,description:{content:"dst_validator_addr defines the validator address to redelegate to.",type:"text/plain"},key:"dst_validator_addr",value:""},{disabled:!1,description:{content:"key is a value returned in PageResponse.next_key to begin\nquerying the next page most efficiently. Only one of offset or key\nshould be set.",type:"text/plain"},key:"pagination.key",value:""},{disabled:!1,description:{content:"offset is a numeric offset that can be used when key is unavailable.\nIt is less efficient than using key. Only one of offset or key should\nbe set.",type:"text/plain"},key:"pagination.offset",value:""},{disabled:!1,description:{content:"limit is the total number of results to be returned in the result page.\nIf left empty it will default to a value to be set by each app.",type:"text/plain"},key:"pagination.limit",value:""},{disabled:!1,description:{content:"count_total is set to true  to indicate that the result set should include\na count of the total number of items available for pagination in UIs.\ncount_total is only respected when offset is used. It is ignored when key\nis set.",type:"text/plain"},key:"pagination.count_total",value:""},{disabled:!1,description:{content:"reverse is set to true if results are to be returned in the descending order.\n\nSince: cosmos-sdk 0.43",type:"text/plain"},key:"pagination.reverse",value:""}],variable:[{disabled:!1,description:{content:"(Required) delegator_addr defines the delegator address to query for.",type:"text/plain"},type:"any",value:"",key:"delegator_addr"}]},header:[{key:"Accept",value:"*/*"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/greenfield-api/greenfield-grpc-gateway-docs",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Delegator Delegations",permalink:"/bnbgreenfield-docs/docs/greenfield-api/delegator-delegations"},next:{title:"Delegator Unbonding Delegations",permalink:"/bnbgreenfield-docs/docs/greenfield-api/delegator-unbonding-delegations"}},h={},u=[{value:"Redelegations",id:"redelegations",level:2}],f={toc:u};function b(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"redelegations"},"Redelegations"),(0,i.kt)("p",null,"Redelegations queries redelegations of given address."),(0,i.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"Path Parameters")),(0,i.kt)("div",null,(0,i.kt)("ul",null,(0,i.kt)(r.Z,{className:"paramsItem",param:{name:"delegator_addr",description:"delegator_addr defines the delegator address to query for.",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,i.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"Query Parameters")),(0,i.kt)("div",null,(0,i.kt)("ul",null,(0,i.kt)(r.Z,{className:"paramsItem",param:{name:"src_validator_addr",description:"src_validator_addr defines the validator address to redelegate from.",in:"query",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,i.kt)(r.Z,{className:"paramsItem",param:{name:"dst_validator_addr",description:"dst_validator_addr defines the validator address to redelegate to.",in:"query",required:!1,schema:{type:"string"}},mdxType:"ParamsItem"}),(0,i.kt)(r.Z,{className:"paramsItem",param:{name:"pagination.key",description:"key is a value returned in PageResponse.next_key to begin\nquerying the next page most efficiently. Only one of offset or key\nshould be set.",in:"query",required:!1,schema:{type:"string",format:"byte"}},mdxType:"ParamsItem"}),(0,i.kt)(r.Z,{className:"paramsItem",param:{name:"pagination.offset",description:"offset is a numeric offset that can be used when key is unavailable.\nIt is less efficient than using key. Only one of offset or key should\nbe set.",in:"query",required:!1,schema:{type:"string",format:"uint64"}},mdxType:"ParamsItem"}),(0,i.kt)(r.Z,{className:"paramsItem",param:{name:"pagination.limit",description:"limit is the total number of results to be returned in the result page.\nIf left empty it will default to a value to be set by each app.",in:"query",required:!1,schema:{type:"string",format:"uint64"}},mdxType:"ParamsItem"}),(0,i.kt)(r.Z,{className:"paramsItem",param:{name:"pagination.count_total",description:"count_total is set to true  to indicate that the result set should include\na count of the total number of items available for pagination in UIs.\ncount_total is only respected when offset is used. It is ignored when key\nis set.",in:"query",required:!1,schema:{type:"boolean"}},mdxType:"ParamsItem"}),(0,i.kt)(r.Z,{className:"paramsItem",param:{name:"pagination.reverse",description:"reverse is set to true if results are to be returned in the descending order.\n\nSince: cosmos-sdk 0.43",in:"query",required:!1,schema:{type:"boolean"}},mdxType:"ParamsItem"})))),(0,i.kt)("div",null,(0,i.kt)(s.Z,{mdxType:"ApiTabs"},(0,i.kt)(m.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"A successful response.")),(0,i.kt)("div",null,(0,i.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(m.Z,{label:"*/*",value:"*/*",mdxType:"TabItem"},(0,i.kt)(p.Z,{mdxType:"SchemaTabs"},(0,i.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"redelegation_responses"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)("li",null,(0,i.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,i.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"redelegation"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,i.kt)("p",null,"Redelegation contains the list of a particular delegator's redelegating bonds\nfrom a particular source validator to a particular destination validator.")),(0,i.kt)(d.Z,{collapsible:!1,name:"delegator_address",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"delegator_address is the bech32-encoded address of the delegator."},mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"validator_src_address",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"validator_src_address is the validator redelegation source operator address."},mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"validator_dst_address",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"validator_dst_address is the validator redelegation destination operator address."},mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"entries"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,i.kt)("p",null,"entries are the redelegation entries.")),(0,i.kt)("li",null,(0,i.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,i.kt)(d.Z,{collapsible:!1,name:"creation_height",required:!1,schemaName:"int64",qualifierMessage:void 0,schema:{type:"string",format:"int64",description:"creation_height  defines the height which the redelegation took place."},mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"completion_time",required:!1,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time",description:"completion_time defines the unix time for redelegation completion."},mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"initial_balance",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"initial_balance defines the initial balance when redelegation started."},mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"shares_dst",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"shares_dst is the amount of destination-validator shares created by redelegation."},mdxType:"SchemaItem"}),(0,i.kt)("li",null,(0,i.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,i.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"entries"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)("li",null,(0,i.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,i.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"redelegation_entry"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,i.kt)("p",null,"RedelegationEntry defines a redelegation object with relevant metadata.")),(0,i.kt)(d.Z,{collapsible:!1,name:"creation_height",required:!1,schemaName:"int64",qualifierMessage:void 0,schema:{type:"string",format:"int64",description:"creation_height  defines the height which the redelegation took place."},mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"completion_time",required:!1,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time",description:"completion_time defines the unix time for redelegation completion."},mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"initial_balance",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"initial_balance defines the initial balance when redelegation started."},mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"shares_dst",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"shares_dst is the amount of destination-validator shares created by redelegation."},mdxType:"SchemaItem"})))),(0,i.kt)(d.Z,{collapsible:!1,name:"balance",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)("li",null,(0,i.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,i.kt)("li",null,(0,i.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,i.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"pagination"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,i.kt)("p",null,"pagination defines the pagination in the response.")),(0,i.kt)(d.Z,{collapsible:!1,name:"next_key",required:!1,schemaName:"byte",qualifierMessage:void 0,schema:{type:"string",format:"byte",description:"next_key is the key to be passed to PageRequest.key to\nquery the next page most efficiently. It will be empty if\nthere are no more results."},mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"total",required:!1,schemaName:"uint64",qualifierMessage:void 0,schema:{type:"string",format:"uint64",title:"total is total number of results available if PageRequest.count_total\nwas set, its value is undefined otherwise"},mdxType:"SchemaItem"}))))))),(0,i.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(l.Z,{responseExample:'{\n  "redelegation_responses": [\n    {\n      "redelegation": {\n        "delegator_address": "string",\n        "validator_src_address": "string",\n        "validator_dst_address": "string",\n        "entries": [\n          {\n            "creation_height": "string",\n            "completion_time": "2023-05-26T13:35:10.602Z",\n            "initial_balance": "string",\n            "shares_dst": "string"\n          }\n        ]\n      },\n      "entries": [\n        {\n          "redelegation_entry": {\n            "creation_height": "string",\n            "completion_time": "2023-05-26T13:35:10.602Z",\n            "initial_balance": "string",\n            "shares_dst": "string"\n          },\n          "balance": "string"\n        }\n      ]\n    }\n  ],\n  "pagination": {\n    "next_key": "string",\n    "total": "string"\n  }\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,i.kt)(m.Z,{label:"default",value:"default",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"An unexpected error response.")),(0,i.kt)("div",null,(0,i.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(m.Z,{label:"*/*",value:"*/*",mdxType:"TabItem"},(0,i.kt)(p.Z,{mdxType:"SchemaTabs"},(0,i.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(d.Z,{collapsible:!1,name:"error",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"code",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32"},mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"details"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)("li",null,(0,i.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,i.kt)(d.Z,{collapsible:!1,name:"type_url",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:'A URL/resource name that uniquely identifies the type of the serialized\nprotocol buffer message. This string must contain at least\none "/" character. The last segment of the URL\'s path must represent\nthe fully qualified name of the type (as in\n`path/google.protobuf.Duration`). The name should be in a canonical form\n(e.g., leading "." is not accepted).\n\nIn practice, teams usually precompile into the binary all types that they\nexpect it to use in the context of Any. However, for URLs which use the\nscheme `http`, `https`, or no scheme, one can optionally set up a type\nserver that maps type URLs to message definitions as follows:\n\n* If no scheme is provided, `https` is assumed.\n* An HTTP GET on the URL must yield a [google.protobuf.Type][]\n  value in binary format, or produce an error.\n* Applications are allowed to cache lookup results based on the\n  URL, or have them precompiled into a binary to avoid any\n  lookup. Therefore, binary compatibility needs to be preserved\n  on changes to types. (Use versioned type names to manage\n  breaking changes.)\n\nNote: this functionality is not currently available in the official\nprotobuf release, and it is not used for type URLs beginning with\ntype.googleapis.com.\n\nSchemes other than `http`, `https` (or the empty scheme) might be\nused with implementation specific semantics.'},mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"value",required:!1,schemaName:"byte",qualifierMessage:void 0,schema:{type:"string",format:"byte",description:"Must be a valid serialized protocol buffer of the above specified type."},mdxType:"SchemaItem"}),(0,i.kt)("li",null,(0,i.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,i.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(l.Z,{responseExample:'{\n  "error": "string",\n  "code": 0,\n  "message": "string",\n  "details": [\n    {\n      "type_url": "string",\n      "value": "string"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}b.isMDXComponent=!0}}]);