"use strict";(self.webpackChunkgreenfield_docs=self.webpackChunkgreenfield_docs||[]).push([[9958],{83625:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var o=n(87462),a=(n(67294),n(3905));const r={title:"Run Testnet SP node",order:3},s=void 0,i={unversionedId:"guide/storage-provider/run-book/run-testnet-SP-node",id:"guide/storage-provider/run-book/run-testnet-SP-node",title:"Run Testnet SP node",description:"This guide helps you to set up a Storage Provider and add it to Greenfield testnet.",source:"@site/docs/guide/storage-provider/run-book/run-testnet-SP-node.md",sourceDirName:"guide/storage-provider/run-book",slug:"/guide/storage-provider/run-book/run-testnet-SP-node",permalink:"/bnbgreenfield-docs/docs/guide/storage-provider/run-book/run-testnet-SP-node",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/guide/storage-provider/run-book/run-testnet-SP-node.md",tags:[],version:"current",frontMatter:{title:"Run Testnet SP node",order:3},sidebar:"guideSidebar",previous:{title:"Run Local SP Network",permalink:"/bnbgreenfield-docs/docs/guide/storage-provider/run-book/run-local-SP-network"},next:{title:"Run Mainnet SP node",permalink:"/bnbgreenfield-docs/docs/guide/storage-provider/run-book/run-mainnet-SP-node"}},d={},l=[{value:"Recommended Prerequisites",id:"recommended-prerequisites",level:2},{value:"Create Storage Provider",id:"create-storage-provider",level:2},{value:"1. Compile SP",id:"1-compile-sp",level:3},{value:"2. Configuration",id:"2-configuration",level:3},{value:"Make configuration template",id:"make-configuration-template",level:4},{value:"Edit configuration",id:"edit-configuration",level:4},{value:"3. Start",id:"3-start",level:3},{value:"Add Storage Provider to Greenfield testnet",id:"add-storage-provider-to-greenfield-testnet",level:2},{value:"1. Authorization",id:"1-authorization",level:3},{value:"2. submit-proposal",id:"2-submit-proposal",level:3},{value:"3. deposit tokens to the proposal",id:"3-deposit-tokens-to-the-proposal",level:3},{value:"4. Wait voting and check voting result",id:"4-wait-voting-and-check-voting-result",level:3},{value:"Deposit",id:"deposit",level:2},{value:"EditStorageProvider",id:"editstorageprovider",level:2}],p={toc:l};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This guide helps you to set up a Storage Provider and add it to Greenfield testnet."),(0,a.kt)("h2",{id:"recommended-prerequisites"},"Recommended Prerequisites"),(0,a.kt)("p",null,"The following lists the recommended hardware requirements:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"VPS running recent versions of Mac OS X, Linux, or Windows\uff1b"),(0,a.kt)("li",{parentName:"ul"},"16 cores of CPU, 64 GB of memory(RAM);"),(0,a.kt)("li",{parentName:"ul"},"1 Gbps network connection with upload/download speeds of 10MB/s+\uff1b"),(0,a.kt)("li",{parentName:"ul"},"At least 1 TB disk space for backend storage;"),(0,a.kt)("li",{parentName:"ul"},"50GB+ SQL database;"),(0,a.kt)("li",{parentName:"ul"},"Piece Store: AWS S3, MinIO(Beta);"),(0,a.kt)("li",{parentName:"ul"},"5 Greenfield accounts with enough BNB tokens.")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Each storage provider will hold 5 different accounts serving different purposes:"),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"Operator Account(",(0,a.kt)("strong",{parentName:"li"},"cold wallet"),"): Used to edit the information of the StorageProvider. Please make sure it have enough BNB to deposit the create storage provider proposal(1 BNB) and pay the gas fee of EditStorageProvider transaction."),(0,a.kt)("li",{parentName:"ul"},"Funding Account(",(0,a.kt)("strong",{parentName:"li"},"hot wallet"),"): Used to deposit staking tokens and receive earnings. It is important to ensure that there is enough money in this account, and the user must submit a deposit as a guarantee. At least 1000+ BNB are required for staking."),(0,a.kt)("li",{parentName:"ul"},"Seal Account(",(0,a.kt)("strong",{parentName:"li"},"hot wallet"),"): Used to seal the user's object. Please make sure it has enough BNB to pay the gas fee of SealObject transaction."),(0,a.kt)("li",{parentName:"ul"},"Approval Account(",(0,a.kt)("strong",{parentName:"li"},"cold wallet"),"): Used to approve user's requests. This account does not require holding BNB tokens."),(0,a.kt)("li",{parentName:"ul"},"GC Account(",(0,a.kt)("strong",{parentName:"li"},"cold wallet"),"): It is a special address for sp and is used by sp to clean up local expired or unwanted storage. Please make sure it has enough BNB tokens beacuse it's going to keep sending transactions up the chain.")),(0,a.kt)("p",{parentName:"admonition"},"You can use the below command to generate this five accounts:"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"./build/bin/gnfd keys add operator --keyring-backend os\n./build/bin/gnfd keys add funding --keyring-backend os\n./build/bin/gnfd keys add seal --keyring-backend os\n./build/bin/gnfd keys add approval --keyring-backend os\n./build/bin/gnfd keys add gc --keyring-backend os\n")),(0,a.kt)("p",{parentName:"admonition"},"and then export the private key to prepare for SP deployment"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"./build/bin/gnfd keys export operator --unarmored-hex --unsafe  --keyring-backend os\n./build/bin/gnfd keys export funding --unarmored-hex --unsafe  --keyring-backend os\n./build/bin/gnfd keys export seal --unarmored-hex --unsafe --keyring-backend os\n./build/bin/gnfd keys export approval --unarmored-hex --unsafe --keyring-backend os\n./build/bin/gnfd keys export gc --unarmored-hex --unsafe --keyring-backend os\n"))),(0,a.kt)("h2",{id:"create-storage-provider"},"Create Storage Provider"),(0,a.kt)("h3",{id:"1-compile-sp"},"1. Compile SP"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/bnbgreenfield-docs/docs/guide/storage-provider/run-book/compile-dependences#compile-sp"},"Compile SP doc"),"."),(0,a.kt)("h3",{id:"2-configuration"},"2. Configuration"),(0,a.kt)("h4",{id:"make-configuration-template"},"Make configuration template"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"cd greenfield-storage-provider/build\n\n# dump default configuration\n./gnfd-sp config.dump\n")),(0,a.kt)("h4",{id:"edit-configuration"},"Edit configuration"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-toml"},'# start service list\nService = ["gateway", "uploader", "downloader", "challenge", "tasknode", "receiver", "signer", "blocksyncer", "metadata", "manager", "stopserving"]\n# sp operator address \nSpOperatorAddress = ""\n# service endpoint for other to connect\n[Endpoint]\nchallenge = "localhost:9333"\ndownloader = "localhost:9233"\ngateway = "gnfd.test-sp.com"\nmetadata = "localhost:9733"\np2p = "localhost:9833"\nreceiver = "localhost:9533"\nsigner = "localhost:9633"\ntasknode = "localhost:9433"\nuploader = "localhost:9133"\n# service listen address\n[ListenAddress]\nchallenge = "localhost:9333"\ndownloader = "localhost:9233"\ngateway = "localhost:9033"\nmetadata = "localhost:9733"\np2p = "localhost:9833"\nreceiver = "localhost:9533"\nsigner = "localhost:9633"\ntasknode = "localhost:9433"\nuploader = "localhost:9133"\n# SQL configuration\n[SpDBConfig]\nUser = "root"\nPasswd = "test_pwd"\nAddress = "localhost:3306"\nDatabase = "storage_provider_db"\n# BsDB configuration\n[BsDBConfig]\nUser = ""\nPasswd = ""\nAddress = ""\nDatabase = "block_syncer"\n# BsDBSwitched configuration\n[BsDBSwitchedConfig]\nUser = ""\nPasswd = ""\nAddress = ""\nDatabase = "block_syncer_backup"\n# piece store configuration\n[PieceStoreConfig]\nShards = 0\n[PieceStoreConfig.Store]\n# default use local file system \nStorage = "file"\nBucketURL = "./data"\n# greenfiel chain configuration\n[ChainConfig]\nChainID = "greenfield_5600-1"\n[[ChainConfig.NodeAddr]]\nGreenfieldAddresses = ["gnfd-fullnode-public-testnet-a-fullnode.gnfd-fullnode-testnet.svc.cluster.local:9090"]\nTendermintAddresses = ["https://gnfd-testnet-fullnode-tendermint-us.bnbchain.org:443"]\n# signer configuration\n[SignerCfg]\nGRPCAddress = "localhost:9633"\nAPIKey = ""\nWhitelistCIDR = ["127.0.0.1/32"]\nGasLimit = 210000\nOperatorPrivateKey = ""\nFundingPrivateKey = ""\nSealPrivateKey = ""\nApprovalPrivateKey = ""\nGcPrivateKey = ""\n# block syncer configuration\n# signer configuration\n[BlockSyncerCfg]\nModules = ["epoch", "bucket", "object", "payment", "permission", "group"]\nDsn = "root:passwd@tcp(localhost:3306)/block_syncer?parseTime=true&multiStatements=true&loc=Local"\nRecreateTables = false\nEnableDualDB = false\nDsnSwitched = "root:passwd@tcp(localhost:3306)/block_syncer_backup?parseTime=true&multiStatements=true&loc=Local"\nWorkers = 10\n# p2p node configuration\n[P2PCfg]\nListenAddress = "127.0.0.1:9933"\n# p2p node msg Secp256k1 encryption key, it is different from other SP\'s addresses\n# P2PPrivateKey and node_id is generated by ./gnfd-sp p2p.create.key -n 1\nP2PPrivateKey = ""\n# p2p node\'s bootstrap node, format: [node_id1@ip1:port1, node_id2@ip1:port2]\nBootstrap = ["16Uiu2HAkvgrSt4oUNZ8rWe2qpimLDajyqD6Ca7LV7n9FkzzPNDQh@k8s-gftestne-p2pexter-bc25ac70bc-a31e9596d87054c3.elb.us-east-1.amazonaws.com:9933"]\nPingPeriod = 2\n# log configuration\n[LogCfg]\nLevel = "info"\nPath = "./gnfd-sp.log"\n# metrics configuration\n[MetricsCfg]\nEnabled = false\nHTTPAddress = "localhost:24036"\n# pprof configuration\n[PProfCfg]\nEnabled = false\nHTTPAddress = "localhost:25341"\n# rate limiter configuration\n[RateLimiter]\nAPILimits = []\nHostPattern = []\nPathPattern = []\n[RateLimiter.HTTPLimitCfg]\nOn = false\nRateLimit = 1\nRatePeriod = "S"\n# bandwidth limiter configuration\n[BandwidthLimiter]\nEnable = false\nR = 100\nB = 1000\n# stop serving configuration\n[DiscontinueCfg]\nBucketKeepAliveDays = 7\n# metadata configuration\n[MetadataCfg]\nIsMasterDB = true\nBsDBSwitchCheckIntervalSec = 30\n')),(0,a.kt)("h3",{id:"3-start"},"3. Start"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"# start sp\n./gnfd-sp --config ${config_file_path}\n")),(0,a.kt)("h2",{id:"add-storage-provider-to-greenfield-testnet"},"Add Storage Provider to Greenfield testnet"),(0,a.kt)("h3",{id:"1-authorization"},"1. Authorization"),(0,a.kt)("p",null,"Before creating the storage provider, it is necessary to allow the module account of the gov module to deduct the tokens from the funding account specified by the SP, because the addition of CreateStorageProvider requires submitting a proposal to the gov module, and only after enough validators approve can the SP be truly created on the chain and provide services externally. The address of the gov module account is ",(0,a.kt)("inlineCode",{parentName:"p"},"0x7b5Fe22B5446f7C62Ea27B8BD71CeF94e03f3dF2"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"./build/bin/gnfd keys show operator --keyring-backend os \n./build/bin/gnfd tx sp grant 0x7b5Fe22B5446f7C62Ea27B8BD71CeF94e03f3dF2 --spend-limit 100000000000000000000BNB --SPAddress {operatorAddress} --from funding --keyring-backend os --node https://gnfd-testnet-fullnode-tendermint-us.bnbchain.org:443 \n")),(0,a.kt)("p",null,"The above command requires the funding account of the SP to send the transaction to allow the gov module to have the permission to deduct tokens from the funding account of SP which specified by operator address"),(0,a.kt)("h3",{id:"2-submit-proposal"},"2. submit-proposal"),(0,a.kt)("p",null,"The SP needs to initiate an on-chain proposal that specifies the Msg information to be automatically executed after the vote is approved. In this case, the Msg is ",(0,a.kt)("inlineCode",{parentName:"p"},"MsgCreateStorageProvider"),". It's worth noting that the deposit tokens needs to be greater than the minimum deposit tokens specified on the chain."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'./build/bin/gnfd tx gov submit-proposal path/to/create_sp.json --from operator --keyring-backend os --node https://gnfd-testnet-fullnode-tendermint-us.bnbchain.org:443\n\n# create_sp.json\n./create_sp.json\n{\n  "messages":[\n  {\n    "@type":"/bnbchain.greenfield.sp.MsgCreateStorageProvider",\n    "description":{\n      "moniker": "sp0",\n      "identity":"",\n      "website":"",\n      "security_contact":"",\n      "details":""\n    },\n    "sp_address":"{operate_address}",\n    "funding_address":"{funding_address}",\n    "seal_address":"{seal_address}",\n    "approval_address":"{approval_address}",\n    "endpoint": "https://sp0.greenfield.io",\n    "deposit":{\n      "denom":"BNB",\n      "amount":"10000000000000000000000"\n    },\n    "read_price": "0.060000000000000000",\n    "store_price": "0.019000000000000000",\n    "free_read_quota": 10000,\n    "creator":"0x7b5Fe22B5446f7C62Ea27B8BD71CeF94e03f3dF2"\n  }\n],\n  "metadata": "4pIMOgIGx1vZGU=",\n  "title": "Create <name> Validator",\n  "summary": "create <name> validator",\n  "deposit": "1000000000000000000BNB"\n}\n\n')),(0,a.kt)("h3",{id:"3-deposit-tokens-to-the-proposal"},"3. deposit tokens to the proposal"),(0,a.kt)("p",null,"Each proposal needs to have enough tokens deposited to enter the voting stage."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"./build/bin/gnfd tx gov deposit {proposal_id} 1BNB --from sp0 --keyring-backend os --node https://gnfd-testnet-fullnode-tendermint-us.bnbchain.org:443\n")),(0,a.kt)("h3",{id:"4-wait-voting-and-check-voting-result"},"4. Wait voting and check voting result"),(0,a.kt)("p",null,"After submitting the proposal successfully, you must wait for the voting to be completed and the proposal to be approved. It will last 7days on mainnet while 1 day on testnet. Once it has passed and is executed successfully, you can verify that the storage provider has been joined."),(0,a.kt)("p",null,":::Note"),(0,a.kt)("p",null,"Please ensure that the storage provider service is running before it has been joined."),(0,a.kt)("p",null,":::"),(0,a.kt)("p",null,"You can check the on-chain SP information to confirm whether the SP has been successfully created."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"./build/bin/gnfd query sp storage-providers --node https://gnfd-testnet-fullnode-tendermint-us.bnbchain.org:443\n")),(0,a.kt)("p",null,"Alternatively, you can check the proposal to know about its execution status."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"./build/bin/gnfd query gov proposal {proposal_id} --node https://gnfd-testnet-fullnode-tendermint-us.bnbchain.org:443\n")),(0,a.kt)("h2",{id:"deposit"},"Deposit"),(0,a.kt)("p",null,"This command is used for the SP to supplement collateral, because if the service status of the SP is not good during operation, it will be slashed by users, resulting in the deduction of its deposit tokens."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"gnfd tx sp deposit [sp-address] [value] [flags]\n")),(0,a.kt)("h2",{id:"editstorageprovider"},"EditStorageProvider"),(0,a.kt)("p",null,"This command is used to edit the information of the SP, including endpoint, description and .etc."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"gnfd tx sp edit-storage-provider [sp-address] [flags]\n")))}u.isMDXComponent=!0}}]);