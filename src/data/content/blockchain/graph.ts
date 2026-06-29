import { RoadmapContentNode, RoadmapContentEdge } from '../../types';

export const nodes: RoadmapContentNode[] = [
  {
    "id": "fundamentals",
    "type": "section",
    "position": {
      "x": 50,
      "y": 50
    },
    "data": {
      "title": "1. Blockchain Fundamentals",
      "color": "blue"
    }
  },
  {
    "id": "n_bc_1",
    "type": "topic",
    "position": {
      "x": 50,
      "y": 150
    },
    "data": {
      "title": "Decentralization & Ledgers",
      "difficulty": "beginner",
      "icon": "server",
      "sectionId": "fundamentals"
    }
  },
  {
    "id": "n_bc_2",
    "type": "topic",
    "position": {
      "x": 50,
      "y": 250
    },
    "data": {
      "title": "Consensus Mechanisms (PoW, PoS)",
      "difficulty": "intermediate",
      "icon": "server",
      "sectionId": "fundamentals"
    }
  },
  {
    "id": "n_bc_3",
    "type": "topic",
    "position": {
      "x": 50,
      "y": 350
    },
    "data": {
      "title": "Public vs Private Blockchains",
      "difficulty": "advanced",
      "icon": "server",
      "sectionId": "fundamentals"
    }
  },
  {
    "id": "ethereum",
    "type": "section",
    "position": {
      "x": 50,
      "y": 550
    },
    "data": {
      "title": "2. Ethereum & Smart Contracts",
      "color": "purple"
    }
  },
  {
    "id": "n_eth_1",
    "type": "topic",
    "position": {
      "x": 50,
      "y": 650
    },
    "data": {
      "title": "EVM (Ethereum Virtual Machine)",
      "difficulty": "beginner",
      "icon": "server",
      "sectionId": "ethereum"
    }
  },
  {
    "id": "n_eth_2",
    "type": "topic",
    "position": {
      "x": 50,
      "y": 750
    },
    "data": {
      "title": "Wallets & Metamask",
      "difficulty": "intermediate",
      "icon": "server",
      "sectionId": "ethereum"
    }
  },
  {
    "id": "n_eth_3",
    "type": "topic",
    "position": {
      "x": 50,
      "y": 850
    },
    "data": {
      "title": "Gas & Transactions",
      "difficulty": "advanced",
      "icon": "server",
      "sectionId": "ethereum"
    }
  },
  {
    "id": "solidity",
    "type": "section",
    "position": {
      "x": 50,
      "y": 1050
    },
    "data": {
      "title": "3. Solidity Programming",
      "color": "green"
    }
  },
  {
    "id": "n_sol_1",
    "type": "topic",
    "position": {
      "x": 50,
      "y": 1150
    },
    "data": {
      "title": "Solidity Syntax",
      "difficulty": "beginner",
      "icon": "server",
      "sectionId": "solidity"
    }
  },
  {
    "id": "n_sol_2",
    "type": "topic",
    "position": {
      "x": 50,
      "y": 1250
    },
    "data": {
      "title": "ERC Standards (ERC-20, ERC-721)",
      "difficulty": "intermediate",
      "icon": "server",
      "sectionId": "solidity"
    }
  },
  {
    "id": "n_sol_3",
    "type": "topic",
    "position": {
      "x": 50,
      "y": 1350
    },
    "data": {
      "title": "Hardhat & Truffle",
      "difficulty": "advanced",
      "icon": "server",
      "sectionId": "solidity"
    }
  },
  {
    "id": "web3",
    "type": "section",
    "position": {
      "x": 50,
      "y": 1550
    },
    "data": {
      "title": "4. Web3 Integration (Frontend)",
      "color": "yellow"
    }
  },
  {
    "id": "n_w3_1",
    "type": "topic",
    "position": {
      "x": 50,
      "y": 1650
    },
    "data": {
      "title": "Web3.js & Ethers.js",
      "difficulty": "beginner",
      "icon": "server",
      "sectionId": "web3"
    }
  },
  {
    "id": "n_w3_2",
    "type": "topic",
    "position": {
      "x": 50,
      "y": 1750
    },
    "data": {
      "title": "Wallet Connect & Wagmi",
      "difficulty": "intermediate",
      "icon": "server",
      "sectionId": "web3"
    }
  },
  {
    "id": "n_w3_3",
    "type": "topic",
    "position": {
      "x": 50,
      "y": 1850
    },
    "data": {
      "title": "IPFS & Decentralized Storage",
      "difficulty": "advanced",
      "icon": "server",
      "sectionId": "web3"
    }
  },
  {
    "id": "defi",
    "type": "section",
    "position": {
      "x": 50,
      "y": 2050
    },
    "data": {
      "title": "5. DeFi & Oracles",
      "color": "red"
    }
  },
  {
    "id": "n_defi_1",
    "type": "topic",
    "position": {
      "x": 50,
      "y": 2150
    },
    "data": {
      "title": "DEXs & AMMs",
      "difficulty": "beginner",
      "icon": "server",
      "sectionId": "defi"
    }
  },
  {
    "id": "n_defi_2",
    "type": "topic",
    "position": {
      "x": 50,
      "y": 2250
    },
    "data": {
      "title": "Chainlink & Oracles",
      "difficulty": "intermediate",
      "icon": "server",
      "sectionId": "defi"
    }
  },
  {
    "id": "n_defi_3",
    "type": "topic",
    "position": {
      "x": 50,
      "y": 2350
    },
    "data": {
      "title": "Lending Protocols",
      "difficulty": "advanced",
      "icon": "server",
      "sectionId": "defi"
    }
  },
  {
    "id": "security",
    "type": "section",
    "position": {
      "x": 50,
      "y": 2550
    },
    "data": {
      "title": "6. Smart Contract Security",
      "color": "orange"
    }
  },
  {
    "id": "n_bsec_1",
    "type": "topic",
    "position": {
      "x": 50,
      "y": 2650
    },
    "data": {
      "title": "Reentrancy Attacks",
      "difficulty": "beginner",
      "icon": "server",
      "sectionId": "security"
    }
  },
  {
    "id": "n_bsec_2",
    "type": "topic",
    "position": {
      "x": 50,
      "y": 2750
    },
    "data": {
      "title": "Audit Reports & Tools (Slither)",
      "difficulty": "intermediate",
      "icon": "server",
      "sectionId": "security"
    }
  },
  {
    "id": "n_bsec_3",
    "type": "topic",
    "position": {
      "x": 50,
      "y": 2850
    },
    "data": {
      "title": "Upgradable Contracts",
      "difficulty": "advanced",
      "icon": "server",
      "sectionId": "security"
    }
  }
] as RoadmapContentNode[];

