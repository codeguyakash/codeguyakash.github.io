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
            <div class="footer-circle-wrapper">
              <span class="footer-circle-center-letter">A</span>
              <svg class="footer-text-circle" viewBox="0 0 200 200">
                <path id="circlePathFooter" d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0" fill="transparent" />
                <text>
                  <textPath href="#circlePathFooter" startOffset="0%" fill="currentColor" textLength="471" lengthAdjust="spacing">
                    CODEGUYAKASH • CODEGUYAKASH • CODEGUYAKASH • 
                  </textPath>
                </text>
              </svg>
            </div>
            <div class="footer-links-row">
              <a href="/extension.html">Extensions</a>
              <a href="/app.html">Apps</a>
              <a href="/terms.html">Terms</a>
              <a href="/privacy.html">Privacy</a>
              <a href="/refund_policy.html">Refund</a>
              <a href="/shipping_policy.html">Shipping</a>
              <a href="/contact.html">Contact</a>
            </div>
          </div>
          
          <div class="footer-bottom">
          <div class="footer-left-sidebar">
            <div class="footer-copyright">
              <span>&copy; ${new Date().getFullYear()} CODEGUYAKASH. All rights reserved.</span>
            </div>
            <div class="footer-social-row">
              <a href="https://github.com/codeguyakash" target="_blank" rel="noopener" aria-label="GitHub"><i class="fa-brands fa-github"></i></a>
              <a href="https://twitter.com/codeguyakash" target="_blank" rel="noopener" aria-label="Twitter"><i class="fa-brands fa-twitter"></i></a>
              <a href="https://www.linkedin.com/in/codeguyakash/" target="_blank" rel="noopener" aria-label="LinkedIn"><i class="fa-brands fa-linkedin"></i></a>
              <a href="mailto:to@codeguyakash.in" aria-label="Email"><i class="fa-solid fa-envelope"></i></a>
              <a href="https://codeguyakash.in" target="_blank" rel="noopener" aria-label="Portfolio"><i class="fa-solid fa-globe"></i></a>
            </div>
          </div>
          <div class="footer-branding">CODEGUYAKASH</div>
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
    if (rect.top < window.innerHeight) {
      // Calculate how far the bottom of the footer is from the bottom of the screen.
      // When this is 0, the user has scrolled to the absolute bottom of the page.
      const distanceToBottom = Math.max(0, rect.bottom - window.innerHeight);
      
      // Push the text DOWN when it first enters the screen, and have it gracefully rise up
      // to its final position as the user reaches the bottom.
      const yOffset = distanceToBottom * 0.6; // Strong parallax effect
      
      this.branding.style.transform = `translateY(${yOffset}px)`;
    }
  }
}

customElements.define('site-footer', SiteFooter);
