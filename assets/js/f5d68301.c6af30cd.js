"use strict";(self.webpackChunkgreenfield_docs=self.webpackChunkgreenfield_docs||[]).push([[1439],{64427:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>r,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>d,toc:()=>i});var t=n(87462),l=(n(67294),n(3905));const o={title:"Validator Staking",Order:8},s="Validator Staking",d={unversionedId:"guide/greenfield-blockchain/cli/validator-staking",id:"guide/greenfield-blockchain/cli/validator-staking",title:"Validator Staking",description:"The staking module is responsible for handling validator and delegator related operations.",source:"@site/docs/guide/greenfield-blockchain/cli/validator-staking.md",sourceDirName:"guide/greenfield-blockchain/cli",slug:"/guide/greenfield-blockchain/cli/validator-staking",permalink:"/bnbgreenfield-docs/docs/guide/greenfield-blockchain/cli/validator-staking",draft:!1,editUrl:"https://github.com/RumeelHussainbnb/bnbgreenfield-docs/docs/guide/greenfield-blockchain/cli/validator-staking.md",tags:[],version:"current",frontMatter:{title:"Validator Staking",Order:8},sidebar:"guideSidebar",previous:{title:"Payment",permalink:"/bnbgreenfield-docs/docs/guide/greenfield-blockchain/cli/payment"},next:{title:"Interacting with the Node",permalink:"/bnbgreenfield-docs/docs/guide/greenfield-blockchain/run-node/interact-node"}},r={},i=[{value:"Quick Start",id:"quick-start",level:2},{value:"Query",id:"query",level:2},{value:"delegation",id:"delegation",level:3},{value:"historical-info",id:"historical-info",level:3},{value:"params",id:"params",level:3},{value:"pool",id:"pool",level:3},{value:"unbonding-delegation",id:"unbonding-delegation",level:3},{value:"validator",id:"validator",level:3},{value:"validators",id:"validators",level:3},{value:"Transactions",id:"transactions",level:2},{value:"delegate",id:"delegate",level:3},{value:"edit-validator",id:"edit-validator",level:3},{value:"unbond",id:"unbond",level:3},{value:"Steps for creating a new validator",id:"steps-for-creating-a-new-validator",level:2},{value:"Grant delegate authorization",id:"grant-delegate-authorization",level:3},{value:"Submit create-validator proposal",id:"submit-create-validator-proposal",level:3},{value:"Vote on the proposal",id:"vote-on-the-proposal",level:3},{value:"Tally and execute automatically",id:"tally-and-execute-automatically",level:3},{value:"Steps for impeaching a malicious validator.",id:"steps-for-impeaching-a-malicious-validator",level:2},{value:"Submit an impeach-validator proposal",id:"submit-an-impeach-validator-proposal",level:3},{value:"Vote on the proposal",id:"vote-on-the-proposal-1",level:3},{value:"Tally and execute automatically",id:"tally-and-execute-automatically-1",level:3}],p={toc:i};function c(e){let{components:a,...n}=e;return(0,l.kt)("wrapper",(0,t.Z)({},p,n,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"validator-staking"},"Validator Staking"),(0,l.kt)("p",null,"The staking module is responsible for handling validator and delegator related operations."),(0,l.kt)("h2",{id:"quick-start"},"Quick Start"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'## Start a local cluster\n$ bash ./deployment/localup/localup.sh all 3\n$ alias gnfd="./build/bin/gnfd"\n$ val=0xCd6D1332a09c29A8a5Fe5Ea4b485F63881f26999\n## query the the self delegation of a validator\n$ gnfd q staking delegation $val $val --node tcp://127.0.0.1:26750\n## query the validator info\n$ gnfd q staking validator $val --node tcp://127.0.0.1:26750\n## try self delegate 100BNB for validator0\n$ gnfd tx staking delegate $val 100000000000000000000BNB --from validator0 --home ./deployment/localup/.local/validator0 --keyring-backend test --node http://localhost:26750 -b block  -y\n## try unbond 100BNB from validator0\n$ gnfd tx staking unbond $val 100000000000000000000BNB --from validator0 --home ./deployment/localup/.local/validator0 --keyring-backend test --node http://localhost:26750 -b block  -y\n## query the unbonding-delegation\n$ gnfd q staking unbonding-delegation $val $val --node tcp://127.0.0.1:26750\n')),(0,l.kt)("h2",{id:"query"},"Query"),(0,l.kt)("p",null,"The CLI ",(0,l.kt)("inlineCode",{parentName:"p"},"query")," commands allow users to query ",(0,l.kt)("inlineCode",{parentName:"p"},"staking")," state."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"gnfd query staking --help\n")),(0,l.kt)("h3",{id:"delegation"},"delegation"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"delegation")," command allows users to query a delegation based on address and validator address."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"gnfd query staking delegation [delegator-addr] [validator-addr] [flags]\n")),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"gnfd query staking delegation 0x9fB29.. 0x91D7d..\n")),(0,l.kt)("p",null,"Example Output:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml"},'balance:\n  amount: "10000000000000000000000000"\n  denom: BNB\ndelegation:\n  delegator_address: 0xCd6D1332a09c29A8a5Fe5Ea4b485F63881f26999\n  shares: "10000000000000000000000000.000000000000000000"\n  validator_address: 0xCd6D1332a09c29A8a5Fe5Ea4b485F63881f26999\n')),(0,l.kt)("h3",{id:"historical-info"},"historical-info"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"historical-info")," command allows users to query historical info at given height."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"gnfd query staking historical-info [height] [flags]\n")),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"gnfd query staking historical-info 1\n")),(0,l.kt)("p",null,"Example Output:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml"},'header:\n  app_hash: 47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=\n  chain_id: greenfield_9000-121\n  consensus_hash: BICRvH3cKD93v7+R1zxE2ljD34qcvIZ0Bdi389qtoi8=\n  data_hash: 47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=\n  evidence_hash: 47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=\n  height: "1"\n  last_block_id:\n    hash: null\n    part_set_header:\n      hash: null\n      total: 0\n  last_commit_hash: 47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=\n  last_results_hash: 47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=\n  next_validators_hash: 66w0qjSBjRkSTh3S5gPNaCRR/E+RsbFhMNLHTNighoo=\n  proposer_address: TY90UCbGrdAHcfcwgh2TSHKisL4=\n  time: "2023-02-20T15:24:16.056235Z"\n  validators_hash: 66w0qjSBjRkSTh3S5gPNaCRR/E+RsbFhMNLHTNighoo=\n  version:\n    app: "0"\n    block: "11"\nvalset:\n  - commission:\n      commission_rates:\n        max_change_rate: "0.010000000000000000"\n        max_rate: "1.000000000000000000"\n        rate: "0.070000000000000000"\n      update_time: "2023-02-20T15:24:16.056235Z"\n    consensus_pubkey:\n      \'@type\': /cosmos.crypto.ed25519.PubKey\n      key: R/yEnaoqxfWcqns01j8w/U9PQ5DK2Vl6rkoJwh5CFn4=\n    delegator_shares: "10000000000000000000000000.000000000000000000"\n    description:\n      details: validator1\n      identity: ""\n      moniker: validator1\n      security_contact: ""\n      website: http://website\n    jailed: false\n    min_self_delegation: "1"\n    operator_address: 0x3D1c0E4aEdA87e0779E895307Eb3dFF6432a3cDa\n    relayer_address: 0xebd48ceed75B8e8174F6143394BD74fd2cf102d4\n    relayer_bls_key: lBsWg+/1/3Q/mJFE97PDBkPSNF631enVSUin/u+DEeUmttGbArKHYyXdtvP20iOw\n    self_del_address: 0x3D1c0E4aEdA87e0779E895307Eb3dFF6432a3cDa\n    status: BOND_STATUS_BONDED\n    tokens: "10000000000000000000000000"\n    unbonding_height: "0"\n    unbonding_time: "1970-01-01T00:00:00Z"\n  - commission:\n      commission_rates:\n        max_change_rate: "0.010000000000000000"\n        max_rate: "1.000000000000000000"\n        rate: "0.070000000000000000"\n      update_time: "2023-02-20T15:24:16.056235Z"\n    consensus_pubkey:\n      \'@type\': /cosmos.crypto.ed25519.PubKey\n      key: gUtwmz/uuTGhoRhsZbwycyw9nfHyVpIdPMaNE4GMQ3Q=\n    delegator_shares: "10000000000000000000000000.000000000000000000"\n    description:\n      details: validator2\n      identity: ""\n      moniker: validator2\n      security_contact: ""\n      website: http://website\n    jailed: false\n    min_self_delegation: "1"\n    operator_address: 0xe7374890fc6c8811Ab6eac3A30D9e5391C1077D5\n    relayer_address: 0x3D4da133bDb0443917Cf29b06E3Bd18a9Cd5dc73\n    relayer_bls_key: t+wJJfvKxjgKDam3L+TgEWIaDpTZOOASwI0qC0lAgtQY4ow9RxJKjROFjxD9x9iR\n    self_del_address: 0xe7374890fc6c8811Ab6eac3A30D9e5391C1077D5\n    status: BOND_STATUS_BONDED\n    tokens: "10000000000000000000000000"\n    unbonding_height: "0"\n    unbonding_time: "1970-01-01T00:00:00Z"\n  - commission:\n      commission_rates:\n        max_change_rate: "0.010000000000000000"\n        max_rate: "1.000000000000000000"\n        rate: "0.070000000000000000"\n      update_time: "2023-02-20T15:24:16.056235Z"\n    consensus_pubkey:\n      \'@type\': /cosmos.crypto.ed25519.PubKey\n      key: 4hGnslsUEWptUbeeFXx/44eUodKoFv61IFimxPB7qbc=\n    delegator_shares: "10000000000000000000000000.000000000000000000"\n    description:\n      details: validator0\n      identity: ""\n      moniker: validator0\n      security_contact: ""\n      website: http://website\n    jailed: false\n    min_self_delegation: "1"\n    operator_address: 0xCd6D1332a09c29A8a5Fe5Ea4b485F63881f26999\n    relayer_address: 0xBefD69cb71403DF7BA20310FB216e1Fb7bAC6321\n    relayer_bls_key: qt3VpcjybvsWdR8smO0eCoaD+4IkAczpl+mcBJOKnXQro2g3TUXWCZPU7VvI01KJ\n    self_del_address: 0xCd6D1332a09c29A8a5Fe5Ea4b485F63881f26999\n    status: BOND_STATUS_BONDED\n    tokens: "10000000000000000000000000"\n    unbonding_height: "0"\n    unbonding_time: "1970-01-01T00:00:00Z"\n')),(0,l.kt)("h3",{id:"params"},"params"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"params")," command allows users to query the current staking parameters information."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"gnfd query staking params [flags]\n")),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"gnfd query staking params\n")),(0,l.kt)("p",null,"Example Output:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml"},'bond_denom: BNB\nhistorical_entries: 10000\nmax_entries: 7\nmax_validators: 100\nmin_commission_rate: "0.000000000000000000"\nmin_self_delegation: "1"\nunbonding_time: 1814400s\n')),(0,l.kt)("h3",{id:"pool"},"pool"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"pool")," command allows users to query the current staking pool values."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"gnfd query staking pool [flags]\n")),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"gnfd query staking pool\n")),(0,l.kt)("p",null,"Example Output:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml"},'bonded_tokens: "30000000000000000000000000"\nnot_bonded_tokens: "0"\n')),(0,l.kt)("h3",{id:"unbonding-delegation"},"unbonding-delegation"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"unbonding-delegation")," command allows users to query an unbonding-delegation record based on delegator and validator address."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"gnfd query staking unbonding-delegation [delegator-addr] [validator-addr] [flags]\n")),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"gnfd query staking unbonding-delegation 0x9fB29.. 0x91D7d..\n")),(0,l.kt)("p",null,"Example Output:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml"},'delegator_address: 0xCd6D1332a09c29A8a5Fe5Ea4b485F63881f26999\nentries:\n  - balance: "1000000000000000000"\n    completion_time: "2023-03-14T01:46:43.524923Z"\n    creation_height: "6736"\n    initial_balance: "1000000000000000000"\nvalidator_address: 0xCd6D1332a09c29A8a5Fe5Ea4b485F63881f26999\n')),(0,l.kt)("h3",{id:"validator"},"validator"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"validator")," command allows users to query a validator."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"gnfd query staking validator [validator-addr] [flags]\n")),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"gnfd query staking validator 0x91D7d..\n")),(0,l.kt)("p",null,"Example Output:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml"},'commission:\n  commission_rates:\n    max_change_rate: "0.010000000000000000"\n    max_rate: "1.000000000000000000"\n    rate: "0.070000000000000000"\n  update_time: "2023-02-20T15:24:16.056235Z"\nconsensus_pubkey:\n  \'@type\': /cosmos.crypto.ed25519.PubKey\n  key: 4hGnslsUEWptUbeeFXx/44eUodKoFv61IFimxPB7qbc=\ndelegator_shares: "10000000000000000000000000.000000000000000000"\ndescription:\n  details: validator0\n  identity: ""\n  moniker: validator0\n  security_contact: ""\n  website: http://website\njailed: false\nmin_self_delegation: "1"\noperator_address: 0xCd6D1332a09c29A8a5Fe5Ea4b485F63881f26999\nrelayer_address: 0xBefD69cb71403DF7BA20310FB216e1Fb7bAC6321\nrelayer_bls_key: qt3VpcjybvsWdR8smO0eCoaD+4IkAczpl+mcBJOKnXQro2g3TUXWCZPU7VvI01KJ\nself_del_address: 0xCd6D1332a09c29A8a5Fe5Ea4b485F63881f26999\nstatus: BOND_STATUS_BONDED\ntokens: "10000000000000000000000000"\nunbonding_height: "0"\nunbonding_time: "1970-01-01T00:00:00Z"\n')),(0,l.kt)("h3",{id:"validators"},"validators"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"validators")," command allows users to query for all validators."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"gnfd query staking validators [flags]\n")),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"gnfd query staking validators\n")),(0,l.kt)("p",null,"Example Output:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml"},'pagination:\n  next_key: null\n  total: "0"\nvalidators:\n  - commission:\n      commission_rates:\n        max_change_rate: "0.010000000000000000"\n        max_rate: "1.000000000000000000"\n        rate: "0.070000000000000000"\n      update_time: "2023-02-20T15:24:16.056235Z"\n    consensus_pubkey:\n      \'@type\': /cosmos.crypto.ed25519.PubKey\n      key: R/yEnaoqxfWcqns01j8w/U9PQ5DK2Vl6rkoJwh5CFn4=\n    delegator_shares: "10000000000000000000000000.000000000000000000"\n    description:\n      details: validator1\n      identity: ""\n      moniker: validator1\n      security_contact: ""\n      website: http://website\n    jailed: false\n    min_self_delegation: "1"\n    operator_address: 0x3D1c0E4aEdA87e0779E895307Eb3dFF6432a3cDa\n    relayer_address: 0xebd48ceed75B8e8174F6143394BD74fd2cf102d4\n    relayer_bls_key: lBsWg+/1/3Q/mJFE97PDBkPSNF631enVSUin/u+DEeUmttGbArKHYyXdtvP20iOw\n    self_del_address: 0x3D1c0E4aEdA87e0779E895307Eb3dFF6432a3cDa\n    status: BOND_STATUS_BONDED\n    tokens: "10000000000000000000000000"\n    unbonding_height: "0"\n    unbonding_time: "1970-01-01T00:00:00Z"\n  - commission:\n      commission_rates:\n        max_change_rate: "0.010000000000000000"\n        max_rate: "1.000000000000000000"\n        rate: "0.070000000000000000"\n      update_time: "2023-02-20T15:24:16.056235Z"\n    consensus_pubkey:\n      \'@type\': /cosmos.crypto.ed25519.PubKey\n      key: 4hGnslsUEWptUbeeFXx/44eUodKoFv61IFimxPB7qbc=\n    delegator_shares: "10000000000000000000000000.000000000000000000"\n    description:\n      details: validator0\n      identity: ""\n      moniker: validator0\n      security_contact: ""\n      website: http://website\n    jailed: false\n    min_self_delegation: "1"\n    operator_address: 0xCd6D1332a09c29A8a5Fe5Ea4b485F63881f26999\n    relayer_address: 0xBefD69cb71403DF7BA20310FB216e1Fb7bAC6321\n    relayer_bls_key: qt3VpcjybvsWdR8smO0eCoaD+4IkAczpl+mcBJOKnXQro2g3TUXWCZPU7VvI01KJ\n    self_del_address: 0xCd6D1332a09c29A8a5Fe5Ea4b485F63881f26999\n    status: BOND_STATUS_BONDED\n    tokens: "10000000000000000000000000"\n    unbonding_height: "0"\n    unbonding_time: "1970-01-01T00:00:00Z"\n  - commission:\n      commission_rates:\n        max_change_rate: "0.010000000000000000"\n        max_rate: "1.000000000000000000"\n        rate: "0.070000000000000000"\n      update_time: "2023-02-20T15:24:16.056235Z"\n    consensus_pubkey:\n      \'@type\': /cosmos.crypto.ed25519.PubKey\n      key: gUtwmz/uuTGhoRhsZbwycyw9nfHyVpIdPMaNE4GMQ3Q=\n    delegator_shares: "10000000000000000000000000.000000000000000000"\n    description:\n      details: validator2\n      identity: ""\n      moniker: validator2\n      security_contact: ""\n      website: http://website\n    jailed: false\n    min_self_delegation: "1"\n    operator_address: 0xe7374890fc6c8811Ab6eac3A30D9e5391C1077D5\n    relayer_address: 0x3D4da133bDb0443917Cf29b06E3Bd18a9Cd5dc73\n    relayer_bls_key: t+wJJfvKxjgKDam3L+TgEWIaDpTZOOASwI0qC0lAgtQY4ow9RxJKjROFjxD9x9iR\n    self_del_address: 0xe7374890fc6c8811Ab6eac3A30D9e5391C1077D5\n    status: BOND_STATUS_BONDED\n    tokens: "10000000000000000000000000"\n    unbonding_height: "0"\n    unbonding_time: "1970-01-01T00:00:00Z"\n')),(0,l.kt)("h2",{id:"transactions"},"Transactions"),(0,l.kt)("p",null,"The CLI ",(0,l.kt)("inlineCode",{parentName:"p"},"tx")," commands allow users to send ",(0,l.kt)("inlineCode",{parentName:"p"},"staking")," related transactions."),(0,l.kt)("h3",{id:"delegate"},"delegate"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"delegate")," command allows users to delegate liquid tokens to a validator, in the early stage, only self-delegate is\nsupported."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"gnfd tx staking delegate [validator-addr] [amount] [flags]\n")),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"gnfd tx staking delegate 0x91D7d.. 1000000000000000000000BNB --from mykey\n")),(0,l.kt)("h3",{id:"edit-validator"},"edit-validator"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"edit-validator")," command allows the user to edit an existing validator account."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"gnfd tx staking edit-validator [flags]\n")),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"gnfd tx staking edit-validator --addr-relayer 0x91D7d.. --from mykey\n")),(0,l.kt)("h3",{id:"unbond"},"unbond"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"unbond")," command allows the user to unbond shares from a validator."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"gnfd tx staking unbond [validator-addr] [amount] [flags]\n")),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"gnfd tx staking unbond 0x91D7d.. 100000000000000000000BNB --from mykey\n")),(0,l.kt)("h2",{id:"steps-for-creating-a-new-validator"},"Steps for creating a new validator"),(0,l.kt)("p",null,"To become a validator, a create-validator proposal should be submitted and adopted by the majority of the current validators."),(0,l.kt)("h3",{id:"grant-delegate-authorization"},"Grant delegate authorization"),(0,l.kt)("p",null,'The self delegator account of the new validator should grant the delegate authorization to the gov module account, make\nsure the spend limit should be no less than the value for creating validator, and the allowed validator should be the\noperator address of the new validator. The gov module account of Greenfield is "0x7b5Fe22B5446f7C62Ea27B8BD71CeF94e03f3dF2".'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"gnfd tx authz grant <grantee> delegate --sepend-limit <value> --allowed-validators <valAddr> [flags]\n")),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"gnfd tx authz grant 0x7b5Fe22B5446f7C62Ea27B8BD71CeF94e03f3dF2 delegate --sepend-limit 10000000000000000000000BNB --allowed-validators myvaladdr --from mykey\n")),(0,l.kt)("h3",{id:"submit-create-validator-proposal"},"Submit create-validator proposal"),(0,l.kt)("p",null,"Use ",(0,l.kt)("inlineCode",{parentName:"p"},"gov submit-proposal")," command to submit a create-validator proposal."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"gnfd tx gov submit-proposal create-validator.json [flags]\n")),(0,l.kt)("p",null,"Example:"),(0,l.kt)("p",null,"The content of create-validator.json:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "messages":[\n  {\n    "@type":"/cosmos.staking.v1beta1.MsgCreateValidator",\n    "description":{\n      "moniker":"validator",\n      "identity":"",\n      "website":"",\n      "security_contact":"",\n      "details":""\n    },\n    "commission":{\n      "rate":"0.100000000000000000",\n      "max_rate":"0.200000000000000000",\n      "max_change_rate":"0.010000000000000000"\n    },\n    "min_self_delegation":"1000000000000000000000",\n    "delegator_address":"0x6D967dc83b625603c963713eABd5B43A281E595e",\n    "validator_address":"0x6D967dc83b625603c963713eABd5B43A281E595e",\n    "pubkey":{\n      "@type":"/cosmos.crypto.ed25519.PubKey",\n      "key":"POIf1u/xC0RoHhD5c5qWszVLnjuhSVlgyrhoIriSjf0="\n    },\n    "value":{\n      "denom":"BNB",\n      "amount":"10000000000000000000000"\n    },\n    "from":"0x7b5Fe22B5446f7C62Ea27B8BD71CeF94e03f3dF2",\n    "relayer_address":"0xBefD69cb71403DF7BA20310FB216e1Fb7bAC6321",\n    "relayer_blskey":"ac1e598ae0ccbeeaafa31bc6faefa85c2ae3138699cac79169cd718f1a38445201454ec092a86f200e08a15266bdc600"\n  }\n],\n  "metadata": "4pIMOgIGx1vZGU=",\n  "deposit": "1000000000000000000BNB"\n}\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"gnfd tx gov submit-proposal create-validator.json --from mykey --gas auto\n")),(0,l.kt)("h3",{id:"vote-on-the-proposal"},"Vote on the proposal"),(0,l.kt)("p",null,"The current validators can use ",(0,l.kt)("inlineCode",{parentName:"p"},"gov vote")," command to vote on the proposal."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"gnfd tx gov vote [proposal-id] [option] [flags]\n")),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"gnfd tx gov vote 1 yes --from mykey\n")),(0,l.kt)("h3",{id:"tally-and-execute-automatically"},"Tally and execute automatically"),(0,l.kt)("p",null,"Once the proposal's voting period is over, the votes for the create-validator proposal would be tallied. If the proposal\nis passed, the create-validator message in the proposal would be executed automatically."),(0,l.kt)("h2",{id:"steps-for-impeaching-a-malicious-validator"},"Steps for impeaching a malicious validator."),(0,l.kt)("p",null,"If a validator doesn't behave well, anyone can submit an impeach-validator proposal, if the proposal adopted by the\nmajority of the current validators, the malicious validator would be jailed forever."),(0,l.kt)("h3",{id:"submit-an-impeach-validator-proposal"},"Submit an impeach-validator proposal"),(0,l.kt)("p",null,"Use ",(0,l.kt)("inlineCode",{parentName:"p"},"gov submit-proposal")," command to submit an impeach-validator proposal."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"gnfd tx gov submit-proposal impeach-validator.json [flags]\n")),(0,l.kt)("p",null,"Example:"),(0,l.kt)("p",null,"The content of impeach-validator.json:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "messages":[\n    {\n      "@type":"/cosmos.slashing.v1beta1.MsgImpeach",\n      "from":"0x7b5Fe22B5446f7C62Ea27B8BD71CeF94e03f3dF2",\n      "validator_address":"0x6D967dc83b625603c963713eABd5B43A281E595e"\n    }\n  ],\n  "metadata": "4pIMOgIGx1vZGU=",\n  "deposit": "1000000000000000000BNB"\n}\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"gnfd tx gov submit-proposal impeach-validator.json --from mykey --gas auto\n")),(0,l.kt)("h3",{id:"vote-on-the-proposal-1"},"Vote on the proposal"),(0,l.kt)("p",null,"The current validators can use ",(0,l.kt)("inlineCode",{parentName:"p"},"gov vote")," command to vote on the proposal."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"gnfd tx gov vote [proposal-id] [option] [flags]\n")),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"gnfd tx gov vote 2 yes --from mykey\n")),(0,l.kt)("h3",{id:"tally-and-execute-automatically-1"},"Tally and execute automatically"),(0,l.kt)("p",null,"Once the proposal's voting period is over, the votes for the impeach-validator proposal would be tallied. If the proposal\nis passed, the impeach-validator message in the proposal would be executed automatically."))}c.isMDXComponent=!0}}]);