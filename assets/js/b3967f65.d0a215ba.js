"use strict";(self.webpackChunkgreenfield_docs=self.webpackChunkgreenfield_docs||[]).push([[3097],{99056:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>r,toc:()=>l});var o=n(87462),a=(n(67294),n(3905));const s={title:"Simple Storage Service Model",order:5},i="Simple Storage Service Model",r={unversionedId:"guide/concept/simple-storage-svc-model",id:"guide/concept/simple-storage-svc-model",title:"Simple Storage Service Model",description:"Greenfield offers developers comparable API primitives and models to the AWS s3 cloud storage which",source:"@site/docs/guide/concept/simple-storage-svc-model.md",sourceDirName:"guide/concept",slug:"/guide/concept/simple-storage-svc-model",permalink:"/bnbgreenfield-docs/docs/guide/concept/simple-storage-svc-model",draft:!1,editUrl:"https://github.com/RumeelHussainbnb/bnbgreenfield-docs/docs/guide/concept/simple-storage-svc-model.md",tags:[],version:"current",frontMatter:{title:"Simple Storage Service Model",order:5},sidebar:"guideSidebar",previous:{title:"Billing and Payment",permalink:"/bnbgreenfield-docs/docs/guide/concept/billing-payment"},next:{title:"Cross-Chain Programmability",permalink:"/bnbgreenfield-docs/docs/guide/concept/programmability"}},c={},l=[{value:"Abstract",id:"abstract",level:2},{value:"Models",id:"models",level:2},{value:"Bucket",id:"bucket",level:3},{value:"Object",id:"object",level:3},{value:"Group",id:"group",level:3}],d={toc:l};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"simple-storage-service-model"},"Simple Storage Service Model"),(0,a.kt)("p",null,"Greenfield offers developers comparable API primitives and models to the AWS s3 cloud storage which\nis most utilized in Web2."),(0,a.kt)("h2",{id:"abstract"},"Abstract"),(0,a.kt)("p",null,"Below are the basic data models for Greenfield storage:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Bucket"),(0,a.kt)("li",{parentName:"ul"},"Object"),(0,a.kt)("li",{parentName:"ul"},"Group"),(0,a.kt)("li",{parentName:"ul"},"Permission")),(0,a.kt)("p",null,"These metadata are permanently stored in the Greenfield blockchain state."),(0,a.kt)("h2",{id:"models"},"Models"),(0,a.kt)("h3",{id:"bucket"},"Bucket"),(0,a.kt)("p",null,"In Greenfield, a bucket is a virtual container for storing objects. Users must assign each bucket a unique name that complies with DNS naming conventions, consisting of one or more labels separated by periods. It's crucial that the bucket name be globally unique within the Greenfield namespace to prevent two buckets from sharing the same name. "),(0,a.kt)("p",null,"Once a bucket has been created, objects can be uploaded to it using various methods such as the ",(0,a.kt)("inlineCode",{parentName:"p"},"gnfd")," command line or the ",(0,a.kt)("inlineCode",{parentName:"p"},"SDKs"),'.\nObjects within a bucket can be organized and managed like folders (also called "prefixes").\nAdditionally, it\'s possible to assign a unique key (a string value) to each object within the bucket to distinguish it from other objects.'),(0,a.kt)("p",null,'Every user account can create several buckets. The account will become the "owner" of the bucket.'),(0,a.kt)("p",null,"Each bucket should be associated with its own Primary SP, and the payment accounts for Read and Store functions. The owner's\naddress will be the default payment account."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Prototype definition of a bucket")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-protobuf"},'message BucketInfo {\n  // owner is the account address of bucket creator, it is also the bucket owner.\n  string owner = 1 [(cosmos_proto.scalar) = "cosmos.AddressString"];\n  // bucket_name is a globally unique name of bucket\n  string bucket_name = 2;\n  // visibility defines the highest permissions for bucket. When a bucket is public, everyone can get storage objects in it.\n  VisibilityType visibility = 3;\n  // id is the unique identification for bucket.\n  string id = 4 [\n    (cosmos_proto.scalar) = "cosmos.Uint",\n    (gogoproto.customtype) = "Uint",\n    (gogoproto.nullable) = false\n  ];\n  // source_type defines which chain the user should send the bucket management transactions to\n  SourceType source_type = 5;\n  // create_at define the block timestamp when the bucket created.\n  int64 create_at = 6;\n  // payment_address is the address of the payment account\n  string payment_address = 7 [(cosmos_proto.scalar) = "cosmos.AddressString"];\n  // primary_sp_address is the address of the primary sp. Objects belongs to this bucket will never\n  // leave this SP, unless you explicitly shift them to another SP.\n  string primary_sp_address = 8 [(cosmos_proto.scalar) = "cosmos.AddressString"];\n  // charged_read_quota defines the traffic quota for read in bytes per month.\n  // The available read data for each user is the sum of the free read data provided by SP and\n  // the ChargeReadQuota specified here.\n  uint64 charged_read_quota = 9;\n  // billing info of the bucket\n  BillingInfo billing_info = 10 [(gogoproto.nullable) = false];\n}\n\n// BillingInfo is the billing information of the bucket\nmessage BillingInfo {\n  // the time of the payment price, used to calculate the charge rate of the bucket\n  int64 price_time = 1;\n  // the total size of the objects in the bucket, used to calculate the charge rate of the bucket\n  uint64 total_charge_size = 2;\n  // secondary sp objects size statistics\n  repeated SecondarySpObjectsSize secondary_sp_objects_size = 3 [(gogoproto.nullable) = false];\n}\n')),(0,a.kt)("h3",{id:"object"},"Object"),(0,a.kt)("p",null,"An object is a fundamental unit of storage in Greenfield, which represents a file consisting of data and its associated\nmetadata. Each object is uniquely identified within a bucket by its object name (a string value).\nWhile objects are commonly used to store files, they can contain any type of data, including text,\nimages, videos, and program binaries."),(0,a.kt)("p",null,"Users can upload objects to Greenfield using various methods, including the ",(0,a.kt)("inlineCode",{parentName:"p"},"gnfd")," command line and ",(0,a.kt)("inlineCode",{parentName:"p"},"SDKs"),". They can also download,\ncopy, or move objects in a similar way."),(0,a.kt)("p",null,"Objects in Greenfield have several important characteristics, including:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"name and ID"),(0,a.kt)("li",{parentName:"ul"},"owner"),(0,a.kt)("li",{parentName:"ul"},"bucket that hosts it"),(0,a.kt)("li",{parentName:"ul"},"size and timestamps"),(0,a.kt)("li",{parentName:"ul"},"content type"),(0,a.kt)("li",{parentName:"ul"},"checkSums for the storage pieces"),(0,a.kt)("li",{parentName:"ul"},"storage status"),(0,a.kt)("li",{parentName:"ul"},"associated SP information")),(0,a.kt)("p",null,"Object metadata is stored with the bucket name as the prefix of the key. It is possible to iterate through all\nobjects under the same bucket, but it may be a heavy-lifting job for a large bucket with lots of objects."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Prototype definition of an object")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-protobuf"},'\nmessage ObjectInfo {\n  string owner = 1 [(cosmos_proto.scalar) = "cosmos.AddressString"];\n  // bucket_name is the name of the bucket\n  string bucket_name = 2;\n  // object_name is the name of object\n  string object_name = 3;\n  // id is the unique identifier of object\n  string id = 4 [\n    (cosmos_proto.scalar) = "cosmos.Uint",\n    (gogoproto.customtype) = "Uint",\n    (gogoproto.nullable) = false\n  ];\n  // payloadSize is the total size of the object payload\n  uint64 payload_size = 5;\n  // visibility defines the highest permissions for object. When an object is public, everyone can access it.\n  VisibilityType visibility = 6;\n  // content_type define the format of the object which should be a standard MIME type.\n  string content_type = 7;\n  // create_at define the block timestamp when the object is created\n  int64 create_at = 8;\n  // object_status define the upload status of the object.\n  ObjectStatus object_status = 9;\n  // redundancy_type define the type of the redundancy which can be multi-replication or EC.\n  RedundancyType redundancy_type = 10;\n  // source_type define the source of the object.\n  SourceType source_type = 11;\n  // checksums define the root hash of the pieces which stored in a SP.\n  // add omit tag to omit the field when converting to NFT metadata\n  repeated bytes checksums = 12 [(gogoproto.moretags) = "traits:\\"omit\\""];\n  // secondary_sp_addresses define the addresses of secondary_sps\n  repeated string secondary_sp_addresses = 13 [(cosmos_proto.scalar) = "cosmos.AddressString"];\n}\n\n')),(0,a.kt)("h3",{id:"group"},"Group"),(0,a.kt)("p",null,"A Group is a collection of accounts with the same permissions. The group name is not allowed to be duplicated under the\nsame user. However, a group can not create or own any resource. A group can not be a member of another group either."),(0,a.kt)("p",null,"A resource can only have a limited number of groups associated with it for permissions. This ensures that the on-chain\npermission check can be finished within a constant time."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Prototype definition of a group")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-protobuf"},'message GroupInfo {\n  // owner is the owner of the group. It can not changed once it created.\n  string owner = 1 [(cosmos_proto.scalar) = "cosmos.AddressString"];\n  // group_name is the name of group which is unique under an account.\n  string group_name = 2;\n  // source_type\n  SourceType source_type = 3;\n  // id is the unique identifier of group\n  string id = 4 [\n    (cosmos_proto.scalar) = "cosmos.Uint",\n    (gogoproto.customtype) = "Uint",\n    (gogoproto.nullable) = false\n  ];\n}\n\n')))}u.isMDXComponent=!0}}]);