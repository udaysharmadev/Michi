import { RoadmapContentNode, RoadmapContentEdge } from '../../types';

export const nodes: RoadmapContentNode[] = [
  {
    "id": "basics",
    "type": "section",
    "position": {
      "x": 50,
      "y": 50
    },
    "data": {
      "title": "1. Networking & IT Basics",
      "color": "blue"
    }
  },
  {
    "id": "n_secb_1",
    "type": "topic",
    "position": {
      "x": 50,
      "y": 150
    },
    "data": {
      "title": "OSI Model & TCP/IP",
      "difficulty": "beginner",
      "icon": "server",
      "sectionId": "basics"
    }
  },
  {
    "id": "n_secb_2",
    "type": "topic",
    "position": {
      "x": 50,
      "y": 250
    },
    "data": {
      "title": "DNS & DHCP",
      "difficulty": "intermediate",
      "icon": "server",
      "sectionId": "basics"
    }
  },
  {
    "id": "n_secb_3",
    "type": "topic",
    "position": {
      "x": 50,
      "y": 350
    },
    "data": {
      "title": "IT Governance & Risk",
      "difficulty": "advanced",
      "icon": "server",
      "sectionId": "basics"
    }
  },
  {
    "id": "linux",
    "type": "section",
    "position": {
      "x": 50,
      "y": 550
    },
    "data": {
      "title": "2. Linux & OS Security",
      "color": "purple"
    }
  },
  {
    "id": "n_secl_1",
    "type": "topic",
    "position": {
      "x": 50,
      "y": 650
    },
    "data": {
      "title": "Linux Permissions",
      "difficulty": "beginner",
      "icon": "server",
      "sectionId": "linux"
    }
  },
  {
    "id": "n_secl_2",
    "type": "topic",
    "position": {
      "x": 50,
      "y": 750
    },
    "data": {
      "title": "Active Directory Basics",
      "difficulty": "intermediate",
      "icon": "server",
      "sectionId": "linux"
    }
  },
  {
    "id": "n_secl_3",
    "type": "topic",
    "position": {
      "x": 50,
      "y": 850
    },
    "data": {
      "title": "Endpoint Security",
      "difficulty": "advanced",
      "icon": "server",
      "sectionId": "linux"
    }
  },
  {
    "id": "crypto",
    "type": "section",
    "position": {
      "x": 50,
      "y": 1050
    },
    "data": {
      "title": "3. Cryptography",
      "color": "green"
    }
  },
  {
    "id": "n_crypto_1",
    "type": "topic",
    "position": {
      "x": 50,
      "y": 1150
    },
    "data": {
      "title": "Symmetric & Asymmetric Encryption",
      "difficulty": "beginner",
      "icon": "server",
      "sectionId": "crypto"
    }
  },
  {
    "id": "n_crypto_2",
    "type": "topic",
    "position": {
      "x": 50,
      "y": 1250
    },
    "data": {
      "title": "Hashing & Digital Signatures",
      "difficulty": "intermediate",
      "icon": "server",
      "sectionId": "crypto"
    }
  },
  {
    "id": "n_crypto_3",
    "type": "topic",
    "position": {
      "x": 50,
      "y": 1350
    },
    "data": {
      "title": "PKI & Certificates",
      "difficulty": "advanced",
      "icon": "server",
      "sectionId": "crypto"
    }
  },
  {
    "id": "netsec",
    "type": "section",
    "position": {
      "x": 50,
      "y": 1550
    },
    "data": {
      "title": "4. Network Security",
      "color": "yellow"
    }
  },
  {
    "id": "n_netsec_1",
    "type": "topic",
    "position": {
      "x": 50,
      "y": 1650
    },
    "data": {
      "title": "Firewalls & IDS/IPS",
      "difficulty": "beginner",
      "icon": "server",
      "sectionId": "netsec"
    }
  },
  {
    "id": "n_netsec_2",
    "type": "topic",
    "position": {
      "x": 50,
      "y": 1750
    },
    "data": {
      "title": "VPNs & Tunneling",
      "difficulty": "intermediate",
      "icon": "server",
      "sectionId": "netsec"
    }
  },
  {
    "id": "n_netsec_3",
    "type": "topic",
    "position": {
      "x": 50,
      "y": 1850
    },
    "data": {
      "title": "Network Segmentation",
      "difficulty": "advanced",
      "icon": "server",
      "sectionId": "netsec"
    }
  },
  {
    "id": "pentest",
    "type": "section",
    "position": {
      "x": 50,
      "y": 2050
    },
    "data": {
      "title": "5. Penetration Testing",
      "color": "red"
    }
  },
  {
    "id": "n_pen_1",
    "type": "topic",
    "position": {
      "x": 50,
      "y": 2150
    },
    "data": {
      "title": "Reconnaissance & Footprinting",
      "difficulty": "beginner",
      "icon": "server",
      "sectionId": "pentest"
    }
  },
  {
    "id": "n_pen_2",
    "type": "topic",
    "position": {
      "x": 50,
      "y": 2250
    },
    "data": {
      "title": "Scanning & Enumeration (Nmap)",
      "difficulty": "intermediate",
      "icon": "server",
      "sectionId": "pentest"
    }
  },
  {
    "id": "n_pen_3",
    "type": "topic",
    "position": {
      "x": 50,
      "y": 2350
    },
    "data": {
      "title": "Exploitation (Metasploit)",
      "difficulty": "advanced",
      "icon": "server",
      "sectionId": "pentest"
    }
  },
  {
    "id": "appsec",
    "type": "section",
    "position": {
      "x": 50,
      "y": 2550
    },
    "data": {
      "title": "6. Application Security",
      "color": "orange"
    }
  },
  {
    "id": "n_appsec_1",
    "type": "topic",
    "position": {
      "x": 50,
      "y": 2650
    },
    "data": {
      "title": "OWASP Top 10",
      "difficulty": "beginner",
      "icon": "server",
      "sectionId": "appsec"
    }
  },
  {
    "id": "n_appsec_2",
    "type": "topic",
    "position": {
      "x": 50,
      "y": 2750
    },
    "data": {
      "title": "SQL Injection & XSS",
      "difficulty": "intermediate",
      "icon": "server",
      "sectionId": "appsec"
    }
  },
  {
    "id": "n_appsec_3",
    "type": "topic",
    "position": {
      "x": 50,
      "y": 2850
    },
    "data": {
      "title": "Secure Coding Practices",
      "difficulty": "advanced",
      "icon": "server",
      "sectionId": "appsec"
    }
  },
  {
    "id": "soc",
    "type": "section",
    "position": {
      "x": 50,
      "y": 3050
    },
    "data": {
      "title": "7. SOC & Incident Response",
      "color": "blue"
    }
  },
  {
    "id": "n_soc_1",
    "type": "topic",
    "position": {
      "x": 50,
      "y": 3150
    },
    "data": {
      "title": "SIEM Solutions (Splunk/ELK)",
      "difficulty": "beginner",
      "icon": "server",
      "sectionId": "soc"
    }
  },
  {
    "id": "n_soc_2",
    "type": "topic",
    "position": {
      "x": 50,
      "y": 3250
    },
    "data": {
      "title": "Threat Intelligence",
      "difficulty": "intermediate",
      "icon": "server",
      "sectionId": "soc"
    }
  },
  {
    "id": "n_soc_3",
    "type": "topic",
    "position": {
      "x": 50,
      "y": 3350
    },
    "data": {
      "title": "Digital Forensics",
      "difficulty": "advanced",
      "icon": "server",
      "sectionId": "soc"
    }
  }
] as RoadmapContentNode[];

