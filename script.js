// ===== ADMIN CONFIGURATION =====
// Set your admin password here (will be hashed for security)
const ADMIN_PASSWORD = 'jak@2912'; // TODO: Change this to your secure password

// ===== EMAILJS CONFIGURATION =====
// Get these values from https://dashboard.emailjs.com/admin
// 1. Sign up at https://www.emailjs.com/
// 2. Create an email service (Gmail)
// 3. Create an email template
// 4. Get your Public Key from Account > API Keys
const EMAILJS_SERVICE_ID = 'service_aazs569';
const EMAILJS_TEMPLATE_ID = 'template_rfqlmjv';
const EMAILJS_PUBLIC_KEY = 'Tf3diaJ6e-EZSHB5N';

// Debug/version marker to confirm the correct script is loaded
const SCRIPT_VERSION = 'emailjs-fix-2026-02-19';
console.log('[Portfolio] script.js loaded:', SCRIPT_VERSION);

function isEmailJSConfigured() {
  return Boolean(
    EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ID && EMAILJS_PUBLIC_KEY &&
    !EMAILJS_SERVICE_ID.includes('YOUR_') &&
    !EMAILJS_TEMPLATE_ID.includes('YOUR_') &&
    !EMAILJS_PUBLIC_KEY.includes('YOUR_')
  );
}

// Simple hash function for password (not cryptographically secure, but better than plain text)
function hashPassword(password) {
    let hash = 0;
    for (let i = 0; i < password.length; i++) {
        const char = password.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash; // Convert to 32bit integer
    }
    return hash.toString();
}

// ===== CONFIGURATION OBJECT =====
// Edit this object to update all personal content on the site
let PORTFOLIO_DATA = {
    personal: {
        name: "Arsh Patel",
        title: "AI & Business Professional",
        summary: "Master's student in Artificial Intelligence in Business, passionate about leveraging AI to drive strategic business decisions and create innovative solutions.",
        email: "arshpatel1229@gmail.com",
        phone: "+1 (480) 919-6722",
        location: "Tempe, AZ, United States",
        linkedin: "https://www.linkedin.com/in/arsh-patel-1344a3362",
        github: "https://github.com" // TODO: Update with your GitHub URL
    },
    about: {
        paragraphs: [
            "I'm a graduate student pursuing a Master's in Artificial Intelligence in Business at Arizona State University, with a strong foundation in finance and business administration. My passion lies at the intersection of AI technology and business strategy, where I work to translate complex AI capabilities into actionable business solutions.",
            "With hands-on experience in AI workflow automation, data analytics, and strategic planning, I bring a unique perspective that combines technical expertise with business acumen. I'm particularly interested in ethical AI practices, responsible AI implementation, and using data-driven insights to solve real-world business challenges."
        ]
    },
    projects: [
        {
            title: "Mobile Banking Impact Research",
            description: "Independent research paper analyzing the impact of mobile banking applications on customer engagement and satisfaction. Conducted primary research using structured surveys and statistical analysis.",
            tags: ["Research", "Data Analysis", "Finance"],
            category: "Data",
            links: []
        },
        {
            title: "EA Product Management Simulation",
            description: "Completed job simulation developing KPIs for strategy RPG mobile games. Demonstrated knowledge of key performance indicators within the video game industry and created data-driven presentations.",
            tags: ["Product Management", "KPIs", "Gaming"],
            category: "Other",
            links: []
        },
        {
            title: "AI Workplace Partnership Simulation",
            description: "Partnered with generative AI tools to research, write, design, and debug in fast-paced project environments. Created client-ready reports and presentations using AI assistance.",
            tags: ["AI", "Automation", "Productivity"],
            category: "Other",
            links: []
        },
        {
            title: "AI Workflow Automation Evaluation",
            description: "Research fellowship project evaluating and testing AI-driven workflow automation systems. Analyzed model outputs, automation logic, and system performance across diverse use cases.",
            tags: ["AI", "Automation", "Research"],
            category: "Data",
            links: []
        }
    ],
    skills: [
        {
            category: "Programming Languages",
            items: ["Python", "R", "SQL"]
        },
        {
            category: "AI & Machine Learning",
            items: [
                "AI-driven Business Decision-Making",
                "AI Integration in Applications",
                "AI Strategy and Implementation",
                "Prompt Engineering",
                "Model Evaluation"
            ]
        },
        {
            category: "Data Analytics",
            items: [
                "Data Modeling",
                "Statistical Analysis",
                "Regression",
                "Forecasting",
                "Tableau",
                "Streamlit"
            ]
        },
        {
            category: "Tools & Platforms",
            items: [
                "Jupyter Notebook",
                "Google Colab",
                "VS Code",
                "PyCharm",
                "MySQL Workbench",
                "OpenAI API",
                "Hugging Face"
            ]
        },
        {
            category: "Business Skills",
            items: [
                "Strategic Decision-Making",
                "Analytical Thinking",
                "Project Management",
                "Business Process Optimization"
            ]
        }
    ],
    experience: [
        {
            title: "Research Fellow",
            company: "Diamond Mind AI",
            location: "Tempe, Arizona",
            date: "Nov 2025 – Jan 2026",
            description: "Selected as a Research Fellow to evaluate, test, and provide strategic feedback on AI-driven workflow automation systems.",
            highlights: [
                "Collaborated with internal teams to assess performance, usability, and scalability of AI tools",
                "Conducted systematic testing and evaluation of AI workflow automation frameworks",
                "Analyzed model outputs, automation logic, and system performance across diverse use cases",
                "Identified inefficiencies, edge cases, and optimization opportunities within AI pipelines",
                "Delivered structured, insight-driven feedback to improve product reliability and user experience"
            ]
        },
        {
            title: "Intern",
            company: "CEE, CATCH FOUNDATION",
            location: "Ahmedabad, Gujarat",
            date: "Dec 2023 – Mar 2024",
            description: "Assisted in delivering basic environmental education to school children and supported program staff in managing classroom sessions.",
            highlights: [
                "Helped children learn alphabets and draw nature-themed pictures through creative activities",
                "Supported program staff in managing classroom sessions and interactive learning modules",
                "Collaborated with team members to improve internal operations and outreach strategies",
                "Contributed to planning and delivery of grassroots awareness sessions on waste management and biodiversity"
            ]
        }
    ],
    education: [
        {
            degree: "Master's in Artificial Intelligence in Business",
            school: "W. P. Carey School of Business at Arizona State University",
            location: "Tempe, Arizona",
            date: "Aug 2025 – Sept 2026",
            coursework: "AI in Business, Enterprise Data Analytics, Machine Learning in Business, Business Process and Systems, AI and Data Analytics Strategy, Analytics for Unstructured Data, AI Business Strategy, Programming for AI and Data Analytics in Business, Transforming Business with AI (Capstone)"
        },
        {
            degree: "Bachelor of Business Administration (BBA), Finance",
            school: "Pandit Deendayal Energy University",
            location: "Gandhinagar, Gujarat",
            date: "July 2021 – May 2025",
            coursework: "Financial Management, Corporate Finance, Investment Analysis and Portfolio Management, Accounting for Managers, Business Administration"
        }
    ]
};

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', () => {
    initializeTheme();
    initializeHero();
    initializeNavigation();
    initializeProjects();
    initializeSkills();
    initializeExperience();
    initializeEducation();
    initializeResume();
    initializeContactForm();
    initializeAbout();
    initializeScrollAnimations();
    initializeBackToTop();
    initializeMobileMenu();
    initializeFooter();
    initializeAdmin();
    initializeChatbot();
    initializeEmailJS();
    loadPortfolioData();
    setCopyrightYear();
});

