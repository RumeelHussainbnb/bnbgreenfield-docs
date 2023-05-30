"use strict";(self.webpackChunkgreenfield_docs=self.webpackChunkgreenfield_docs||[]).push([[8137],{37427:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>o,frontMatter:()=>n,metadata:()=>d,toc:()=>p});var r=a(87462),s=(a(67294),a(3905));const n={title:"Get User Buckets",order:6},l="GetUserBuckets",d={unversionedId:"api-sdk/storgae-provider-rest/get_user_buckets",id:"api-sdk/storgae-provider-rest/get_user_buckets",title:"Get User Buckets",description:"RESTful API Description",source:"@site/docs/api-sdk/storgae-provider-rest/get_user_buckets.md",sourceDirName:"api-sdk/storgae-provider-rest",slug:"/api-sdk/storgae-provider-rest/get_user_buckets",permalink:"/bnbgreenfield-docs/docs/api-sdk/storgae-provider-rest/get_user_buckets",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api-sdk/storgae-provider-rest/get_user_buckets.md",tags:[],version:"current",frontMatter:{title:"Get User Buckets",order:6},sidebar:"apiReferenceSidebar",previous:{title:"List Bucket Read Records",permalink:"/bnbgreenfield-docs/docs/api-sdk/storgae-provider-rest/list_bucket_read_records"},next:{title:"List Objects By Bucket",permalink:"/bnbgreenfield-docs/docs/api-sdk/storgae-provider-rest/list_objects_by_bucket"}},u={},p=[{value:"RESTful API Description",id:"restful-api-description",level:2},{value:"HTTP Request Format",id:"http-request-format",level:2},{value:"HTTP Request Header",id:"http-request-header",level:2},{value:"HTTP Request Parameter",id:"http-request-parameter",level:2},{value:"Path Parameter",id:"path-parameter",level:3},{value:"Query Parameter",id:"query-parameter",level:3},{value:"Request Body",id:"request-body",level:3},{value:"Request Syntax",id:"request-syntax",level:2},{value:"HTTP Response Header",id:"http-response-header",level:2},{value:"HTTP Response Parameter",id:"http-response-parameter",level:2},{value:"Response Body",id:"response-body",level:3},{value:"Response Syntax",id:"response-syntax",level:2},{value:"Examples",id:"examples",level:2},{value:"Example 1: Query a user&#39;s buckets",id:"example-1-query-a-users-buckets",level:3},{value:"Sample Response: Query a user&#39;s buckets successfully",id:"sample-response-query-a-users-buckets-successfully",level:3}],i={toc:p};function o(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,r.Z)({},i,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"getuserbuckets"},"GetUserBuckets"),(0,s.kt)("h2",{id:"restful-api-description"},"RESTful API Description"),(0,s.kt)("p",null,"This API is used to query a user's own buckets metadata info. This API only supports ",(0,s.kt)("inlineCode",{parentName:"p"},"path-style")," requests."),(0,s.kt)("h2",{id:"http-request-format"},"HTTP Request Format"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Description"),(0,s.kt)("th",{parentName:"tr",align:null},"Definition"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"Host(path-style)"),(0,s.kt)("td",{parentName:"tr",align:null},"gnfd-testnet-sp-*.bnbchain.org")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"Path(path-style)"),(0,s.kt)("td",{parentName:"tr",align:null},"/")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"Method"),(0,s.kt)("td",{parentName:"tr",align:null},"GET")))),(0,s.kt)("h2",{id:"http-request-header"},"HTTP Request Header"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"ParameterName"),(0,s.kt)("th",{parentName:"tr",align:null},"Type"),(0,s.kt)("th",{parentName:"tr",align:null},"Required"),(0,s.kt)("th",{parentName:"tr",align:null},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"td",href:"/bnbgreenfield-docs/docs/api-sdk/storgae-provider-rest/referenece/gnfd_headers#authorization-header"},"Authorization")),(0,s.kt)("td",{parentName:"tr",align:null},"string"),(0,s.kt)("td",{parentName:"tr",align:null},"yes"),(0,s.kt)("td",{parentName:"tr",align:null},"The authorization string of the HTTP request")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"X-Gnfd-User-Address"),(0,s.kt)("td",{parentName:"tr",align:null},"string"),(0,s.kt)("td",{parentName:"tr",align:null},"yes"),(0,s.kt)("td",{parentName:"tr",align:null},"The address of user")))),(0,s.kt)("h2",{id:"http-request-parameter"},"HTTP Request Parameter"),(0,s.kt)("h3",{id:"path-parameter"},"Path Parameter"),(0,s.kt)("p",null,"The request does not have a path parameter."),(0,s.kt)("h3",{id:"query-parameter"},"Query Parameter"),(0,s.kt)("p",null,"The request does not have a query parameter."),(0,s.kt)("h3",{id:"request-body"},"Request Body"),(0,s.kt)("p",null,"The request does not have a request body."),(0,s.kt)("h2",{id:"request-syntax"},"Request Syntax"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-HTTP"},"GET / HTTP/1.1\nHost: gnfd-testnet-sp-*.bnbchain.org\nAuthorization: Authorization\nX-Gnfd-User-Address: Address\n")),(0,s.kt)("h2",{id:"http-response-header"},"HTTP Response Header"),(0,s.kt)("p",null,"The response returns the following HTTP headers."),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"ParameterName"),(0,s.kt)("th",{parentName:"tr",align:null},"Type"),(0,s.kt)("th",{parentName:"tr",align:null},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"Content-Type"),(0,s.kt)("td",{parentName:"tr",align:null},"string"),(0,s.kt)("td",{parentName:"tr",align:null},"value is ",(0,s.kt)("inlineCode",{parentName:"td"},"application/json"))))),(0,s.kt)("h2",{id:"http-response-parameter"},"HTTP Response Parameter"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"ParameterName"),(0,s.kt)("th",{parentName:"tr",align:null},"Type"),(0,s.kt)("th",{parentName:"tr",align:null},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"buckets"),(0,s.kt)("td",{parentName:"tr",align:null},"array"),(0,s.kt)("td",{parentName:"tr",align:null},"buckets defines the information of the bucket list")))),(0,s.kt)("h3",{id:"response-body"},"Response Body"),(0,s.kt)("p",null,"If the request is successful, the service sends back an HTTP 200 response."),(0,s.kt)("p",null,"If you failed to send request, you will get error response body in ",(0,s.kt)("a",{parentName:"p",href:"/bnbgreenfield-docs/docs/api-sdk/storgae-provider-rest/common/error#sp-error-response-parameter"},"XML"),"."),(0,s.kt)("h2",{id:"response-syntax"},"Response Syntax"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-HTTP"},"HTTP/1.1 200\n\nJSON Body\n")),(0,s.kt)("h2",{id:"examples"},"Examples"),(0,s.kt)("p",null,"The examples given all use path-style."),(0,s.kt)("h3",{id:"example-1-query-a-users-buckets"},"Example 1: Query a user's buckets"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-HTTP"},"GET / HTTP/1.1\nHost: gnfd-testnet-sp-*.bnbchain.org\nDate: Fri, 31 March 2023 17:32:00 GMT\nAuthorization: authorization string\nX-Gnfd-User-Address: user address string\n")),(0,s.kt)("h3",{id:"sample-response-query-a-users-buckets-successfully"},"Sample Response: Query a user's buckets successfully"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-HTTP"},'HTTP/1.1 200 OK\nDate: Fri, 31 March 2023 17:32:10 GMT\n\n{\n    "buckets": [\n        {\n            "bucket_info": {\n                "owner": "0x0E25AF015EA1Be52e36ce5Ebc4E1558dfcC8eBD0",\n                "bucket_name": "rbna62ktkrwm",\n                "visibility": 2,\n                "id": "3",\n                "source_type": 0,\n                "create_at": "1681900505",\n                "payment_address": "0x0E25AF015EA1Be52e36ce5Ebc4E1558dfcC8eBD0",\n                "primary_sp_address": "0x3c5D5A4f6E3EF9c4b7AE4bA5E782D11B16bD1eAD",\n                "charged_read_quota": "0",\n                "billing_info": {\n                    "price_time": "0",\n                    "total_charge_size": "0",\n                    "secondary_sp_objects_size": []\n                },\n                "bucket_status": 1\n            },\n            "removed": true,\n            "delete_at": "1681900525",\n            "delete_reason": "test",\n            "operator": "0x3c5D5A4f6E3EF9c4b7AE4bA5E782D11B16bD1eAD",\n            "create_tx_hash": "0x5961fe5ee9be7ecf4817fe3488bebb882e282d2c45ea4228961a83bf660f5489",\n            "update_tx_hash": "0xb694ef890d6259767295098c43cdd881570316f3e887658dd9d8f7046424d8cc",\n            "update_at": "1172",\n            "update_time": "1681900525"\n        }\n    ]\n}\n')))}o.isMDXComponent=!0}}]);