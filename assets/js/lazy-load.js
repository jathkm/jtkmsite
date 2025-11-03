// Lazy Loading for Images
class LazyLoader {
  constructor() {
    this.images = document.querySelectorAll('img[data-src]');
    this.init();
  }
  
  init() {
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.loadImage(entry.target);
            observer.unobserve(entry.target);
          }
        });
      }, {
        rootMargin: '50px'
      });
      
      this.images.forEach(img => observer.observe(img));
    } else {
      // Fallback: load all images
      this.images.forEach(img => this.loadImage(img));
    }
  }
  
  loadImage(img) {
    const src = img.dataset.src;
    const srcset = img.dataset.srcset;
    
    if (!src) return;
    
    // Create new image to preload
    const tempImg = new Image();
    
    tempImg.onload = () => {
      if (srcset) img.srcset = srcset;
      img.src = src;
      img.classList.add('loaded');
      img.removeAttribute('data-src');
      img.removeAttribute('data-srcset');
    };
    
    tempImg.onerror = () => {
      console.error('Failed to load image:', src);
      img.classList.add('error');
    };
    
    tempImg.src = src;
  }
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  new LazyLoader();
});
