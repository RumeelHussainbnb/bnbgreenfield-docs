"use strict";(self.webpackChunkgreenfield_docs=self.webpackChunkgreenfield_docs||[]).push([[5626],{11339:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>m,contentTitle:()=>s,default:()=>i,frontMatter:()=>r,metadata:()=>p,toc:()=>o});var t=n(87462),l=(n(67294),n(3905));const r={title:"Key Management",order:1},s="Key Management",p={unversionedId:"guide/greenfield-blockchain/cli/key-management",id:"guide/greenfield-blockchain/cli/key-management",title:"Key Management",description:"Abstract",source:"@site/docs/guide/greenfield-blockchain/cli/key-management.md",sourceDirName:"guide/greenfield-blockchain/cli",slug:"/guide/greenfield-blockchain/cli/key-management",permalink:"/bnbgreenfield-docs/docs/guide/greenfield-blockchain/cli/key-management",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/guide/greenfield-blockchain/cli/key-management.md",tags:[],version:"current",frontMatter:{title:"Key Management",order:1},sidebar:"guideSidebar",previous:{title:"Command Line",permalink:"/bnbgreenfield-docs/docs/guide/greenfield-blockchain/cli/"},next:{title:"Account Balance",permalink:"/bnbgreenfield-docs/docs/guide/greenfield-blockchain/cli/bank"}},m={},o=[{value:"Abstract",id:"abstract",level:2},{value:"Quick Start",id:"quick-start",level:2},{value:"Detailed CLI",id:"detailed-cli",level:2},{value:"add",id:"add",level:4},{value:"delete",id:"delete",level:4},{value:"export",id:"export",level:4},{value:"import",id:"import",level:4},{value:"list",id:"list",level:4},{value:"migrate",id:"migrate",level:4},{value:"mnemonic",id:"mnemonic",level:4},{value:"rename",id:"rename",level:4},{value:"show",id:"show",level:4}],d={toc:o};function i(e){let{components:a,...n}=e;return(0,l.kt)("wrapper",(0,t.Z)({},d,n,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"key-management"},"Key Management"),(0,l.kt)("h2",{id:"abstract"},"Abstract"),(0,l.kt)("p",null,"The greenfield-cosmos-sdk comes with a built-in keyring module that helps manage private and public keypairs for secure interactions with a node. In this tutorial, we'll explore how to use the gnfd command to manage keys in the greenfield-cosmos-sdk."),(0,l.kt)("h2",{id:"quick-start"},"Quick Start"),(0,l.kt)("p",null,"To begin, start a local cluster and set up an alias for the gnfd command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},'## Start a local cluster\n$ bash ./deployment/localup/localup.sh all 3\n$ alias gnfd="./build/bin/gnfd"\n')),(0,l.kt)("p",null,"Next, create a new key with the following command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"$ gnfd keys add {name} --keyring-backend test --keyring-dir ./deployment/localup/.local/validator0\n")),(0,l.kt)("p",null,"You can replace ",(0,l.kt)("inlineCode",{parentName:"p"},"{name}")," with any name you choose. The command will prompt you to enter a passphrase to encrypt the key."),(0,l.kt)("p",null,"To show information about the key you just created, run:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"$ gnfd keys show {name} --keyring-backend test --keyring-dir ./deployment/localup/.local/validator0\n")),(0,l.kt)("p",null,"To list all existing keys, run:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"$ gnfd keys list --keyring-backend test --keyring-dir ./deployment/localup/.local/validator0\n")),(0,l.kt)("p",null,"To delete a key, use the following command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"$ gnfd keys delete {name} --keyring-backend test --keyring-dir ./deployment/localup/.local/validator0\n")),(0,l.kt)("h2",{id:"detailed-cli"},"Detailed CLI"),(0,l.kt)("p",null,"The following section explains the different commands that can be used with the gnfd command to manage keys."),(0,l.kt)("h4",{id:"add"},"add"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"add")," command allows users to add a new key with specified name, encrypt it, and save to {name} file."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"gnfd keys add {name} [flags]\n")),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"gnfd keys add temp\n")),(0,l.kt)("p",null,"Example Output:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml"},'- address: 0x48D54D...48b6d2\n  name: temp\n  pubkey: \'{"@type":"/ethermint.crypto.v1.ethsecp256k1.PubKey","key":"AqAzVo.../rZgIu"}\'\n  pubkey_hex: 02a03356...eb66022e\n  type: local\n\n**Important** write this mnemonic phrase in a safe place.\nIt is the only way to recover your account if you ever forget your password.\n\nposition number holiday ... cause bounce mercy\n')),(0,l.kt)("h4",{id:"delete"},"delete"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"delete")," command allows users to delete given keys."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"gnfd keys delete {name}... [flags]\n")),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"gnfd keys delete temp\n")),(0,l.kt)("p",null,"Example Output:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml"},"Key reference will be deleted. Continue? [y/N]: y\nKey deleted forever (uh oh!)\n")),(0,l.kt)("h4",{id:"export"},"export"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"export")," command allows users to export private keys."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"gnfd keys export {name} [flags]\n")),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"gnfd keys export temp\n")),(0,l.kt)("p",null,"Example Output:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml"},"Enter passphrase to encrypt the exported key:\n\n-----BEGIN TENDERMINT PRIVATE KEY-----\ntype: eth_secp256k1\nkdf: bcrypt\nsalt: D4AEA1...36B597\n\n3tvq8w39N...pTwLRdgVGI=\n=Wfrn\n-----END TENDERMINT PRIVATE KEY-----\n")),(0,l.kt)("h4",{id:"import"},"import"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"import")," command allows users to import private keys."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"gnfd keys import {name} <keyfile> [flags]\n")),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"gnfd keys import temp temp.info\n")),(0,l.kt)("h4",{id:"list"},"list"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"list")," command allows users to list all existed keys."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"gnfd keys list [flags]\n")),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"gnfd keys list\n")),(0,l.kt)("p",null,"Example Output:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml"},'- address: 0xA627c3...B61dF7\n  name: temp\n  pubkey: \'{"@type":"/ethermint.crypto.v1.ethsecp256k1.PubKey","key":"AhJl...0t8hJC"}\'\n  pubkey_hex: 021265c6...2df21242\n  type: local\n')),(0,l.kt)("h4",{id:"migrate"},"migrate"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"migrate")," command can migrate keys from amino to proto serialization format."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"gnfd keys migrate [flags]\n")),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"gnfd keys migrate\n")),(0,l.kt)("h4",{id:"mnemonic"},"mnemonic"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"mnemonic")," command can compute the bip39 mnemonic for some input entropy."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"gnfd keys mnemonic [flags]\n")),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"gnfd keys mnemonic\n")),(0,l.kt)("p",null,"Example Output:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml"},"bridge bleak zebra ... gym quick antique\n")),(0,l.kt)("h4",{id:"rename"},"rename"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"rename")," command allows users to rename an existed key."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"gnfd keys rename <old_name> <new_name> [flags]\n")),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"gnfd keys rename temp new_name\n")),(0,l.kt)("p",null,"Example Output:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml"},"Key reference will be renamed from temp to new_name. Continue? [y/N]: y\nKey was successfully renamed from temp to new_name\n")),(0,l.kt)("h4",{id:"show"},"show"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"show")," command allows users to retrieve key information by name or address."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"gnfd keys show [name_or_address [name_or_address...]] [flags]\n")),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"gnfd keys show temp\n")),(0,l.kt)("p",null,"Example Output:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml"},'- address: 0xA627c3...B61dF7\n  name: temp\n  pubkey: \'{"@type":"/ethermint.crypto.v1.ethsecp256k1.PubKey","key":"AhJl...0t8hJC"}\'\n  pubkey_hex: 021265c6...2df21242\n  type: local\n')))}i.isMDXComponent=!0}}]);