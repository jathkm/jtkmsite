// Contact Form Validation
class ContactForm {
  constructor(formElement) {
    this.form = formElement;
    this.submitBtn = this.form.querySelector('button[type="submit"]');
    this.statusDiv = this.form.querySelector('.form-status');
    this.init();
  }
  
  init() {
    this.form.addEventListener('submit', this.handleSubmit.bind(this));
    
    // Validate on blur
    this.form.querySelectorAll('input, textarea').forEach(field => {
      field.addEventListener('blur', (e) => this.validateField(e.target));
      field.addEventListener('input', (e) => {
        if (e.target.classList.contains('error')) {
          this.validateField(e.target);
        }
      });
    });
  }
  
  validateField(field) {
    const value = field.value.trim();
    const errorSpan = field.nextElementSibling;
    
    // Clear previous errors
    if (errorSpan && errorSpan.classList.contains('error-message')) {
      errorSpan.textContent = '';
    }
    field.classList.remove('error', 'valid');
    
    // Required field check
    if (field.hasAttribute('required') && !value) {
      this.showError(field, 'This field is required');
      return false;
    }
    
    // Email validation
    if (field.type === 'email' && value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        this.showError(field, 'Please enter a valid email address');
        return false;
      }
    }
    
    // Message length check
    if (field.name === 'message' && value && value.length < 10) {
      this.showError(field, 'Message must be at least 10 characters');
      return false;
    }
    
    field.classList.add('valid');
    return true;
  }
  
  showError(field, message) {
    field.classList.add('error');
    const errorSpan = field.nextElementSibling;
    if (errorSpan && errorSpan.classList.contains('error-message')) {
      errorSpan.textContent = message;
    }
  }
  
  async handleSubmit(e) {
    e.preventDefault();
    
    // Validate all fields
    const fields = this.form.querySelectorAll('input:not([type="hidden"]), textarea');
    let isValid = true;
    
    fields.forEach(field => {
      if (!this.validateField(field)) {
        isValid = false;
      }
    });
    
    if (!isValid) return;
    
    // Submit form
    const formData = new FormData(this.form);
    
    try {
      this.submitBtn.disabled = true;
      this.submitBtn.textContent = 'Sending...';
      this.statusDiv.innerHTML = '';
      
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString()
      });
      
      if (response.ok) {
        this.statusDiv.innerHTML = '<p class="success">✓ Thank you! Your message has been sent.</p>';
        this.form.reset();
        fields.forEach(field => field.classList.remove('valid', 'error'));
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      this.statusDiv.innerHTML = '<p class="error">✗ Sorry, something went wrong. Please try again.</p>';
      console.error('Form error:', error);
    } finally {
      this.submitBtn.disabled = false;
      this.submitBtn.textContent = 'Send Message';
    }
  }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.contact-form');
  if (form) {
    new ContactForm(form);
  }
});
