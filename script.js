document.addEventListener('DOMContentLoaded', () => {
    // ==========================================================================
    // NAV NAVIGATION TABS
    // ==========================================================================
    const navButtons = document.querySelectorAll('.nav-btn');
    const sections = document.querySelectorAll('.view-section');

    navButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            navButtons.forEach(b => b.classList.remove('active'));
            sections.forEach(s => s.classList.remove('active'));

            btn.classList.add('active');
            const targetId = btn.getAttribute('data-target');
            const targetSection = document.getElementById(targetId);
            
            // Add active class to section
            targetSection.classList.add('active');
            if (targetId === 'terminal-view') {
                targetSection.classList.add('active');
                document.getElementById('terminal-input').focus();
            } else {
                targetSection.classList.add('active');
            }
        });
    });

    // ==========================================================================
    // LIGHT/DARK THEME TOGGLE
    // ==========================================================================
    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('light-theme');
        document.body.classList.toggle('dark-theme');
    });

    // ==========================================================================
    // PRINT WINDOW HANDLER
    // ==========================================================================
    const printBtn = document.getElementById('print-btn');
    printBtn.addEventListener('click', () => {
        window.print();
    });

    // ==========================================================================
    // PLAIN TEXT RESUME POPULATION & COPY
    // ==========================================================================
    const plainTextBox = document.getElementById('plain-text-box');
    const copyTextBtn = document.getElementById('copy-text-btn');

    const rawResumeText = `MIDHLAJ SIDHICK
Cybersecurity Engineer | SOC Analyst | Security Operations
Phone: +91 9605114550
Email: midhlajsidhick1@gmail.com
LinkedIn: linkedin.com/in/midhlaj-sidick007
Portfolio & Labs: midhlajsidhic.github.io/cyber-portfolio/

=========================================
PROFESSIONAL SUMMARY
=========================================
Results-driven Computer Science (Cybersecurity) graduate with hands-on experience in Security Operations (SOC), AWS cloud security, and Linux administration (AlmaLinux/Ubuntu Server). Skilled in scripting, system auditing, and network security configuration. Proven leadership capabilities as Department Chairman and NSS Secretary. Seeking entry-level roles in SOC, Cloud/Security Operations, or Linux Support.

=========================================
CORE SKILLS
=========================================
* Security Operations & SIEM: Log Analysis, Threat Detection, Incident Response, ELK Stack (Basics), Windows/Linux Auditing
* VAPT & Offensive Security: Network Scanning, Vulnerability Assessment, Reconnaissance, VAPT, OSINT
* Tools & Technologies: Nmap, Burp Suite, Wireshark, Hydra, Autopsy, ESP32, Git, GitHub
* Systems, Cloud & Networks: Linux (AlmaLinux, Rocky, Kali, Ubuntu Admin), AWS (EC2, S3, IAM, VPC), Windows Server, TCP/IP
* Programming & Automation: Python (Log Automation, Scripting, Analysis Pipelines), Bash scripting
* Languages: English (Professional), Malayalam (Native)

=========================================
PROFESSIONAL EXPERIENCE
=========================================
Server Administrator Intern
Hashroot | Kakkanad, Kochi (Infopark) (May 2026 - Present)
* Assisted in Linux (AlmaLinux, Ubuntu) and Windows server administration, user management, and security patch deployments.
* Configured remote access protocols (SSH, firewalls) and deployed infrastructure monitoring agents on AWS instances (EC2, S3).

Cybersecurity & Ethical Hacking Intern
Techmagi | Kakkanad, Kochi (June 2025)
* Performed network scanning, host reconnaissance, and vulnerability analysis using Nmap and Burp Suite in sandboxed lab environments.
* Analyzed network traffic logs with Wireshark to isolate suspicious patterns.
* Drafted technical vulnerability assessment reports mapping critical findings against standard CVSS metrics.

Ethical Hacking Intern
Techbyheart | Kochi, Kerala (January 2025)
* Conducted vulnerability assessments and penetration testing simulations on Linux-based virtual environments.
* Identified and reported weaknesses in SSH, FTP, and web services, offering actionable remediation options.
* Prepared actionable security logs and reporting templates used by project teams to resolve simulated system exposures.

=========================================
PROJECT EXPERIENCE
=========================================
AI Endpoint Detection & Response (EDR) System (Python, LLM)
* Engineered a simulated EDR host agent in Python to monitor operating system logs and detect threat patterns in real-time.
* Built a Python-based pipeline to parse system event logs and flag malicious behaviors (e.g., brute-force attacks).
* Integrated an LLM-based alert classifier to evaluate event logs, reducing security alert investigation overhead by 40%.
* Programmed automated response actions (e.g., terminating suspicious processes) upon high-risk detection triggers.

Wireless Device Localization System (ESP32 + Python GUI)
* Developed a hardware-software system using ESP32 to monitor wireless networks and track Wi-Fi/Bluetooth signals.
* Programmed RSSI-based localization tracking with ~95% accuracy and a 1-2 second scanning response time.
* Created a custom Python desktop GUI for real-time visualization of tracked physical devices and signal logs.

AI Security & Prompt Injection Testing (AI Threat Research)
* Conducted practical testing of prompt injection and adversarial attacks on LLM interfaces.
* Analyzed LLM prompt injection and security manipulation techniques, mapping findings to the OWASP Top 10 for LLMs.
* Formulated defense strategies (input validation, system prompt hardening) to secure AI integrations against malicious prompt exploits.

=========================================
EDUCATION
=========================================
B.Tech in Computer Science (Cybersecurity)
Ilahia College of Engineering | 2022 - 2026
Affiliated to APJ Abdul Kalam Technological University (KTU), Kerala

=========================================
CERTIFICATIONS
=========================================
* Ethical Hacking - Offense Hackers Academy
* Ethical Hacking - Cisco Networking Academy
* Foundations of Cybersecurity - Google

=========================================
ACHIEVEMENTS & LEADERSHIP
=========================================
* 3rd Place - National CTF (ASIET Hackathon): Competed against 50+ collegiate teams nationwide; solved challenges across Web Exploitation, Cryptography, and Forensics.
* TryHackMe Advent of Cyber 2024: Completed 24 days of hands-on challenges covering SOC operations, threat intelligence, cloud security, and log analysis.
* Department Chairman (AI & Computer Science Association): Managed 15+ student coordinators to host tech fests and workshops for 300+ peers.
* NSS Volunteer Secretary: Led regional community initiatives and structured communications with college administration.
* College Union Representative: Elected student advocate for two consecutive terms, managing campus-wide academic and cultural programs.`;

    if (plainTextBox) {
        plainTextBox.value = rawResumeText;
    }

    if (copyTextBtn) {
        copyTextBtn.addEventListener('click', () => {
            navigator.clipboard.writeText(rawResumeText).then(() => {
                const originalText = copyTextBtn.textContent;
                copyTextBtn.textContent = '✅ Copied!';
                setTimeout(() => {
                    copyTextBtn.textContent = originalText;
                }, 2000);
            }).catch(err => {
                alert('Failed to copy text: ' + err);
            });
        });
    }

    // ==========================================================================
    // CYBER TERMINAL CLI SIMULATOR
    // ==========================================================================
    const terminalInput = document.getElementById('terminal-input');
    const terminalOutput = document.getElementById('terminal-output');

    if (terminalInput) {
        terminalInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                const commandText = terminalInput.value.trim().toLowerCase();
                terminalInput.value = '';
                executeCommand(commandText);
            }
        });

        // Click terminal body to focus input
        document.querySelector('.terminal-body').addEventListener('click', () => {
            terminalInput.focus();
        });
    }

    function writeTerminalLine(text, cssClass = '') {
        const line = document.createElement('div');
        line.className = `terminal-line ${cssClass}`;
        line.innerHTML = text;
        
        // Insert before prompt line
        const promptLine = document.querySelector('.terminal-prompt-line');
        terminalOutput.insertBefore(line, promptLine);
        terminalOutput.scrollTop = terminalOutput.scrollHeight;
    }

    function executeCommand(cmd) {
        // Write the command entered
        writeTerminalLine(`<span class="terminal-prompt">guest@infopark-recruiter:~$</span> ${cmd}`);

        if (cmd === '') return;

        const parts = cmd.split(' ');
        const mainCmd = parts[0];

        switch(mainCmd) {
            case 'help':
                writeTerminalLine('Available commands:', 'text-system');
                writeTerminalLine('  <span class="highlight">about</span>       - Brief professional overview of Midhlaj');
                writeTerminalLine('  <span class="highlight">skills</span>      - List technical competency matrix');
                writeTerminalLine('  <span class="highlight">projects</span>    - Details on key cybersecurity projects');
                writeTerminalLine('  <span class="highlight">experience</span>  - Review internships & professional roles');
                writeTerminalLine('  <span class="highlight">contact</span>     - Show contact links and phone numbers');
                writeTerminalLine('  <span class="highlight">clear</span>       - Clear the screen output');
                writeTerminalLine('  <span class="highlight">secret</span>      - Look for hidden credentials');
                break;
            
            case 'about':
                writeTerminalLine('Midhlaj Sidhick is a Cybersecurity Engineer graduating with a B.Tech in CS (Cybersecurity) in 2026.', 'text-cyan');
                writeTerminalLine('Dedicated to Security Operations (SOC), threat intelligence, and scripting security automation. Active department chairman and community volunteer.', 'text-system');
                break;

            case 'skills':
                writeTerminalLine('--- TECHNICAL COMPETENCY MATRIX ---', 'text-yellow');
                writeTerminalLine('SIEM & SOC Operations  [████████░░] 80% - ELK Stack (Basics), Log Parsing');
                writeTerminalLine('VAPT & Network Sec     [█████████░] 90% - Nmap, Burp Suite, VAPT, Wireshark');
                writeTerminalLine('Systems & Scripting    [█████████░] 90% - Python, Bash, Linux (AlmaLinux, Ubuntu Server, Kali)');
                writeTerminalLine('Cloud Security & AWS   [███████░░░] 70% - AWS (EC2, S3, IAM, VPC), Cloud Auditing');
                break;

            case 'projects':
                writeTerminalLine('--- SELECTED CYBERSECURITY PROJECTS ---', 'text-yellow');
                writeTerminalLine('1. AI-EDR System (Python, LLM)', 'text-cyan');
                writeTerminalLine('   * Real-time logs aggregation and host threat detection agent.');
                writeTerminalLine('   * Integrated OpenAI/LLM endpoints for alert severity and context triage (40% load red.).');
                writeTerminalLine('2. Wireless Device Tracker (ESP32, Python)', 'text-cyan');
                writeTerminalLine('   * Developed custom firmware to capture 802.11 packets, locating devices with ~95% precision.');
                writeTerminalLine('3. LLM Injection Testing Framework', 'text-cyan');
                writeTerminalLine('   * Researched adversarial vulnerabilities against LLM prompts and mapped mitigation checklists.');
                break;

            case 'experience':
                writeTerminalLine('--- PROFESSIONAL INTERNSHIPS ---', 'text-yellow');
                writeTerminalLine('1. Server Administrator Intern @ Hashroot, Kakkanad (May 2026 - Present)', 'text-cyan');
                writeTerminalLine('   * Administered Linux (AlmaLinux/Ubuntu) & Windows systems; deployed monitoring on AWS (EC2/S3).');
                writeTerminalLine('2. Cybersecurity & VAPT Intern @ Techmagi, Kakkanad (June 2025)', 'text-cyan');
                writeTerminalLine('   * Managed network audits using Kali Linux frameworks, drafting CVSS vulnerability logs.');
                writeTerminalLine('3. Ethical Hacking Intern @ Techbyheart, Kochi (Jan 2025)', 'text-cyan');
                writeTerminalLine('   * Analyzed Linux server security and validated vulnerable standard ports (SSH, FTP).');
                break;

            case 'contact':
                writeTerminalLine('--- CONNECTION DETAILS ---', 'text-yellow');
                writeTerminalLine('Phone:     +91 9605114550');
                writeTerminalLine('Email:     midhlajsidhick1@gmail.com');
                writeTerminalLine('LinkedIn:  <a href="https://linkedin.com/in/midhlaj-sidick007" target="_blank" style="color:#00ff66; text-decoration:underline;">linkedin.com/in/midhlaj-sidick007</a>');
                writeTerminalLine('Portfolio: <a href="https://midhlajsidhic.github.io/cyber-portfolio/" target="_blank" style="color:#00ff66; text-decoration:underline;">midhlajsidhic.github.io/cyber-portfolio/</a>');
                break;

            case 'clear':
                const promptLine = document.querySelector('.terminal-prompt-line');
                terminalOutput.innerHTML = '';
                terminalOutput.appendChild(promptLine);
                break;

            case 'secret':
                writeTerminalLine('[!] SYSTEM SECURITY ASSESSMENT: SCANNING FOR VULNERABILITIES...', 'text-yellow');
                setTimeout(() => {
                    writeTerminalLine('[+] BYPASSING INFOPARK HR FIREWALL...', 'text-cyan');
                }, 500);
                setTimeout(() => {
                    writeTerminalLine('[+] ROOT ACCESS GRANTED. CREDENTIALS OBTAINED!', 'text-yellow');
                    writeTerminalLine('=========================================', 'text-yellow');
                    writeTerminalLine('FLAG: ICES{MIDHLAJ_IS_THE_PERFECT_SOC_CANDIDATE}', 'text-cyan');
                    writeTerminalLine('STATUS: Senior HR Recommendation Triggered. HIRED!', 'text-yellow');
                    writeTerminalLine('=========================================', 'text-yellow');
                }, 1000);
                break;

            default:
                writeTerminalLine(`bash: command not found: ${cmd}. Type <span class="highlight">help</span> to view commands.`, 'text-error');
        }
    }

    // Add interactive click behavior to highlighted words in terminal
    terminalOutput.addEventListener('click', (e) => {
        if (e.target.classList.contains('highlight')) {
            const command = e.target.textContent;
            executeCommand(command);
        }
    });

    // ==========================================================================
    // EDR SIMULATOR LAB LOGIC
    // ==========================================================================
    const logContainer = document.getElementById('edr-logs');
    const clearLogsBtn = document.getElementById('clear-logs');
    const attackButtons = document.querySelectorAll('.attack-btn');

    // EDR Indicators
    const agentStatus = document.getElementById('edr-agent-status');
    const aiStatus = document.getElementById('edr-ai-status');
    const actionStatus = document.getElementById('edr-action-status');

    if (clearLogsBtn) {
        clearLogsBtn.addEventListener('click', () => {
            logContainer.innerHTML = '<div class="log-row success">[*] Logs cleared. EDR agent active and listening.</div>';
        });
    }

    function getTimestamp() {
        const d = new Date();
        return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')} ${String(d.getHours()).padStart(2,'0')}:${String(d.getMinutes()).padStart(2,'0')}:${String(d.getSeconds()).padStart(2,'0')}`;
    }

    function addLogEntry(text, type = 'info') {
        const log = document.createElement('div');
        log.className = `log-row ${type}`;
        log.textContent = `[+] ${getTimestamp()} - ${text}`;
        logContainer.appendChild(log);
        logContainer.scrollTop = logContainer.scrollHeight;
    }

    const simulations = {
        bruteforce: [
            { text: "INTRUSION DETECTED: Multiple connection failures on Port 22 (SSH) from IP 192.168.1.142", type: "warning" },
            { text: "EDR Analyzer: Initiating behavioral pattern log checks...", type: "info" },
            { text: "AI Alert Classifier (LLM Engine): Requesting triage scan...", type: "info" },
            { text: "LLM Classification: Severity = HIGH. Attack Pattern = SSH Brute Force. Confidence = 98.4%", type: "danger" },
            { text: "EDR Response Trigger: Block rule issued to local iptables for IP 192.168.1.142", type: "warning" },
            { text: "EDR Agent Action: Threat mitigated. Connection dropped. Port 22 secured.", type: "success" }
        ],
        ransomware: [
            { text: "FILE AUDIT TRIGGER: High-frequency file modifications observed in /home/user/documents/", type: "warning" },
            { text: "EDR Analyzer: Warning! Encrypted headers and Extension changes (.locked) identified.", type: "danger" },
            { text: "AI Alert Classifier (LLM Engine): Sending event context stream...", type: "info" },
            { text: "LLM Classification: Severity = CRITICAL. Behavior Matches RANSOMWARE (e.g. WannaCry variation). Confidence = 99.1%", type: "danger" },
            { text: "EDR Response Trigger: Isolating host system network routing. Killing active process PID 4912.", type: "danger" },
            { text: "EDR Agent Action: Process PID 4912 terminated. Host network adapter disabled to prevent lateral spread.", type: "success" }
        ],
        sqlinjection: [
            { text: "WEB SERVER LOG: Received HTTP POST request containing suspicious string pattern: ' OR '1'='1", type: "warning" },
            { text: "EDR Analyzer: Event flagged as SQL Injection attempt.", type: "warning" },
            { text: "AI Alert Classifier (LLM Engine): Requesting response recommendations...", type: "info" },
            { text: "LLM Classification: Severity = MEDIUM. Vulnerability Exploit Attempt. Confidence = 95.0%", type: "warning" },
            { text: "EDR Response Trigger: Issuing active web firewall rule to drop source session token ID: sec_session_91a0", type: "warning" },
            { text: "EDR Agent Action: Malicious request dropped. Session invalidated. DB Admin alerted.", type: "success" }
        ],
        recon: [
            { text: "NETWORK LOG: Received sequential ICMP Echo requests and TCP SYN flags across ports 1-1024", type: "info" },
            { text: "EDR Analyzer: Identifying TCP Connect/SYN scan signature (Potential Nmap sweep)", type: "info" },
            { text: "AI Alert Classifier (LLM Engine): Profiling scan pattern...", type: "info" },
            { text: "LLM Classification: Severity = LOW. Active Network Reconnaissance. Confidence = 91.2%", type: "info" },
            { text: "EDR Response Trigger: Masking service banners. Spawning decoy honeypot ports to confuse attacker.", type: "info" },
            { text: "EDR Agent Action: Decade ports active. Scanning logged. Attacker profiling updated.", type: "success" }
        ]
    };

    attackButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const attackType = btn.getAttribute('data-target') || btn.dataset.attack;
            const steps = simulations[attackType];
            if (!steps) return;

            // Disable buttons during active simulation
            attackButtons.forEach(b => b.disabled = true);
            
            // Set Indicator Statuses
            agentStatus.textContent = "ALERT";
            agentStatus.className = "value text-danger";
            aiStatus.textContent = "THINKING";
            aiStatus.className = "value text-warning";
            actionStatus.textContent = "QUEUED";
            actionStatus.className = "value text-warning";

            let stepIndex = 0;
            
            function runStep() {
                if (stepIndex < steps.length) {
                    const step = steps[stepIndex];
                    
                    // Specific indicator changes based on steps
                    if (step.text.includes("LLM Classification")) {
                        aiStatus.textContent = "TRIAGED";
                        aiStatus.className = "value text-success";
                    }
                    if (step.text.includes("Response Trigger")) {
                        actionStatus.textContent = "MITIGATING";
                        actionStatus.className = "value text-danger";
                    }

                    addLogEntry(step.text, step.type);
                    stepIndex++;
                    setTimeout(runStep, 800); // 800ms delay between actions
                } else {
                    // Restore statuses
                    agentStatus.textContent = "ACTIVE";
                    agentStatus.className = "value text-success";
                    aiStatus.textContent = "ONLINE";
                    aiStatus.className = "value text-success";
                    actionStatus.textContent = "READY";
                    actionStatus.className = "value text-success";
                    
                    // Re-enable buttons
                    attackButtons.forEach(b => b.disabled = false);
                }
            }

            addLogEntry(`[SYSTEM ALARM] Triggering simulated: ${btn.textContent.trim()}...`, 'warning');
            setTimeout(runStep, 500);
        });
    });
});