export const edges: RoadmapContentEdge[] = [
  {
    "id": "e_n_bc_1-n_bc_2",
    "source": "n_bc_1",
    "target": "n_bc_2"
  },
  {
    "id": "e_n_bc_2-n_bc_3",
    "source": "n_bc_2",
    "target": "n_bc_3"
  },
  {
    "id": "e_n_eth_1-n_eth_2",
    "source": "n_eth_1",
    "target": "n_eth_2"
  },
  {
    "id": "e_n_eth_2-n_eth_3",
    "source": "n_eth_2",
    "target": "n_eth_3"
  },
  {
    "id": "e_n_bc_3-n_eth_1",
    "source": "n_bc_3",
    "target": "n_eth_1"
  },
  {
    "id": "e_n_sol_1-n_sol_2",
    "source": "n_sol_1",
    "target": "n_sol_2"
  },
  {
    "id": "e_n_sol_2-n_sol_3",
    "source": "n_sol_2",
    "target": "n_sol_3"
  },
  {
    "id": "e_n_eth_3-n_sol_1",
    "source": "n_eth_3",
    "target": "n_sol_1"
  },
  {
    "id": "e_n_w3_1-n_w3_2",
    "source": "n_w3_1",
    "target": "n_w3_2"
  },
  {
    "id": "e_n_w3_2-n_w3_3",
    "source": "n_w3_2",
    "target": "n_w3_3"
  },
  {
    "id": "e_n_sol_3-n_w3_1",
    "source": "n_sol_3",
    "target": "n_w3_1"
  },
  {
    "id": "e_n_defi_1-n_defi_2",
    "source": "n_defi_1",
    "target": "n_defi_2"
  },
  {
    "id": "e_n_defi_2-n_defi_3",
    "source": "n_defi_2",
    "target": "n_defi_3"
  },
  {
    "id": "e_n_w3_3-n_defi_1",
    "source": "n_w3_3",
    "target": "n_defi_1"
  },
  {
    "id": "e_n_bsec_1-n_bsec_2",
    "source": "n_bsec_1",
    "target": "n_bsec_2"
  },
  {
    "id": "e_n_bsec_2-n_bsec_3",
    "source": "n_bsec_2",
    "target": "n_bsec_3"
  },
  {
    "id": "e_n_defi_3-n_bsec_1",
    "source": "n_defi_3",
    "target": "n_bsec_1"
  }
] as RoadmapContentEdge[];
