/* =====================================================
   MAIN PORTFOLIO JAVASCRIPT - INTERACTIONS & ANIMATIONS
   ===================================================== */

// ==================== INITIALIZATION ====================
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initNavigation();
    initTypingEffect();
    initScrollAnimations();
    initSkillsTabs();
    initSkillProgressBars();
    initProjectModals();
    initContactForm();
    initScrollToTop();
    initParallax();
    initMagneticButtons();
});

// ==================== THEME TOGGLE ====================
function initTheme() {
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;
    
    // Load saved theme from localStorage
    const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';
    body.setAttribute('data-theme', savedTheme);
    
    // Set toggle state based on saved theme
    if (savedTheme === 'light') {
        themeToggle.checked = true;
    }
    
    // Theme toggle event listener
    themeToggle.addEventListener('change', () => {
        const newTheme = themeToggle.checked ? 'light' : 'dark';
        body.setAttribute('data-theme', newTheme);
        localStorage.setItem('portfolio-theme', newTheme);
        
        // Add transition effect
        body.style.transition = 'background 0.6s, color 0.6s';
        setTimeout(() => {
            body.style.transition = '';
        }, 600);
    });
}

// ==================== NAVIGATION ====================
function initNavigation() {
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Mobile menu toggle
    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Close mobile menu on link click
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    // Active nav link based on scroll position
    const sections = document.querySelectorAll('section[id]');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
    
    // Smooth scroll for nav links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ==================== TYPING EFFECT ====================
function initTypingEffect() {
    const typingText = document.querySelector('.typing-text');
    const roles = [
        'Assistant Professor',
        'Tech Educator',
        'Software Developer',
        'Innovation Leader',
        'Problem Solver',
        'Mentor & Guide'
    ];
    
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    
    function type() {
        const currentRole = roles[roleIndex];
        
        if (isDeleting) {
            typingText.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50;
        } else {
            typingText.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 100;
        }
        
        if (!isDeleting && charIndex === currentRole.length) {
            isDeleting = true;
            typingSpeed = 2000; // Pause at end
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            typingSpeed = 500; // Pause before next word
        }
        
        setTimeout(type, typingSpeed);
    }
    
    type();
}

// ==================== SCROLL ANIMATIONS ====================
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('[data-aos]');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const delay = entry.target.getAttribute('data-aos-delay') || 0;
                
                setTimeout(() => {
                    entry.target.classList.add('aos-animate');
                }, delay);
                
                // Unobserve after animation
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    animatedElements.forEach(element => {
        observer.observe(element);
    });
}

// ==================== SKILLS TABS ====================
function initSkillsTabs() {
    const skillTabs = document.querySelectorAll('.skill-tab');
    const skillContents = document.querySelectorAll('.skills-content');
    
    skillTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const targetTab = tab.getAttribute('data-tab');
            
            // Remove active class from all tabs and contents
            skillTabs.forEach(t => t.classList.remove('active'));
            skillContents.forEach(c => c.classList.remove('active'));
            
            // Add active class to clicked tab and corresponding content
            tab.classList.add('active');
            document.getElementById(targetTab).classList.add('active');
            
            // Reinitialize progress bars for the active tab
            setTimeout(initSkillProgressBars, 100);
        });
    });
}

