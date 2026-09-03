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
Kakkanad, Kochi, Kerala, India | +91 9605114550 | midhlajsidhick1@gmail.com
LinkedIn: linkedin.com/in/midhlaj-sidick007 | GitHub: github.com/midhlajsidhic
Portfolio: midhlajsidhic.github.io/cyber-portfolio/ (Professional AppSec Redesign)

=========================================
PROFILE HIGHLIGHTS
=========================================
* CVE-2026-48908 — Validated Remote Code Execution (RCE) vulnerability responsibly disclosed to IBS Software; published in the IBS Software Security Hall of Fame (https://www.ibsplc.com/security/security-hall-of-fame).
* Junior Server Administrator at Hashroot Technologies, managing production infrastructure.
* Active security researcher conducting responsible disclosures and internal AppSec assessments.
* Proficient in Application Security, PenTesting, Linux Systems, AWS Cloud, and Automation.

=========================================
RESPONSIBLE DISCLOSURE PHILOSOPHY
=========================================
I believe security research should strengthen products through responsible disclosure, clear communication, reproducible evidence, and collaborative remediation.

=========================================
TECHNICAL SECURITY STACK
=========================================
* Application Security: OWASP Top 10, API Security, AuthN/AuthZ Testing, Business Logic Testing, Security Reporting
* Penetration Testing & Recon: Burp Suite, Nmap, ffuf, httpx, subfinder, Amass, Nuclei, Reconnaissance
* Infrastructure & Systems: Linux Administration, SSH, Apache, Nginx, System Hardening, AWS (EC2, S3, IAM, VPC), Docker, Networking
* Monitoring & SIEM: Wazuh, Elastic Stack (ELK), Ollama Integration, Log Auditing, System Monitoring
* Programming & Automation: Python, JavaScript, Bash Scripting, Git, REST APIs

=========================================
SECURITY WRITING & DOCUMENTATION
=========================================
* Responsible Disclosure Reports: Mapped CVSS scoring, technical summaries, and remediation recommendations.
* Internal Security Assessments: Drafted infrastructure audit logs, credential exposures, and server hardening steps.
* Executive Summaries: Formulated high-level risk and business impact analysis for corporate leadership.
* Proof-of-Concept (PoC) Documentation: Outlined step-by-step reproduction and validation scripts.
* Remediation Guidance: Provided actionable system hardening code blocks and configuration recommendations.

=========================================
CURRENT FOCUS
=========================================
Application Security | Product Security | Secure SDLC | Threat Modeling | Cloud Security | Container Security | API Security

=========================================
VALIDATED RESPONSIBLE DISCLOSURE
=========================================
Remote Code Execution (RCE) - IBS Software
* Identified and responsibly disclosed a Remote Code Execution (RCE) vulnerability affecting IBS Software systems.
* Authored a professional proof-of-concept (PoC) exploit and comprehensive risk report.
* IBS Software Security Team validated the issue and deployed immediate containment measures.
* Selected as the first security researcher to be recognized in the IBS Software Security Hall of Fame (https://www.ibsplc.com/security/security-hall-of-fame).

=========================================
PROFESSIONAL EXPERIENCE
=========================================
Junior Server Administrator
Hashroot Technologies | Kakkanad, Kochi (Full-time) | May 2026 - Present
* Performed internal application security assessments alongside infrastructure operations, identifying Google Cloud API key exposures and critical configuration flaws in Ghost CMS.
* Validated security vulnerabilities through responsible disclosure, authoring detailed technical reports adopted by security and engineering teams for remediation.
* Supported production Linux (AlmaLinux, Ubuntu) and Windows server environments, troubleshooting infrastructure bottlenecks and system anomalies.
* Configured AWS cloud infrastructure (EC2, S3, IAM, VPC), enforcing least-privilege access controls and auditing network security groups.
* Audited HTTP response headers, Content Security Policies (CSP), and CORS rules to mitigate information disclosure risks.
* Implemented host hardening, secure SSH protocols, firewall configurations, and automated log monitoring.

Cybersecurity & Ethical Hacking Intern
Techmagi | Kakkanad, Kochi | June 2025
* Conducted black-box web application assessments using Nmap and Burp Suite to validate OWASP Top 10 vulnerabilities (XSS, SQLi, Auth bypass).
* Drafted technical reports detailing vulnerability assessments, CVSS metrics, risk rankings, and remediation validation.

Ethical Hacking Intern
Techbyheart | Kochi, Kerala | January 2025
* Conducted vulnerability scanning and configuration audits across standard service ports (SSH, FTP, HTTP) in sandboxed virtual labs.
* Created proof-of-concept scripts in Python to demonstrate impact and validate security bugs.

=========================================
SECURITY RESEARCH & ASSESSMENTS
=========================================
* IBS Software: Disclosed validated RCE (CVE-2026-48908); developed safe PoC exploit; report validated for immediate remediation; published in IBS Software Security Hall of Fame (https://www.ibsplc.com/security/security-hall-of-fame).
* Hashroot: Internal assessment of corporate instances; discovered Google Cloud API exposure and Ghost CMS security misconfigurations; resolved API keys and hardened CMS routing.
* ICET (WordPress Security Review): Performed application audits on WordPress staging environments; responsibly disclosed configurations and plugin bugs; mapped risk business impacts.

=========================================
PROJECT EXPERIENCE
=========================================
AI-Powered EDR System (Python, Wazuh, Elastic, Ollama)
* Developed an endpoint agent in Python to ingest logs into Elastic Stack & Wazuh, integrating Ollama LLM for automated alert triage.
* Programmed automated containment workflows (process termination, route isolation), reducing security alert overhead by 40%.

ESP32 Localization & Signal Tracking (ESP32, Python)
* Programmed RSSI-based tracking algorithms with custom firmware, locating wireless devices with ~95% precision.
* Created Python automation scripts to capture probe frames and visualize target coordinates.

=========================================
CERTIFICATIONS
=========================================
* Cisco Certified Ethical Hacker - Cisco Networking Academy
* Offenso Certified Ethical Hacker - Offense Hackers Academy
* Google Cybersecurity Professional Certificate

=========================================
EDUCATION
=========================================
B.Tech in Computer Science (Cybersecurity)
Ilahia College of Engineering | APJ Abdul Kalam Technological University, Kerala | 2022 - 2026
* TryHackMe Advent of Cyber: Completed 24 days of hands-on challenges in SOC operations, threat intelligence, and log analysis.
* Department Chairman & Leadership: Managed 15+ student coordinators to host tech fests and security workshops.`;

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
                writeTerminalLine('  <span class="highlight">experience</span>  - Review professional roles');
                writeTerminalLine('  <span class="highlight">research</span>    - View security research highlights');
                writeTerminalLine('  <span class="highlight">writing</span>     - View security writing & documentation');
                writeTerminalLine('  <span class="highlight">contact</span>     - Show contact links and phone numbers');
                writeTerminalLine('  <span class="highlight">clear</span>       - Clear the screen output');
                writeTerminalLine('  <span class="highlight">secret</span>      - Look for hidden credentials');
                break;
            
            case 'about':
                writeTerminalLine('Midhlaj Sidhick is an Application Security Engineer specializing in web/API audits, cloud hardening, and security research.', 'text-cyan');
                writeTerminalLine('Currently serving as a Junior Server Administrator at Hashroot Technologies, auditing infrastructure and performing responsible disclosures.', 'text-system');
                break;

            case 'skills':
                writeTerminalLine('--- TECHNICAL COMPETENCY MATRIX ---', 'text-yellow');
                writeTerminalLine('Application Security   [█████████░] 90% - OWASP Top 10, API Security, Auth Testing');
                writeTerminalLine('VAPT & Penetration     [█████████░] 90% - Burp Suite, Nmap, ffuf, httpx, subfinder');
                writeTerminalLine('Systems & Cloud        [████████░░] 80% - Linux Admin, SSH, AWS (EC2/S3/IAM/VPC), Docker');
                writeTerminalLine('Programming & Script   [████████░░] 80% - Python, JavaScript, Bash, REST APIs');
                writeTerminalLine('Monitoring & SIEM      [████████░░] 80% - Wazuh, ELK Stack, Ollama integration');
                break;

            case 'projects':
                writeTerminalLine('--- SELECTED CYBERSECURITY PROJECTS ---', 'text-yellow');
                writeTerminalLine('1. AI-Powered EDR System (Python, Wazuh, ELK, Ollama)', 'text-cyan');
                writeTerminalLine('   * Aggregate event logs and automate threat response (reducing false positives by 40%).');
                writeTerminalLine('2. Wireless Device Tracker (ESP32, Python GUI)', 'text-cyan');
                writeTerminalLine('   * Developed custom firmware to capture 802.11 packets, locating devices with ~95% precision.');
                break;

            case 'experience':
                writeTerminalLine('--- PROFESSIONAL EXPERIENCE ---', 'text-yellow');
                writeTerminalLine('1. Junior Server Administrator (Full-time) @ Hashroot (May 2026 - Present)', 'text-cyan');
                writeTerminalLine('   * Performed internal AppSec assessments; supported production Linux/AWS servers; resolved credentials exposures.');
                writeTerminalLine('2. Cybersecurity & VAPT Intern @ Techmagi, Kakkanad (June 2025)', 'text-cyan');
                writeTerminalLine('   * Managed web application audits using Burp Suite and Nmap, drafting CVSS vulnerability logs.');
                writeTerminalLine('3. Ethical Hacking Intern @ Techbyheart, Kochi (Jan 2025)', 'text-cyan');
                writeTerminalLine('   * Created proof-of-concept scripts in Python to demonstrate impact on target Linux hosts.');
                break;

            case 'research':
                writeTerminalLine('--- VALIDATED RESPONSIBLE DISCLOSURES ---', 'text-yellow');
                writeTerminalLine('1. IBS Software (Validated Remote Code Execution — CVE-2026-48908)', 'text-cyan');
                writeTerminalLine('   * Disclosed RCE vulnerability. Published in <a href="https://www.ibsplc.com/security/security-hall-of-fame" target="_blank" style="color:#00ff66; text-decoration:underline;">IBS Software Security Hall of Fame</a>.');
                writeTerminalLine('2. Hashroot Technologies (Internal AppSec Assessments)', 'text-cyan');
                writeTerminalLine('   * Discovered Google Cloud API exposure & Ghost CMS configurations; hardened Nginx routing.');
                writeTerminalLine('3. ICET (WordPress Security Review)', 'text-cyan');
                writeTerminalLine('   * Responsibly disclosed plugin bugs and misconfigurations; mapped business impacts.');
                break;

            case 'writing':
                writeTerminalLine('--- SECURITY WRITING & DOCUMENTATION ---', 'text-yellow');
                writeTerminalLine('  * <strong>Responsible Disclosure Reports</strong> - CVSS mapping, technical details, remediation.');
                writeTerminalLine('  * <strong>Internal Security Assessments</strong> - Infrastructure audit logs and host hardening.');
                writeTerminalLine('  * <strong>Executive Summaries</strong> - High-level risk and business impact analysis.');
                writeTerminalLine('  * <strong>Proof-of-Concept (PoC) Documentation</strong> - Reproducible script parameters.');
                writeTerminalLine('  * <strong>Remediation Guidance</strong> - Hardening configurations and patch validation.');
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
