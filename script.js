/**
 * JTKM.ch - Main JavaScript
 * Competition-Grade Animations & Interactions
 */

// ============================================================================
// GSAP SETUP
// ============================================================================

gsap.registerPlugin(ScrollTrigger);

// Respect reduced motion preference
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Default animation settings
const defaultDuration = prefersReducedMotion ? 0.01 : 0.7;
const defaultEase = 'power2.out';


// ============================================================================
// HERO ANIMATIONS - Page Load Sequence
// ============================================================================

function initHeroAnimations() {
  const timeline = gsap.timeline({ defaults: { ease: defaultEase } });
  
  // SVG Logo Path Drawing + Scale
  timeline.to('.hero-logo', {
    opacity: 1,
    duration: 0.6
  })
  .to('.hero-logo-path', {
    strokeDashoffset: 0,
    duration: 1.8,
    ease: 'power2.out'
  }, 0)
  .to('.hero-logo', {
    scale: 1,
    duration: 1.8,
    ease: 'power2.out'
  }, 0);
  
  // H1 Word Stagger
  const h1 = document.querySelector('.hero-h1');
  if (h1) {
    const words = h1.textContent.split(' ');
    h1.innerHTML = words.map(word => `<span class="word" style="display: inline-block; opacity: 0;">${word}</span>`).join(' ');
    
    timeline.to('.hero-h1 .word', {
      opacity: 1,
      y: 0,
      duration: prefersReducedMotion ? 0.01 : 0.7,
      stagger: prefersReducedMotion ? 0 : 0.1,
      ease: defaultEase
    }, '-=0.9'); // Start when logo is 50% complete
  }
  
  // H2 Fade + Slide
  timeline.to('.hero-h2', {
    opacity: 1,
    y: 0,
    duration: prefersReducedMotion ? 0.01 : 0.8
  }, '-=0.4');
  
  // Body Copy Fade
  timeline.to('.hero-body', {
    opacity: 1,
    duration: prefersReducedMotion ? 0.01 : 0.7
  }, '-=0.5');
  
  // CTAs Fade + Scale
  timeline.to('.hero-ctas', {
    opacity: 1,
    scale: 1,
    duration: prefersReducedMotion ? 0.01 : 0.6
  }, '-=0.3');
  
  // Scroll Indicator
  timeline.to('.scroll-indicator', {
    opacity: 1,
    duration: prefersReducedMotion ? 0.01 : 0.5
  }, '-=0.2');
}


// ============================================================================
// SCROLL-TRIGGERED ANIMATIONS
// ============================================================================