// ===== THEME MANAGEMENT =====
function initializeTheme() {
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = themeToggle.querySelector('.theme-icon');
    const savedTheme = localStorage.getItem('theme') || 'light';
    
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(themeIcon, savedTheme);
    
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(themeIcon, newTheme);
    });
}

function updateThemeIcon(icon, theme) {
    icon.textContent = theme === 'dark' ? '☀️' : '🌙';
}

// ===== HERO =====
function initializeHero() {
    const heroName = document.getElementById('heroName');
    const heroTitle = document.getElementById('heroTitle');
    const heroSummary = document.getElementById('heroSummary');
    
    if (heroName) heroName.textContent = PORTFOLIO_DATA.personal.name;
    if (heroTitle) heroTitle.textContent = PORTFOLIO_DATA.personal.title;
    if (heroSummary) heroSummary.textContent = PORTFOLIO_DATA.personal.summary;
}

// ===== NAVIGATION =====
function initializeNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const navbar = document.getElementById('navbar');
    
    // Smooth scrolling
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetSection = document.getElementById(targetId);
                if (targetSection) {
                    const offsetTop = targetSection.offsetTop - 70;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                    closeMobileMenu();
                }
            }
        });
    });
    
    // Active link highlighting on scroll
    window.addEventListener('scroll', () => {
        updateActiveNavLink();
        handleNavbarScroll(navbar);
    });
    
    updateActiveNavLink();
}

function updateActiveNavLink() {
    const sections = document.querySelectorAll('.section, .hero');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    const scrollPosition = window.pageYOffset + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

function handleNavbarScroll(navbar) {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}

// ===== MOBILE MENU =====
function initializeMobileMenu() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    
    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
            closeMobileMenu();
        }
    });
}

function closeMobileMenu() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    navToggle.classList.remove('active');
    navMenu.classList.remove('active');
}

// ===== PROJECTS =====
function initializeProjects() {
    const projectsGrid = document.getElementById('projectsGrid');
    const filterChips = document.getElementById('filterChips');
    const projectSearch = document.getElementById('projectSearch');
    
    // Clear any existing chips first
    filterChips.innerHTML = '';
    
    // Get unique categories
    const categories = ['All', ...new Set(PORTFOLIO_DATA.projects.map(p => p.category))];
    
    // Create filter chips
    categories.forEach(category => {
        const chip = document.createElement('button');
        chip.className = 'chip';
        chip.textContent = category;
        chip.setAttribute('data-filter', category.toLowerCase());
        if (category === 'All') chip.classList.add('active');
        chip.addEventListener('click', () => filterProjects(category.toLowerCase()));
        filterChips.appendChild(chip);
    });
    
    // Render projects
    renderProjects(PORTFOLIO_DATA.projects);
    
    // Search functionality
    projectSearch.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        filterAndSearchProjects(searchTerm);
    });
}

function renderProjects(projects) {
    const projectsGrid = document.getElementById('projectsGrid');
    projectsGrid.innerHTML = '';
    
    projects.forEach(project => {
        const card = createProjectCard(project);
        projectsGrid.appendChild(card);
    });
}

