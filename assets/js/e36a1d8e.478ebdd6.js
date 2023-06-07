"use strict";(self.webpackChunkgreenfield_docs=self.webpackChunkgreenfield_docs||[]).push([[5506],{35455:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>f,contentTitle:()=>h,default:()=>T,frontMatter:()=>c,metadata:()=>y,toc:()=>u});var n=o(87462),a=(o(67294),o(3905)),i=o(26389),s=o(94891),r=o(75190),p=o(47507),l=o(24310),d=o(63303),m=(o(75035),o(85162));const c={id:"vote",title:"Vote queries voted information based on proposalID, voterAddr.",description:"Vote queries voted information based on proposalID, voterAddr.",sidebar_label:"Vote",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"Vote",responses:{200:{description:"A successful response.",content:{"*/*":{schema:{type:"object",properties:{vote:{type:"object",properties:{proposal_id:{type:"string",format:"uint64"},voter:{type:"string"},option:{description:"Deprecated: Prefer to use `options` instead. This field is set in queries\nif and only if `len(options) == 1` and that option has weight 1. In all\nother cases, this field will default to VOTE_OPTION_UNSPECIFIED.",type:"string",enum:["VOTE_OPTION_UNSPECIFIED","VOTE_OPTION_YES","VOTE_OPTION_ABSTAIN","VOTE_OPTION_NO","VOTE_OPTION_NO_WITH_VETO"],default:"VOTE_OPTION_UNSPECIFIED"},options:{type:"array",items:{type:"object",properties:{option:{type:"string",enum:["VOTE_OPTION_UNSPECIFIED","VOTE_OPTION_YES","VOTE_OPTION_ABSTAIN","VOTE_OPTION_NO","VOTE_OPTION_NO_WITH_VETO"],default:"VOTE_OPTION_UNSPECIFIED",description:"VoteOption enumerates the valid vote options for a given governance proposal.\n\n - VOTE_OPTION_UNSPECIFIED: VOTE_OPTION_UNSPECIFIED defines a no-op vote option.\n - VOTE_OPTION_YES: VOTE_OPTION_YES defines a yes vote option.\n - VOTE_OPTION_ABSTAIN: VOTE_OPTION_ABSTAIN defines an abstain vote option.\n - VOTE_OPTION_NO: VOTE_OPTION_NO defines a no vote option.\n - VOTE_OPTION_NO_WITH_VETO: VOTE_OPTION_NO_WITH_VETO defines a no with veto vote option."},weight:{type:"string"}},description:"WeightedVoteOption defines a unit of vote for vote split.\n\nSince: cosmos-sdk 0.43"},title:"Since: cosmos-sdk 0.43"}},description:"Vote defines a vote on a governance proposal.\nA Vote consists of a proposal ID, the voter, and the vote option."}},description:"QueryVoteResponse is the response type for the Query/Vote RPC method."}}}},default:{description:"An unexpected error response.",content:{"*/*":{schema:{type:"object",properties:{error:{type:"string"},code:{type:"integer",format:"int32"},message:{type:"string"},details:{type:"array",items:{type:"object",properties:{type_url:{type:"string",description:'A URL/resource name that uniquely identifies the type of the serialized\nprotocol buffer message. This string must contain at least\none "/" character. The last segment of the URL\'s path must represent\nthe fully qualified name of the type (as in\n`path/google.protobuf.Duration`). The name should be in a canonical form\n(e.g., leading "." is not accepted).\n\nIn practice, teams usually precompile into the binary all types that they\nexpect it to use in the context of Any. However, for URLs which use the\nscheme `http`, `https`, or no scheme, one can optionally set up a type\nserver that maps type URLs to message definitions as follows:\n\n* If no scheme is provided, `https` is assumed.\n* An HTTP GET on the URL must yield a [google.protobuf.Type][]\n  value in binary format, or produce an error.\n* Applications are allowed to cache lookup results based on the\n  URL, or have them precompiled into a binary to avoid any\n  lookup. Therefore, binary compatibility needs to be preserved\n  on changes to types. (Use versioned type names to manage\n  breaking changes.)\n\nNote: this functionality is not currently available in the official\nprotobuf release, and it is not used for type URLs beginning with\ntype.googleapis.com.\n\nSchemes other than `http`, `https` (or the empty scheme) might be\nused with implementation specific semantics.'},value:{type:"string",format:"byte",description:"Must be a valid serialized protocol buffer of the above specified type."}},description:'`Any` contains an arbitrary serialized protocol buffer message along with a\nURL that describes the type of the serialized message.\n\nProtobuf library provides support to pack/unpack Any values in the form\nof utility functions or additional generated methods of the Any type.\n\nExample 1: Pack and unpack a message in C++.\n\n    Foo foo = ...;\n    Any any;\n    any.PackFrom(foo);\n    ...\n    if (any.UnpackTo(&foo)) {\n      ...\n    }\n\nExample 2: Pack and unpack a message in Java.\n\n    Foo foo = ...;\n    Any any = Any.pack(foo);\n    ...\n    if (any.is(Foo.class)) {\n      foo = any.unpack(Foo.class);\n    }\n\n Example 3: Pack and unpack a message in Python.\n\n    foo = Foo(...)\n    any = Any()\n    any.Pack(foo)\n    ...\n    if any.Is(Foo.DESCRIPTOR):\n      any.Unpack(foo)\n      ...\n\n Example 4: Pack and unpack a message in Go\n\n     foo := &pb.Foo{...}\n     any, err := ptypes.MarshalAny(foo)\n     ...\n     foo := &pb.Foo{}\n     if err := ptypes.UnmarshalAny(any, foo); err != nil {\n       ...\n     }\n\nThe pack methods provided by protobuf library will by default use\n\'type.googleapis.com/full.type.name\' as the type URL and the unpack\nmethods only use the fully qualified type name after the last \'/\'\nin the type URL, for example "foo.bar.com/x/y.z" will yield type\nname "y.z".\n\n\nJSON\n====\nThe JSON representation of an `Any` value uses the regular\nrepresentation of the deserialized, embedded message, with an\nadditional field `@type` which contains the type URL. Example:\n\n    package google.profile;\n    message Person {\n      string first_name = 1;\n      string last_name = 2;\n    }\n\n    {\n      "@type": "type.googleapis.com/google.profile.Person",\n      "firstName": <string>,\n      "lastName": <string>\n    }\n\nIf the embedded message type is well-known and has a custom JSON\nrepresentation, that representation will be embedded adding a field\n`value` which holds the custom JSON in addition to the `@type`\nfield. Example (for message [google.protobuf.Duration][]):\n\n    {\n      "@type": "type.googleapis.com/google.protobuf.Duration",\n      "value": "1.212s"\n    }'}}}}}}}},parameters:[{name:"proposal_id",description:"proposal_id defines the unique id of the proposal.",in:"path",required:!0,schema:{type:"string",format:"uint64"}},{name:"voter",description:"voter defines the voter address for the proposals.",in:"path",required:!0,schema:{type:"string"}}],tags:["Query"],description:"Vote queries voted information based on proposalID, voterAddr.",method:"get",path:"/cosmos/gov/v1beta1/proposals/{proposal_id}/votes/{voter}",info:{title:"Greenfield - gRPC Gateway docs",description:"A REST interface for state queries",version:"1.0.0"},postman:{name:"Vote queries voted information based on proposalID, voterAddr.",description:{type:"text/plain"},url:{path:["cosmos","gov","v1beta1","proposals",":proposal_id","votes",":voter"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) proposal_id defines the unique id of the proposal.",type:"text/plain"},type:"any",value:"",key:"proposal_id"},{disabled:!1,description:{content:"(Required) voter defines the voter address for the proposals.",type:"text/plain"},type:"any",value:"",key:"voter"}]},header:[{key:"Accept",value:"*/*"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/greenfield-api/greenfield-grpc-gateway-docs",custom_edit_url:null},h=void 0,y={unversionedId:"greenfield-api/vote",id:"greenfield-api/vote",title:"Vote queries voted information based on proposalID, voterAddr.",description:"Vote queries voted information based on proposalID, voterAddr.",source:"@site/docs/greenfield-api/vote.api.mdx",sourceDirName:"greenfield-api",slug:"/greenfield-api/vote",permalink:"/bnbgreenfield/docs/greenfield-api/vote",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"vote",title:"Vote queries voted information based on proposalID, voterAddr.",description:"Vote queries voted information based on proposalID, voterAddr.",sidebar_label:"Vote",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"Vote",responses:{200:{description:"A successful response.",content:{"*/*":{schema:{type:"object",properties:{vote:{type:"object",properties:{proposal_id:{type:"string",format:"uint64"},voter:{type:"string"},option:{description:"Deprecated: Prefer to use `options` instead. This field is set in queries\nif and only if `len(options) == 1` and that option has weight 1. In all\nother cases, this field will default to VOTE_OPTION_UNSPECIFIED.",type:"string",enum:["VOTE_OPTION_UNSPECIFIED","VOTE_OPTION_YES","VOTE_OPTION_ABSTAIN","VOTE_OPTION_NO","VOTE_OPTION_NO_WITH_VETO"],default:"VOTE_OPTION_UNSPECIFIED"},options:{type:"array",items:{type:"object",properties:{option:{type:"string",enum:["VOTE_OPTION_UNSPECIFIED","VOTE_OPTION_YES","VOTE_OPTION_ABSTAIN","VOTE_OPTION_NO","VOTE_OPTION_NO_WITH_VETO"],default:"VOTE_OPTION_UNSPECIFIED",description:"VoteOption enumerates the valid vote options for a given governance proposal.\n\n - VOTE_OPTION_UNSPECIFIED: VOTE_OPTION_UNSPECIFIED defines a no-op vote option.\n - VOTE_OPTION_YES: VOTE_OPTION_YES defines a yes vote option.\n - VOTE_OPTION_ABSTAIN: VOTE_OPTION_ABSTAIN defines an abstain vote option.\n - VOTE_OPTION_NO: VOTE_OPTION_NO defines a no vote option.\n - VOTE_OPTION_NO_WITH_VETO: VOTE_OPTION_NO_WITH_VETO defines a no with veto vote option."},weight:{type:"string"}},description:"WeightedVoteOption defines a unit of vote for vote split.\n\nSince: cosmos-sdk 0.43"},title:"Since: cosmos-sdk 0.43"}},description:"Vote defines a vote on a governance proposal.\nA Vote consists of a proposal ID, the voter, and the vote option."}},description:"QueryVoteResponse is the response type for the Query/Vote RPC method."}}}},default:{description:"An unexpected error response.",content:{"*/*":{schema:{type:"object",properties:{error:{type:"string"},code:{type:"integer",format:"int32"},message:{type:"string"},details:{type:"array",items:{type:"object",properties:{type_url:{type:"string",description:'A URL/resource name that uniquely identifies the type of the serialized\nprotocol buffer message. This string must contain at least\none "/" character. The last segment of the URL\'s path must represent\nthe fully qualified name of the type (as in\n`path/google.protobuf.Duration`). The name should be in a canonical form\n(e.g., leading "." is not accepted).\n\nIn practice, teams usually precompile into the binary all types that they\nexpect it to use in the context of Any. However, for URLs which use the\nscheme `http`, `https`, or no scheme, one can optionally set up a type\nserver that maps type URLs to message definitions as follows:\n\n* If no scheme is provided, `https` is assumed.\n* An HTTP GET on the URL must yield a [google.protobuf.Type][]\n  value in binary format, or produce an error.\n* Applications are allowed to cache lookup results based on the\n  URL, or have them precompiled into a binary to avoid any\n  lookup. Therefore, binary compatibility needs to be preserved\n  on changes to types. (Use versioned type names to manage\n  breaking changes.)\n\nNote: this functionality is not currently available in the official\nprotobuf release, and it is not used for type URLs beginning with\ntype.googleapis.com.\n\nSchemes other than `http`, `https` (or the empty scheme) might be\nused with implementation specific semantics.'},value:{type:"string",format:"byte",description:"Must be a valid serialized protocol buffer of the above specified type."}},description:'`Any` contains an arbitrary serialized protocol buffer message along with a\nURL that describes the type of the serialized message.\n\nProtobuf library provides support to pack/unpack Any values in the form\nof utility functions or additional generated methods of the Any type.\n\nExample 1: Pack and unpack a message in C++.\n\n    Foo foo = ...;\n    Any any;\n    any.PackFrom(foo);\n    ...\n    if (any.UnpackTo(&foo)) {\n      ...\n    }\n\nExample 2: Pack and unpack a message in Java.\n\n    Foo foo = ...;\n    Any any = Any.pack(foo);\n    ...\n    if (any.is(Foo.class)) {\n      foo = any.unpack(Foo.class);\n    }\n\n Example 3: Pack and unpack a message in Python.\n\n    foo = Foo(...)\n    any = Any()\n    any.Pack(foo)\n    ...\n    if any.Is(Foo.DESCRIPTOR):\n      any.Unpack(foo)\n      ...\n\n Example 4: Pack and unpack a message in Go\n\n     foo := &pb.Foo{...}\n     any, err := ptypes.MarshalAny(foo)\n     ...\n     foo := &pb.Foo{}\n     if err := ptypes.UnmarshalAny(any, foo); err != nil {\n       ...\n     }\n\nThe pack methods provided by protobuf library will by default use\n\'type.googleapis.com/full.type.name\' as the type URL and the unpack\nmethods only use the fully qualified type name after the last \'/\'\nin the type URL, for example "foo.bar.com/x/y.z" will yield type\nname "y.z".\n\n\nJSON\n====\nThe JSON representation of an `Any` value uses the regular\nrepresentation of the deserialized, embedded message, with an\nadditional field `@type` which contains the type URL. Example:\n\n    package google.profile;\n    message Person {\n      string first_name = 1;\n      string last_name = 2;\n    }\n\n    {\n      "@type": "type.googleapis.com/google.profile.Person",\n      "firstName": <string>,\n      "lastName": <string>\n    }\n\nIf the embedded message type is well-known and has a custom JSON\nrepresentation, that representation will be embedded adding a field\n`value` which holds the custom JSON in addition to the `@type`\nfield. Example (for message [google.protobuf.Duration][]):\n\n    {\n      "@type": "type.googleapis.com/google.protobuf.Duration",\n      "value": "1.212s"\n    }'}}}}}}}},parameters:[{name:"proposal_id",description:"proposal_id defines the unique id of the proposal.",in:"path",required:!0,schema:{type:"string",format:"uint64"}},{name:"voter",description:"voter defines the voter address for the proposals.",in:"path",required:!0,schema:{type:"string"}}],tags:["Query"],description:"Vote queries voted information based on proposalID, voterAddr.",method:"get",path:"/cosmos/gov/v1beta1/proposals/{proposal_id}/votes/{voter}",info:{title:"Greenfield - gRPC Gateway docs",description:"A REST interface for state queries",version:"1.0.0"},postman:{name:"Vote queries voted information based on proposalID, voterAddr.",description:{type:"text/plain"},url:{path:["cosmos","gov","v1beta1","proposals",":proposal_id","votes",":voter"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) proposal_id defines the unique id of the proposal.",type:"text/plain"},type:"any",value:"",key:"proposal_id"},{disabled:!1,description:{content:"(Required) voter defines the voter address for the proposals.",type:"text/plain"},type:"any",value:"",key:"voter"}]},header:[{key:"Accept",value:"*/*"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/greenfield-api/greenfield-grpc-gateway-docs",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Votes",permalink:"/bnbgreenfield/docs/greenfield-api/votes"},next:{title:"Annual Provisions",permalink:"/bnbgreenfield/docs/greenfield-api/annual-provisions"}},f={},u=[{value:"Vote",id:"vote",level:2}],O={toc:u};function T(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},O,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"vote"},"Vote"),(0,a.kt)("p",null,"Vote queries voted information based on proposalID, voterAddr."),(0,a.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"Path Parameters")),(0,a.kt)("div",null,(0,a.kt)("ul",null,(0,a.kt)(r.Z,{className:"paramsItem",param:{name:"proposal_id",description:"proposal_id defines the unique id of the proposal.",in:"path",required:!0,schema:{type:"string",format:"uint64"}},mdxType:"ParamsItem"}),(0,a.kt)(r.Z,{className:"paramsItem",param:{name:"voter",description:"voter defines the voter address for the proposals.",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,a.kt)("div",null,(0,a.kt)(i.Z,{mdxType:"ApiTabs"},(0,a.kt)(m.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"A successful response.")),(0,a.kt)("div",null,(0,a.kt)(s.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,a.kt)(m.Z,{label:"*/*",value:"*/*",mdxType:"TabItem"},(0,a.kt)(d.Z,{mdxType:"SchemaTabs"},(0,a.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,a.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{textAlign:"left"}},(0,a.kt)("strong",null,"Schema")),(0,a.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,a.kt)("ul",{style:{marginLeft:"1rem"}},(0,a.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,a.kt)("details",{style:{}},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"vote"),(0,a.kt)("span",{style:{opacity:"0.6"}}," object")),(0,a.kt)("div",{style:{marginLeft:"1rem"}},(0,a.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,a.kt)("p",null,"Vote defines a vote on a governance proposal.\nA Vote consists of a proposal ID, the voter, and the vote option.")),(0,a.kt)(l.Z,{collapsible:!1,name:"proposal_id",required:!1,schemaName:"uint64",qualifierMessage:void 0,schema:{type:"string",format:"uint64"},mdxType:"SchemaItem"}),(0,a.kt)(l.Z,{collapsible:!1,name:"voter",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,a.kt)(l.Z,{collapsible:!1,name:"option",required:!1,schemaName:"string",qualifierMessage:"**Possible values:** [`VOTE_OPTION_UNSPECIFIED`, `VOTE_OPTION_YES`, `VOTE_OPTION_ABSTAIN`, `VOTE_OPTION_NO`, `VOTE_OPTION_NO_WITH_VETO`]",schema:{description:"Deprecated: Prefer to use `options` instead. This field is set in queries\nif and only if `len(options) == 1` and that option has weight 1. In all\nother cases, this field will default to VOTE_OPTION_UNSPECIFIED.",type:"string",enum:["VOTE_OPTION_UNSPECIFIED","VOTE_OPTION_YES","VOTE_OPTION_ABSTAIN","VOTE_OPTION_NO","VOTE_OPTION_NO_WITH_VETO"],default:"VOTE_OPTION_UNSPECIFIED"},mdxType:"SchemaItem"}),(0,a.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,a.kt)("details",{style:{}},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"options"),(0,a.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,a.kt)("div",{style:{marginLeft:"1rem"}},(0,a.kt)("li",null,(0,a.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,a.kt)(l.Z,{collapsible:!1,name:"option",required:!1,schemaName:"string",qualifierMessage:"**Possible values:** [`VOTE_OPTION_UNSPECIFIED`, `VOTE_OPTION_YES`, `VOTE_OPTION_ABSTAIN`, `VOTE_OPTION_NO`, `VOTE_OPTION_NO_WITH_VETO`]",schema:{type:"string",enum:["VOTE_OPTION_UNSPECIFIED","VOTE_OPTION_YES","VOTE_OPTION_ABSTAIN","VOTE_OPTION_NO","VOTE_OPTION_NO_WITH_VETO"],default:"VOTE_OPTION_UNSPECIFIED",description:"VoteOption enumerates the valid vote options for a given governance proposal.\n\n - VOTE_OPTION_UNSPECIFIED: VOTE_OPTION_UNSPECIFIED defines a no-op vote option.\n - VOTE_OPTION_YES: VOTE_OPTION_YES defines a yes vote option.\n - VOTE_OPTION_ABSTAIN: VOTE_OPTION_ABSTAIN defines an abstain vote option.\n - VOTE_OPTION_NO: VOTE_OPTION_NO defines a no vote option.\n - VOTE_OPTION_NO_WITH_VETO: VOTE_OPTION_NO_WITH_VETO defines a no with veto vote option."},mdxType:"SchemaItem"}),(0,a.kt)(l.Z,{collapsible:!1,name:"weight",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,a.kt)("li",null,(0,a.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))))))))),(0,a.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,a.kt)(p.Z,{responseExample:'{\n  "vote": {\n    "proposal_id": "string",\n    "voter": "string",\n    "option": "VOTE_OPTION_UNSPECIFIED",\n    "options": [\n      {\n        "option": "VOTE_OPTION_UNSPECIFIED",\n        "weight": "string"\n      }\n    ]\n  }\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,a.kt)(m.Z,{label:"default",value:"default",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"An unexpected error response.")),(0,a.kt)("div",null,(0,a.kt)(s.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,a.kt)(m.Z,{label:"*/*",value:"*/*",mdxType:"TabItem"},(0,a.kt)(d.Z,{mdxType:"SchemaTabs"},(0,a.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,a.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{textAlign:"left"}},(0,a.kt)("strong",null,"Schema")),(0,a.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,a.kt)("ul",{style:{marginLeft:"1rem"}},(0,a.kt)(l.Z,{collapsible:!1,name:"error",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,a.kt)(l.Z,{collapsible:!1,name:"code",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32"},mdxType:"SchemaItem"}),(0,a.kt)(l.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,a.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,a.kt)("details",{style:{}},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"details"),(0,a.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,a.kt)("div",{style:{marginLeft:"1rem"}},(0,a.kt)("li",null,(0,a.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,a.kt)(l.Z,{collapsible:!1,name:"type_url",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:'A URL/resource name that uniquely identifies the type of the serialized\nprotocol buffer message. This string must contain at least\none "/" character. The last segment of the URL\'s path must represent\nthe fully qualified name of the type (as in\n`path/google.protobuf.Duration`). The name should be in a canonical form\n(e.g., leading "." is not accepted).\n\nIn practice, teams usually precompile into the binary all types that they\nexpect it to use in the context of Any. However, for URLs which use the\nscheme `http`, `https`, or no scheme, one can optionally set up a type\nserver that maps type URLs to message definitions as follows:\n\n* If no scheme is provided, `https` is assumed.\n* An HTTP GET on the URL must yield a [google.protobuf.Type][]\n  value in binary format, or produce an error.\n* Applications are allowed to cache lookup results based on the\n  URL, or have them precompiled into a binary to avoid any\n  lookup. Therefore, binary compatibility needs to be preserved\n  on changes to types. (Use versioned type names to manage\n  breaking changes.)\n\nNote: this functionality is not currently available in the official\nprotobuf release, and it is not used for type URLs beginning with\ntype.googleapis.com.\n\nSchemes other than `http`, `https` (or the empty scheme) might be\nused with implementation specific semantics.'},mdxType:"SchemaItem"}),(0,a.kt)(l.Z,{collapsible:!1,name:"value",required:!1,schemaName:"byte",qualifierMessage:void 0,schema:{type:"string",format:"byte",description:"Must be a valid serialized protocol buffer of the above specified type."},mdxType:"SchemaItem"}),(0,a.kt)("li",null,(0,a.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,a.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,a.kt)(p.Z,{responseExample:'{\n  "error": "string",\n  "code": 0,\n  "message": "string",\n  "details": [\n    {\n      "type_url": "string",\n      "value": "string"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}T.isMDXComponent=!0}}]);