function initScrollAnimations() {
  // Mission Section
  gsap.from('.section-mission .section-h2', {
    scrollTrigger: {
      trigger: '.section-mission',
      start: 'top 75%'
    },
    opacity: 0,
    y: 40,
    duration: defaultDuration,
    ease: defaultEase
  });
  
  gsap.from('.section-mission .section-body', {
    scrollTrigger: {
      trigger: '.section-mission',
      start: 'top 75%'
    },
    opacity: 0,
    y: 30,
    duration: defaultDuration,
    delay: 0.2,
    ease: defaultEase
  });
  
  // Ecosystem Cards Stagger
  gsap.from('.card-ecosystem', {
    scrollTrigger: {
      trigger: '.section-ecosystem',
      start: 'top 80%'
    },
    opacity: 0,
    y: 60,
    scale: 0.95,
    duration: prefersReducedMotion ? 0.01 : 0.8,
    stagger: prefersReducedMotion ? 0 : 0.2,
    ease: defaultEase
  });
  
  // Projects Section
  gsap.from('.section-projects .section-h2', {
    scrollTrigger: {
      trigger: '.section-projects',
      start: 'top 75%'
    },
    opacity: 0,
    y: 40,
    duration: defaultDuration,
    ease: defaultEase
  });
  
  gsap.from('.section-projects .section-body', {
    scrollTrigger: {
      trigger: '.section-projects',
      start: 'top 75%'
    },
    opacity: 0,
    duration: defaultDuration,
    delay: 0.2,
    ease: defaultEase
  });
  
  gsap.from('.content-media', {
    scrollTrigger: {
      trigger: '.section-projects',
      start: 'top 75%'
    },
    opacity: 0,
    scale: 0.95,
    duration: prefersReducedMotion ? 0.01 : 0.8,
    delay: 0.4,
    ease: defaultEase
  });
  
  // Personal Section
  gsap.from('.section-personal .section-h2', {
    scrollTrigger: {
      trigger: '.section-personal',
      start: 'top 70%'
    },
    opacity: 0,
    y: 40,
    duration: defaultDuration,
    ease: defaultEase
  });
  
  gsap.from('.section-personal .section-body', {
    scrollTrigger: {
      trigger: '.section-personal',
      start: 'top 70%'
    },
    opacity: 0,
    duration: defaultDuration,
    delay: 0.2,
    ease: defaultEase
  });
  
  gsap.from('.photo-item', {
    scrollTrigger: {
      trigger: '.photo-grid',
      start: 'top 75%'
    },
    opacity: 0,
    scale: 0.9,
    duration: prefersReducedMotion ? 0.01 : 0.6,
    stagger: prefersReducedMotion ? 0 : 0.1,
    delay: 0.3,
    ease: defaultEase
  });
  
  // Consulting Section
  gsap.from('.section-consulting .section-h2', {
    scrollTrigger: {
      trigger: '.section-consulting',
      start: 'top 75%'
    },
    opacity: 0,
    y: 40,
    duration: defaultDuration,
    ease: defaultEase
  });
  
  gsap.from('.section-consulting .section-body', {
    scrollTrigger: {
      trigger: '.section-consulting',
      start: 'top 75%'
    },
    opacity: 0,
    duration: defaultDuration,
    delay: 0.2,
    ease: defaultEase
  });
  
  gsap.from('.section-ctas-dual .btn', {
    scrollTrigger: {
      trigger: '.section-consulting',
      start: 'top 75%'
    },
    opacity: 0,
    scale: 0.95,
    duration: prefersReducedMotion ? 0.01 : 0.6,
    stagger: prefersReducedMotion ? 0 : 0.1,
    delay: 0.4,
    ease: defaultEase
  });
  
  // Support Section
  gsap.from('.section-support .section-h2', {
    scrollTrigger: {
      trigger: '.section-support',
      start: 'top 70%'
    },
    opacity: 0,
    y: 50,
    duration: prefersReducedMotion ? 0.01 : 0.9,
    ease: defaultEase
  });
  
  gsap.from('.section-support .section-body', {
    scrollTrigger: {
      trigger: '.section-support',
      start: 'top 70%'
    },
    opacity: 0,
    duration: prefersReducedMotion ? 0.01 : 0.8,
    delay: 0.3,
    ease: defaultEase
  });
  
  gsap.from('.btn-support', {
    scrollTrigger: {
      trigger: '.section-support',
      start: 'top 70%'
    },
    opacity: 0,
    scale: 0.9,
    duration: prefersReducedMotion ? 0.01 : 0.6,
    delay: 0.5,
    ease: 'back.out(1.7)'
  });
  
  // Journal Section
  gsap.from('.section-journal .section-h2', {
    scrollTrigger: {
      trigger: '.section-journal',
      start: 'top 80%'
    },
    opacity: 0,
    y: 40,
    duration: defaultDuration,
    ease: defaultEase
  });
  
  gsap.from('.card-journal', {
    scrollTrigger: {
      trigger: '.section-journal',
      start: 'top 80%'
    },
    opacity: 0,
    y: 50,
    duration: defaultDuration,
    stagger: prefersReducedMotion ? 0 : 0.15,
    delay: 0.2,
    ease: defaultEase
  });
  
  // Contact Section
  gsap.from('.section-contact .section-h2', {
    scrollTrigger: {
      trigger: '.section-contact',
      start: 'top 75%'
    },
    opacity: 0,
    y: 40,
    duration: defaultDuration,
    ease: defaultEase
  });
  
  gsap.from('.section-contact .section-body', {
    scrollTrigger: {
      trigger: '.section-contact',
      start: 'top 75%'
    },
    opacity: 0,
    duration: defaultDuration,
    delay: 0.2,
    ease: defaultEase
  });
  
  gsap.from('.form-group', {
    scrollTrigger: {
      trigger: '.contact-form',
      start: 'top 75%'
    },
    opacity: 0,
    y: 30,
    duration: prefersReducedMotion ? 0.01 : 0.6,
    stagger: prefersReducedMotion ? 0 : 0.08,
    delay: 0.2,
    ease: defaultEase
  });
  
  // Footer
  gsap.from('.footer-quote', {
    scrollTrigger: {
      trigger: '.footer',
      start: 'top 50%'
    },
    opacity: 0,
    scale: 0.98,
    duration: prefersReducedMotion ? 0.01 : 0.8,
    ease: defaultEase
  });
  
  gsap.from('.footer-bottom', {
    scrollTrigger: {
      trigger: '.footer',
      start: 'top 50%'
    },
    opacity: 0,
    duration: prefersReducedMotion ? 0.01 : 0.5,
    delay: 0.3,
    ease: defaultEase
  });
}


