"use strict";(self.webpackChunkgreenfield_docs=self.webpackChunkgreenfield_docs||[]).push([[6544],{29938:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const l={title:"List Objects By Bucket",order:7},i="ListObjectsByBucket",s={unversionedId:"api-sdk/storgae-provider-rest/list_objects_by_bucket",id:"api-sdk/storgae-provider-rest/list_objects_by_bucket",title:"List Objects By Bucket",description:"RESTful API Description",source:"@site/docs/api-sdk/storgae-provider-rest/list_objects_by_bucket.md",sourceDirName:"api-sdk/storgae-provider-rest",slug:"/api-sdk/storgae-provider-rest/list_objects_by_bucket",permalink:"/bnbgreenfield-docs/docs/api-sdk/storgae-provider-rest/list_objects_by_bucket",draft:!1,editUrl:"https://github.com/RumeelHussainbnb/bnbgreenfield-docs/docs/api-sdk/storgae-provider-rest/list_objects_by_bucket.md",tags:[],version:"current",frontMatter:{title:"List Objects By Bucket",order:7},sidebar:"apiReferenceSidebar",previous:{title:"Get User Buckets",permalink:"/bnbgreenfield-docs/docs/api-sdk/storgae-provider-rest/get_user_buckets"},next:{title:"Virtual Hosting of Buckets",permalink:"/bnbgreenfield-docs/docs/api-sdk/storgae-provider-rest/referenece/virtual_hosting_of_buckets"}},o={},p=[{value:"RESTful API Description",id:"restful-api-description",level:2},{value:"HTTP Request Format",id:"http-request-format",level:2},{value:"HTTP Request Header",id:"http-request-header",level:2},{value:"HTTP Request Parameter",id:"http-request-parameter",level:2},{value:"Path Parameter",id:"path-parameter",level:3},{value:"Query Parameter",id:"query-parameter",level:3},{value:"Request Body",id:"request-body",level:3},{value:"Request Syntax",id:"request-syntax",level:2},{value:"HTTP Response Header",id:"http-response-header",level:2},{value:"HTTP Response Parameter",id:"http-response-parameter",level:2},{value:"Response Body",id:"response-body",level:3},{value:"Response Syntax",id:"response-syntax",level:2},{value:"Examples",id:"examples",level:2},{value:"Example 1: Query a bucket&#39;s objects",id:"example-1-query-a-buckets-objects",level:3},{value:"Sample Response: Query a bucket&#39;s objects",id:"sample-response-query-a-buckets-objects",level:3}],u={toc:p};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"listobjectsbybucket"},"ListObjectsByBucket"),(0,r.kt)("h2",{id:"restful-api-description"},"RESTful API Description"),(0,r.kt)("p",null,"This API is used to query a bucket's all objects metadata info. And it supports both ",(0,r.kt)("inlineCode",{parentName:"p"},"virutal-hosted-style")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"path-style")," requests."),(0,r.kt)("h2",{id:"http-request-format"},"HTTP Request Format"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Definition"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Host(virutal-hosted-style)"),(0,r.kt)("td",{parentName:"tr",align:null},"BucketName.gnfd-testnet-sp-*.bnbchain.org")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Path(virutal-hosted-style)"),(0,r.kt)("td",{parentName:"tr",align:null},"/")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Method"),(0,r.kt)("td",{parentName:"tr",align:null},"GET")))),(0,r.kt)("p",null,"You should set ",(0,r.kt)("inlineCode",{parentName:"p"},"BucketName")," in url host to list objects of the bucket."),(0,r.kt)("h2",{id:"http-request-header"},"HTTP Request Header"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"ParameterName"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/bnbgreenfield-docs/docs/api-sdk/storgae-provider-rest/referenece/gnfd_headers#authorization-header"},"Authorization")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"The authorization string of the HTTP request")))),(0,r.kt)("h2",{id:"http-request-parameter"},"HTTP Request Parameter"),(0,r.kt)("h3",{id:"path-parameter"},"Path Parameter"),(0,r.kt)("p",null,"The request does not have a path parameter."),(0,r.kt)("h3",{id:"query-parameter"},"Query Parameter"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"ParameterName"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"max-keys"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"max-keys defines the maximum number of keys returned to the response body, the biggest number is 1000.If not specified, the default value is 50.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"prefix"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"prefix limits the response to keys that begin with the specified prefix")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"continuation-token"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"continuation-token is the token returned from a previous list objects request to indicate where in the list of objects to resume the listing. This is used for pagination.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"start-after"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"start-after defines the starting object name for the listing of objects")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"delimiter"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"delimiter is a character you use to group keys, currently only '/' is supported")))),(0,r.kt)("h3",{id:"request-body"},"Request Body"),(0,r.kt)("p",null,"The request does not have a request body."),(0,r.kt)("h2",{id:"request-syntax"},"Request Syntax"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-HTTP"},"GET / HTTP/1.1\nHost: BucketName.gnfd-testnet-sp-*.bnbchain.org\nAuthorization: Authorization\n")),(0,r.kt)("h2",{id:"http-response-header"},"HTTP Response Header"),(0,r.kt)("p",null,"The response returns the following HTTP headers."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"ParameterName"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Content-Type"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"value is ",(0,r.kt)("inlineCode",{parentName:"td"},"application/json"))))),(0,r.kt)("h2",{id:"http-response-parameter"},"HTTP Response Parameter"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"ParameterName"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"objects"),(0,r.kt)("td",{parentName:"tr",align:null},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"objects defines the list of object")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"key_count"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"key_count is the number of keys returned with this request")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"max_keys"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"max_keys sets the maximum number of keys returned in the response")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"is_truncated"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"is_truncated set to false if all of the results were returned. set to true if more keys are available to return")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"next_continuation_token"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"next_continuation_token is sent when is_truncated is true, which means there are more keys in the bucket that can be listed")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"name"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"name of the bucket")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"prefix"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"prefix is the prefix used during the query")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"delimiter"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"delimiter is the delimiter used during the query")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"common_prefixes"),(0,r.kt)("td",{parentName:"tr",align:null},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"common_prefixes a list of strings representing common prefixes. common_prefixes are those parts of object key names that fall between the specified delimiters")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"continuation_token"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"continuationToken is the continuation token used during the query")))),(0,r.kt)("h3",{id:"response-body"},"Response Body"),(0,r.kt)("p",null,"If the request is successful, the service sends back an HTTP 200 response."),(0,r.kt)("p",null,"If you failed to send request, you will get error response body in ",(0,r.kt)("a",{parentName:"p",href:"/bnbgreenfield-docs/docs/api-sdk/storgae-provider-rest/common/error#sp-error-response-parameter"},"XML"),"."),(0,r.kt)("h2",{id:"response-syntax"},"Response Syntax"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-HTTP"},"HTTP/1.1 200\n\nJSON Body\n")),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"The examples given all use virutal-hosted-style."),(0,r.kt)("h3",{id:"example-1-query-a-buckets-objects"},"Example 1: Query a bucket's objects"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-HTTP"},"GET / HTTP/1.1\nHost: myBucket.gnfd-testnet-sp-*.bnbchain.org?max-keys=1&continuation-token=Y2NjYy8=&prefix=aaa/&delimiter=/\nDate: Fri, 31 March 2023 17:32:00 GMT\nAuthorization: authorization string\n")),(0,r.kt)("h3",{id:"sample-response-query-a-buckets-objects"},"Sample Response: Query a bucket's objects"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-HTTP"},'HTTP/1.1 200 OK\nDate: Fri, 31 March 2023 17:32:10 GMT\n\n{\n    "objects": [],\n    "key_count": "1",\n    "max_keys": "1",\n    "is_truncated": true,\n    "next_continuation_token": "ci8=",\n    "name": "myBucket",\n    "prefix": "aaa/",\n    "delimiter": "/",\n    "common_prefixes": [\n        "cccc/"\n    ],\n    "continuation_token": "Y2NjYy8="\n}\n')))}d.isMDXComponent=!0}}]);