function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.setAttribute('data-category', project.category.toLowerCase());
    card.setAttribute('data-title', project.title.toLowerCase());
    
    const tagsHtml = project.tags.map(tag => 
        `<span class="project-tag">${tag}</span>`
    ).join('');
    
    const linksHtml = project.links && project.links.length > 0 
        ? `<div class="project-links">
            ${project.links.map(link => 
                `<a href="${link.url}" class="project-link" target="_blank" rel="noopener noreferrer">${link.label}</a>`
            ).join('')}
           </div>`
        : '';
    
    card.innerHTML = `
        <div class="project-tags">${tagsHtml}</div>
        <h3 class="project-title">${project.title}</h3>
        <p class="project-description">${project.description}</p>
        ${linksHtml}
    `;
    
    return card;
}

function filterProjects(category) {
    const chips = document.querySelectorAll('.chip');
    chips.forEach(chip => {
        chip.classList.toggle('active', chip.getAttribute('data-filter') === category);
    });
    
    const searchTerm = document.getElementById('projectSearch').value.toLowerCase();
    filterAndSearchProjects(searchTerm, category);
}

function filterAndSearchProjects(searchTerm = '', category = 'all') {
    const cards = document.querySelectorAll('.project-card');
    
    cards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        const cardTitle = card.getAttribute('data-title');
        const cardDescription = card.textContent.toLowerCase();
        
        const matchesCategory = category === 'all' || cardCategory === category;
        const matchesSearch = !searchTerm || 
            cardTitle.includes(searchTerm) || 
            cardDescription.includes(searchTerm);
        
        if (matchesCategory && matchesSearch) {
            card.classList.remove('hidden');
        } else {
            card.classList.add('hidden');
        }
    });
}

// ===== SKILLS =====
function initializeSkills() {
    const skillsGrid = document.getElementById('skillsGrid');
    
    PORTFOLIO_DATA.skills.forEach(skillCategory => {
        const card = document.createElement('div');
        card.className = 'skill-card';
        
        const itemsHtml = skillCategory.items.map(item => 
            `<li class="skill-item">${item}</li>`
        ).join('');
        
        card.innerHTML = `
            <h3 class="skill-category">${skillCategory.category}</h3>
            <ul class="skill-list">${itemsHtml}</ul>
        `;
        
        skillsGrid.appendChild(card);
    });
}

// ===== EXPERIENCE =====
function initializeExperience() {
    const timeline = document.getElementById('experienceTimeline');
    
    PORTFOLIO_DATA.experience.forEach(exp => {
        const item = document.createElement('div');
        item.className = 'timeline-item';
        
        const highlightsHtml = exp.highlights && exp.highlights.length > 0
            ? `<ul>${exp.highlights.map(h => `<li>${h}</li>`).join('')}</ul>`
            : '';
        
        item.innerHTML = `
            <div class="timeline-content">
                <h3 class="timeline-title">${exp.title}</h3>
                <div class="timeline-company">${exp.company}</div>
                <div class="timeline-date">${exp.date} • ${exp.location}</div>
                <div class="timeline-description">
                    <p>${exp.description}</p>
                    ${highlightsHtml}
                </div>
            </div>
        `;
        
        timeline.appendChild(item);
    });
}

// ===== EDUCATION =====
function initializeEducation() {
    const educationGrid = document.getElementById('educationGrid');
    
    PORTFOLIO_DATA.education.forEach(edu => {
        const card = document.createElement('div');
        card.className = 'education-card';
        
        card.innerHTML = `
            <h3 class="education-degree">${edu.degree}</h3>
            <div class="education-school">${edu.school}</div>
            <div class="education-date">${edu.date} • ${edu.location}</div>
            <div class="education-coursework">
                <strong>Relevant Coursework:</strong> ${edu.coursework}
            </div>
        `;
        
        educationGrid.appendChild(card);
    });
}

// ===== ABOUT =====
function initializeAbout() {
    const aboutContent = document.getElementById('aboutContent');
    if (aboutContent) {
        aboutContent.innerHTML = PORTFOLIO_DATA.about.paragraphs.map(p => `<p>${p}</p>`).join('');
    }
}

// ===== RESUME =====
function initializeResume() {
    const resumeSummary = document.getElementById('resumeSummary');
    
    const summaryCards = [
        {
            title: "Experience",
            content: `${PORTFOLIO_DATA.experience.length} professional positions including Research Fellow at Diamond Mind AI and Intern at CEE, CATCH FOUNDATION.`
        },
        {
            title: "Education",
            content: `Master's in AI in Business from ASU (2025-2026) and BBA in Finance from Pandit Deendayal Energy University (2021-2025).`
        },
        {
            title: "Skills",
            content: `Expertise in Python, R, SQL, AI/ML, Data Analytics, and Business Strategy. Proficient in various AI tools and platforms.`
        }
    ];
    
    summaryCards.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.className = 'resume-card';
        cardElement.innerHTML = `
            <h3 class="resume-card-title">${card.title}</h3>
            <div class="resume-card-content">${card.content}</div>
        `;
        resumeSummary.appendChild(cardElement);
    });
}

// ===== CONTACT FORM =====
function initializeContactForm() {
    const form = document.getElementById('contactForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    
    // Real-time validation
    nameInput.addEventListener('blur', () => validateField(nameInput, 'nameError', validateName));
    emailInput.addEventListener('blur', () => validateField(emailInput, 'emailError', validateEmail));
    messageInput.addEventListener('blur', () => validateField(messageInput, 'messageError', validateMessage));
    
    form.addEventListener('submit', handleFormSubmit);
}

function validateName(value) {
    if (!value.trim()) return 'Name is required';
    if (value.trim().length < 2) return 'Name must be at least 2 characters';
    return '';
}

function validateEmail(value) {
    if (!value.trim()) return 'Email is required';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) return 'Please enter a valid email address';
    return '';
}

