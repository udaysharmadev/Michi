import { RoadmapContentNode, RoadmapContentEdge } from "@/data/types";

export const graphNodes: RoadmapContentNode[] = [
    { id: "s_cs_net", type: "section", position: { x: 0, y: 0 }, data: { title: "Networking & IT Basics", sectionNumber: 1, color: "blue", sectionIcon: "globe" } },
    { id: "n_secb_1", type: "topic", parentId: "s_cs_net", extent: "parent", position: { x: 0, y: 0 }, data: { title: "OSI Model & TCP/IP", difficulty: "Beginner", estimatedTime: "4 hrs", sectionColor: "blue", icon: "network", row: 0, col: 0 } },
    { id: "n_secb_2", type: "topic", parentId: "s_cs_net", extent: "parent", position: { x: 0, y: 0 }, data: { title: "DNS & DHCP", difficulty: "Intermediate", estimatedTime: "3 hrs", sectionColor: "blue", icon: "globe", row: 0, col: 1 } },
    { id: "n_secb_3", type: "topic", parentId: "s_cs_net", extent: "parent", position: { x: 0, y: 0 }, data: { title: "IT Governance & Risk", difficulty: "Advanced", estimatedTime: "5 hrs", sectionColor: "blue", icon: "shield", row: 1, col: 0 } },

    { id: "s_cs_linux", type: "section", position: { x: 576, y: 0 }, data: { title: "Linux & OS Security", sectionNumber: 2, color: "purple", sectionIcon: "terminal" } },
    { id: "n_secl_1", type: "topic", parentId: "s_cs_linux", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Linux Permissions", difficulty: "Beginner", estimatedTime: "3 hrs", sectionColor: "purple", icon: "SiLinux", row: 0, col: 0 } },
    { id: "n_secl_2", type: "topic", parentId: "s_cs_linux", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Active Directory Basics", difficulty: "Intermediate", estimatedTime: "5 hrs", sectionColor: "purple", icon: "server", row: 0, col: 1 } },
    { id: "n_secl_3", type: "topic", parentId: "s_cs_linux", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Endpoint Security", difficulty: "Advanced", estimatedTime: "6 hrs", sectionColor: "purple", icon: "laptop", row: 1, col: 0 } },

    { id: "s_cs_crypto", type: "section", position: { x: 1152, y: 0 }, data: { title: "Cryptography", sectionNumber: 3, color: "green", sectionIcon: "lock" } },
    { id: "n_crypto_1", type: "topic", parentId: "s_cs_crypto", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Symmetric & Asymmetric Encryption", difficulty: "Beginner", estimatedTime: "5 hrs", sectionColor: "green", icon: "key", row: 0, col: 0 } },
    { id: "n_crypto_2", type: "topic", parentId: "s_cs_crypto", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Hashing & Digital Signatures", difficulty: "Intermediate", estimatedTime: "4 hrs", sectionColor: "green", icon: "hash", row: 0, col: 1 } },
    { id: "n_crypto_3", type: "topic", parentId: "s_cs_crypto", extent: "parent", position: { x: 0, y: 0 }, data: { title: "PKI & Certificates", difficulty: "Advanced", estimatedTime: "5 hrs", sectionColor: "green", icon: "Si Letsencrypt", row: 1, col: 0 } },

    { id: "s_cs_netsec", type: "section", position: { x: 0, y: 600 }, data: { title: "Network Security", sectionNumber: 4, color: "yellow", sectionIcon: "shield" } },
    { id: "n_netsec_1", type: "topic", parentId: "s_cs_netsec", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Firewalls & IDS/IPS", difficulty: "Beginner", estimatedTime: "5 hrs", sectionColor: "yellow", icon: "shield", row: 0, col: 0 } },
    { id: "n_netsec_2", type: "topic", parentId: "s_cs_netsec", extent: "parent", position: { x: 0, y: 0 }, data: { title: "VPNs & Tunneling", difficulty: "Intermediate", estimatedTime: "4 hrs", sectionColor: "yellow", icon: "lock", row: 0, col: 1 } },
    { id: "n_netsec_3", type: "topic", parentId: "s_cs_netsec", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Network Segmentation", difficulty: "Advanced", estimatedTime: "6 hrs", sectionColor: "yellow", icon: "grid", row: 1, col: 0 } },

    { id: "s_cs_pentest", type: "section", position: { x: 576, y: 600 }, data: { title: "Penetration Testing", sectionNumber: 5, color: "red", sectionIcon: "search" } },
    { id: "n_pen_1", type: "topic", parentId: "s_cs_pentest", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Reconnaissance & Footprinting", difficulty: "Beginner", estimatedTime: "4 hrs", sectionColor: "red", icon: "search", row: 0, col: 0 } },
    { id: "n_pen_2", type: "topic", parentId: "s_cs_pentest", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Scanning & Enumeration (Nmap)", difficulty: "Intermediate", estimatedTime: "5 hrs", sectionColor: "red", icon: "radar", row: 0, col: 1 } },
    { id: "n_pen_3", type: "topic", parentId: "s_cs_pentest", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Exploitation (Metasploit)", difficulty: "Advanced", estimatedTime: "8 hrs", sectionColor: "red", icon: "zap", row: 1, col: 0 } },

    { id: "s_cs_appsec", type: "section", position: { x: 1152, y: 600 }, data: { title: "Application Security", sectionNumber: 6, color: "orange", sectionIcon: "code" } },
    { id: "n_appsec_1", type: "topic", parentId: "s_cs_appsec", extent: "parent", position: { x: 0, y: 0 }, data: { title: "OWASP Top 10", difficulty: "Beginner", estimatedTime: "4 hrs", sectionColor: "orange", icon: "list", row: 0, col: 0 } },
    { id: "n_appsec_2", type: "topic", parentId: "s_cs_appsec", extent: "parent", position: { x: 0, y: 0 }, data: { title: "SQL Injection & XSS", difficulty: "Intermediate", estimatedTime: "6 hrs", sectionColor: "orange", icon: "alert-triangle", row: 0, col: 1 } },
    { id: "n_appsec_3", type: "topic", parentId: "s_cs_appsec", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Secure Coding Practices", difficulty: "Advanced", estimatedTime: "5 hrs", sectionColor: "orange", icon: "check-circle", row: 1, col: 0 } },

    { id: "s_cs_soc", type: "section", position: { x: 0, y: 1200 }, data: { title: "SOC & Incident Response", sectionNumber: 7, color: "blue", sectionIcon: "monitor" } },
    { id: "n_soc_1", type: "topic", parentId: "s_cs_soc", extent: "parent", position: { x: 0, y: 0 }, data: { title: "SIEM Solutions (Splunk/ELK)", difficulty: "Beginner", estimatedTime: "6 hrs", sectionColor: "blue", icon: "SiSplunk", row: 0, col: 0 } },
    { id: "n_soc_2", type: "topic", parentId: "s_cs_soc", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Threat Intelligence", difficulty: "Intermediate", estimatedTime: "5 hrs", sectionColor: "blue", icon: "alert-circle", row: 0, col: 1 } },
    { id: "n_soc_3", type: "topic", parentId: "s_cs_soc", extent: "parent", position: { x: 0, y: 0 }, data: { title: "Digital Forensics", difficulty: "Advanced", estimatedTime: "8 hrs", sectionColor: "blue", icon: "search", row: 1, col: 0 } },
];

export const graphEdges: RoadmapContentEdge[] = [
    { id: "e1", source: "n_secb_1", target: "n_secb_2", sourceHandle: "right", targetHandle: "left" },
    { id: "e2", source: "n_secb_2", target: "n_secb_3", sourceHandle: "right", targetHandle: "left" },
    { id: "e_sec_1", source: "n_secb_3", target: "n_secl_1", sourceHandle: "right", targetHandle: "left" },

    { id: "e3", source: "n_secl_1", target: "n_secl_2", sourceHandle: "right", targetHandle: "left" },
    { id: "e4", source: "n_secl_2", target: "n_secl_3", sourceHandle: "right", targetHandle: "left" },
    { id: "e_sec_2", source: "n_secl_3", target: "n_crypto_1", sourceHandle: "right", targetHandle: "left" },

    { id: "e5", source: "n_crypto_1", target: "n_crypto_2", sourceHandle: "right", targetHandle: "left" },
    { id: "e6", source: "n_crypto_2", target: "n_crypto_3", sourceHandle: "right", targetHandle: "left" },
    { id: "e_sec_3", source: "n_crypto_3", target: "n_netsec_1", sourceHandle: "right", targetHandle: "left" },

    { id: "e7", source: "n_netsec_1", target: "n_netsec_2", sourceHandle: "right", targetHandle: "left" },
    { id: "e8", source: "n_netsec_2", target: "n_netsec_3", sourceHandle: "right", targetHandle: "left" },
    { id: "e_sec_4", source: "n_netsec_3", target: "n_pen_1", sourceHandle: "right", targetHandle: "left" },

    { id: "e9", source: "n_pen_1", target: "n_pen_2", sourceHandle: "right", targetHandle: "left" },
    { id: "e10", source: "n_pen_2", target: "n_pen_3", sourceHandle: "right", targetHandle: "left" },
    { id: "e_sec_5", source: "n_pen_3", target: "n_appsec_1", sourceHandle: "right", targetHandle: "left" },

    { id: "e11", source: "n_appsec_1", target: "n_appsec_2", sourceHandle: "right", targetHandle: "left" },
    { id: "e12", source: "n_appsec_2", target: "n_appsec_3", sourceHandle: "right", targetHandle: "left" },
    { id: "e_sec_6", source: "n_appsec_3", target: "n_soc_1", sourceHandle: "right", targetHandle: "left" },

    { id: "e13", source: "n_soc_1", target: "n_soc_2", sourceHandle: "right", targetHandle: "left" },
    { id: "e14", source: "n_soc_2", target: "n_soc_3", sourceHandle: "right", targetHandle: "left" },
];
