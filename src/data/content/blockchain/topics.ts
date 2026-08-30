import { TopicData } from '../../types';

export const topics: Record<string, Partial<TopicData>> = {
  "n_bc_1": {
    whyLearnThis: "Decentralization and distributed ledgers are the conceptual foundation of everything in blockchain. Without understanding WHY a decentralized ledger is better than a centralized database for certain use cases, you'll build things that don't need blockchain.",
    whenIsItUsed: "Designing trustless systems where no single party should control data: supply chain provenance, cross-border payments, digital ownership.",
    whereIsItUsed: "Bitcoin, Ethereum, Solana, Hyperledger Fabric, supply chain systems.",
    whatComesNext: "Consensus Mechanisms (PoW, PoS)",
    learningOutcomes: [
      "Explain why a distributed ledger eliminates the need for a trusted central authority.",
      "Describe the structure of a block: hash, previous hash, timestamp, transactions, nonce.",
      "Understand how chaining blocks makes tampering computationally infeasible.",
      "Explain double-spending and how blockchain prevents it.",
      "Compare blockchain with traditional databases and identify appropriate use cases for each."
    ],
    commonMistakes: [
      "Thinking blockchain is the answer to every data storage problem — most problems are better solved with a traditional database.",
      "Confusing blockchain with Bitcoin — Bitcoin is one application of blockchain technology.",
      "Underestimating that public blockchains (Ethereum) have permanent, immutable, publicly visible records — including bugs."
    ],
    realWorldApplications: [
      "Bitcoin enabling peer-to-peer financial transactions without banks.",
      "IBM Food Trust tracking food supply chains from farm to supermarket shelf on Hyperledger.",
      "NFTs providing provable digital ownership without relying on a central server."
    ],
    resources: [
      { type: "official", title: "Bitcoin Whitepaper (Satoshi Nakamoto)", url: "https://bitcoin.org/bitcoin.pdf" },
      { type: "video_en", title: "But how does Bitcoin actually work? (3Blue1Brown)", url: "https://www.youtube.com/watch?v=bBC-nXj3Ng4" },
      { type: "video_hi", title: "All about Blockchain in Hindi (Simply Explained)", url: "https://www.youtube.com/watch?v=wHz_k9OI55Q" },
      { type: "article", title: "Blockchain Technology Explained (Investopedia)", url: "https://www.investopedia.com/terms/b/blockchain.asp" },
      { type: "github", title: "bitcoin/bitcoin: Bitcoin Core", url: "https://github.com/bitcoin/bitcoin" },
      { type: "cheat_sheet", title: "Blockchain Terms Glossary", url: "https://ethereum.org/en/glossary/" },
      { type: "deep_dive", title: "Mastering Bitcoin (free online book)", url: "https://github.com/bitcoinbook/bitcoinbook" }
    ]
  },
  "n_bc_2": {
    whyLearnThis: "Consensus mechanisms are how distributed networks agree on the state of the ledger without a central authority. Proof of Work (Bitcoin), Proof of Stake (Ethereum), and others each make different tradeoffs between security, energy, and decentralization.",
    whenIsItUsed: "Choosing a blockchain platform for a project, understanding network security, and evaluating the environmental impact of different blockchains.",
    whereIsItUsed: "Bitcoin (PoW), Ethereum (PoS since 2022 Merge), Solana (PoH), Avalanche, Polkadot.",
    whatComesNext: "Public vs Private Blockchains",
    learningOutcomes: [
      "Explain Proof of Work (PoW): miners compete to solve cryptographic puzzles to add blocks.",
      "Explain Proof of Stake (PoS): validators are chosen proportionally to their staked tokens.",
      "Describe the 51% attack and how each consensus mechanism resists it.",
      "Compare PoW and PoS on energy consumption, security, and centralization risk.",
      "Explain delegated PoS (DPoS) and other variants like Proof of History (Solana)."
    ],
    commonMistakes: [
      "Assuming Proof of Stake is less secure than Proof of Work — security depends on total value at stake.",
      "Ignoring the centralization risk in some PoS systems where large validators control most stake.",
      "Not understanding that consensus is about agreement, not validation of computation correctness."
    ],
    realWorldApplications: [
      "Ethereum's 2022 Merge switching from PoW to PoS, reducing energy consumption by 99.95%.",
      "Bitcoin's PoW consensus making it economically irrational to attack the network.",
      "Solana's Proof of History enabling 65,000 TPS by proving time has passed without network communication."
    ],
    resources: [
      { type: "official", title: "Ethereum: Proof of Stake Documentation", url: "https://ethereum.org/en/developers/docs/consensus-mechanisms/pos/" },
      { type: "video_en", title: "Proof of Work vs Proof of Stake (Finematics)", url: "https://www.youtube.com/watch?v=M3EFi_POhps" },
      { type: "video_hi", title: "CAP Theorem in Blockchain Hindi", url: "https://www.youtube.com/watch?v=wemktR970tY" },
      { type: "article", title: "Ethereum: Consensus Mechanisms Explained", url: "https://ethereum.org/en/developers/docs/consensus-mechanisms/" },
      { type: "github", title: "ethereum/consensus-specs: Ethereum consensus specs", url: "https://github.com/ethereum/consensus-specs" },
      { type: "cheat_sheet", title: "Consensus Mechanisms Comparison", url: "https://ethereum.org/en/developers/docs/consensus-mechanisms/pow/" },
      { type: "deep_dive", title: "Ethereum: The Merge Documentation", url: "https://ethereum.org/en/roadmap/merge/" }
    ]
  },
  "n_bc_3": {
    whyLearnThis: "Public blockchains (Ethereum, Bitcoin) are fully transparent and permissionless but slow and expensive. Private blockchains (Hyperledger) are fast and controlled but don't have true decentralization. Choosing the right type determines your architecture's security model and performance.",
    whenIsItUsed: "Deciding the right blockchain infrastructure for an enterprise use case: DeFi and NFTs use public; supply chain and banking consortiums use private.",
    whereIsItUsed: "Ethereum (public), Hyperledger Fabric (private), Polygon (public L2), Quorum (enterprise Ethereum).",
    whatComesNext: "EVM (Ethereum Virtual Machine)",
    learningOutcomes: [
      "Compare public, private, and consortium blockchains on access control, performance, and trust assumptions.",
      "Explain why public blockchains require gas fees (to prevent spam and compensate validators).",
      "Describe Hyperledger Fabric's permissioned architecture with channels and chaincode.",
      "Evaluate when a private blockchain actually provides value vs. a traditional shared database.",
      "Explain Layer 2 solutions (Polygon, Arbitrum) and why they exist."
    ],
    commonMistakes: [
      "Building a private blockchain when a shared PostgreSQL database with access control would be simpler and faster.",
      "Assuming private blockchains are 'decentralized' — they have trusted administrators and are not truly trustless.",
      "Ignoring that even private Ethereum deployments (Quorum) inherit Ethereum's gas model."
    ],
    realWorldApplications: [
      "Walmart using Hyperledger Fabric (private blockchain) to track mango supply chains with 2 seconds instead of 7 days of traceability.",
      "DeFi protocols like Uniswap running on public Ethereum for censorship-resistant financial applications.",
      "Polygon enabling Ethereum dApps with transaction fees of cents instead of dollars."
    ],
    resources: [
      { type: "official", title: "Hyperledger Fabric Documentation", url: "https://hyperledger-fabric.readthedocs.io/en/latest/" },
      { type: "video_en", title: "Public vs Private Blockchain (Simply Explained)", url: "https://www.youtube.com/watch?v=pWROdu1O8xw" },
      { type: "video_hi", title: "All about Blockchain in Hindi (Simply Explained)", url: "https://www.youtube.com/watch?v=wHz_k9OI55Q" },
      { type: "article", title: "IBM: Public vs Private Blockchain", url: "https://www.ibm.com/topics/blockchain-types" },
      { type: "github", title: "hyperledger/fabric: Enterprise blockchain platform", url: "https://github.com/hyperledger/fabric" },
      { type: "cheat_sheet", title: "Blockchain Platforms Comparison", url: "https://ethereum.org/en/layer-2/" },
      { type: "deep_dive", title: "Hyperledger: Enterprise Blockchain Use Cases", url: "https://www.hyperledger.org/" }
    ]
  },
  "n_eth_1": {
    whyLearnThis: "The Ethereum Virtual Machine (EVM) is a Turing-complete virtual machine that executes smart contracts. Every Ethereum transaction that calls a smart contract runs inside the EVM. Understanding how it works — opcodes, gas, stack — is essential for writing efficient and secure contracts.",
    whenIsItUsed: "Writing Solidity contracts, auditing gas costs, understanding contract execution flow and security vulnerabilities.",
    whereIsItUsed: "Ethereum, Polygon, Avalanche C-Chain, BNB Chain, Arbitrum, Optimism — all EVM-compatible.",
    whatComesNext: "Wallets & Metamask",
    learningOutcomes: [
      "Explain EVM architecture: stack-based, 256-bit word size, storage, memory, calldata.",
      "Understand how Solidity code compiles to EVM bytecode and opcodes.",
      "Explain gas costs: why different operations cost different amounts of gas.",
      "Read and understand basic EVM opcodes from disassembled bytecode.",
      "Understand storage layout and how Solidity stores state variables in 32-byte slots."
    ],
    commonMistakes: [
      "Not understanding storage costs — writing to storage (SSTORE) costs 20,000 gas; reading (SLOAD) costs 800 gas. Misusing storage is the #1 cause of high gas costs.",
      "Treating memory and storage as equivalent — memory is temporary (exists only during a transaction), storage is permanent.",
      "Not understanding that every EVM computation is deterministic and replayed by all nodes."
    ],
    realWorldApplications: [
      "Gas optimization: storing data in calldata instead of memory saves 8x on gas for read-only function parameters.",
      "Auditors reading EVM bytecode to find vulnerabilities in contracts that don't have open-source code.",
      "EVM compatibility enabling Ethereum tooling (Hardhat, MetaMask, Ethers.js) to work on Polygon and Avalanche."
    ],
    resources: [
      { type: "official", title: "Ethereum: EVM Documentation", url: "https://ethereum.org/en/developers/docs/evm/" },
      { type: "video_en", title: "Ethereum Virtual Machine Explained (Finematics)", url: "https://www.youtube.com/watch?v=sTOcqS4msoU" },
      { type: "video_hi", title: "Ethereum EVM Explained Hindi", url: "https://www.youtube.com/watch?v=8p7RKYJ9AF0" },
      { type: "article", title: "Towards Data Science: EVM Deep Dive", url: "https://ethereum.org/en/developers/docs/evm/opcodes/" },
      { type: "github", title: "ethereum/go-ethereum: Official Ethereum implementation", url: "https://github.com/ethereum/go-ethereum" },
      { type: "cheat_sheet", title: "EVM Opcodes Reference", url: "https://www.evm.codes/" },
      { type: "deep_dive", title: "Mastering Ethereum: EVM Chapter (free)", url: "https://github.com/ethereumbook/ethereumbook" }
    ]
  },
  "n_eth_2": {
    whyLearnThis: "Crypto wallets are the interface between users and the blockchain. They store private keys, sign transactions, and interact with dApps. MetaMask is installed in 30 million browsers. Understanding wallets is fundamental to building any Web3 application.",
    whenIsItUsed: "Connecting users to your dApp, signing transactions, managing accounts in tests, and handling user authentication with Web3.",
    whereIsItUsed: "MetaMask (browser), Ledger/Trezor (hardware wallets), WalletConnect (mobile wallets), Phantom (Solana).",
    whatComesNext: "Gas & Transactions",
    learningOutcomes: [
      "Explain the relationship between private keys, public keys, and Ethereum addresses.",
      "Understand HD wallets (BIP39 mnemonic seed phrases) and key derivation paths.",
      "Connect a dApp to MetaMask using window.ethereum and ethers.js.",
      "Sign messages and transactions programmatically.",
      "Use WalletConnect to connect mobile wallets to dApps."
    ],
    commonMistakes: [
      "Storing private keys or seed phrases in code, plaintext files, or cloud services — they should never leave hardware.",
      "Confusing the MetaMask account with an 'identity' — one seed phrase can generate unlimited accounts.",
      "Not handling wallet connection failures and network mismatches gracefully in dApps."
    ],
    realWorldApplications: [
      "A dApp using ethers.js to request wallet connection and display the connected address.",
      "A hardware wallet (Ledger) signing a $1M DeFi transaction with air-gap security.",
      "Multi-sig wallets (Gnosis Safe) requiring 3/5 team members to sign before any funds move."
    ],
    resources: [
      { type: "official", title: "MetaMask Developer Documentation", url: "https://docs.metamask.io/guide/" },
      { type: "video_en", title: "MetaMask and Ethereum Wallets Explained (Dapp University)", url: "https://www.youtube.com/watch?v=pdsYCkUWrgQ" },
      { type: "video_hi", title: "Web3 and Blockchain Hindi", url: "https://www.youtube.com/watch?v=MaK3AjBHk8o" },
      { type: "article", title: "Ethereum: Accounts and Wallets", url: "https://ethereum.org/en/wallets/" },
      { type: "github", title: "MetaMask/metamask-extension: MetaMask source code", url: "https://github.com/MetaMask/metamask-extension" },
      { type: "cheat_sheet", title: "Ethers.js Wallet API Reference", url: "https://docs.ethers.org/v6/api/wallet/" },
      { type: "deep_dive", title: "Mastering Ethereum: Keys and Addresses", url: "https://github.com/ethereumbook/ethereumbook" }
    ]
  },
  "n_eth_3": {
    whyLearnThis: "Gas is Ethereum's mechanism to price computation — every operation costs gas, paid in ETH. Without understanding gas, you'll deploy expensive contracts, write unoptimized code, and fail to estimate transaction costs. Gas management is the difference between a usable and unusable dApp.",
    whenIsItUsed: "Writing Solidity code, estimating transaction costs, optimizing contract gas usage, and setting gas limits in production.",
    whereIsItUsed: "All Ethereum and EVM-compatible networks. Gas costs are lower on L2s (Polygon, Arbitrum) but the concept is identical.",
    whatComesNext: "Solidity Syntax",
    learningOutcomes: [
      "Explain gas, gas limit, gas price, and base fee (EIP-1559).",
      "Estimate gas costs for common operations using eth_estimateGas.",
      "Identify gas-expensive patterns in Solidity: storage writes, loops over unbounded arrays.",
      "Apply gas optimization techniques: packing structs, caching storage in memory, using events vs. storage.",
      "Understand EIP-1559 fee market: base fee (burned) + priority tip (to validator)."
    ],
    commonMistakes: [
      "Using unbounded loops in smart contracts — a loop over a large array can exceed the block gas limit and revert.",
      "Not estimating gas before deployment — deploying a gas-hungry contract onto mainnet can cost hundreds of dollars.",
      "Setting gas limit too low, causing transactions to fail and still consuming gas."
    ],
    realWorldApplications: [
      "An NFT mint function failing because 10,000 mints are attempted in one transaction, exceeding block gas limit.",
      "Optimizing a DEX smart contract to save 30% gas by packing struct variables into fewer storage slots.",
      "EIP-1559 making gas fees more predictable for wallets and dApp developers."
    ],
    resources: [
      { type: "official", title: "Ethereum: Gas and Fees Documentation", url: "https://ethereum.org/en/developers/docs/gas/" },
      { type: "video_en", title: "Gas Explained (Finematics)", url: "https://www.youtube.com/watch?v=AJvzNICwcwc" },
      { type: "video_hi", title: "Ethereum Gas and Fees Hindi", url: "https://www.youtube.com/watch?v=8p7RKYJ9AF0" },
      { type: "article", title: "EIP-1559: A transaction fee market upgrade", url: "https://eips.ethereum.org/EIPS/eip-1559" },
      { type: "github", title: "wolflo/evm-opcodes: EVM gas costs", url: "https://github.com/wolflo/evm-opcodes" },
      { type: "cheat_sheet", title: "Gas Costs by Opcode Reference (evm.codes)", url: "https://www.evm.codes/" },
      { type: "deep_dive", title: "Solidity Gas Optimization Patterns", url: "https://github.com/iskdrews/awesome-solidity-gas-optimization" }
    ]
  },
  "n_sol_1": {
    whyLearnThis: "Solidity is the programming language for Ethereum smart contracts. It's the language of DeFi, NFTs, and DAOs. It runs in the EVM and has unique semantics (storage, payable functions, events) that are unlike any other language.",
    whenIsItUsed: "Writing smart contracts for Ethereum and all EVM-compatible chains.",
    whereIsItUsed: "Ethereum, Polygon, Avalanche, BNB Chain, Arbitrum, Optimism, Base.",
    whatComesNext: "ERC Standards (ERC-20, ERC-721)",
    learningOutcomes: [
      "Write Solidity contracts with state variables, functions, events, and modifiers.",
      "Understand visibility modifiers: public, private, internal, external.",
      "Use require(), revert(), and custom errors for input validation.",
      "Understand the difference between storage, memory, and calldata in function parameters.",
      "Use mapping and array data structures for on-chain data storage."
    ],
    commonMistakes: [
      "Not marking external functions as external (using public instead) — wastes gas by allowing internal calls.",
      "Using floating pragma (^0.8.0) in production — pin to a specific version.",
      "Not emitting events for state changes — events are how off-chain systems react to on-chain changes."
    ],
    realWorldApplications: [
      "A token contract with transfer, approve, and transferFrom functions as the standard interface.",
      "A voting contract where each address can vote once, enforced by a mapping.",
      "A payable function that accepts ETH deposits and tracks balances per user."
    ],
    resources: [
      { type: "official", title: "Solidity Language Documentation", url: "https://docs.soliditylang.org/en/stable/" },
      { type: "video_en", title: "Solidity Full Course (freeCodeCamp)", url: "https://www.youtube.com/watch?v=ipwxYa-F1uY" },
      { type: "video_hi", title: "Solidity Tutorial Hindi", url: "https://www.youtube.com/watch?v=ipwxYa-F1uY" },
      { type: "article", title: "CryptoZombies: Learn Solidity Interactively", url: "https://cryptozombies.io/" },
      { type: "github", title: "OpenZeppelin/openzeppelin-contracts: Battle-tested Solidity contracts", url: "https://github.com/OpenZeppelin/openzeppelin-contracts" },
      { type: "cheat_sheet", title: "Solidity Cheat Sheet (GitHub)", url: "https://github.com/manojpramesh/solidity-cheatsheet" },
      { type: "deep_dive", title: "Solidity Patterns: Best practices for contract design", url: "https://fravoll.github.io/solidity-patterns/" }
    ]
  },
  "n_sol_2": {
    whyLearnThis: "ERC-20 is the standard for fungible tokens (DeFi tokens, governance tokens, stablecoins). ERC-721 is the standard for non-fungible tokens (NFTs). These standards allow tokens to work with any wallet, exchange, or dApp without custom integration — composability is the superpower of standardization.",
    whenIsItUsed: "Creating any custom token — whether a project token, stablecoin, or NFT collection.",
    whereIsItUsed: "Every DeFi protocol, NFT marketplace (OpenSea, Blur), DAO governance systems.",
    whatComesNext: "Hardhat & Truffle",
    learningOutcomes: [
      "Implement an ERC-20 token using OpenZeppelin, including transfer, approve, and allowance.",
      "Implement an ERC-721 NFT contract with mint, burn, and tokenURI functions.",
      "Understand why ERC-1155 (multi-token standard) is more gas-efficient for batch transfers.",
      "Extend OpenZeppelin base contracts with custom logic (royalties, whitelist minting).",
      "Test ERC-20 and ERC-721 contracts with Hardhat and ethers.js."
    ],
    commonMistakes: [
      "Writing ERC-20 from scratch instead of inheriting from OpenZeppelin — their contracts are audited; yours are not.",
      "Forgetting to emit Transfer and Approval events — wallets and indexers rely on events to track balances.",
      "Using integer math for token amounts without accounting for decimal places (1 ETH = 10^18 wei)."
    ],
    realWorldApplications: [
      "Uniswap using ERC-20 tokens as the standard interface for all trading pairs.",
      "BAYC (Bored Ape Yacht Club) using ERC-721 for 10,000 unique NFT IDs on Ethereum.",
      "Axie Infinity using ERC-1155 for efficient batch transfer of in-game items."
    ],
    resources: [
      { type: "official", title: "OpenZeppelin: ERC-20 Contracts", url: "https://docs.openzeppelin.com/contracts/5.x/erc20" },
      { type: "video_en", title: "ERC-20 Token Tutorial (Patrick Collins)", url: "https://www.youtube.com/watch?v=8rpir_ZSK1g" },
      { type: "video_hi", title: "ERC-20 and NFT Hindi", url: "https://www.youtube.com/watch?v=ipwxYa-F1uY" },
      { type: "article", title: "Ethereum Improvement Proposals: ERC-20 Standard", url: "https://eips.ethereum.org/EIPS/eip-20" },
      { type: "github", title: "OpenZeppelin/openzeppelin-contracts: ERC standards", url: "https://github.com/OpenZeppelin/openzeppelin-contracts/tree/master/contracts/token" },
      { type: "cheat_sheet", title: "ERC Standards Quick Reference", url: "https://docs.openzeppelin.com/contracts/5.x/tokens" },
      { type: "deep_dive", title: "ERC-721 Non-Fungible Token Standard", url: "https://eips.ethereum.org/EIPS/eip-721" }
    ]
  },
  "n_sol_3": {
    whyLearnThis: "Hardhat is the modern Ethereum development environment for compiling, testing, debugging, and deploying smart contracts. It replaced Truffle as the industry standard. Running a local Ethereum node in Hardhat is how you test contracts before spending real money on mainnet.",
    whenIsItUsed: "Developing and testing smart contracts locally, running forked mainnet tests, and deploying contracts to testnet and mainnet.",
    whereIsItUsed: "Every serious Ethereum smart contract project uses Hardhat or Foundry.",
    whatComesNext: "Web3.js & Ethers.js",
    learningOutcomes: [
      "Set up a Hardhat project and compile Solidity contracts.",
      "Write JavaScript/TypeScript tests for smart contracts using chai and ethers.js.",
      "Fork mainnet in Hardhat to test contracts with real DeFi protocol state.",
      "Deploy contracts to local Hardhat network, testnet (Sepolia), and mainnet using deploy scripts.",
      "Use Hardhat's console.log for contract debugging during development."
    ],
    commonMistakes: [
      "Testing only with unit tests and not integration tests against forked mainnet state.",
      "Not using Hardhat gas reporter to understand the gas cost of each function before deploying.",
      "Deploying to mainnet without having the contract audited — not a Hardhat issue, but a process issue."
    ],
    realWorldApplications: [
      "A DeFi protocol's test suite running 500 tests against a forked Ethereum mainnet in 60 seconds.",
      "Hardhat's mainnet fork allowing testing of a contract's interaction with Uniswap using real liquidity.",
      "Automated deployment scripts that deploy, verify on Etherscan, and initialize contracts in sequence."
    ],
    resources: [
      { type: "official", title: "Hardhat Documentation", url: "https://hardhat.org/docs" },
      { type: "video_en", title: "Hardhat Full Course (freeCodeCamp)", url: "https://www.youtube.com/watch?v=gyMwXuJrbJQ" },
      { type: "video_hi", title: "Hardhat Tutorial Hindi", url: "https://www.youtube.com/watch?v=gyMwXuJrbJQ" },
      { type: "article", title: "DigitalOcean: Building a dApp with Hardhat and Ethers.js", url: "https://www.digitalocean.com/community/tutorials/how-to-set-up-an-nft-minting-page" },
      { type: "github", title: "nomiclabs/hardhat: Ethereum development environment", url: "https://github.com/NomicFoundation/hardhat" },
      { type: "cheat_sheet", title: "Hardhat Configuration Reference", url: "https://hardhat.org/hardhat-runner/docs/config" },
      { type: "deep_dive", title: "Hardhat: Testing Contracts Guide", url: "https://hardhat.org/tutorial/testing-contracts" }
    ]
  },
  "n_w3_1": {
    whyLearnThis: "Web3.js and Ethers.js are the JavaScript libraries that connect frontend applications to the Ethereum blockchain. Ethers.js is the modern standard — smaller bundle, better TypeScript support, and cleaner API.",
    whenIsItUsed: "Building frontend interfaces for dApps, reading blockchain state, sending transactions, and listening to events.",
    whereIsItUsed: "React/Vue dApp frontends, Node.js backends interacting with contracts, and CLI tools.",
    whatComesNext: "WalletConnect & Wagmi",
    learningOutcomes: [
      "Connect to Ethereum using a provider (MetaMask, Infura, Alchemy) with ethers.js.",
      "Read contract state by calling view functions with ethers.Contract.",
      "Send transactions by calling state-modifying functions with a signer.",
      "Listen to contract events using contract.on() and contract.queryFilter().",
      "Handle transaction status: pending, mined, failed, and gas estimation."
    ],
    commonMistakes: [
      "Not handling provider errors — MetaMask can reject connections, networks can be wrong.",
      "Using Web3.js instead of Ethers.js for new projects — Ethers.js is the community standard now.",
      "Not using BigNumber for token amounts — JavaScript's number type cannot represent 18-decimal token amounts safely."
    ],
    realWorldApplications: [
      "A dApp frontend fetching an NFT's owner and metadata from the blockchain using ethers.js.",
      "A backend indexer listening for Transfer events and updating a database in real time.",
      "A DeFi dashboard showing a user's token balances and positions across multiple protocols."
    ],
    resources: [
      { type: "official", title: "Ethers.js Documentation v6", url: "https://docs.ethers.org/v6/" },
      { type: "video_en", title: "Ethers.js Tutorial (Dapp University)", url: "https://www.youtube.com/watch?v=a0osIaAOFSE" },
      { type: "video_hi", title: "Web3 Frontend Hindi", url: "https://www.youtube.com/watch?v=a0osIaAOFSE" },
      { type: "article", title: "Ethers.js vs Web3.js: Which to Use?", url: "https://docs.ethers.org/v6/" },
      { type: "github", title: "ethers-io/ethers.js: Complete Ethereum library", url: "https://github.com/ethers-io/ethers.js" },
      { type: "cheat_sheet", title: "Ethers.js Cheat Sheet", url: "https://docs.ethers.org/v6/getting-started/" },
      { type: "deep_dive", title: "Full Stack dApp Development with React and Ethers.js", url: "https://dev.to/dabit3/the-complete-guide-to-full-stack-ethereum-development-3j13" }
    ]
  },
  "n_w3_2": {
    whyLearnThis: "WalletConnect enables mobile wallets to connect to dApps via QR code. Wagmi is the React hooks library built on top of Ethers.js that makes wallet connection, transaction handling, and blockchain reading feel like normal React state management.",
    whenIsItUsed: "Building any dApp that needs to support both browser extension wallets (MetaMask) and mobile wallets (Trust Wallet, Coinbase Wallet).",
    whereIsItUsed: "Uniswap, OpenSea, Aave, and virtually all modern DeFi frontends.",
    whatComesNext: "IPFS & Decentralized Storage",
    learningOutcomes: [
      "Integrate Wagmi with React to handle wallet connections with useAccount and useConnect hooks.",
      "Use WalletConnect v2 to enable QR-code wallet connection for mobile users.",
      "Read contract data with useContractRead and write with useContractWrite.",
      "Handle transaction lifecycle with usePrepareContractWrite and useWaitForTransaction.",
      "Support multiple wallets simultaneously using Wagmi's connector system."
    ],
    commonMistakes: [
      "Building custom wallet connection logic instead of using Wagmi — it handles edge cases you'll miss.",
      "Not handling network switching — users may be on the wrong network and need guidance.",
      "Not showing transaction pending states — users will click twice if they don't see feedback."
    ],
    realWorldApplications: [
      "Uniswap's swap interface using Wagmi to handle wallet connection and transaction submission.",
      "A mobile-first dApp supporting WalletConnect so iPhone users with Trust Wallet can interact.",
      "A multi-step DeFi transaction (approve + stake) using Wagmi to manage each step's state."
    ],
    resources: [
      { type: "official", title: "Wagmi Documentation", url: "https://wagmi.sh/react/getting-started" },
      { type: "video_en", title: "Wagmi and WalletConnect Tutorial (Patrick Collins)", url: "https://www.youtube.com/watch?v=gyMwXuJrbJQ" },
      { type: "video_hi", title: "WalletConnect in Hindi", url: "https://www.youtube.com/watch?v=pdsYCkUWrgQ" },
      { type: "article", title: "WalletConnect v2 Integration Guide", url: "https://docs.walletconnect.com/" },
      { type: "github", title: "wevm/wagmi: React hooks for Ethereum", url: "https://github.com/wevm/wagmi" },
      { type: "cheat_sheet", title: "Wagmi Hooks Reference", url: "https://wagmi.sh/react/api/hooks" },
      { type: "deep_dive", title: "Building a Complete DeFi Interface with Wagmi", url: "https://wagmi.sh/examples/connect-wallet" }
    ]
  },
  "n_w3_3": {
    whyLearnThis: "IPFS (InterPlanetary File System) is the decentralized storage solution that stores NFT images, metadata, and other files. Without IPFS, an NFT's image is just a URL pointing to a centralized server — if that server goes down, the NFT 'points to nothing'. IPFS pins content addressable data permanently.",
    whenIsItUsed: "Storing NFT metadata and images, decentralized website hosting, and any data that should be content-addressed and uncensorable.",
    whereIsItUsed: "OpenSea (NFT metadata), The Graph (indexing data), ENS (profile data), Filecoin (incentivized IPFS storage).",
    whatComesNext: "DEXs & AMMs",
    learningOutcomes: [
      "Understand content addressing: IPFS CIDs are the hash of the file content, not a location.",
      "Upload files to IPFS using Pinata or web3.storage.",
      "Pin content to ensure it stays available on the IPFS network.",
      "Structure NFT metadata as JSON with image pointing to an ipfs:// URI.",
      "Understand Filecoin's incentive layer for persistent IPFS storage."
    ],
    commonMistakes: [
      "Using centralized IPFS gateways (ipfs.io) as the canonical URL — they can go down or be censored.",
      "Not pinning content — IPFS garbage-collects unpinned content when the node needs space.",
      "Uploading metadata before finalizing the NFT — changing metadata after minting breaks buyer trust."
    ],
    realWorldApplications: [
      "10,000 NFT images and metadata JSON files uploaded to IPFS via Pinata before the mint.",
      "The Graph Protocol storing blockchain data and making it queryable via GraphQL from IPFS.",
      "ENS domain profiles pointing to IPFS-hosted websites that can't be taken down."
    ],
    resources: [
      { type: "official", title: "IPFS Documentation", url: "https://docs.ipfs.tech/" },
      { type: "video_en", title: "IPFS Explained (Simply Explained)", url: "https://www.youtube.com/watch?v=5Uj6uR3fp-U" },
      { type: "video_hi", title: "IPFS Tutorial Hindi", url: "https://www.youtube.com/watch?v=5Uj6uR3fp-U" },
      { type: "article", title: "Pinata: IPFS and NFT Storage Guide", url: "https://www.pinata.cloud/blog/what-is-ipfs" },
      { type: "github", title: "ipfs/helia: IPFS in JavaScript", url: "https://github.com/ipfs/helia" },
      { type: "cheat_sheet", title: "IPFS CLI Commands Reference", url: "https://docs.ipfs.tech/reference/kubo/cli/" },
      { type: "deep_dive", title: "Content Addressing on the Decentralized Web", url: "https://proto.school/content-addressing" }
    ]
  },
  "n_defi_1": {
    whyLearnThis: "Decentralized Exchanges (DEXs) and Automated Market Makers (AMMs) are the foundation of DeFi, enabling trustless token swapping without order books. Uniswap alone has processed over $1 trillion in volume. Understanding AMMs is required to build or audit any DeFi protocol.",
    whenIsItUsed: "Building DEX interfaces, implementing liquidity pools, arbitrage bots, and integrating Uniswap into other protocols.",
    whereIsItUsed: "Uniswap (Ethereum), SushiSwap, PancakeSwap (BSC), Curve Finance, Balancer.",
    whatComesNext: "Chainlink & Oracles",
    learningOutcomes: [
      "Explain the x*y=k AMM formula and how it determines prices.",
      "Understand impermanent loss and when it affects liquidity providers.",
      "Interact with Uniswap v3 contracts programmatically using ethers.js.",
      "Implement a simple AMM swap in Solidity.",
      "Explain concentrated liquidity (Uniswap v3) vs. full-range liquidity (v2)."
    ],
    commonMistakes: [
      "Confusing price impact (immediate slippage on a trade) with impermanent loss (long-term LP position loss).",
      "Not setting slippage tolerance when building swap interfaces — price can move between tx submission and execution.",
      "Using spot price from an AMM as an oracle — AMM prices are easily manipulated within a single transaction."
    ],
    realWorldApplications: [
      "Uniswap processing $5B+ in daily trading volume using AMM smart contracts with no order book.",
      "Flash loan arbitrage bots exploiting price differences between DEXs within a single transaction.",
      "Curve Finance's stableswap invariant enabling extremely low-slippage stablecoin swaps."
    ],
    resources: [
      { type: "official", title: "Uniswap v3 Documentation", url: "https://docs.uniswap.org/concepts/uniswap-protocol" },
      { type: "video_en", title: "AMMs Explained (Finematics)", url: "https://www.youtube.com/watch?v=1PbZMudPP5E" },
      { type: "video_hi", title: "DeFi and DEX Hindi", url: "https://www.youtube.com/watch?v=1PbZMudPP5E" },
      { type: "article", title: "Understanding AMMs: x*y=k", url: "https://uniswap.org/blog/" },
      { type: "github", title: "Uniswap/v3-core: Uniswap v3 core contracts", url: "https://github.com/Uniswap/v3-core" },
      { type: "cheat_sheet", title: "DeFi Concepts Glossary", url: "https://defillama.com/" },
      { type: "deep_dive", title: "Paradigm: Uniswap v3 Deep Dive", url: "https://docs.uniswap.org/concepts/protocol/concentrated-liquidity" }
    ]
  },
  "n_defi_2": {
    whyLearnThis: "Smart contracts cannot access off-chain data (prices, weather, sports scores) directly. Chainlink oracles securely bridge real-world data onto the blockchain. Without reliable oracles, DeFi protocols would be exposed to price manipulation and flash loan attacks.",
    whenIsItUsed: "Any smart contract that needs real-world data: DeFi price feeds, insurance triggers, sports betting dApps, and randomness.",
    whereIsItUsed: "Chainlink (dominant), Band Protocol, API3. Integrated into Aave, Compound, Synthetix, and most major DeFi protocols.",
    whatComesNext: "Lending Protocols",
    learningOutcomes: [
      "Explain the oracle problem: why smart contracts cannot directly fetch external data.",
      "Use Chainlink Price Feeds to get the ETH/USD price in a Solidity contract.",
      "Understand how Chainlink aggregates data from multiple node operators for tamper resistance.",
      "Use Chainlink VRF (Verifiable Random Function) for provably fair randomness in games.",
      "Implement a custom Chainlink Any API request to fetch arbitrary external API data."
    ],
    commonMistakes: [
      "Using AMM spot prices as oracles instead of time-weighted average prices (TWAP) or Chainlink — AMM prices are manipulable.",
      "Not checking oracle price staleness — Chainlink feeds have a heartbeat, and stale prices should be rejected.",
      "Building a centralized oracle instead of using Chainlink — a single point of failure defeats decentralization."
    ],
    realWorldApplications: [
      "Aave using Chainlink price feeds to determine collateral value and trigger liquidations.",
      "A decentralized lottery using Chainlink VRF to fairly select winners in a verifiable, uncheateable way.",
      "An insurance protocol using Chainlink to fetch flight delay data and automatically pay claims."
    ],
    resources: [
      { type: "official", title: "Chainlink Documentation", url: "https://docs.chain.link/" },
      { type: "video_en", title: "Chainlink Oracles Explained (Patrick Collins)", url: "https://www.youtube.com/watch?v=tIUHQ7sDoaU" },
      { type: "video_hi", title: "Chainlink Hindi", url: "https://www.youtube.com/watch?v=tIUHQ7sDoaU" },
      { type: "article", title: "Chainlink: The Oracle Problem", url: "https://chain.link/education/blockchain-oracles" },
      { type: "github", title: "smartcontractkit/chainlink: Chainlink node implementation", url: "https://github.com/smartcontractkit/chainlink" },
      { type: "cheat_sheet", title: "Chainlink Price Feeds Reference", url: "https://docs.chain.link/data-feeds/price-feeds/addresses" },
      { type: "deep_dive", title: "Chainlink 2.0 Whitepaper", url: "https://chain.link/whitepaper" }
    ]
  },
  "n_defi_3": {
    whyLearnThis: "DeFi lending protocols (Aave, Compound) allow users to earn interest on deposits and borrow against collateral entirely through smart contracts. Understanding them is required to build integrations, audit security, or work in the DeFi space.",
    whenIsItUsed: "Integrating lending protocol features into a DeFi product, building liquidation bots, and studying DeFi architecture patterns.",
    whereIsItUsed: "Aave, Compound, MakerDAO, Liquity, Euler Finance.",
    whatComesNext: "Reentrancy Attacks",
    learningOutcomes: [
      "Explain collateralized lending: borrow up to 80% of collateral value, liquidated if it falls below threshold.",
      "Understand how aTokens/cTokens represent your deposit plus accrued interest.",
      "Implement a Solidity contract that deposits to Aave and borrows against it.",
      "Explain flash loans: uncollateralized loans that must be repaid within one transaction.",
      "Understand liquidation mechanics and how to build a liquidation bot."
    ],
    commonMistakes: [
      "Underestimating liquidation risk — crypto volatility can cause collateral to drop below threshold rapidly.",
      "Not understanding that interest rates in DeFi protocols are algorithmic and can change dramatically with utilization.",
      "Using flash loans for development testing without understanding they must be repaid in the same transaction."
    ],
    realWorldApplications: [
      "A user depositing ETH as collateral on Aave and borrowing USDC to use in another DeFi protocol.",
      "A flash loan bot borrowing $10M uncollateralized, performing arbitrage, and repaying in one transaction.",
      "Liquidation bots watching for undercollateralized positions and executing liquidations for a 5-10% profit."
    ],
    resources: [
      { type: "official", title: "Aave Protocol Documentation", url: "https://aave.com/docs" },
      { type: "video_en", title: "DeFi Lending Explained (Finematics)", url: "https://www.youtube.com/watch?v=aTp9er6S73M" },
      { type: "video_hi", title: "DeFi Protocols Hindi", url: "https://www.youtube.com/watch?v=aTp9er6S73M" },
      { type: "article", title: "Compound Finance: Understanding cTokens", url: "https://compound.finance/docs/ctokens" },
      { type: "github", title: "aave/aave-v3-core: Aave Protocol v3", url: "https://github.com/aave/aave-v3-core" },
      { type: "cheat_sheet", title: "Aave Flash Loans Quick Start", url: "https://docs.aave.com/" },
      { type: "deep_dive", title: "MakerDAO: Dai Stablecoin System Architecture", url: "https://makerdao.com/en/whitepaper/" }
    ]
  },
  "n_bsec_1": {
    whyLearnThis: "Reentrancy is the vulnerability that caused the 2016 DAO hack, resulting in $60M stolen and the Ethereum hard fork. It's still one of the most common smart contract vulnerabilities today. Understanding it is non-negotiable for any Solidity developer.",
    whenIsItUsed: "Any smart contract that sends ETH or calls external contracts. Auditing code for security vulnerabilities.",
    whereIsItUsed: "Ethereum DeFi protocols. Reentrancy has been exploited in Cream Finance, Fei Protocol, and many others.",
    whatComesNext: "Audit Reports & Tools (Slither)",
    learningOutcomes: [
      "Explain reentrancy: attacker's fallback/receive function re-enters the vulnerable contract before state is updated.",
      "Identify the checks-effects-interactions pattern and why it prevents reentrancy.",
      "Apply OpenZeppelin's ReentrancyGuard modifier to protect sensitive functions.",
      "Write a proof-of-concept reentrancy exploit in Solidity for a vulnerable contract.",
      "Identify cross-function reentrancy — less common but more subtle."
    ],
    commonMistakes: [
      "Updating state AFTER sending ETH instead of before — always update state, then interact with external contracts.",
      "Thinking that modifier-based guards are always sufficient — cross-function reentrancy can bypass single-function guards.",
      "Not testing reentrancy exploits against your own contracts before auditing."
    ],
    realWorldApplications: [
      "The 2016 DAO hack: $60M stolen through reentrancy because ETH was sent before the balance was updated.",
      "Cream Finance's $130M 2021 hack exploiting a complex cross-protocol flash loan reentrancy attack.",
      "OpenZeppelin's ReentrancyGuard protecting Uniswap, Compound, and most modern DeFi protocols."
    ],
    resources: [
      { type: "official", title: "OpenZeppelin: Reentrancy Guard Documentation", url: "https://docs.openzeppelin.com/contracts/5.x/" },
      { type: "video_en", title: "Reentrancy Attack Explained (Patrick Collins)", url: "https://www.youtube.com/watch?v=4Mm3BCyHtDY" },
      { type: "video_hi", title: "Smart Contract Security Hindi", url: "https://www.youtube.com/watch?v=4Mm3BCyHtDY" },
      { type: "article", title: "OWASP: Reentrancy in Smart Contracts", url: "https://owasp.org/www-project-smart-contract-top-10/" },
      { type: "github", title: "crytic/not-so-smart-contracts: Solidity vulnerability examples", url: "https://github.com/crytic/not-so-smart-contracts" },
      { type: "cheat_sheet", title: "Smart Contract Security Checklist", url: "https://github.com/securing/SCSVS" },
      { type: "deep_dive", title: "Ethereum Reentrancy Attacks: A Complete Guide", url: "https://www.notonlyowner.com/learn/intro-security-hacking-smart-contracts-ethereum" }
    ]
  },
  "n_bsec_2": {
    whyLearnThis: "Slither, MythX, and Echidna are automated security analysis tools that can find vulnerabilities in Solidity code without manual review. Audit reports from firms like Trail of Bits, Consensys, and Certik are how the community validates the security of major protocols.",
    whenIsItUsed: "Before deploying any contract to mainnet, and as part of a CI/CD pipeline for contract development.",
    whereIsItUsed: "Integrated into Hardhat via the slither-hardhat plugin. Required by all serious DeFi protocols before launch.",
    whatComesNext: "Upgradable Contracts",
    learningOutcomes: [
      "Run Slither on a Solidity project and triage the findings.",
      "Understand common Slither detectors: reentrancy, uninitialized state, integer overflow.",
      "Read a professional audit report and understand the severity classifications (Critical/High/Medium/Low).",
      "Use Echidna for property-based fuzzing to discover edge cases automated tools miss.",
      "Integrate Slither into a GitHub Actions CI pipeline."
    ],
    commonMistakes: [
      "Deploying contracts without running static analysis tools — many vulnerabilities are easily caught by Slither.",
      "Treating a passed audit as a security guarantee — audits find known vulnerability patterns, not all bugs.",
      "Not providing auditors with full context (intended behavior, test suite) — auditors can't find logic bugs without understanding intent."
    ],
    realWorldApplications: [
      "A DeFi protocol spending $100K on a Consensys Diligence audit before a $500M TVL launch.",
      "Slither finding an uninitialized variable in a proxy contract that would allow an attacker to take ownership.",
      "Echidna fuzzer discovering an integer overflow under specific token amount edge cases."
    ],
    resources: [
      { type: "official", title: "Slither: Static Analyzer Documentation", url: "https://github.com/crytic/slither/wiki/Usage" },
      { type: "video_en", title: "Smart Contract Auditing (Patrick Collins)", url: "https://www.youtube.com/watch?v=YNZ-3l4S4M0" },
      { type: "video_hi", title: "Solidity Security Audit Hindi", url: "https://www.youtube.com/watch?v=YNZ-3l4S4M0" },
      { type: "article", title: "How to Read a Smart Contract Audit Report", url: "https://blog.openzeppelin.com/" },
      { type: "github", title: "crytic/slither: Solidity static analysis tool", url: "https://github.com/crytic/slither" },
      { type: "cheat_sheet", title: "Smart Contract Audit Checklist (Consensys)", url: "https://consensys.github.io/smart-contract-best-practices/" },
      { type: "deep_dive", title: "Trail of Bits: Building Secure Smart Contracts", url: "https://github.com/crytic/building-secure-contracts" }
    ]
  },
  "n_bsec_3": {
    whyLearnThis: "Smart contracts are immutable by default — once deployed, you can't change a bug. Upgradable contract patterns (Transparent Proxy, UUPS) allow you to upgrade the logic while preserving state. This is how major DeFi protocols ship bug fixes without migrating user funds.",
    whenIsItUsed: "Any contract that needs the ability to fix bugs, upgrade features, or migrate to a new implementation post-deployment.",
    whereIsItUsed: "Uniswap v3 uses UUPS proxy. OpenZeppelin's upgradeable contracts library is the standard.",
    whatComesNext: "Blockchain Engineering Complete",
    learningOutcomes: [
      "Explain the proxy pattern: proxy stores state, implementation stores logic, delegatecall bridges them.",
      "Implement a Transparent Proxy and UUPS Proxy using OpenZeppelin Upgrades.",
      "Understand storage collision: why storage layout must be consistent between implementations.",
      "Test upgrades with Hardhat, verifying state is preserved after an upgrade.",
      "Understand the governance and multisig controls needed to safely manage upgrade authority."
    ],
    commonMistakes: [
      "Changing the storage layout in a new implementation — adding a variable before existing ones corrupts state.",
      "Using constructor in upgradeable contracts — use initializer functions with the Initializable pattern instead.",
      "Giving upgrade authority to a single EOA (externally owned account) — always use a multisig."
    ],
    realWorldApplications: [
      "A DeFi protocol using OpenZeppelin UUPS proxies to fix a fee calculation bug without migrating $200M TVL.",
      "A DAO using a Timelock controller that delays all upgrades by 48 hours, allowing users to exit if they disagree.",
      "An NFT marketplace upgrading from a 2% to 0% fee model by deploying a new implementation to the existing proxy."
    ],
    resources: [
      { type: "official", title: "OpenZeppelin Upgradeable Contracts", url: "https://docs.openzeppelin.com/" },
      { type: "video_en", title: "Upgradeable Contracts Explained (Patrick Collins)", url: "https://www.youtube.com/watch?v=bdXJmWajZRY" },
      { type: "video_hi", title: "Proxy Patterns Hindi", url: "https://www.youtube.com/watch?v=bdXJmWajZRY" },
      { type: "article", title: "OpenZeppelin: The Transparent Proxy Pattern", url: "https://blog.openzeppelin.com/the-transparent-proxy-pattern" },
      { type: "github", title: "OpenZeppelin/openzeppelin-upgrades: Plugin for upgrades", url: "https://github.com/OpenZeppelin/openzeppelin-upgrades" },
      { type: "cheat_sheet", title: "Upgradeable Contracts Storage Layout Rules", url: "https://docs.openzeppelin.com/upgrades-plugins/" },
      { type: "deep_dive", title: "EIP-1967: Proxy Storage Slots Standard", url: "https://eips.ethereum.org/EIPS/eip-1967" }
    ]
  }
};
