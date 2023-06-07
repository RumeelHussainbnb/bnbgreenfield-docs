"use strict";(self.webpackChunkgreenfield_docs=self.webpackChunkgreenfield_docs||[]).push([[2127],{48120:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var r=n(87462),t=(n(67294),n(3905));const a={title:"Permission Control",order:4},i="Permission Control",s={unversionedId:"guide/dapp/permisson-control",id:"guide/dapp/permisson-control",title:"Permission Control",description:"General Permission Control",source:"@site/docs/guide/dapp/permisson-control.md",sourceDirName:"guide/dapp",slug:"/guide/dapp/permisson-control",permalink:"/bnbgreenfield/docs/guide/dapp/permisson-control",draft:!1,editUrl:"https://github.com/RumeelHussainbnb/bnbgreenfield/docs/guide/dapp/permisson-control.md",tags:[],version:"current",frontMatter:{title:"Permission Control",order:4},sidebar:"guideSidebar",previous:{title:"Contract SDK",permalink:"/bnbgreenfield/docs/guide/dapp/dapp-integration"},next:{title:"Contract Entrypoint",permalink:"/bnbgreenfield/docs/guide/dapp/contract-list"}},l={},d=[{value:"General Permission Control",id:"general-permission-control",level:2},{value:"Role based Permission Control",id:"role-based-permission-control",level:2}],p={toc:d};function c(e){let{components:o,...n}=e;return(0,t.kt)("wrapper",(0,r.Z)({},p,n,{components:o,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"permission-control"},"Permission Control"),(0,t.kt)("h2",{id:"general-permission-control"},"General Permission Control"),(0,t.kt)("p",null,"As all GNFD resources are mapped as ERC721 tokens, we fully reuse the ERC721 interface\nfor general permission management without introducing any additional complexity.\nFirst, let's understand the ERC721 interface for permission management:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-solidity"},'interface ERC721 {\n   /// @notice Change or reaffirm the approved address for an NFT\n   /// @dev The zero address indicates there is no approved address.\n   ///  Throws unless `msg.sender` is the current NFT owner, or an authorized\n   ///  operator of the current owner.\n   /// @param _approved The new approved NFT controller\n   /// @param _tokenId The NFT to approve\n   function approve(address _approved, uint256 _tokenId) external payable;\n\n   /// @notice Enable or disable approval for a third party ("operator") to manage\n   ///  all of `msg.sender`\'s assets\n   /// @dev Emits the ApprovalForAll event. The contract MUST allow\n   ///  multiple operators per owner.\n   /// @param _operator Address to add to the set of authorized operators\n   /// @param _approved True if the operator is approved, false to revoke approval\n   function setApprovalForAll(address _operator, bool _approved) external;\n\n   /// @notice Get the approved address for a single NFT\n   /// @dev Throws if `_tokenId` is not a valid NFT.\n   /// @param _tokenId The NFT to find the approved address for\n   /// @return The approved address for this NFT, or the zero address if there is none\n   function getApproved(uint256 _tokenId) external view returns (address);\n\n   /// @notice Query if an address is an authorized operator for another address\n   /// @param _owner The address that owns the NFTs\n   /// @param _operator The address that acts on behalf of the owner\n   /// @return True if `_operator` is an approved operator for `_owner`, false otherwise\n   function isApprovedForAll(address _owner, address _operator) external view returns (bool);\n   ...\n}\n')),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"ERC721")," provides two levels of permission control:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"TokenID")," level: ",(0,t.kt)("inlineCode",{parentName:"li"},"approve"),", ",(0,t.kt)("inlineCode",{parentName:"li"},"getApproved")," are used to control the permission of a specific token."),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"Owner")," level: ",(0,t.kt)("inlineCode",{parentName:"li"},"setApprovalForAll"),", ",(0,t.kt)("inlineCode",{parentName:"li"},"isApprovedForAll")," are used to control the permission of all tokens owned by an address.")),(0,t.kt)("p",null,"So is the permission control of GNFD resources. For example, if you want to grant the permission of a bucket to another account,\nyou can call ",(0,t.kt)("inlineCode",{parentName:"p"},"approve")," function of the ",(0,t.kt)("inlineCode",{parentName:"p"},"BucketHub")," contract. If you want to grant the permission of all buckets to an address,\nyou can call ",(0,t.kt)("inlineCode",{parentName:"p"},"setApprovalForAll")," function of the ",(0,t.kt)("inlineCode",{parentName:"p"},"BucketHub")," contract."),(0,t.kt)("h2",{id:"role-based-permission-control"},"Role based Permission Control"),(0,t.kt)("p",null,"As different operations can be performed on GNFD resources, some applications require permission control on the\ngranularity of operations, like grant other accounts to create bucket but not allow to delete bucket. This cannot\nbe achieved through the ERC721 token standard. Therefore,\nwe introduce the following interface for implementing permission control for each resource contract:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-solidity"},"\n/**\n * @dev Returns `true` if `account` has been granted `role` from `granter`.\n */\n function hasRole(bytes32 roleCode, address granter, address account) external view returns (bool);\n\n/**\n * @dev grant some authorization to an account\n *\n * @param account The address of the account to be granted\n * @param roleCode, the operation code, like create, update, delete, etc.\n * @param expireTime The expiration time of the authorization\n */\n function grant(address account, uint32 roleCode, uint256 expireTime) external;\n\n/**\n * @dev revoke some authorization from an account\n *\n * @param account The address of the account to be revoked\n * @param roleCode The authorization code\n */\n function revoke(address account, uint32 roleCode) external;\n")))}c.isMDXComponent=!0}}]);