// ==================== SKILL PROGRESS BARS ====================
function initSkillProgressBars() {
    const skillCards = document.querySelectorAll('.skills-content.active .skill-card');
    
    const observerOptions = {
        threshold: 0.5
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target.querySelector('.skill-progress');
                const progress = progressBar.getAttribute('data-progress');
                
                setTimeout(() => {
                    progressBar.style.width = progress + '%';
                }, 200);
                
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    skillCards.forEach(card => {
        observer.observe(card);
    });
}

// ==================== PROJECT MODALS ====================
function initProjectModals() {
    // Project data
    const projectData = {
        project1: {
            title: 'ME Prefetching System',
            description: 'An advanced machine learning-based prefetching mechanism designed to optimize system performance by intelligently predicting and preloading data before it\'s needed. This system significantly reduces latency in data retrieval operations.',
            details: [
                'Implemented intelligent caching algorithms using Python and TensorFlow',
                'Reduced data retrieval latency by 40%',
                'Integrated with existing database systems',
                'Real-time prediction and adaptation capabilities'
            ],
            technologies: ['Python', 'Machine Learning', 'TensorFlow', 'Redis', 'PostgreSQL'],
            github: '#',
            demo: '#'
        },
        project2: {
            title: 'BE User Identification',
            description: 'An intelligent user identification system that uses behavioral analysis and pattern recognition to enhance security and provide personalized user experiences. The system analyzes user interactions, device patterns, and behavioral metrics.',
            details: [
                'Behavioral biometrics for enhanced security',
                'Real-time user verification and authentication',
                'Pattern recognition using AI/ML algorithms',
                'Privacy-preserving identification methods'
            ],
            technologies: ['Python', 'Deep Learning', 'OpenCV', 'Flask', 'MongoDB'],
            github: '#',
            demo: '#'
        },
        project3: {
            title: 'College Website',
            description: 'A modern, responsive college website featuring dynamic content management, student portal, faculty management, and administrative features. Built with focus on user experience and accessibility.',
            details: [
                'Responsive design for all devices',
                'Student and faculty portals',
                'Content management system',
                'Event management and notifications',
                'Integration with academic systems'
            ],
            technologies: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'MySQL'],
            github: '#',
            demo: '#'
        },
        project4: {
            title: 'Virtual Campus Tour',
            description: 'An immersive 360° virtual tour application showcasing college facilities with interactive hotspots, multimedia content, and navigation features. Provides prospective students with a comprehensive campus experience remotely.',
            details: [
                'Interactive 360° panoramic views',
                'Multimedia hotspots for detailed information',
                'Virtual reality support',
                'Mobile-friendly interface',
                'Tour customization and waypoints'
            ],
            technologies: ['Three.js', 'WebGL', 'JavaScript', 'HTML5', 'CSS3'],
            github: '#',
            demo: '#'
        }
    };
    
    // Make functions globally accessible
    window.openProjectModal = function(projectId) {
        const modal = document.getElementById('projectModal');
        const modalBody = document.getElementById('modalBody');
        const project = projectData[projectId];
        
        if (!project) return;
        
        // Build modal content
        let detailsList = '';
        project.details.forEach(detail => {
            detailsList += `<li>${detail}</li>`;
        });
        
        let techTags = '';
        project.technologies.forEach(tech => {
            techTags += `<span class="tag">${tech}</span>`;
        });
        
            modalBody.innerHTML = `
            <h2 style="font-size: 32px; margin-bottom: 20px; color: var(--text-primary);">${project.title}</h2>
            <p style="font-size: 18px; color: var(--text-secondary); line-height: 1.8; margin-bottom: 30px;">${project.description}</p>
            
            <h3 style="font-size: 24px; margin-bottom: 15px; color: var(--green-primary);">Key Features:</h3>
            <ul style="color: var(--text-secondary); line-height: 2; margin-bottom: 30px; padding-left: 20px;">
                ${detailsList}
            </ul>
            
            <h3 style="font-size: 24px; margin-bottom: 15px; color: var(--green-primary);">Technologies Used:</h3>
            <div style="display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 30px;">
                ${techTags}
            </div>
            
            <div style="display: flex; gap: 20px; flex-wrap: wrap;">
                <a href="${project.github}" class="btn btn-primary" style="text-decoration: none;">
                    <i class="fab fa-github"></i> View on GitHub
                </a>
                <a href="${project.demo}" class="btn btn-secondary" style="text-decoration: none;">
                    <i class="fas fa-external-link-alt"></i> Live Demo
                </a>
            </div>
        `;        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    };
    
    window.closeProjectModal = function() {
        const modal = document.getElementById('projectModal');
        modal.classList.remove('active');
        document.body.style.overflow = '';
    };
    
    // Close modal on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            window.closeProjectModal();
        }
    });
}

// ==================== CONTACT FORM ====================
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value
        };
        
        // Simulate form submission (replace with actual API call)
        console.log('Form Data:', formData);
        
        // Show success message
        alert('Thank you for your message! I will get back to you soon.');
        
        // Reset form
        contactForm.reset();
        
        // Remove focus from inputs to reset labels
        document.querySelectorAll('.form-group input, .form-group textarea').forEach(input => {
            input.blur();
        });
    });
    
    // Add ripple effect on submit button click
    const submitBtn = document.querySelector('.submit-btn');
    submitBtn.addEventListener('click', function(e) {
        const ripple = this.querySelector('.btn-ripple');
        ripple.style.animation = 'none';
        setTimeout(() => {
            ripple.style.animation = 'ripple 0.6s ease-out';
        }, 10);
    });
}

