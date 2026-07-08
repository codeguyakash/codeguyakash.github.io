class SiteFooter extends HTMLElement {
  constructor() {
    super();
    this.handleScroll = this.handleScroll.bind(this);
  }

  connectedCallback() {
    this.innerHTML = `
      <footer class="site-footer">
        <div class="site-footer-inner">
          <div class="footer-top">
            <div class="footer-links-row">
              <a href="/extension.html">Extensions</a>
              <a href="/app.html">Apps</a>
              <a href="/terms.html">Terms</a>
              <a href="/privacy.html">Privacy</a>
              <a href="/refund_policy.html">Refund</a>
              <a href="/shipping_policy.html">Shipping</a>
              <a href="/contact.html">Contact</a>
            </div>
            <div class="footer-social-row">
              <a href="https://github.com/codeguyakash" target="_blank" rel="noopener" aria-label="GitHub"><i class="fa-brands fa-github"></i></a>
              <a href="https://linkedin.com/in/codeguyakash" target="_blank" rel="noopener" aria-label="LinkedIn"><i class="fa-brands fa-linkedin"></i></a>
            </div>
          </div>
          
          <div class="footer-bottom">
            <div class="footer-branding">CODEGUYAKASH</div>
            <div class="footer-copyright">
              <span>&copy; ${new Date().getFullYear()} CODEGUYAKASH. All rights reserved.</span>
            </div>
          </div>
        </div>
      </footer>
    `;

    this.branding = this.querySelector('.footer-branding');
    window.addEventListener('scroll', this.handleScroll);
    // Initial call to set position
    this.handleScroll();
  }

  disconnectedCallback() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    if (!this.branding) return;
    const rect = this.getBoundingClientRect();
    
    // Only apply parallax when footer is in the viewport
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      // Calculate how far into the footer we have scrolled
      const scrolledIntoView = window.innerHeight - rect.top;
      
      // Move the text down slightly as we scroll down to create parallax
      // 0.2 means it moves 20% of the scroll speed
      const offset = scrolledIntoView * 0.2;
      
      this.branding.style.transform = `translateY(${offset}px)`;
    }
  }
}

customElements.define('site-footer', SiteFooter);