function validateMessage(value) {
    if (!value.trim()) return 'Message is required';
    if (value.trim().length < 10) return 'Message must be at least 10 characters';
    return '';
}

function validateField(input, errorId, validator) {
    const errorElement = document.getElementById(errorId);
    const error = validator(input.value);
    
    if (error) {
        input.classList.add('invalid');
        errorElement.textContent = error;
        return false;
    } else {
        input.classList.remove('invalid');
        errorElement.textContent = '';
        return true;
    }
}

// ===== EMAILJS INITIALIZATION =====
function loadEmailJSSDK() {
    return new Promise((resolve, reject) => {
      if (typeof window.emailjs !== 'undefined') return resolve();
  
      const existing = document.querySelector('script[data-emailjs-sdk]');
      if (existing) {
        existing.addEventListener('load', () => resolve());
        existing.addEventListener('error', () => reject(new Error('Failed to load EmailJS SDK')));
        return;
      }
  
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js';
      script.defer = true;
      script.setAttribute('data-emailjs-sdk', 'true');
      script.onload = () => resolve();
      script.onerror = () => reject(new Error('Failed to load EmailJS SDK'));
      document.head.appendChild(script);
    });
  }
  
  async function initializeEmailJS() {
    if (!isEmailJSConfigured()) {
      console.warn('[Portfolio] EmailJS not configured (Service/Template/Public key missing).');
      return false;
    }
  
    try {
      await loadEmailJSSDK();
      if (typeof window.emailjs !== 'undefined') {
        window.emailjs.init(EMAILJS_PUBLIC_KEY);
        console.log('[Portfolio] EmailJS initialized');
        return true;
      }
      return false;
    } catch (err) {
      console.warn('[Portfolio] EmailJS initialization failed:', err);
      return false;
    }
  }

async function handleFormSubmit(e) {
    e.preventDefault();
    
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const submitButton = e.target.querySelector('button[type="submit"]');
    
    const isNameValid = validateField(nameInput, 'nameError', validateName);
    const isEmailValid = validateField(emailInput, 'emailError', validateEmail);
    const isMessageValid = validateField(messageInput, 'messageError', validateMessage);
    
    if (!isNameValid || !isEmailValid || !isMessageValid) {
        return;
    }
    // Check if EmailJS is configured
if (!isEmailJSConfigured()) {
    showToast('Email service not configured. Please add your EmailJS Service ID, Template ID, and Public Key in script.js.', 'error');
    console.warn('[Portfolio] EmailJS config values present?', {
      hasServiceId: Boolean(EMAILJS_SERVICE_ID),
      hasTemplateId: Boolean(EMAILJS_TEMPLATE_ID),
      hasPublicKey: Boolean(EMAILJS_PUBLIC_KEY)
    });
    return;
  }
    
    // Disable submit button and show loading state
    const originalButtonText = submitButton.textContent;
    submitButton.disabled = true;
    submitButton.textContent = 'Sending...';
    
    // Prepare email parameters
    const templateParams = {
        from_name: nameInput.value,
        from_email: emailInput.value,
        to_email: PORTFOLIO_DATA.personal.email,
        message: messageInput.value,
        reply_to: emailInput.value,
        subject: `Portfolio Contact: ${nameInput.value}`
    };
    
    try {
        // Send email using EmailJS
        const ok = await initializeEmailJS();
if (!ok || typeof window.emailjs === 'undefined') {
  throw new Error('EmailJS SDK not available');
}

await window.emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams);
        
        showToast('Message sent successfully! I\'ll get back to you soon.', 'success');
        
        // Reset form
        const form = document.getElementById('contactForm');
        form.reset();
        document.querySelectorAll('.error-message').forEach(el => el.textContent = '');
        document.querySelectorAll('.invalid').forEach(el => el.classList.remove('invalid'));
        
    } catch (error) {
        console.error('EmailJS Error:', error);
        showToast('Failed to send message. Please try again or email me directly.', 'error');
    } finally {
        // Re-enable submit button
        submitButton.disabled = false;
        submitButton.textContent = originalButtonText;
    }
}

// ===== SCROLL ANIMATIONS =====
function initializeScrollAnimations() {
    const animatedElements = document.querySelectorAll('[data-animate]');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const delay = entry.target.getAttribute('data-delay') || 0;
                setTimeout(() => {
                    entry.target.classList.add('animated');
                }, delay);
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    animatedElements.forEach(el => observer.observe(el));
}

// ===== BACK TO TOP =====
function initializeBackToTop() {
    const backToTopBtn = document.getElementById('backToTop');
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });
    
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ===== TOAST NOTIFICATION =====
function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toastMessage');
    
    toastMessage.textContent = message;
    toast.className = `toast ${type} show`;
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 4000);
}

// ===== CHATBOT (LOCAL Q&A ASSISTANT) =====
function initializeChatbot() {
    const toggle = document.getElementById('chatbotToggle');
    const panel = document.getElementById('chatbot');
    const closeBtn = document.getElementById('chatbotClose');
    const form = document.getElementById('chatbotForm');
    const input = document.getElementById('chatbotInput');
    const messages = document.getElementById('chatbotMessages');

    if (!toggle || !panel || !closeBtn || !form || !input || !messages) return;

    const openChat = () => {
        panel.classList.add('open');
        input.focus();
        if (!messages.dataset.initialized) {
            addBotMessage(
                `Hi, I'm Nova, your AI assistant. I can answer questions about Arsh's skills, projects, experience, and education.`
            );
            messages.dataset.initialized = 'true';
        }
    };

    const closeChat = () => {
        panel.classList.remove('open');
    };

    toggle.addEventListener('click', () => {
        if (panel.classList.contains('open')) {
            closeChat();
        } else {
            openChat();
        }
    });

    closeBtn.addEventListener('click', closeChat);

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const question = input.value.trim();
        if (!question) return;
        addUserMessage(question);
        handleChatQuestion(question);
        input.value = '';
    });
}

