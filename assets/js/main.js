/**
 * JTKM.ch - Main JavaScript
 * Animations, scroll effects, and interactions
 */

// ============================================
// INTERSECTION OBSERVER - Scroll Animations
// ============================================

const observerOptions = {
  threshold: 0.2,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

// Observe all animated elements
document.addEventListener('DOMContentLoaded', () => {
  // Ecosystem cards
  const cards = document.querySelectorAll('.ecosystem-card');
  cards.forEach(card => observer.observe(card));
  
  // Mission section
  const missionContainer = document.querySelector('.mission-container');
  if (missionContainer) observer.observe(missionContainer);
  
  // Projects section
  const projectsContent = document.querySelector('.projects-content');
  const projectsMedia = document.querySelector('.projects-media');
  if (projectsContent) observer.observe(projectsContent);
  if (projectsMedia) observer.observe(projectsMedia);
  
  // Personal section
  const personalContent = document.querySelector('.personal-content');
  const personalGrid = document.querySelector('.personal-grid');
  if (personalContent) observer.observe(personalContent);
  if (personalGrid) observer.observe(personalGrid);
  
  // Personal section (new - about Jason)
  const personalContainer = document.querySelector('.personal-container');
  if (personalContainer) observer.observe(personalContainer);
  
  // Consulting section
  const consultingContainer = document.querySelector('.consulting-container');
  if (consultingContainer) observer.observe(consultingContainer);
  
  // Support section
  const supportContainer = document.querySelector('.support-container');
  if (supportContainer) observer.observe(supportContainer);
  
  // Journal cards
  const journalCards = document.querySelectorAll('.journal-card');
  journalCards.forEach(card => observer.observe(card));
});

// ============================================
// HERO CONTENT FADE - Prevent text interference
// ============================================

const heroContent = document.querySelector('.hero-content');
const heroSection = document.querySelector('.hero');

if (heroContent && heroSection) {
  window.addEventListener('scroll', () => {
    const heroHeight = heroSection.offsetHeight;
    const scrolled = window.pageYOffset;
    const fadeStart = heroHeight * 0.5; // Start fading at 50% of hero height
    const fadeEnd = heroHeight * 0.8; // Fully faded at 80% of hero height
    
    if (scrolled <= fadeStart) {
      heroContent.style.opacity = '1';
    } else if (scrolled >= fadeEnd) {
      heroContent.style.opacity = '0';
    } else {
      const fadeProgress = (scrolled - fadeStart) / (fadeEnd - fadeStart);
      heroContent.style.opacity = (1 - fadeProgress).toString();
    }
  });
}

// ============================================
// NAVIGATION - Always Visible with Shadow on Scroll
// ============================================

const nav = document.getElementById('mainNav');

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  
  // Add shadow when scrolled (keeps nav visible with depth effect)
  if (currentScroll > 50) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
  
  // Nav stays fixed at top always - no hide/show behavior
});

// ============================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    
    if (target) {
      const navHeight = nav.offsetHeight;
      const targetPosition = target.offsetTop - navHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// ============================================
// LOGO ANIMATION - Pulse Effect
// ============================================

const heroLogo = document.getElementById('heroLogo');

if (heroLogo) {
  // Add subtle pulse animation after page load
  window.addEventListener('load', () => {
    setTimeout(() => {
      heroLogo.style.animation = 'pulse 4s ease-in-out infinite';
    }, 2000);
  });
}

// Add pulse keyframes dynamically
const style = document.createElement('style');
style.textContent = `
  @keyframes pulse {
    0%, 100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.03);
    }
  }
`;
document.head.appendChild(style);

// ============================================
// PARALLAX EFFECT - Hero Background
// ============================================

const hero = document.querySelector('.hero');

window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const parallaxSpeed = 0.5;
  
  if (hero && scrolled < window.innerHeight) {
    hero.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
  }
});

// ============================================
// PERFORMANCE - Reduced Motion Support
// ============================================

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

if (prefersReducedMotion.matches) {
  // Disable smooth scroll
  document.documentElement.style.scrollBehavior = 'auto';
  
  // Disable parallax
  window.removeEventListener('scroll', () => {});
}

// ============================================
// ANALYTICS PLACEHOLDER
// (Add Plausible or Google Analytics here later)
// ============================================

// Example: 
// window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) };

console.log('JTKM.ch loaded successfully ✨');

// ============================================
// MOBILE NAVIGATION - Phase 0
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  const navOverlay = document.querySelector('.nav-mobile-overlay');
  const body = document.body;
  
  if (!navToggle || !navLinks || !navOverlay) return;
  
  // Toggle mobile menu
  const toggleMenu = () => {
    const isOpen = navLinks.classList.contains('active');
    
    if (isOpen) {
      // Close menu
      navLinks.classList.remove('active');
      navToggle.classList.remove('active');
      navOverlay.classList.remove('active');
      body.classList.remove('nav-open');
      navToggle.setAttribute('aria-expanded', 'false');
    } else {
      // Open menu
      navLinks.classList.add('active');
      navToggle.classList.add('active');
      navOverlay.classList.add('active');
      body.classList.add('nav-open');
      navToggle.setAttribute('aria-expanded', 'true');
    }
  };
  
  // Click hamburger button
  navToggle.addEventListener('click', toggleMenu);
  
  // Click overlay to close
  navOverlay.addEventListener('click', toggleMenu);
  
  // Click nav link to close menu
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth < 768) {
        toggleMenu();
      }
    });
  });
  
  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navLinks.classList.contains('active')) {
      toggleMenu();
    }
  });
  
  // Close menu on window resize to desktop
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 768 && navLinks.classList.contains('active')) {
      navLinks.classList.remove('active');
      navToggle.classList.remove('active');
      navOverlay.classList.remove('active');
      body.classList.remove('nav-open');
      navToggle.setAttribute('aria-expanded', 'false');
    }
  });
});

console.log('Mobile navigation initialized ✓');
