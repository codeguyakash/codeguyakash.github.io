class TopBanner extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <!-- Primary Banner -->
      <div class="site-banner">
        <div class="marquee-container">
          <div class="marquee-content">
            <span>CODEGUYAKASH</span>
            <span class="dot">•</span>
            <span>Android Apps</span>
            <span class="dot">•</span>
            <span>Chrome Extensions</span>
            <span class="dot">•</span>
            <span>Frontend</span>
            <span class="dot">•</span>
            <span>Backend</span>
            <span class="dot">•</span>
            <span>System Design</span>
            <span class="dot">•</span>
            <span>DevOps</span>
            <span class="dot">•</span>
            <span>SEO & Ranking</span>
            <span class="dot">•</span>
            <span>Testing</span>
            <span class="dot">•</span>
            <span>Open Source</span>
            <span class="dot">•</span>
            <span>Microservices</span>
            <span class="dot">•</span>
            <span>REST APIs</span>
            <span class="dot">•</span>
            <span>GraphQL</span>
            <span class="dot">•</span>
            <span>WebSockets</span>
            <span class="dot">•</span>
            <span>Cloud Architecture</span>
            <span class="dot">•</span>
            <a href="https://github.com/codeguyakash" target="_blank" rel="noopener" style="color: inherit; text-decoration: none">GitHub</a>
            <span class="dot">•</span>
            <a href="https://linkedin.com/in/codeguyakash" target="_blank" rel="noopener" style="color: inherit; text-decoration: none">LinkedIn</a>
          </div>
          <div class="marquee-content" aria-hidden="true">
            <span>CODEGUYAKASH</span>
            <span class="dot">•</span>
            <span>Android Apps</span>
            <span class="dot">•</span>
            <span>Chrome Extensions</span>
            <span class="dot">•</span>
            <span>Frontend</span>
            <span class="dot">•</span>
            <span>Backend</span>
            <span class="dot">•</span>
            <span>System Design</span>
            <span class="dot">•</span>
            <span>DevOps</span>
            <span class="dot">•</span>
            <span>SEO & Ranking</span>
            <span class="dot">•</span>
            <span>Testing</span>
            <span class="dot">•</span>
            <span>Open Source</span>
            <span class="dot">•</span>
            <span>Microservices</span>
            <span class="dot">•</span>
            <span>REST APIs</span>
            <span class="dot">•</span>
            <span>GraphQL</span>
            <span class="dot">•</span>
            <span>WebSockets</span>
            <span class="dot">•</span>
            <span>Cloud Architecture</span>
            <span class="dot">•</span>
            <a href="https://github.com/codeguyakash" target="_blank" rel="noopener" style="color: inherit; text-decoration: none">GitHub</a>
            <span class="dot">•</span>
            <a href="https://linkedin.com/in/codeguyakash" target="_blank" rel="noopener" style="color: inherit; text-decoration: none">LinkedIn</a>
          </div>
        </div>
      </div>

      <!-- Secondary Banner -->
      <div class="site-banner secondary">
        <div class="marquee-container reverse">
          <div class="marquee-content">
            <span>React</span>
            <span class="dot">•</span>
            <span>Node.js</span>
            <span class="dot">•</span>
            <span>MongoDB</span>
            <span class="dot">•</span>
            <span>Express</span>
            <span class="dot">•</span>
            <span>TailwindCSS</span>
            <span class="dot">•</span>
            <span>TypeScript</span>
            <span class="dot">•</span>
            <span>Python</span>
            <span class="dot">•</span>
            <span>Firebase</span>
            <span class="dot">•</span>
            <span>AWS</span>
            <span class="dot">•</span>
            <span>Docker</span>
            <span class="dot">•</span>
            <span>Next.js</span>
            <span class="dot">•</span>
            <span>Vue.js</span>
            <span class="dot">•</span>
            <span>PostgreSQL</span>
            <span class="dot">•</span>
            <span>Redis</span>
            <span class="dot">•</span>
            <span>Nginx</span>
            <span class="dot">•</span>
            <span>Linux</span>
            <span class="dot">•</span>
            <span>Git</span>
            <span class="dot">•</span>
            <span>CI/CD</span>
          </div>
          <div class="marquee-content" aria-hidden="true">
            <span>React</span>
            <span class="dot">•</span>
            <span>Node.js</span>
            <span class="dot">•</span>
            <span>MongoDB</span>
            <span class="dot">•</span>
            <span>Express</span>
            <span class="dot">•</span>
            <span>TailwindCSS</span>
            <span class="dot">•</span>
            <span>TypeScript</span>
            <span class="dot">•</span>
            <span>Python</span>
            <span class="dot">•</span>
            <span>Firebase</span>
            <span class="dot">•</span>
            <span>AWS</span>
            <span class="dot">•</span>
            <span>Docker</span>
            <span class="dot">•</span>
            <span>Next.js</span>
            <span class="dot">•</span>
            <span>Vue.js</span>
            <span class="dot">•</span>
            <span>PostgreSQL</span>
            <span class="dot">•</span>
            <span>Redis</span>
            <span class="dot">•</span>
            <span>Nginx</span>
            <span class="dot">•</span>
            <span>Linux</span>
            <span class="dot">•</span>
            <span>Git</span>
            <span class="dot">•</span>
            <span>CI/CD</span>
          </div>
        </div>
      </div>
    `;

    const durationMs = 40000;
    const currentTimeMs = Date.now();
    const delaySec = -(currentTimeMs % durationMs) / 1000;
    
    const containers = this.querySelectorAll('.marquee-container');
    containers.forEach(container => {
      container.style.animationDelay = `${delaySec}s`;
    });
  }
}

customElements.define('top-banner', TopBanner);

// Hamburger Nav Logic
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const navInner = document.querySelector('.site-nav-inner');
  const siteNav = document.querySelector('.site-nav');
  
  if (toggle && navInner) {
    toggle.addEventListener('click', () => {
      const isOpen = navInner.classList.toggle('open');
      if (siteNav) siteNav.classList.toggle('menu-open', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : ''; // Prevent scroll
      
      toggle.setAttribute('aria-expanded', isOpen);
      const icon = toggle.querySelector('i');
      if (icon) {
        if (isOpen) {
          icon.classList.remove('fa-bars');
          icon.classList.add('fa-xmark');
        } else {
          icon.classList.remove('fa-xmark');
          icon.classList.add('fa-bars');
        }
      }
    });
  }
});