function addUserMessage(text) {
    const messages = document.getElementById('chatbotMessages');
    const div = document.createElement('div');
    div.className = 'chatbot-message user';
    div.textContent = text;
    messages.appendChild(div);
    messages.scrollTop = messages.scrollHeight;
}

function addBotMessage(text) {
    const messages = document.getElementById('chatbotMessages');
    const div = document.createElement('div');
    div.className = 'chatbot-message bot';
    div.innerHTML = text;
    messages.appendChild(div);
    messages.scrollTop = messages.scrollHeight;
}

// Very simple FAQ-style logic using PORTFOLIO_DATA
function handleChatQuestion(rawQuestion) {
    const q = rawQuestion.toLowerCase();

    // Skills
    if (q.includes('skill') || q.includes('tech stack') || q.includes('technolog')) {
        const categories = PORTFOLIO_DATA.skills
            .map(cat => `<strong>${cat.category}:</strong> ${cat.items.join(', ')}`)
            .join('<br>');
        addBotMessage(`Here are Arsh's key skills:<br>${categories}`);
        return;
    }

    // Education
    if (q.includes('education') || q.includes('degree') || q.includes('study') || q.includes('school') || q.includes('college') || q.includes('university')) {
        const eduText = PORTFOLIO_DATA.education
            .map(
                e =>
                    `<strong>${e.degree}</strong> at ${e.school} (${e.date}, ${e.location})`
            )
            .join('<br>');
        addBotMessage(`Here is Arsh's education background:<br>${eduText}`);
        return;
    }

    // Experience / work / jobs
    if (q.includes('experience') || q.includes('work') || q.includes('job') || q.includes('intern') || q.includes('fellow')) {
        const expText = PORTFOLIO_DATA.experience
            .map(
                e =>
                    `<strong>${e.title}</strong> at ${e.company} (${e.date}, ${e.location})`
            )
            .join('<br><br>');
        addBotMessage(`Here is an overview of Arsh's experience:<br>${expText}`);
        return;
    }

    // Projects
    if (q.includes('project') || q.includes('portfolio')) {
        const projText = PORTFOLIO_DATA.projects
            .map(
                p =>
                    `<strong>${p.title}</strong> (${p.category}) — ${p.description}`
            )
            .join('<br><br>');
        addBotMessage(`Here are some of Arsh's projects:<br>${projText}`);
        return;
    }

    // Contact
    if (q.includes('contact') || q.includes('email') || q.includes('reach') || q.includes('get in touch')) {
        addBotMessage(
            `You can reach Arsh at <strong>${PORTFOLIO_DATA.personal.email}</strong> or on LinkedIn: <strong>${PORTFOLIO_DATA.personal.linkedin}</strong>.`
        );
        return;
    }

    // About / summary
    if (q.includes('who are you') || q.includes('who is arsh') || q.includes('about') || q.includes('summary') || q.includes('profile')) {
        addBotMessage(
            `<strong>${PORTFOLIO_DATA.personal.name}</strong> is ${PORTFOLIO_DATA.personal.summary}`
        );
        return;
    }

    // Fallback
    addBotMessage(
        `I might not understand that fully yet, but you can ask me about Arsh's skills, projects, education, or experience.`
    );
}

// ===== FOOTER =====
function initializeFooter() {
    const socialLinks = document.getElementById('socialLinks');
    if (socialLinks) {
        socialLinks.innerHTML = `
            <a href="${PORTFOLIO_DATA.personal.github}" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <span>GitHub</span>
            </a>
            <a href="${PORTFOLIO_DATA.personal.linkedin}" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <span>LinkedIn</span>
            </a>
            <a href="mailto:${PORTFOLIO_DATA.personal.email}" aria-label="Email">
                <span>Email</span>
            </a>
        `;
    }
}

// ===== ADMIN SYSTEM =====
function initializeAdmin() {
    const adminBtn = document.getElementById('adminBtn');
    const adminLoginModal = document.getElementById('adminLoginModal');
    const adminPanelModal = document.getElementById('adminPanelModal');
    const adminLoginForm = document.getElementById('adminLoginForm');
    const closeLoginModal = document.getElementById('closeLoginModal');
    const closeAdminPanel = document.getElementById('closeAdminPanel');
    
    // Admin button is always visible, but requires login
    adminBtn.addEventListener('click', () => {
        if (localStorage.getItem('adminLoggedIn') === 'true') {
            adminPanelModal.classList.add('show');
            loadAdminPanel();
        } else {
            adminLoginModal.classList.add('show');
        }
    });
    
    adminLoginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const password = document.getElementById('adminPassword').value;
        const hashedPassword = hashPassword(ADMIN_PASSWORD);
        const inputHash = hashPassword(password);
        
        if (inputHash === hashedPassword) {
            localStorage.setItem('adminLoggedIn', 'true');
            adminLoginModal.classList.remove('show');
            adminPanelModal.classList.add('show');
            loadAdminPanel();
            document.getElementById('adminPassword').value = '';
            showToast('Admin access granted!', 'success');
        } else {
            showToast('Incorrect password!', 'error');
            document.getElementById('adminPassword').value = '';
        }
    });
    
    closeLoginModal.addEventListener('click', () => {
        adminLoginModal.classList.remove('show');
    });
    
    closeAdminPanel.addEventListener('click', () => {
        adminPanelModal.classList.remove('show');
    });
    
    // Logout functionality
    const logoutBtn = document.getElementById('logoutBtn');
    logoutBtn.addEventListener('click', () => {
        if (confirm('Are you sure you want to logout?')) {
            localStorage.removeItem('adminLoggedIn');
            adminPanelModal.classList.remove('show');
            showToast('Logged out successfully', 'success');
        }
    });
    
    // Close modals when clicking outside
    [adminLoginModal, adminPanelModal].forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('show');
            }
        });
    });
    
    // Initialize admin tabs
    initializeAdminTabs();
    initializeProjectForm();
    initializeSkillForm();
    initializeExperienceForm();
    initializeEducationForm();
}

