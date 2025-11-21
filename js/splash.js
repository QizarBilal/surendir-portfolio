/* =====================================================
   SPLASH PAGE JAVASCRIPT - LOADING & ANIMATION LOGIC
   ===================================================== */

// Role cycling array
const roles = ['Educator', 'Developer', 'Innovator', 'Engineer', 'Mentor'];
let currentRoleIndex = 0;

// DOM Elements
const loadingBar = document.getElementById('loadingBar');
const loadingPercent = document.getElementById('loadingPercent');
const roleText = document.getElementById('roleText');
const loadingGlow = document.querySelector('.loading-glow');

// Optional audio element
// const whooshSound = document.getElementById('whooshSound');

// Loading animation variables
let progress = 0;
const totalDuration = 5000; // 5 seconds
const updateInterval = 50; // Update every 50ms
const incrementAmount = (100 / totalDuration) * updateInterval;

// Initialize
window.addEventListener('DOMContentLoaded', () => {
    // Start loading animation
    startLoadingAnimation();
    
    // Start role cycling
    startRoleCycling();
    
    // Optional: Play whoosh sound
    // if (whooshSound) {
    //     whooshSound.play().catch(err => console.log('Audio play failed:', err));
    // }
});

/**
 * Loading bar animation - progresses from 0% to 100% in exactly 5 seconds
 */
function startLoadingAnimation() {
    const loadingInterval = setInterval(() => {
        progress += incrementAmount;
        
        // Cap at 100%
        if (progress >= 100) {
            progress = 100;
            clearInterval(loadingInterval);
            
            // Redirect to main portfolio after reaching 100%
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 300);
        }
        
        // Update loading bar width and percentage display
        loadingBar.style.width = progress + '%';
        loadingGlow.style.width = progress + '%';
        loadingPercent.textContent = Math.floor(progress);
        
    }, updateInterval);
}

/**
 * Role text cycling animation - switches between roles every 3 seconds
 */
function startRoleCycling() {
    setInterval(() => {
        // Fade out current role
        roleText.style.opacity = '0';
        
        setTimeout(() => {
            // Change to next role
            currentRoleIndex = (currentRoleIndex + 1) % roles.length;
            roleText.textContent = roles[currentRoleIndex];
            
            // Fade in new role
            roleText.style.opacity = '1';
        }, 500);
        
    }, 3000);
}

/**
 * Particle animation enhancement - add dynamic movement to particles
 */
const particles = document.querySelectorAll('.particle');
particles.forEach((particle, index) => {
    // Add random movement patterns
    const randomX = Math.random() * 100 - 50;
    const randomY = Math.random() * 100 - 50;
    const randomDelay = Math.random() * 5;
    
    particle.style.setProperty('--random-x', randomX + 'px');
    particle.style.setProperty('--random-y', randomY + 'px');
    particle.style.animationDelay = randomDelay + 's';
});

/**
 * Prevent accidental navigation away from splash screen
 */
window.addEventListener('beforeunload', (e) => {
    if (progress < 100) {
        e.preventDefault();
        e.returnValue = '';
    }
});

/**
 * Add keyboard accessibility - press Enter or Space to skip
 */
document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
        if (progress > 50) { // Only allow skip after 50%
            window.location.href = 'index.html';
        }
    }
});