// ============================================================================
// NAVIGATION
// ============================================================================

function initNavigation() {
  const nav = document.querySelector('.nav');
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');
  
  let lastScrollY = window.scrollY;
  let ticking = false;
  
  // Hide/show nav on scroll
  function updateNav() {
    const currentScrollY = window.scrollY;
    
    if (currentScrollY > 100) {
      if (currentScrollY > lastScrollY) {
        nav.classList.add('nav-hidden');
      } else {
        nav.classList.remove('nav-hidden');
      }
    } else {
      nav.classList.remove('nav-hidden');
    }
    
    lastScrollY = currentScrollY;
    ticking = false;
  }
  
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(updateNav);
      ticking = true;
    }
  });
  
  // Mobile menu toggle
  if (navToggle) {
    navToggle.addEventListener('click', () => {
      const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', !isExpanded);
      navMenu.classList.toggle('nav-menu-open');
    });
  }
  
  // Close mobile menu on link click
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 767) {
        navToggle.setAttribute('aria-expanded', 'false');
        navMenu.classList.remove('nav-menu-open');
      }
    });
  });
  
  // Smooth scroll with offset
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          const offset = 80; // Nav height
          const targetPosition = target.offsetTop - offset;
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      }
    });
  });
}


// ============================================================================
// CONTACT FORM
// ============================================================================

function initContactForm() {
  const form = document.getElementById('contact-form');
  const messageField = document.getElementById('message');
  const charCounter = document.getElementById('char-counter');
  const submitButton = form.querySelector('.btn-submit');
  const successMessage = document.getElementById('form-success');
  const errorMessage = document.getElementById('form-error');
  
  // Character counter
  if (messageField && charCounter) {
    messageField.addEventListener('input', () => {
      charCounter.textContent = messageField.value.length;
    });
  }
  
  // Form validation
  function validateForm() {
    let isValid = true;
    const errors = [];
    
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();
    
    // Clear previous errors
    form.querySelectorAll('.form-error').forEach(el => el.textContent = '');
    form.querySelectorAll('.form-input').forEach(el => el.style.borderColor = '');
    
    // Name validation
    if (!name) {
      errors.push({ field: 'name', message: 'Name is required' });
      isValid = false;
    }
    
    // Email validation
    if (!email) {
      errors.push({ field: 'email', message: 'Email is required' });
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.push({ field: 'email', message: 'Please enter a valid email' });
      isValid = false;
    }
    
    // Message validation
    if (!message) {
      errors.push({ field: 'message', message: 'Message is required' });
      isValid = false;
    } else if (message.length < 10) {
      errors.push({ field: 'message', message: 'Message must be at least 10 characters' });
      isValid = false;
    }
    
    // Display errors
    errors.forEach(error => {
      const field = form[error.field];
      const errorEl = field.parentElement.querySelector('.form-error');
      if (errorEl) {
        errorEl.textContent = error.message;
        field.style.borderColor = 'var(--color-error)';
      }
    });
    
    return isValid;
  }
  
  // Form submission
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      // Shake animation on error
      gsap.to(form, {
        x: [0, -10, 10, -10, 10, -5, 5, 0],
        duration: 0.5,
        ease: 'power2.inOut'
      });
      return;
    }
    
    // Disable button and show loading
    submitButton.disabled = true;
    submitButton.classList.add('is-loading');
    
    // Collect form data
    const formData = {
      name: form.name.value.trim(),
      email: form.email.value.trim(),
      organization: form.organization.value.trim(),
      message: form.message.value.trim(),
      timestamp: new Date().toISOString()
    };
    
    try {
      // Simulate API call (replace with actual endpoint)
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // In production, send to your backend:
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData)
      // });
      // if (!response.ok) throw new Error('Failed to send message');
      
      // Success state
      submitButton.classList.remove('is-loading');
      submitButton.classList.add('is-success');
      
      setTimeout(() => {
        // Hide form and show success message
        gsap.to(form, {
          opacity: 0,
          y: -20,
          duration: 0.5,
          onComplete: () => {
            form.hidden = true;
            successMessage.hidden = false;
            gsap.from(successMessage, {
              opacity: 0,
              y: 20,
              duration: 0.6,
              ease: 'power2.out'
            });
          }
        });
      }, 1000);
      
      // Track with analytics
      if (window.plausible) {
        window.plausible('Form Submit - Contact');
      }
      
    } catch (error) {
      console.error('Form submission error:', error);
      
      // Error state
      submitButton.classList.remove('is-loading');
      submitButton.disabled = false;
      
      errorMessage.hidden = false;
      gsap.from(errorMessage, {
        opacity: 0,
        scale: 0.95,
        duration: 0.3
      });
      
      setTimeout(() => {
        errorMessage.hidden = true;
      }, 5000);
    }
  });
}


