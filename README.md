# codeguyakash.github.io

Personal landing page and policy hub for Akash (@codeguyakash), published via GitHub Pages. The site mixes Markdown (for the root page) with a static HTML variant and includes basic SEO, analytics, and AdSense wiring.

## Project layout

- [index.md](index.md) — primary landing page with Jekyll front matter, profile intro, product notice, and social links.
- [page.html](page.html) — static HTML version of the landing page with GTM, AdSense, and JSON-LD `Person` schema.
- [styles/style.css](styles/style.css) and [styles/montserrat-font.css](styles/montserrat-font.css) — core styling assets.
- Policy and utility pages: [privacy.md](privacy.md), [terms.md](terms.md), [refund_policy.md](refund_policy.md), [shipping_policy.md](shipping_policy.md), [contact.md](contact.md), plus supporting files in [utils](utils).

## Local preview

1. From the repo root start a simple server so relative asset paths resolve:
   ```sh
   python3 -m http.server 4000
   ```
2. Open http://localhost:4000 to view the Markdown-rendered index via GitHub Pages-style processing, or open [page.html](page.html) directly for the static version.

## Editing notes

- Update SEO metadata (title, description, keywords) in [index.md](index.md) and [page.html](page.html) together to keep them aligned.
- Assets such as favicon and signature live in [utils](utils). Replace them there and keep filenames consistent with existing references.
- Ad/analytics: GTM container `GTM-5PQXP364` and AdSense publisher `ca-pub-4355032471089861` are already wired; swap with your IDs if you fork this project.

## Deployment

The site is static and suited for GitHub Pages. Push changes to the default branch and Pages will serve the updated content; no build step is required.

```bash
python3 -m http.server 8000
```