function initializeAdminTabs() {
    const tabs = document.querySelectorAll('.admin-tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const targetTab = tab.getAttribute('data-tab');
            
            // Remove active class from all tabs and contents
            document.querySelectorAll('.admin-tab').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.admin-tab-content').forEach(c => c.classList.remove('active'));
            
            // Add active class to clicked tab and corresponding content
            tab.classList.add('active');
            document.getElementById(`tab-${targetTab}`).classList.add('active');
        });
    });
}

function loadAdminPanel() {
    loadProjectsList();
    loadSkillsList();
    loadExperienceList();
    loadEducationList();
}

// ===== PROJECTS MANAGEMENT =====
function loadProjectsList() {
    const projectsList = document.getElementById('projectsList');
    projectsList.innerHTML = '';
    
    PORTFOLIO_DATA.projects.forEach((project, index) => {
        const card = document.createElement('div');
        card.className = 'admin-item-card';
        card.innerHTML = `
            <div class="admin-item-content">
                <h4>${project.title}</h4>
                <p><strong>Category:</strong> ${project.category}</p>
                <p><strong>Tags:</strong> ${project.tags.join(', ')}</p>
                <p>${project.description.substring(0, 100)}...</p>
            </div>
            <div class="admin-item-actions">
                <button class="admin-item-btn edit" onclick="editProject(${index})">Edit</button>
                <button class="admin-item-btn delete" onclick="deleteProject(${index})">Delete</button>
            </div>
        `;
        projectsList.appendChild(card);
    });
}

function initializeProjectForm() {
    const addProjectBtn = document.getElementById('addProjectBtn');
    const projectForm = document.getElementById('projectForm');
    const projectFormModal = document.getElementById('projectFormModal');
    const closeProjectForm = document.getElementById('closeProjectForm');
    const cancelProjectForm = document.getElementById('cancelProjectForm');
    
    addProjectBtn.addEventListener('click', () => {
        document.getElementById('projectFormTitle').textContent = 'Add Project';
        document.getElementById('projectIndex').value = '';
        projectForm.reset();
        projectFormModal.classList.add('show');
    });
    
    projectForm.addEventListener('submit', (e) => {
        e.preventDefault();
        saveProject();
    });
    
    closeProjectForm.addEventListener('click', () => {
        projectFormModal.classList.remove('show');
    });
    
    cancelProjectForm.addEventListener('click', () => {
        projectFormModal.classList.remove('show');
    });
}

function editProject(index) {
    const project = PORTFOLIO_DATA.projects[index];
    document.getElementById('projectFormTitle').textContent = 'Edit Project';
    document.getElementById('projectIndex').value = index;
    document.getElementById('projectTitle').value = project.title;
    document.getElementById('projectDescription').value = project.description;
    document.getElementById('projectTags').value = project.tags.join(', ');
    document.getElementById('projectCategory').value = project.category;
    document.getElementById('projectLinks').value = JSON.stringify(project.links || [], null, 2);
    document.getElementById('projectFormModal').classList.add('show');
}

function deleteProject(index) {
    if (confirm('Are you sure you want to delete this project?')) {
        PORTFOLIO_DATA.projects.splice(index, 1);
        savePortfolioData();
        loadProjectsList();
        renderProjects(PORTFOLIO_DATA.projects);
        showToast('Project deleted successfully!', 'success');
    }
}

function saveProject() {
    const index = document.getElementById('projectIndex').value;
    const title = document.getElementById('projectTitle').value;
    const description = document.getElementById('projectDescription').value;
    const tags = document.getElementById('projectTags').value.split(',').map(t => t.trim()).filter(t => t);
    const category = document.getElementById('projectCategory').value;
    let links = [];
    
    try {
        const linksInput = document.getElementById('projectLinks').value.trim();
        if (linksInput) {
            links = JSON.parse(linksInput);
        }
    } catch (e) {
        showToast('Invalid JSON format for links. Please check and try again.', 'error');
        return;
    }
    
    const project = { title, description, tags, category, links };
    
    if (index === '') {
        PORTFOLIO_DATA.projects.push(project);
        showToast('Project added successfully!', 'success');
    } else {
        PORTFOLIO_DATA.projects[index] = project;
        showToast('Project updated successfully!', 'success');
    }
    
    savePortfolioData();
    loadProjectsList();
    renderProjects(PORTFOLIO_DATA.projects);
    document.getElementById('projectFormModal').classList.remove('show');
    initializeProjects(); // Reinitialize to update filter chips
}