// ==================== SCROLL TO TOP ====================
function initScrollToTop() {
    const scrollTopBtn = document.getElementById('scrollTop');
    
    // Show/hide button based on scroll position
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    });
    
    // Scroll to top on click
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ==================== PARALLAX EFFECT ====================
function initParallax() {
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        
        // Parallax for hero particles
        const heroParticles = document.querySelectorAll('.hero-particle');
        heroParticles.forEach((particle, index) => {
            const speed = (index + 1) * 0.1;
            particle.style.transform = `translateY(${scrolled * speed}px)`;
        });
        
        // Parallax for floating elements
        const floatingElements = document.querySelectorAll('.floating-element');
        floatingElements.forEach((element, index) => {
            const speed = (index + 1) * 0.05;
            element.style.transform = `translateY(${scrolled * speed}px) rotate(${scrolled * 0.1}deg)`;
        });
    });
}

// ==================== MAGNETIC BUTTONS ====================
function initMagneticButtons() {
    const magneticButtons = document.querySelectorAll('.btn, .social-link, .project-btn');
    
    magneticButtons.forEach(button => {
        button.addEventListener('mousemove', (e) => {
            const rect = button.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            // Apply magnetic effect (limited movement)
            const moveX = x * 0.2;
            const moveY = y * 0.2;
            
            button.style.transform = `translate(${moveX}px, ${moveY}px)`;
        });
        
        button.addEventListener('mouseleave', () => {
            button.style.transform = 'translate(0, 0)';
        });
    });
}

// ==================== DOWNLOAD RESUME ====================
const downloadResumeBtn = document.getElementById('downloadResume');
if (downloadResumeBtn) {
    downloadResumeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Download the resume
        const link = document.createElement('a');
        link.href = 'assets/SURENDIRAN-Resume.pdf';
        link.download = 'Surendiran-V-Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
}

// ==================== INTERSECTION OBSERVER FOR STATS ====================
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumber = entry.target.querySelector('.stat-number');
            const finalNumber = statNumber.textContent;
            const numericValue = parseInt(finalNumber.replace(/\D/g, ''));
            
            animateValue(statNumber, 0, numericValue, 2000, finalNumber);
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-item').forEach(stat => {
    statsObserver.observe(stat);
});

// ==================== ANIMATE NUMBER FUNCTION ====================
function animateValue(element, start, end, duration, originalText) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const currentValue = Math.floor(progress * (end - start) + start);
        
        // Preserve the original format (e.g., "5+", "500+")
        element.textContent = originalText.replace(/\d+/, currentValue);
        
        if (progress < 1) {
            window.requestAnimationFrame(step);
        } else {
            element.textContent = originalText;
        }
    };
    window.requestAnimationFrame(step);
}

// ==================== CURSOR TRAIL EFFECT (Optional Enhancement) ====================
function initCursorTrail() {
    const canvas = document.createElement('canvas');
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '9999';
    document.body.appendChild(canvas);
    
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    let particles = [];
    
    class Particle {
        constructor(x, y) {
            this.x = x;
            this.y = y;
            this.size = Math.random() * 3 + 1;
            this.speedX = Math.random() * 2 - 1;
            this.speedY = Math.random() * 2 - 1;
            this.life = 100;
        }
        
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            this.life -= 2;
            if (this.size > 0.1) this.size -= 0.05;
        }
        
        draw() {
            ctx.fillStyle = `rgba(39, 209, 102, ${this.life / 100})`;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }
    
    window.addEventListener('mousemove', (e) => {
        for (let i = 0; i < 2; i++) {
            particles.push(new Particle(e.clientX, e.clientY));
        }
    });
    
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach((particle, index) => {
            particle.update();
            particle.draw();
            
            if (particle.life <= 0) {
                particles.splice(index, 1);
            }
        });
        
        requestAnimationFrame(animate);
    }
    
    animate();
    
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}

// Uncomment to enable cursor trail effect
// initCursorTrail();

// ==================== PERFORMANCE OPTIMIZATION ====================
// Debounce function for scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Optimize scroll listeners with debounce
const optimizedScrollHandler = debounce(() => {
    // Any additional scroll-based operations
}, 10);

window.addEventListener('scroll', optimizedScrollHandler);

// ==================== CONSOLE MESSAGE ====================
console.log('%c🚀 Welcome to Surendiran V\'s Portfolio! 🚀', 'color: #27D166; font-size: 20px; font-weight: bold;');
console.log('%cBuilt with ❤ using HTML, CSS, and JavaScript', 'color: #0f2744; font-size: 14px;');
console.log('%cInterested in the code? Let\'s connect!', 'color: #27D166; font-size: 14px;');
