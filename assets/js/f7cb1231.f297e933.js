"use strict";(self.webpackChunkgreenfield_docs=self.webpackChunkgreenfield_docs||[]).push([[5656],{60977:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>y,default:()=>b,frontMatter:()=>c,metadata:()=>h,toc:()=>f});var a=n(87462),o=(n(67294),n(3905)),s=n(26389),i=n(94891),r=n(75190),p=n(47507),l=n(24310),m=n(63303),d=(n(75035),n(85162));const c={id:"proposal",title:"Proposal queries proposal details based on ProposalID.",description:"Proposal queries proposal details based on ProposalID.",sidebar_label:"Proposal",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"Proposal",responses:{200:{description:"A successful response.",content:{"*/*":{schema:{type:"object",properties:{proposal:{type:"object",properties:{proposal_id:{type:"string",format:"uint64"},content:{type:"object",properties:{type_url:{type:"string",description:'A URL/resource name that uniquely identifies the type of the serialized\nprotocol buffer message. This string must contain at least\none "/" character. The last segment of the URL\'s path must represent\nthe fully qualified name of the type (as in\n`path/google.protobuf.Duration`). The name should be in a canonical form\n(e.g., leading "." is not accepted).\n\nIn practice, teams usually precompile into the binary all types that they\nexpect it to use in the context of Any. However, for URLs which use the\nscheme `http`, `https`, or no scheme, one can optionally set up a type\nserver that maps type URLs to message definitions as follows:\n\n* If no scheme is provided, `https` is assumed.\n* An HTTP GET on the URL must yield a [google.protobuf.Type][]\n  value in binary format, or produce an error.\n* Applications are allowed to cache lookup results based on the\n  URL, or have them precompiled into a binary to avoid any\n  lookup. Therefore, binary compatibility needs to be preserved\n  on changes to types. (Use versioned type names to manage\n  breaking changes.)\n\nNote: this functionality is not currently available in the official\nprotobuf release, and it is not used for type URLs beginning with\ntype.googleapis.com.\n\nSchemes other than `http`, `https` (or the empty scheme) might be\nused with implementation specific semantics.'},value:{type:"string",format:"byte",description:"Must be a valid serialized protocol buffer of the above specified type."}},description:'`Any` contains an arbitrary serialized protocol buffer message along with a\nURL that describes the type of the serialized message.\n\nProtobuf library provides support to pack/unpack Any values in the form\nof utility functions or additional generated methods of the Any type.\n\nExample 1: Pack and unpack a message in C++.\n\n    Foo foo = ...;\n    Any any;\n    any.PackFrom(foo);\n    ...\n    if (any.UnpackTo(&foo)) {\n      ...\n    }\n\nExample 2: Pack and unpack a message in Java.\n\n    Foo foo = ...;\n    Any any = Any.pack(foo);\n    ...\n    if (any.is(Foo.class)) {\n      foo = any.unpack(Foo.class);\n    }\n\n Example 3: Pack and unpack a message in Python.\n\n    foo = Foo(...)\n    any = Any()\n    any.Pack(foo)\n    ...\n    if any.Is(Foo.DESCRIPTOR):\n      any.Unpack(foo)\n      ...\n\n Example 4: Pack and unpack a message in Go\n\n     foo := &pb.Foo{...}\n     any, err := ptypes.MarshalAny(foo)\n     ...\n     foo := &pb.Foo{}\n     if err := ptypes.UnmarshalAny(any, foo); err != nil {\n       ...\n     }\n\nThe pack methods provided by protobuf library will by default use\n\'type.googleapis.com/full.type.name\' as the type URL and the unpack\nmethods only use the fully qualified type name after the last \'/\'\nin the type URL, for example "foo.bar.com/x/y.z" will yield type\nname "y.z".\n\n\nJSON\n====\nThe JSON representation of an `Any` value uses the regular\nrepresentation of the deserialized, embedded message, with an\nadditional field `@type` which contains the type URL. Example:\n\n    package google.profile;\n    message Person {\n      string first_name = 1;\n      string last_name = 2;\n    }\n\n    {\n      "@type": "type.googleapis.com/google.profile.Person",\n      "firstName": <string>,\n      "lastName": <string>\n    }\n\nIf the embedded message type is well-known and has a custom JSON\nrepresentation, that representation will be embedded adding a field\n`value` which holds the custom JSON in addition to the `@type`\nfield. Example (for message [google.protobuf.Duration][]):\n\n    {\n      "@type": "type.googleapis.com/google.protobuf.Duration",\n      "value": "1.212s"\n    }'},status:{type:"string",enum:["PROPOSAL_STATUS_UNSPECIFIED","PROPOSAL_STATUS_DEPOSIT_PERIOD","PROPOSAL_STATUS_VOTING_PERIOD","PROPOSAL_STATUS_PASSED","PROPOSAL_STATUS_REJECTED","PROPOSAL_STATUS_FAILED"],default:"PROPOSAL_STATUS_UNSPECIFIED",description:"ProposalStatus enumerates the valid statuses of a proposal.\n\n - PROPOSAL_STATUS_UNSPECIFIED: PROPOSAL_STATUS_UNSPECIFIED defines the default proposal status.\n - PROPOSAL_STATUS_DEPOSIT_PERIOD: PROPOSAL_STATUS_DEPOSIT_PERIOD defines a proposal status during the deposit\nperiod.\n - PROPOSAL_STATUS_VOTING_PERIOD: PROPOSAL_STATUS_VOTING_PERIOD defines a proposal status during the voting\nperiod.\n - PROPOSAL_STATUS_PASSED: PROPOSAL_STATUS_PASSED defines a proposal status of a proposal that has\npassed.\n - PROPOSAL_STATUS_REJECTED: PROPOSAL_STATUS_REJECTED defines a proposal status of a proposal that has\nbeen rejected.\n - PROPOSAL_STATUS_FAILED: PROPOSAL_STATUS_FAILED defines a proposal status of a proposal that has\nfailed."},final_tally_result:{description:"final_tally_result is the final tally result of the proposal. When\nquerying a proposal via gRPC, this field is not populated until the\nproposal's voting period has ended.",type:"object",properties:{yes:{type:"string"},abstain:{type:"string"},no:{type:"string"},no_with_veto:{type:"string"}}},submit_time:{type:"string",format:"date-time"},deposit_end_time:{type:"string",format:"date-time"},total_deposit:{type:"array",items:{type:"object",properties:{denom:{type:"string"},amount:{type:"string"}},description:"Coin defines a token with a denomination and an amount.\n\nNOTE: The amount field is an Int which implements the custom method\nsignatures required by gogoproto."}},voting_start_time:{type:"string",format:"date-time"},voting_end_time:{type:"string",format:"date-time"}},description:"Proposal defines the core field members of a governance proposal."}},description:"QueryProposalResponse is the response type for the Query/Proposal RPC method."}}}},default:{description:"An unexpected error response.",content:{"*/*":{schema:{type:"object",properties:{error:{type:"string"},code:{type:"integer",format:"int32"},message:{type:"string"},details:{type:"array",items:{type:"object",properties:{type_url:{type:"string",description:'A URL/resource name that uniquely identifies the type of the serialized\nprotocol buffer message. This string must contain at least\none "/" character. The last segment of the URL\'s path must represent\nthe fully qualified name of the type (as in\n`path/google.protobuf.Duration`). The name should be in a canonical form\n(e.g., leading "." is not accepted).\n\nIn practice, teams usually precompile into the binary all types that they\nexpect it to use in the context of Any. However, for URLs which use the\nscheme `http`, `https`, or no scheme, one can optionally set up a type\nserver that maps type URLs to message definitions as follows:\n\n* If no scheme is provided, `https` is assumed.\n* An HTTP GET on the URL must yield a [google.protobuf.Type][]\n  value in binary format, or produce an error.\n* Applications are allowed to cache lookup results based on the\n  URL, or have them precompiled into a binary to avoid any\n  lookup. Therefore, binary compatibility needs to be preserved\n  on changes to types. (Use versioned type names to manage\n  breaking changes.)\n\nNote: this functionality is not currently available in the official\nprotobuf release, and it is not used for type URLs beginning with\ntype.googleapis.com.\n\nSchemes other than `http`, `https` (or the empty scheme) might be\nused with implementation specific semantics.'},value:{type:"string",format:"byte",description:"Must be a valid serialized protocol buffer of the above specified type."}},description:'`Any` contains an arbitrary serialized protocol buffer message along with a\nURL that describes the type of the serialized message.\n\nProtobuf library provides support to pack/unpack Any values in the form\nof utility functions or additional generated methods of the Any type.\n\nExample 1: Pack and unpack a message in C++.\n\n    Foo foo = ...;\n    Any any;\n    any.PackFrom(foo);\n    ...\n    if (any.UnpackTo(&foo)) {\n      ...\n    }\n\nExample 2: Pack and unpack a message in Java.\n\n    Foo foo = ...;\n    Any any = Any.pack(foo);\n    ...\n    if (any.is(Foo.class)) {\n      foo = any.unpack(Foo.class);\n    }\n\n Example 3: Pack and unpack a message in Python.\n\n    foo = Foo(...)\n    any = Any()\n    any.Pack(foo)\n    ...\n    if any.Is(Foo.DESCRIPTOR):\n      any.Unpack(foo)\n      ...\n\n Example 4: Pack and unpack a message in Go\n\n     foo := &pb.Foo{...}\n     any, err := ptypes.MarshalAny(foo)\n     ...\n     foo := &pb.Foo{}\n     if err := ptypes.UnmarshalAny(any, foo); err != nil {\n       ...\n     }\n\nThe pack methods provided by protobuf library will by default use\n\'type.googleapis.com/full.type.name\' as the type URL and the unpack\nmethods only use the fully qualified type name after the last \'/\'\nin the type URL, for example "foo.bar.com/x/y.z" will yield type\nname "y.z".\n\n\nJSON\n====\nThe JSON representation of an `Any` value uses the regular\nrepresentation of the deserialized, embedded message, with an\nadditional field `@type` which contains the type URL. Example:\n\n    package google.profile;\n    message Person {\n      string first_name = 1;\n      string last_name = 2;\n    }\n\n    {\n      "@type": "type.googleapis.com/google.profile.Person",\n      "firstName": <string>,\n      "lastName": <string>\n    }\n\nIf the embedded message type is well-known and has a custom JSON\nrepresentation, that representation will be embedded adding a field\n`value` which holds the custom JSON in addition to the `@type`\nfield. Example (for message [google.protobuf.Duration][]):\n\n    {\n      "@type": "type.googleapis.com/google.protobuf.Duration",\n      "value": "1.212s"\n    }'}}}}}}}},parameters:[{name:"proposal_id",description:"proposal_id defines the unique id of the proposal.",in:"path",required:!0,schema:{type:"string",format:"uint64"}}],tags:["Query"],description:"Proposal queries proposal details based on ProposalID.",method:"get",path:"/cosmos/gov/v1beta1/proposals/{proposal_id}",info:{title:"Greenfield - gRPC Gateway docs",description:"A REST interface for state queries",version:"1.0.0"},postman:{name:"Proposal queries proposal details based on ProposalID.",description:{type:"text/plain"},url:{path:["cosmos","gov","v1beta1","proposals",":proposal_id"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) proposal_id defines the unique id of the proposal.",type:"text/plain"},type:"any",value:"",key:"proposal_id"}]},header:[{key:"Accept",value:"*/*"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/greenfield-api/greenfield-grpc-gateway-docs",custom_edit_url:null},y=void 0,h={unversionedId:"greenfield-api/proposal",id:"greenfield-api/proposal",title:"Proposal queries proposal details based on ProposalID.",description:"Proposal queries proposal details based on ProposalID.",source:"@site/docs/greenfield-api/proposal.api.mdx",sourceDirName:"greenfield-api",slug:"/greenfield-api/proposal",permalink:"/bnbgreenfield-docs/docs/greenfield-api/proposal",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"proposal",title:"Proposal queries proposal details based on ProposalID.",description:"Proposal queries proposal details based on ProposalID.",sidebar_label:"Proposal",hide_title:!0,hide_table_of_contents:!0,api:{operationId:"Proposal",responses:{200:{description:"A successful response.",content:{"*/*":{schema:{type:"object",properties:{proposal:{type:"object",properties:{proposal_id:{type:"string",format:"uint64"},content:{type:"object",properties:{type_url:{type:"string",description:'A URL/resource name that uniquely identifies the type of the serialized\nprotocol buffer message. This string must contain at least\none "/" character. The last segment of the URL\'s path must represent\nthe fully qualified name of the type (as in\n`path/google.protobuf.Duration`). The name should be in a canonical form\n(e.g., leading "." is not accepted).\n\nIn practice, teams usually precompile into the binary all types that they\nexpect it to use in the context of Any. However, for URLs which use the\nscheme `http`, `https`, or no scheme, one can optionally set up a type\nserver that maps type URLs to message definitions as follows:\n\n* If no scheme is provided, `https` is assumed.\n* An HTTP GET on the URL must yield a [google.protobuf.Type][]\n  value in binary format, or produce an error.\n* Applications are allowed to cache lookup results based on the\n  URL, or have them precompiled into a binary to avoid any\n  lookup. Therefore, binary compatibility needs to be preserved\n  on changes to types. (Use versioned type names to manage\n  breaking changes.)\n\nNote: this functionality is not currently available in the official\nprotobuf release, and it is not used for type URLs beginning with\ntype.googleapis.com.\n\nSchemes other than `http`, `https` (or the empty scheme) might be\nused with implementation specific semantics.'},value:{type:"string",format:"byte",description:"Must be a valid serialized protocol buffer of the above specified type."}},description:'`Any` contains an arbitrary serialized protocol buffer message along with a\nURL that describes the type of the serialized message.\n\nProtobuf library provides support to pack/unpack Any values in the form\nof utility functions or additional generated methods of the Any type.\n\nExample 1: Pack and unpack a message in C++.\n\n    Foo foo = ...;\n    Any any;\n    any.PackFrom(foo);\n    ...\n    if (any.UnpackTo(&foo)) {\n      ...\n    }\n\nExample 2: Pack and unpack a message in Java.\n\n    Foo foo = ...;\n    Any any = Any.pack(foo);\n    ...\n    if (any.is(Foo.class)) {\n      foo = any.unpack(Foo.class);\n    }\n\n Example 3: Pack and unpack a message in Python.\n\n    foo = Foo(...)\n    any = Any()\n    any.Pack(foo)\n    ...\n    if any.Is(Foo.DESCRIPTOR):\n      any.Unpack(foo)\n      ...\n\n Example 4: Pack and unpack a message in Go\n\n     foo := &pb.Foo{...}\n     any, err := ptypes.MarshalAny(foo)\n     ...\n     foo := &pb.Foo{}\n     if err := ptypes.UnmarshalAny(any, foo); err != nil {\n       ...\n     }\n\nThe pack methods provided by protobuf library will by default use\n\'type.googleapis.com/full.type.name\' as the type URL and the unpack\nmethods only use the fully qualified type name after the last \'/\'\nin the type URL, for example "foo.bar.com/x/y.z" will yield type\nname "y.z".\n\n\nJSON\n====\nThe JSON representation of an `Any` value uses the regular\nrepresentation of the deserialized, embedded message, with an\nadditional field `@type` which contains the type URL. Example:\n\n    package google.profile;\n    message Person {\n      string first_name = 1;\n      string last_name = 2;\n    }\n\n    {\n      "@type": "type.googleapis.com/google.profile.Person",\n      "firstName": <string>,\n      "lastName": <string>\n    }\n\nIf the embedded message type is well-known and has a custom JSON\nrepresentation, that representation will be embedded adding a field\n`value` which holds the custom JSON in addition to the `@type`\nfield. Example (for message [google.protobuf.Duration][]):\n\n    {\n      "@type": "type.googleapis.com/google.protobuf.Duration",\n      "value": "1.212s"\n    }'},status:{type:"string",enum:["PROPOSAL_STATUS_UNSPECIFIED","PROPOSAL_STATUS_DEPOSIT_PERIOD","PROPOSAL_STATUS_VOTING_PERIOD","PROPOSAL_STATUS_PASSED","PROPOSAL_STATUS_REJECTED","PROPOSAL_STATUS_FAILED"],default:"PROPOSAL_STATUS_UNSPECIFIED",description:"ProposalStatus enumerates the valid statuses of a proposal.\n\n - PROPOSAL_STATUS_UNSPECIFIED: PROPOSAL_STATUS_UNSPECIFIED defines the default proposal status.\n - PROPOSAL_STATUS_DEPOSIT_PERIOD: PROPOSAL_STATUS_DEPOSIT_PERIOD defines a proposal status during the deposit\nperiod.\n - PROPOSAL_STATUS_VOTING_PERIOD: PROPOSAL_STATUS_VOTING_PERIOD defines a proposal status during the voting\nperiod.\n - PROPOSAL_STATUS_PASSED: PROPOSAL_STATUS_PASSED defines a proposal status of a proposal that has\npassed.\n - PROPOSAL_STATUS_REJECTED: PROPOSAL_STATUS_REJECTED defines a proposal status of a proposal that has\nbeen rejected.\n - PROPOSAL_STATUS_FAILED: PROPOSAL_STATUS_FAILED defines a proposal status of a proposal that has\nfailed."},final_tally_result:{description:"final_tally_result is the final tally result of the proposal. When\nquerying a proposal via gRPC, this field is not populated until the\nproposal's voting period has ended.",type:"object",properties:{yes:{type:"string"},abstain:{type:"string"},no:{type:"string"},no_with_veto:{type:"string"}}},submit_time:{type:"string",format:"date-time"},deposit_end_time:{type:"string",format:"date-time"},total_deposit:{type:"array",items:{type:"object",properties:{denom:{type:"string"},amount:{type:"string"}},description:"Coin defines a token with a denomination and an amount.\n\nNOTE: The amount field is an Int which implements the custom method\nsignatures required by gogoproto."}},voting_start_time:{type:"string",format:"date-time"},voting_end_time:{type:"string",format:"date-time"}},description:"Proposal defines the core field members of a governance proposal."}},description:"QueryProposalResponse is the response type for the Query/Proposal RPC method."}}}},default:{description:"An unexpected error response.",content:{"*/*":{schema:{type:"object",properties:{error:{type:"string"},code:{type:"integer",format:"int32"},message:{type:"string"},details:{type:"array",items:{type:"object",properties:{type_url:{type:"string",description:'A URL/resource name that uniquely identifies the type of the serialized\nprotocol buffer message. This string must contain at least\none "/" character. The last segment of the URL\'s path must represent\nthe fully qualified name of the type (as in\n`path/google.protobuf.Duration`). The name should be in a canonical form\n(e.g., leading "." is not accepted).\n\nIn practice, teams usually precompile into the binary all types that they\nexpect it to use in the context of Any. However, for URLs which use the\nscheme `http`, `https`, or no scheme, one can optionally set up a type\nserver that maps type URLs to message definitions as follows:\n\n* If no scheme is provided, `https` is assumed.\n* An HTTP GET on the URL must yield a [google.protobuf.Type][]\n  value in binary format, or produce an error.\n* Applications are allowed to cache lookup results based on the\n  URL, or have them precompiled into a binary to avoid any\n  lookup. Therefore, binary compatibility needs to be preserved\n  on changes to types. (Use versioned type names to manage\n  breaking changes.)\n\nNote: this functionality is not currently available in the official\nprotobuf release, and it is not used for type URLs beginning with\ntype.googleapis.com.\n\nSchemes other than `http`, `https` (or the empty scheme) might be\nused with implementation specific semantics.'},value:{type:"string",format:"byte",description:"Must be a valid serialized protocol buffer of the above specified type."}},description:'`Any` contains an arbitrary serialized protocol buffer message along with a\nURL that describes the type of the serialized message.\n\nProtobuf library provides support to pack/unpack Any values in the form\nof utility functions or additional generated methods of the Any type.\n\nExample 1: Pack and unpack a message in C++.\n\n    Foo foo = ...;\n    Any any;\n    any.PackFrom(foo);\n    ...\n    if (any.UnpackTo(&foo)) {\n      ...\n    }\n\nExample 2: Pack and unpack a message in Java.\n\n    Foo foo = ...;\n    Any any = Any.pack(foo);\n    ...\n    if (any.is(Foo.class)) {\n      foo = any.unpack(Foo.class);\n    }\n\n Example 3: Pack and unpack a message in Python.\n\n    foo = Foo(...)\n    any = Any()\n    any.Pack(foo)\n    ...\n    if any.Is(Foo.DESCRIPTOR):\n      any.Unpack(foo)\n      ...\n\n Example 4: Pack and unpack a message in Go\n\n     foo := &pb.Foo{...}\n     any, err := ptypes.MarshalAny(foo)\n     ...\n     foo := &pb.Foo{}\n     if err := ptypes.UnmarshalAny(any, foo); err != nil {\n       ...\n     }\n\nThe pack methods provided by protobuf library will by default use\n\'type.googleapis.com/full.type.name\' as the type URL and the unpack\nmethods only use the fully qualified type name after the last \'/\'\nin the type URL, for example "foo.bar.com/x/y.z" will yield type\nname "y.z".\n\n\nJSON\n====\nThe JSON representation of an `Any` value uses the regular\nrepresentation of the deserialized, embedded message, with an\nadditional field `@type` which contains the type URL. Example:\n\n    package google.profile;\n    message Person {\n      string first_name = 1;\n      string last_name = 2;\n    }\n\n    {\n      "@type": "type.googleapis.com/google.profile.Person",\n      "firstName": <string>,\n      "lastName": <string>\n    }\n\nIf the embedded message type is well-known and has a custom JSON\nrepresentation, that representation will be embedded adding a field\n`value` which holds the custom JSON in addition to the `@type`\nfield. Example (for message [google.protobuf.Duration][]):\n\n    {\n      "@type": "type.googleapis.com/google.protobuf.Duration",\n      "value": "1.212s"\n    }'}}}}}}}},parameters:[{name:"proposal_id",description:"proposal_id defines the unique id of the proposal.",in:"path",required:!0,schema:{type:"string",format:"uint64"}}],tags:["Query"],description:"Proposal queries proposal details based on ProposalID.",method:"get",path:"/cosmos/gov/v1beta1/proposals/{proposal_id}",info:{title:"Greenfield - gRPC Gateway docs",description:"A REST interface for state queries",version:"1.0.0"},postman:{name:"Proposal queries proposal details based on ProposalID.",description:{type:"text/plain"},url:{path:["cosmos","gov","v1beta1","proposals",":proposal_id"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) proposal_id defines the unique id of the proposal.",type:"text/plain"},type:"any",value:"",key:"proposal_id"}]},header:[{key:"Accept",value:"*/*"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs/greenfield-api/greenfield-grpc-gateway-docs",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Proposals",permalink:"/bnbgreenfield-docs/docs/greenfield-api/proposals"},next:{title:"Deposits",permalink:"/bnbgreenfield-docs/docs/greenfield-api/deposits"}},u={},f=[{value:"Proposal",id:"proposal",level:2}],g={toc:f};function b(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"proposal"},"Proposal"),(0,o.kt)("p",null,"Proposal queries proposal details based on ProposalID."),(0,o.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,o.kt)("summary",{style:{}},(0,o.kt)("strong",null,"Path Parameters")),(0,o.kt)("div",null,(0,o.kt)("ul",null,(0,o.kt)(r.Z,{className:"paramsItem",param:{name:"proposal_id",description:"proposal_id defines the unique id of the proposal.",in:"path",required:!0,schema:{type:"string",format:"uint64"}},mdxType:"ParamsItem"})))),(0,o.kt)("div",null,(0,o.kt)(s.Z,{mdxType:"ApiTabs"},(0,o.kt)(d.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,o.kt)("div",null,(0,o.kt)("p",null,"A successful response.")),(0,o.kt)("div",null,(0,o.kt)(i.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,o.kt)(d.Z,{label:"*/*",value:"*/*",mdxType:"TabItem"},(0,o.kt)(m.Z,{mdxType:"SchemaTabs"},(0,o.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,o.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,o.kt)("summary",{style:{textAlign:"left"}},(0,o.kt)("strong",null,"Schema")),(0,o.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,o.kt)("ul",{style:{marginLeft:"1rem"}},(0,o.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,o.kt)("details",{style:{}},(0,o.kt)("summary",{style:{}},(0,o.kt)("strong",null,"proposal"),(0,o.kt)("span",{style:{opacity:"0.6"}}," object")),(0,o.kt)("div",{style:{marginLeft:"1rem"}},(0,o.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,o.kt)("p",null,"Proposal defines the core field members of a governance proposal.")),(0,o.kt)(l.Z,{collapsible:!1,name:"proposal_id",required:!1,schemaName:"uint64",qualifierMessage:void 0,schema:{type:"string",format:"uint64"},mdxType:"SchemaItem"}),(0,o.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,o.kt)("details",{style:{}},(0,o.kt)("summary",{style:{}},(0,o.kt)("strong",null,"content"),(0,o.kt)("span",{style:{opacity:"0.6"}}," object")),(0,o.kt)("div",{style:{marginLeft:"1rem"}},(0,o.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Any")," contains an arbitrary serialized protocol buffer message along with a\nURL that describes the type of the serialized message."),(0,o.kt)("p",null,"Protobuf library provides support to pack/unpack Any values in the form\nof utility functions or additional generated methods of the Any type."),(0,o.kt)("p",null,"Example 1: Pack and unpack a message in C++."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Foo foo = ...;\nAny any;\nany.PackFrom(foo);\n...\nif (any.UnpackTo(&foo)) {\n  ...\n}\n")),(0,o.kt)("p",null,"Example 2: Pack and unpack a message in Java."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Foo foo = ...;\nAny any = Any.pack(foo);\n...\nif (any.is(Foo.class)) {\n  foo = any.unpack(Foo.class);\n}\n")),(0,o.kt)("p",null," Example 3: Pack and unpack a message in Python."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"foo = Foo(...)\nany = Any()\nany.Pack(foo)\n...\nif any.Is(Foo.DESCRIPTOR):\n  any.Unpack(foo)\n  ...\n")),(0,o.kt)("p",null," Example 4: Pack and unpack a message in Go"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"}," foo := &pb.Foo{...}\n any, err := ptypes.MarshalAny(foo)\n ...\n foo := &pb.Foo{}\n if err := ptypes.UnmarshalAny(any, foo); err != nil {\n   ...\n }\n")),(0,o.kt)("p",null,"The pack methods provided by protobuf library will by default use\n'type.googleapis.com/full.type.name' as the type URL and the unpack\nmethods only use the fully qualified type name after the last '/'\nin the type URL, for example \"foo.bar.com/x/y.z\" will yield type\nname \"y.z\"."),(0,o.kt)("h1",{id:"json"},"JSON"),(0,o.kt)("p",null,"The JSON representation of an ",(0,o.kt)("inlineCode",{parentName:"p"},"Any")," value uses the regular\nrepresentation of the deserialized, embedded message, with an\nadditional field ",(0,o.kt)("inlineCode",{parentName:"p"},"@type")," which contains the type URL. Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'package google.profile;\nmessage Person {\n  string first_name = 1;\n  string last_name = 2;\n}\n\n{\n  "@type": "type.googleapis.com/google.profile.Person",\n  "firstName": <string\\>,\n  "lastName": <string\\>\n}\n')),(0,o.kt)("p",null,"If the embedded message type is well-known and has a custom JSON\nrepresentation, that representation will be embedded adding a field\n",(0,o.kt)("inlineCode",{parentName:"p"},"value")," which holds the custom JSON in addition to the ",(0,o.kt)("inlineCode",{parentName:"p"},"@type"),"\nfield. Example (for message ","[google.protobuf.Duration][]","):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n  "@type": "type.googleapis.com/google.protobuf.Duration",\n  "value": "1.212s"\n}\n'))),(0,o.kt)(l.Z,{collapsible:!1,name:"type_url",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:'A URL/resource name that uniquely identifies the type of the serialized\nprotocol buffer message. This string must contain at least\none "/" character. The last segment of the URL\'s path must represent\nthe fully qualified name of the type (as in\n`path/google.protobuf.Duration`). The name should be in a canonical form\n(e.g., leading "." is not accepted).\n\nIn practice, teams usually precompile into the binary all types that they\nexpect it to use in the context of Any. However, for URLs which use the\nscheme `http`, `https`, or no scheme, one can optionally set up a type\nserver that maps type URLs to message definitions as follows:\n\n* If no scheme is provided, `https` is assumed.\n* An HTTP GET on the URL must yield a [google.protobuf.Type][]\n  value in binary format, or produce an error.\n* Applications are allowed to cache lookup results based on the\n  URL, or have them precompiled into a binary to avoid any\n  lookup. Therefore, binary compatibility needs to be preserved\n  on changes to types. (Use versioned type names to manage\n  breaking changes.)\n\nNote: this functionality is not currently available in the official\nprotobuf release, and it is not used for type URLs beginning with\ntype.googleapis.com.\n\nSchemes other than `http`, `https` (or the empty scheme) might be\nused with implementation specific semantics.'},mdxType:"SchemaItem"}),(0,o.kt)(l.Z,{collapsible:!1,name:"value",required:!1,schemaName:"byte",qualifierMessage:void 0,schema:{type:"string",format:"byte",description:"Must be a valid serialized protocol buffer of the above specified type."},mdxType:"SchemaItem"})))),(0,o.kt)(l.Z,{collapsible:!1,name:"status",required:!1,schemaName:"string",qualifierMessage:"**Possible values:** [`PROPOSAL_STATUS_UNSPECIFIED`, `PROPOSAL_STATUS_DEPOSIT_PERIOD`, `PROPOSAL_STATUS_VOTING_PERIOD`, `PROPOSAL_STATUS_PASSED`, `PROPOSAL_STATUS_REJECTED`, `PROPOSAL_STATUS_FAILED`]",schema:{type:"string",enum:["PROPOSAL_STATUS_UNSPECIFIED","PROPOSAL_STATUS_DEPOSIT_PERIOD","PROPOSAL_STATUS_VOTING_PERIOD","PROPOSAL_STATUS_PASSED","PROPOSAL_STATUS_REJECTED","PROPOSAL_STATUS_FAILED"],default:"PROPOSAL_STATUS_UNSPECIFIED",description:"ProposalStatus enumerates the valid statuses of a proposal.\n\n - PROPOSAL_STATUS_UNSPECIFIED: PROPOSAL_STATUS_UNSPECIFIED defines the default proposal status.\n - PROPOSAL_STATUS_DEPOSIT_PERIOD: PROPOSAL_STATUS_DEPOSIT_PERIOD defines a proposal status during the deposit\nperiod.\n - PROPOSAL_STATUS_VOTING_PERIOD: PROPOSAL_STATUS_VOTING_PERIOD defines a proposal status during the voting\nperiod.\n - PROPOSAL_STATUS_PASSED: PROPOSAL_STATUS_PASSED defines a proposal status of a proposal that has\npassed.\n - PROPOSAL_STATUS_REJECTED: PROPOSAL_STATUS_REJECTED defines a proposal status of a proposal that has\nbeen rejected.\n - PROPOSAL_STATUS_FAILED: PROPOSAL_STATUS_FAILED defines a proposal status of a proposal that has\nfailed."},mdxType:"SchemaItem"}),(0,o.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,o.kt)("details",{style:{}},(0,o.kt)("summary",{style:{}},(0,o.kt)("strong",null,"final_tally_result"),(0,o.kt)("span",{style:{opacity:"0.6"}}," object")),(0,o.kt)("div",{style:{marginLeft:"1rem"}},(0,o.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,o.kt)("p",null,"final_tally_result is the final tally result of the proposal. When\nquerying a proposal via gRPC, this field is not populated until the\nproposal's voting period has ended.")),(0,o.kt)(l.Z,{collapsible:!1,name:"yes",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,o.kt)(l.Z,{collapsible:!1,name:"abstain",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,o.kt)(l.Z,{collapsible:!1,name:"no",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,o.kt)(l.Z,{collapsible:!1,name:"no_with_veto",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"})))),(0,o.kt)(l.Z,{collapsible:!1,name:"submit_time",required:!1,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time"},mdxType:"SchemaItem"}),(0,o.kt)(l.Z,{collapsible:!1,name:"deposit_end_time",required:!1,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time"},mdxType:"SchemaItem"}),(0,o.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,o.kt)("details",{style:{}},(0,o.kt)("summary",{style:{}},(0,o.kt)("strong",null,"total_deposit"),(0,o.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,o.kt)("div",{style:{marginLeft:"1rem"}},(0,o.kt)("li",null,(0,o.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,o.kt)(l.Z,{collapsible:!1,name:"denom",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,o.kt)(l.Z,{collapsible:!1,name:"amount",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,o.kt)("li",null,(0,o.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,o.kt)(l.Z,{collapsible:!1,name:"voting_start_time",required:!1,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time"},mdxType:"SchemaItem"}),(0,o.kt)(l.Z,{collapsible:!1,name:"voting_end_time",required:!1,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time"},mdxType:"SchemaItem"}))))))),(0,o.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,o.kt)(p.Z,{responseExample:'{\n  "proposal": {\n    "proposal_id": "string",\n    "content": {\n      "type_url": "string",\n      "value": "string"\n    },\n    "status": "PROPOSAL_STATUS_UNSPECIFIED",\n    "final_tally_result": {\n      "yes": "string",\n      "abstain": "string",\n      "no": "string",\n      "no_with_veto": "string"\n    },\n    "submit_time": "2023-05-26T13:35:10.491Z",\n    "deposit_end_time": "2023-05-26T13:35:10.491Z",\n    "total_deposit": [\n      {\n        "denom": "string",\n        "amount": "string"\n      }\n    ],\n    "voting_start_time": "2023-05-26T13:35:10.491Z",\n    "voting_end_time": "2023-05-26T13:35:10.492Z"\n  }\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,o.kt)(d.Z,{label:"default",value:"default",mdxType:"TabItem"},(0,o.kt)("div",null,(0,o.kt)("p",null,"An unexpected error response.")),(0,o.kt)("div",null,(0,o.kt)(i.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,o.kt)(d.Z,{label:"*/*",value:"*/*",mdxType:"TabItem"},(0,o.kt)(m.Z,{mdxType:"SchemaTabs"},(0,o.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,o.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,o.kt)("summary",{style:{textAlign:"left"}},(0,o.kt)("strong",null,"Schema")),(0,o.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,o.kt)("ul",{style:{marginLeft:"1rem"}},(0,o.kt)(l.Z,{collapsible:!1,name:"error",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,o.kt)(l.Z,{collapsible:!1,name:"code",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32"},mdxType:"SchemaItem"}),(0,o.kt)(l.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,o.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,o.kt)("details",{style:{}},(0,o.kt)("summary",{style:{}},(0,o.kt)("strong",null,"details"),(0,o.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,o.kt)("div",{style:{marginLeft:"1rem"}},(0,o.kt)("li",null,(0,o.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,o.kt)(l.Z,{collapsible:!1,name:"type_url",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:'A URL/resource name that uniquely identifies the type of the serialized\nprotocol buffer message. This string must contain at least\none "/" character. The last segment of the URL\'s path must represent\nthe fully qualified name of the type (as in\n`path/google.protobuf.Duration`). The name should be in a canonical form\n(e.g., leading "." is not accepted).\n\nIn practice, teams usually precompile into the binary all types that they\nexpect it to use in the context of Any. However, for URLs which use the\nscheme `http`, `https`, or no scheme, one can optionally set up a type\nserver that maps type URLs to message definitions as follows:\n\n* If no scheme is provided, `https` is assumed.\n* An HTTP GET on the URL must yield a [google.protobuf.Type][]\n  value in binary format, or produce an error.\n* Applications are allowed to cache lookup results based on the\n  URL, or have them precompiled into a binary to avoid any\n  lookup. Therefore, binary compatibility needs to be preserved\n  on changes to types. (Use versioned type names to manage\n  breaking changes.)\n\nNote: this functionality is not currently available in the official\nprotobuf release, and it is not used for type URLs beginning with\ntype.googleapis.com.\n\nSchemes other than `http`, `https` (or the empty scheme) might be\nused with implementation specific semantics.'},mdxType:"SchemaItem"}),(0,o.kt)(l.Z,{collapsible:!1,name:"value",required:!1,schemaName:"byte",qualifierMessage:void 0,schema:{type:"string",format:"byte",description:"Must be a valid serialized protocol buffer of the above specified type."},mdxType:"SchemaItem"}),(0,o.kt)("li",null,(0,o.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,o.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,o.kt)(p.Z,{responseExample:'{\n  "error": "string",\n  "code": 0,\n  "message": "string",\n  "details": [\n    {\n      "type_url": "string",\n      "value": "string"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}b.isMDXComponent=!0}}]);