// ===== SKILLS MANAGEMENT =====
function loadSkillsList() {
    const skillsList = document.getElementById('skillsList');
    skillsList.innerHTML = '';
    
    PORTFOLIO_DATA.skills.forEach((skill, index) => {
        const card = document.createElement('div');
        card.className = 'admin-item-card';
        card.innerHTML = `
            <div class="admin-item-content">
                <h4>${skill.category}</h4>
                <p><strong>Skills:</strong> ${skill.items.join(', ')}</p>
            </div>
            <div class="admin-item-actions">
                <button class="admin-item-btn edit" onclick="editSkill(${index})">Edit</button>
                <button class="admin-item-btn delete" onclick="deleteSkill(${index})">Delete</button>
            </div>
        `;
        skillsList.appendChild(card);
    });
}

function initializeSkillForm() {
    const addSkillBtn = document.getElementById('addSkillBtn');
    const skillForm = document.getElementById('skillForm');
    const skillFormModal = document.getElementById('skillFormModal');
    const closeSkillForm = document.getElementById('closeSkillForm');
    const cancelSkillForm = document.getElementById('cancelSkillForm');
    
    addSkillBtn.addEventListener('click', () => {
        document.getElementById('skillFormTitle').textContent = 'Add Skill Category';
        document.getElementById('skillIndex').value = '';
        skillForm.reset();
        skillFormModal.classList.add('show');
    });
    
    skillForm.addEventListener('submit', (e) => {
        e.preventDefault();
        saveSkill();
    });
    
    closeSkillForm.addEventListener('click', () => {
        skillFormModal.classList.remove('show');
    });
    
    cancelSkillForm.addEventListener('click', () => {
        skillFormModal.classList.remove('show');
    });
}

function editSkill(index) {
    const skill = PORTFOLIO_DATA.skills[index];
    document.getElementById('skillFormTitle').textContent = 'Edit Skill Category';
    document.getElementById('skillIndex').value = index;
    document.getElementById('skillCategory').value = skill.category;
    document.getElementById('skillItems').value = skill.items.join('\n');
    document.getElementById('skillFormModal').classList.add('show');
}

function deleteSkill(index) {
    if (confirm('Are you sure you want to delete this skill category?')) {
        PORTFOLIO_DATA.skills.splice(index, 1);
        savePortfolioData();
        loadSkillsList();
        initializeSkills();
        showToast('Skill category deleted successfully!', 'success');
    }
}

function saveSkill() {
    const index = document.getElementById('skillIndex').value;
    const category = document.getElementById('skillCategory').value;
    const items = document.getElementById('skillItems').value.split('\n').map(i => i.trim()).filter(i => i);
    
    const skill = { category, items };
    
    if (index === '') {
        PORTFOLIO_DATA.skills.push(skill);
        showToast('Skill category added successfully!', 'success');
    } else {
        PORTFOLIO_DATA.skills[index] = skill;
        showToast('Skill category updated successfully!', 'success');
    }
    
    savePortfolioData();
    loadSkillsList();
    initializeSkills();
    document.getElementById('skillFormModal').classList.remove('show');
}

// ===== EXPERIENCE MANAGEMENT =====
function loadExperienceList() {
    const experienceList = document.getElementById('experienceList');
    experienceList.innerHTML = '';
    
    PORTFOLIO_DATA.experience.forEach((exp, index) => {
        const card = document.createElement('div');
        card.className = 'admin-item-card';
        card.innerHTML = `
            <div class="admin-item-content">
                <h4>${exp.title}</h4>
                <p><strong>Company:</strong> ${exp.company}</p>
                <p><strong>Location:</strong> ${exp.location}</p>
                <p><strong>Date:</strong> ${exp.date}</p>
                <p>${exp.description.substring(0, 100)}...</p>
            </div>
            <div class="admin-item-actions">
                <button class="admin-item-btn edit" onclick="editExperience(${index})">Edit</button>
                <button class="admin-item-btn delete" onclick="deleteExperience(${index})">Delete</button>
            </div>
        `;
        experienceList.appendChild(card);
    });
}

function initializeExperienceForm() {
    const addExperienceBtn = document.getElementById('addExperienceBtn');
    const experienceForm = document.getElementById('experienceForm');
    const experienceFormModal = document.getElementById('experienceFormModal');
    const closeExperienceForm = document.getElementById('closeExperienceForm');
    const cancelExperienceForm = document.getElementById('cancelExperienceForm');
    
    addExperienceBtn.addEventListener('click', () => {
        document.getElementById('experienceFormTitle').textContent = 'Add Experience';
        document.getElementById('experienceIndex').value = '';
        experienceForm.reset();
        experienceFormModal.classList.add('show');
    });
    
    experienceForm.addEventListener('submit', (e) => {
        e.preventDefault();
        saveExperience();
    });
    
    closeExperienceForm.addEventListener('click', () => {
        experienceFormModal.classList.remove('show');
    });
    
    cancelExperienceForm.addEventListener('click', () => {
        experienceFormModal.classList.remove('show');
    });
}

function editExperience(index) {
    const exp = PORTFOLIO_DATA.experience[index];
    document.getElementById('experienceFormTitle').textContent = 'Edit Experience';
    document.getElementById('experienceIndex').value = index;
    document.getElementById('expTitle').value = exp.title;
    document.getElementById('expCompany').value = exp.company;
    document.getElementById('expLocation').value = exp.location;
    document.getElementById('expDate').value = exp.date;
    document.getElementById('expDescription').value = exp.description;
    document.getElementById('expHighlights').value = (exp.highlights || []).join('\n');
    document.getElementById('experienceFormModal').classList.add('show');
}

function deleteExperience(index) {
    if (confirm('Are you sure you want to delete this experience?')) {
        PORTFOLIO_DATA.experience.splice(index, 1);
        savePortfolioData();
        loadExperienceList();
        initializeExperience();
        showToast('Experience deleted successfully!', 'success');
    }
}