export const edges: RoadmapContentEdge[] = [
  {
    "id": "e_n_secb_1-n_secb_2",
    "source": "n_secb_1",
    "target": "n_secb_2"
  },
  {
    "id": "e_n_secb_2-n_secb_3",
    "source": "n_secb_2",
    "target": "n_secb_3"
  },
  {
    "id": "e_n_secl_1-n_secl_2",
    "source": "n_secl_1",
    "target": "n_secl_2"
  },
  {
    "id": "e_n_secl_2-n_secl_3",
    "source": "n_secl_2",
    "target": "n_secl_3"
  },
  {
    "id": "e_n_secb_3-n_secl_1",
    "source": "n_secb_3",
    "target": "n_secl_1"
  },
  {
    "id": "e_n_crypto_1-n_crypto_2",
    "source": "n_crypto_1",
    "target": "n_crypto_2"
  },
  {
    "id": "e_n_crypto_2-n_crypto_3",
    "source": "n_crypto_2",
    "target": "n_crypto_3"
  },
  {
    "id": "e_n_secl_3-n_crypto_1",
    "source": "n_secl_3",
    "target": "n_crypto_1"
  },
  {
    "id": "e_n_netsec_1-n_netsec_2",
    "source": "n_netsec_1",
    "target": "n_netsec_2"
  },
  {
    "id": "e_n_netsec_2-n_netsec_3",
    "source": "n_netsec_2",
    "target": "n_netsec_3"
  },
  {
    "id": "e_n_crypto_3-n_netsec_1",
    "source": "n_crypto_3",
    "target": "n_netsec_1"
  },
  {
    "id": "e_n_pen_1-n_pen_2",
    "source": "n_pen_1",
    "target": "n_pen_2"
  },
  {
    "id": "e_n_pen_2-n_pen_3",
    "source": "n_pen_2",
    "target": "n_pen_3"
  },
  {
    "id": "e_n_netsec_3-n_pen_1",
    "source": "n_netsec_3",
    "target": "n_pen_1"
  },
  {
    "id": "e_n_appsec_1-n_appsec_2",
    "source": "n_appsec_1",
    "target": "n_appsec_2"
  },
  {
    "id": "e_n_appsec_2-n_appsec_3",
    "source": "n_appsec_2",
    "target": "n_appsec_3"
  },
  {
    "id": "e_n_pen_3-n_appsec_1",
    "source": "n_pen_3",
    "target": "n_appsec_1"
  },
  {
    "id": "e_n_soc_1-n_soc_2",
    "source": "n_soc_1",
    "target": "n_soc_2"
  },
  {
    "id": "e_n_soc_2-n_soc_3",
    "source": "n_soc_2",
    "target": "n_soc_3"
  },
  {
    "id": "e_n_appsec_3-n_soc_1",
    "source": "n_appsec_3",
    "target": "n_soc_1"
  }
] as RoadmapContentEdge[];
