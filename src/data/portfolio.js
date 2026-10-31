// SINGLE SOURCE OF TRUTH: edit everything about yourself here.
export const profile = {
  name: 'Pratik Fating',
  initials: 'PF',
  headline: 'MCA Student | Full-Stack, IoT & Cybersecurity Projects',
  photo: '/profile-photo.jpg', // change this path to swap your photo
  resume: '/resume.pdf',
  email: 'pratikfating77@gmail.com',
  github: 'https://github.com/Pratikfating123',
  linkedin: 'https://www.linkedin.com/in/pratik-fating-153448273/',
  phone: '+91 9030608301',
  showPhone: false, // set true to show your phone publicly
  location: '', // e.g. 'Pune, India' (not in resume, so left empty)
  intro: 'MCA (Cyber Security) student with a strong foundation in Python, databases, and dashboard creation, seeking an entry-level role in Multi-cloud, Digital Workplace, or IT Operations.',
  about: [
    'I am pursuing a Master in Computer Application (Cloud Computing) at JSPM University, Pune, with a strong foundation in Python, databases, and dashboard creation.',
    'Alongside my studies I have worked in IT support roles, maintaining 350+ desktop systems, configuring LAN and network equipment, and supporting users with OS and software setup.',
    'My projects cover full-stack web apps (Node.js, Express, MongoDB, Next.js), IoT with ESP8266/ESP32, and security-focused work such as passwordless login and ML-based URL threat detection. I want to apply this problem-solving mindset to enterprise IT services and operational excellence.'
  ]
}
export const skills = [
  { group: 'Programming languages', items: ['Python', 'Java (basic)', 'C', 'C++', 'JavaScript', 'HTML', 'CSS'] },
  { group: 'Databases', items: ['SQL', 'MongoDB', 'PostgreSQL', 'MySQL', 'SQLite', 'Redis'] },
  { group: 'Frontend & backend (used in projects)', items: ['React', 'Next.js', 'Node.js', 'Express.js', 'Flask', 'Chart.js', 'REST APIs'] },
  { group: 'Cloud, IoT & tools (used in projects)', items: ['Docker', 'ThingsBoard', 'MQTT', 'ESP8266', 'ESP32', 'Prisma', 'Scikit-learn', 'Pandas'] },
  { group: 'Networking & IT support', items: ['LAN setup', 'Switches & access points', 'WiFi & VPN setup', 'Windows 7/10/11', 'Linux', 'Hardware troubleshooting'] }
]
export const experience = [
  { title: 'IT Assistant', org: 'Suryodaya College of Engineering & Technology (Nagpur)', dates: 'Dec 2024 – Jul 2025', note: 'College IT Department', points: [
    'Assisted in assembling, maintaining, and managing 350+ desktop systems across college labs.',
    'Diagnosed and resolved hardware issues including RAM, SMPS, and motherboard failures.',
    'Configured and maintained LAN connectivity to ensure stable internet across departments.',
    'Crimped RJ45 cables and verified network connectivity using cable testers.',
    'Supported faculty and students with OS installation (Windows, Linux) and software setup.'] },
  { title: 'IT Assistant', org: 'New Era Hospital, Nagpur', dates: 'Jul 2023 – Dec 2023', points: [
    'Installed and configured hardware devices including printers, routers, and peripherals.',
    'Troubleshot and resolved system, network, and software issues.',
    'Maintained records of hardware installation, repair, and replacement activities.',
    'Provided day-to-day IT support to ensure smooth hospital operations.'] },
  { title: 'Apprenticeship Trainee (IT Support)', org: 'Proper Computer Institute of Technologies, Nagpur', dates: 'Aug 2022 – Jul 2023', points: [
    'Assisted IT support engineers in daily system administration and troubleshooting tasks.',
    'Installed and configured operating systems including Windows 7, 10, and 11.',
    'Managed antivirus setup, internet configuration, and basic system security.',
    'Supported network setup including switches, access points, WiFi configuration, and VPN setup.',
    'Performed driver installation and system optimization for end users.'] }
]
const gh = (r) => `https://github.com/Pratikfating123/${r}`
export const projects = [
  { title: 'AI-Powered Personal Finance Advisor', categories: ['Full-Stack', 'AI & Machine Learning', 'Cloud'], problem: 'Tracking expenses, budgets and goals, with personalised guidance.',
    description: 'AI-powered personal finance platform for expenses, budgets, goals and spending patterns.',
    features: ['OpenAI-based expense categorisation, insights, predictions and monthly reports', "Context-aware AI advisor using the user's financial data", 'Redis caching for dashboard insights to reduce API usage', 'Dockerised frontend, backend, PostgreSQL and Redis'],
    tech: ['Next.js', 'React', 'Node.js', 'Express.js', 'PostgreSQL', 'Prisma', 'Redis', 'OpenAI API', 'Docker'], github: gh('AI-Personal-Finance-Advisor') },
  { title: 'AI-Powered URL Threat Detection System', categories: ['Cybersecurity', 'AI & Machine Learning'], problem: 'Detecting phishing and malicious URLs.',
    description: 'ML-based system that classifies URLs as Safe, Suspicious or Phishing.',
    features: ['Random Forest: 87.51% accuracy, 87.57% F1-score, 0.9473 ROC-AUC', 'Feature extraction: keywords, IPs, HTTPS use, subdomains, encoding, shorteners', 'VirusTotal intelligence combined with ML into risk scores', 'Flask dashboard with live scanning and SQLite scan history'],
    tech: ['Python', 'Flask', 'Scikit-learn', 'Random Forest', 'VirusTotal API', 'SQLite', 'Pandas'], github: gh('AI-URL-Threat-Detection') },
  { title: 'Passwordless Authentication & Risk-Based Login', categories: ['Cybersecurity', 'Full-Stack'], problem: 'Replacing passwords with safer, risk-aware login.',
    description: 'Passwordless login with Email OTP and QR codes, plus a risk-based authentication engine.',
    features: ['Risk scoring from device, IP, OTP failures and trust signals', 'Secure sessions: tokens, expiry, device association, revocation', 'Device tracking, login history and automated security alerts', 'OTP hashing, expiry, attempt limits and rate limiting'],
    tech: ['Python', 'Flask', 'MySQL', 'Flask-Mail', 'Flask-Limiter', 'QR Code', 'OTP'], github: gh('Cybersecurity-Passwordless-Login') },
  { title: 'SmartLink: URL Shortener & Analytics', categories: ['Full-Stack'], problem: 'Sharing long URLs and understanding link usage.',
    description: 'Full-stack URL shortener with click tracking and an analytics dashboard.',
    features: ['JWT authentication and authorisation', 'MongoDB storage for users and links', 'Click tracking and link performance analytics', 'RESTful APIs with secure middleware'],
    tech: ['Node.js', 'Express.js', 'MongoDB', 'JWT', 'JavaScript', 'REST APIs'], github: gh('smartlink-url-shortener') },
  { title: 'IoT Heart Monitoring System with Cloud Dashboard', categories: ['IoT', 'Cloud'], problem: 'Remote, real-time heart-rate monitoring.',
    description: 'Real-time heart monitor using ESP8266 and a MAX30102 sensor, streamed to ThingsBoard.',
    features: ['MQTT data transmission to ThingsBoard cloud', 'Custom web dashboard with live Chart.js visualisation', 'Telemetry fetched via REST API for real-time updates', 'BPM on OLED with validation logic for accurate readings'],
    tech: ['ESP8266', 'MQTT', 'ThingsBoard', 'HTML', 'CSS', 'JavaScript', 'Chart.js'], github: gh('IoT-Heart-Monitoring-System-with-AI-Dashboard') },
  { title: 'IoT Smart Assistant using Google Gemini', categories: ['IoT', 'AI & Machine Learning'], problem: 'Controlling IoT devices with natural text commands.',
    description: 'Text-based assistant that uses the Gemini API to process commands and control IoT devices.',
    features: ['Commands sent from a UI to IoT devices for automation', 'API-based frontend-to-backend communication', 'Device control and status retrieval from text input'],
    tech: ['Python', 'Gemini API', 'REST API', 'ESP32', 'HTTP/MQTT'] } // no GitHub link in resume
]
export const education = [
  { degree: 'Master in Computer Application, Cloud Computing (Pursuing)', school: 'JSPM University, Pune', years: '2025 – 2027' },
  { degree: 'Bachelor of Science in Chemistry', school: 'Shri Mathuradas Mohota College of Science, Nagpur', years: '2020 – 2023', score: 'Percentage: 65.40' },
  { degree: 'Science, XII (Higher Secondary)', school: 'Sant Jagnade High School, Nagpur', years: '2020', score: 'Percentage: 47.60' },
  { degree: 'Science, X (Secondary School)', school: 'N.S.V.M. Fulwari School, Nagpur', years: '2018', score: 'Percentage: 60.60' }
]
export const certifications = [
  { name: 'CCNA 200-301 Network Fundamentals (Online)' },
  { name: 'Introduction to Generative AI Studio' },
  { name: 'Introduction of Cyber Security (Online)' },
  { name: 'Cisco Certified Support Technician Cyber Security', issuer: 'Cisco' }
]
export const nav = ['Projects', 'Profile', 'Skills', 'Experience', 'Education', 'Contact']
// Technologies shown in the ticker (all taken from the resume / projects)
export const ticker = ['Python', 'Java', 'C++', 'JavaScript', 'React', 'Next.js', 'Node.js', 'Express.js', 'Flask', 'MongoDB', 'PostgreSQL', 'MySQL', 'Docker', 'Cybersecurity', 'Machine Learning', 'IoT']
export const techGroups = [
  { group: 'Programming', icon: 'code', items: ['Python', 'Java (basic)', 'C', 'C++', 'JavaScript'] },
  { group: 'Frontend', icon: 'layout', items: ['HTML', 'CSS', 'React', 'Next.js', 'Chart.js'] },
  { group: 'Backend', icon: 'server', items: ['Node.js', 'Express.js', 'Flask', 'REST APIs', 'JWT'] },
  { group: 'Databases', icon: 'db', items: ['SQL', 'MongoDB', 'PostgreSQL', 'MySQL', 'SQLite', 'Redis', 'Prisma'] },
  { group: 'Cybersecurity', icon: 'shield', items: ['OTP & passwordless auth', 'Risk-based login', 'Rate limiting', 'VirusTotal API', 'Basic system security'] },
  { group: 'Cloud, IoT & DevOps', icon: 'cloud', items: ['Docker', 'ThingsBoard', 'MQTT', 'ESP8266', 'ESP32', 'VPN & network setup'] },
  { group: 'AI tools', icon: 'tool', items: ['Scikit-learn', 'Pandas', 'OpenAI API', 'Gemini API'] }
]