// ============================================================================
// ANALYTICS EVENT TRACKING
// ============================================================================

function initAnalytics() {
  // Track CTA clicks
  document.querySelectorAll('[data-goal]').forEach(element => {
    element.addEventListener('click', () => {
      const goal = element.getAttribute('data-goal');
      if (window.plausible) {
        window.plausible(goal);
      }
    });
  });
  
  // Track external links
  document.querySelectorAll('a[target="_blank"]').forEach(link => {
    link.addEventListener('click', () => {
      const href = link.getAttribute('href');
      if (window.plausible) {
        window.plausible('External Link Click', { props: { url: href } });
      }
    });
  });
}


// ============================================================================
// ACCESSIBILITY
// ============================================================================

function initAccessibility() {
  // Skip to main content
  const skipLink = document.createElement('a');
  skipLink.href = '#main-content';
  skipLink.textContent = 'Skip to main content';
  skipLink.className = 'skip-link sr-only';
  skipLink.style.cssText = 'position: absolute; left: -9999px; z-index: 999;';
  skipLink.addEventListener('focus', () => {
    skipLink.style.left = '10px';
    skipLink.style.top = '10px';
  });
  skipLink.addEventListener('blur', () => {
    skipLink.style.left = '-9999px';
  });
  document.body.insertBefore(skipLink, document.body.firstChild);
  
  // Keyboard navigation for cards
  document.querySelectorAll('.card').forEach(card => {
    if (!card.querySelector('a, button')) {
      card.setAttribute('tabindex', '0');
    }
  });
}


// ============================================================================
// LAZY LOADING IMAGES
// ============================================================================

function initLazyLoading() {
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
          }
          observer.unobserve(img);
        }
      });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
      imageObserver.observe(img);
    });
  }
}


// ============================================================================
// INITIALIZE EVERYTHING
// ============================================================================

document.addEventListener('DOMContentLoaded', () => {
  initHeroAnimations();
  initScrollAnimations();
  initNavigation();
  initContactForm();
  initAnalytics();
  initAccessibility();
  initLazyLoading();
  
  console.log('🚀 JTKM.ch loaded successfully');
});


// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

// Smooth scroll to element
function scrollToElement(element, offset = 80) {
  const targetPosition = element.offsetTop - offset;
  window.scrollTo({
    top: targetPosition,
    behavior: 'smooth'
  });
}

// Debounce function for performance
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

// Export utilities
window.JTKM = {
  scrollToElement,
  debounce
};