function saveExperience() {
    const index = document.getElementById('experienceIndex').value;
    const title = document.getElementById('expTitle').value;
    const company = document.getElementById('expCompany').value;
    const location = document.getElementById('expLocation').value;
    const date = document.getElementById('expDate').value;
    const description = document.getElementById('expDescription').value;
    const highlights = document.getElementById('expHighlights').value.split('\n').map(h => h.trim()).filter(h => h);
    
    const experience = { title, company, location, date, description, highlights };
    
    if (index === '') {
        PORTFOLIO_DATA.experience.push(experience);
        showToast('Experience added successfully!', 'success');
    } else {
        PORTFOLIO_DATA.experience[index] = experience;
        showToast('Experience updated successfully!', 'success');
    }
    
    savePortfolioData();
    loadExperienceList();
    initializeExperience();
    document.getElementById('experienceFormModal').classList.remove('show');
}

// ===== EDUCATION MANAGEMENT =====
function loadEducationList() {
    const educationList = document.getElementById('educationList');
    educationList.innerHTML = '';
    
    PORTFOLIO_DATA.education.forEach((edu, index) => {
        const card = document.createElement('div');
        card.className = 'admin-item-card';
        card.innerHTML = `
            <div class="admin-item-content">
                <h4>${edu.degree}</h4>
                <p><strong>School:</strong> ${edu.school}</p>
                <p><strong>Location:</strong> ${edu.location}</p>
                <p><strong>Date:</strong> ${edu.date}</p>
                <p>${(edu.coursework || '').substring(0, 80)}...</p>
            </div>
            <div class="admin-item-actions">
                <button class="admin-item-btn edit" onclick="editEducation(${index})">Edit</button>
                <button class="admin-item-btn delete" onclick="deleteEducation(${index})">Delete</button>
            </div>
        `;
        educationList.appendChild(card);
    });
}

function initializeEducationForm() {
    const addEducationBtn = document.getElementById('addEducationBtn');
    const educationForm = document.getElementById('educationForm');
    const educationFormModal = document.getElementById('educationFormModal');
    const closeEducationForm = document.getElementById('closeEducationForm');
    const cancelEducationForm = document.getElementById('cancelEducationForm');
    
    addEducationBtn.addEventListener('click', () => {
        document.getElementById('educationFormTitle').textContent = 'Add Education';
        document.getElementById('educationIndex').value = '';
        educationForm.reset();
        educationFormModal.classList.add('show');
    });
    educationForm.addEventListener('submit', (e) => {
        e.preventDefault();
        saveEducation();
    });
    
    closeEducationForm.addEventListener('click', () => {
        educationFormModal.classList.remove('show');
    });
    
    cancelEducationForm.addEventListener('click', () => {
        educationFormModal.classList.remove('show');
    });
}

function editEducation(index) {
    const edu = PORTFOLIO_DATA.education[index];
    document.getElementById('educationFormTitle').textContent = 'Edit Education';
    document.getElementById('educationIndex').value = index;
    document.getElementById('eduDegree').value = edu.degree;
    document.getElementById('eduSchool').value = edu.school;
    document.getElementById('eduLocation').value = edu.location;
    document.getElementById('eduDate').value = edu.date;
    document.getElementById('eduCoursework').value = edu.coursework || '';
    document.getElementById('educationFormModal').classList.add('show');
}

function deleteEducation(index) {
    if (confirm('Are you sure you want to delete this education entry?')) {
        PORTFOLIO_DATA.education.splice(index, 1);
        savePortfolioData();
        loadEducationList();
        initializeEducation();
        showToast('Education deleted successfully!', 'success');
    }
}

function saveEducation() {
    const index = document.getElementById('educationIndex').value;
    const degree = document.getElementById('eduDegree').value;
    const school = document.getElementById('eduSchool').value;
    const location = document.getElementById('eduLocation').value;
    const date = document.getElementById('eduDate').value;
    const coursework = document.getElementById('eduCoursework').value.trim();
    
    const education = { degree, school, location, date, coursework };
    
    if (index === '') {
        PORTFOLIO_DATA.education.push(education);
        showToast('Education added successfully!', 'success');
    } else {
        PORTFOLIO_DATA.education[index] = education;
        showToast('Education updated successfully!', 'success');
    }
    
    savePortfolioData();
    loadEducationList();
    initializeEducation();
    document.getElementById('educationFormModal').classList.remove('show');
}

// ===== DATA PERSISTENCE =====
function savePortfolioData() {
    localStorage.setItem('portfolioData', JSON.stringify(PORTFOLIO_DATA));
}

function loadPortfolioData() {
    const saved = localStorage.getItem('portfolioData');
    if (saved) {
        try {
            PORTFOLIO_DATA = JSON.parse(saved);
            // Re-render all sections with loaded data
            initializeHero();
            initializeAbout();
            initializeProjects();
            initializeSkills();
            initializeExperience();
            initializeEducation();
            initializeResume();
        } catch (e) {
            console.error('Error loading saved data:', e);
        }
    }
}

// Make functions globally accessible for onclick handlers
window.editProject = editProject;
window.deleteProject = deleteProject;
window.editSkill = editSkill;
window.deleteSkill = deleteSkill;
window.editExperience = editExperience;
window.deleteExperience = deleteExperience;
window.editEducation = editEducation;
window.deleteEducation = deleteEducation;

// ===== UTILITY FUNCTIONS =====
function setCopyrightYear() {
    const yearElement = document.getElementById('currentYear');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

