import { RoadmapContentNode, RoadmapContentEdge } from "@/data/types";

export const graphNodes: RoadmapContentNode[] = [
    { id: "s_bc_fund", type: "section", position: { x: 0, y: 0 }, data: { title: "Blockchain Fundamentals", sectionNumber: 1, color: "blue", sectionIcon: "link" } },
    { id: "n_bc_1", type: "topic", parentId: "s_bc_fund", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Decentralization & Ledgers", difficulty: "Beginner", estimatedTime: "3 hrs", sectionColor: "blue", icon: "network", row: 0, col: 0 } },
    { id: "n_bc_2", type: "topic", parentId: "s_bc_fund", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Consensus Mechanisms (PoW, PoS)", difficulty: "Intermediate", estimatedTime: "4 hrs", sectionColor: "blue", icon: "cog", row: 0, col: 1 } },
    { id: "n_bc_3", type: "topic", parentId: "s_bc_fund", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Public vs Private Blockchains", difficulty: "Advanced", estimatedTime: "5 hrs", sectionColor: "blue", icon: "globe", row: 1, col: 0 } },

    { id: "s_bc_eth", type: "section", position: { x: 576, y: 0 }, data: { title: "Ethereum & Smart Contracts", sectionNumber: 2, color: "purple", sectionIcon: "code" } },
    { id: "n_eth_1", type: "topic", parentId: "s_bc_eth", extent: "parent", position: { x: 0, y: 0 }, data: { title: "EVM (Ethereum Virtual Machine)", difficulty: "Beginner", estimatedTime: "4 hrs", sectionColor: "purple", icon: "cpu", row: 0, col: 0 } },
    { id: "n_eth_2", type: "topic", parentId: "s_bc_eth", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Wallets & Metamask", difficulty: "Intermediate", estimatedTime: "3 hrs", sectionColor: "purple", icon: "wallet", row: 0, col: 1 } },
    { id: "n_eth_3", type: "topic", parentId: "s_bc_eth", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Gas & Transactions", difficulty: "Advanced", estimatedTime: "4 hrs", sectionColor: "purple", icon: "fuel", row: 1, col: 0 } },

    { id: "s_bc_sol", type: "section", position: { x: 1152, y: 0 }, data: { title: "Solidity Programming", sectionNumber: 3, color: "green", sectionIcon: "code" } },
    { id: "n_sol_1", type: "topic", parentId: "s_bc_sol", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Solidity Syntax", difficulty: "Beginner", estimatedTime: "6 hrs", sectionColor: "green", icon: "SiSolidity", row: 0, col: 0 } },
    { id: "n_sol_2", type: "topic", parentId: "s_bc_sol", extent: "parent", position: { x: 0, y: 0 }, data: { title: "ERC Standards (ERC-20, ERC-721)", difficulty: "Intermediate", estimatedTime: "5 hrs", sectionColor: "green", icon: "SiEthereum", row: 0, col: 1 } },
    { id: "n_sol_3", type: "topic", parentId: "s_bc_sol", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Hardhat & Truffle", difficulty: "Advanced", estimatedTime: "6 hrs", sectionColor: "green", icon: "SiHardhat", row: 1, col: 0 } },

    { id: "s_bc_w3", type: "section", position: { x: 0, y: 600 }, data: { title: "Web3 Integration", sectionNumber: 4, color: "yellow", sectionIcon: "globe" } },
    { id: "n_w3_1", type: "topic", parentId: "s_bc_w3", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Web3.js & Ethers.js", difficulty: "Beginner", estimatedTime: "5 hrs", sectionColor: "yellow", icon: "SiJavascript", row: 0, col: 0 } },
    { id: "n_w3_2", type: "topic", parentId: "s_bc_w3", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Wallet Connect & Wagmi", difficulty: "Intermediate", estimatedTime: "4 hrs", sectionColor: "yellow", icon: "wallet", row: 0, col: 1 } },
    { id: "n_w3_3", type: "topic", parentId: "s_bc_w3", extent: "parent", position: { x: 0, y: 0 }, data: { title: "IPFS & Decentralized Storage", difficulty: "Advanced", estimatedTime: "6 hrs", sectionColor: "yellow", icon: "SiIpfs", row: 1, col: 0 } },

    { id: "s_bc_defi", type: "section", position: { x: 576, y: 600 }, data: { title: "DeFi & Oracles", sectionNumber: 5, color: "red", sectionIcon: "database" } },
    { id: "n_defi_1", type: "topic", parentId: "s_bc_defi", extent: "parent", position: { x: 0, y: 0 }, data: { title: "DEXs & AMMs", difficulty: "Beginner", estimatedTime: "5 hrs", sectionColor: "red", icon: "SiUniswap", row: 0, col: 0 } },
    { id: "n_defi_2", type: "topic", parentId: "s_bc_defi", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Chainlink & Oracles", difficulty: "Intermediate", estimatedTime: "4 hrs", sectionColor: "red", icon: "SiChainlink", row: 0, col: 1 } },
    { id: "n_defi_3", type: "topic", parentId: "s_bc_defi", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Lending Protocols", difficulty: "Advanced", estimatedTime: "5 hrs", sectionColor: "red", icon: "SiAave", row: 1, col: 0 } },

    { id: "s_bc_sec", type: "section", position: { x: 1152, y: 600 }, data: { title: "Smart Contract Security", sectionNumber: 6, color: "orange", sectionIcon: "lock" } },
    { id: "n_bsec_1", type: "topic", parentId: "s_bc_sec", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Reentrancy Attacks", difficulty: "Beginner", estimatedTime: "3 hrs", sectionColor: "orange", icon: "shield", row: 0, col: 0 } },
    { id: "n_bsec_2", type: "topic", parentId: "s_bc_sec", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Audit Reports & Tools (Slither)", difficulty: "Intermediate", estimatedTime: "5 hrs", sectionColor: "orange", icon: "search", row: 0, col: 1 } },
    { id: "n_bsec_3", type: "topic", parentId: "s_bc_sec", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Upgradable Contracts", difficulty: "Advanced", estimatedTime: "5 hrs", sectionColor: "orange", icon: "refresh-cw", row: 1, col: 0 } },
];

export const graphEdges: RoadmapContentEdge[] = [
    { id: "e1", source: "n_bc_1", target: "n_bc_2", sourceHandle: "right", targetHandle: "left" },
    { id: "e2", source: "n_bc_2", target: "n_bc_3", sourceHandle: "right", targetHandle: "left" },
    { id: "e_sec_1", source: "n_bc_3", target: "n_eth_1", sourceHandle: "right", targetHandle: "left" },

    { id: "e3", source: "n_eth_1", target: "n_eth_2", sourceHandle: "right", targetHandle: "left" },
    { id: "e4", source: "n_eth_1", target: "n_eth_3", sourceHandle: "bottom", targetHandle: "top" },
    { id: "e_sec_2", source: "n_eth_3", target: "n_sol_1", sourceHandle: "right", targetHandle: "left" },

    { id: "e5", source: "n_sol_1", target: "n_sol_2", sourceHandle: "right", targetHandle: "left" },
    { id: "e6", source: "n_sol_1", target: "n_sol_3", sourceHandle: "bottom", targetHandle: "top" },
    { id: "e_sec_3", source: "n_sol_2", target: "n_w3_1", sourceHandle: "bottom", targetHandle: "top" },

    { id: "e7", source: "n_w3_1", target: "n_w3_2", sourceHandle: "right", targetHandle: "left" },
    { id: "e8", source: "n_w3_1", target: "n_w3_3", sourceHandle: "bottom", targetHandle: "top" },
    { id: "e_sec_4", source: "n_w3_2", target: "n_defi_1", sourceHandle: "right", targetHandle: "left" },

    { id: "e9", source: "n_defi_1", target: "n_defi_2", sourceHandle: "right", targetHandle: "left" },
    { id: "e10", source: "n_defi_1", target: "n_defi_3", sourceHandle: "bottom", targetHandle: "top" },
    { id: "e_sec_5", source: "n_defi_3", target: "n_bsec_1", sourceHandle: "right", targetHandle: "left" },

    { id: "e11", source: "n_bsec_1", target: "n_bsec_2", sourceHandle: "right", targetHandle: "left" },
    { id: "e12", source: "n_bsec_1", target: "n_bsec_3", sourceHandle: "bottom", targetHandle: "top" },
];
