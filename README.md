# Arshal — Personal Portfolio

![Repo size](https://img.shields.io/badge/portfolio-static-green) ![License](https://img.shields.io/badge/license-MIT-blue)

Premium, minimal, static personal portfolio built with plain HTML, CSS and JavaScript. This repository contains a two-page static website that showcases the author `Arshal` and serves as a searchable online profile.

---

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Folder Structure](#folder-structure)
- [Pages](#pages)
- [Components](#components)
- [Assets](#assets)
- [Styling Architecture](#styling-architecture)
- [JavaScript Modules](#javascript-modules)
- [Responsive Design](#responsive-design)
- [SEO Features & Review](#seo-features--review)
- [Performance](#performance)
- [Browser Support](#browser-support)
- [Installation](#installation)
- [Running Locally](#running-locally)
- [Deployment](#deployment)
- [Customization Guide](#customization-guide)
- [Future Improvements](#future-improvements)
- [Contributing](#contributing)
- [License](#license)
- [Author](#author)
- [Contact](#contact)
- [Credits](#credits)

---

## Overview

This repository is a static, hand-crafted personal portfolio site for `Arshal`. Its primary purpose is to provide a searchable, professional online presence and a concise overview of skills, projects, services and contact information.

The project is intentionally lightweight and does not use a build system — pages are static HTML/CSS/JS files that can be served from any static host.

## Features

- Clean landing / hero section with social links
- About, Skills, Services, Works (portfolio), and Contact sections
- Canvas-based animated background (matrix-style) for the home page
- Responsive layouts via CSS and Bootstrap
- Modular CSS split between `main.css` and page-specific `home.css`
- Client-side contact form with success state (no backend)
- External image assets hosted via CDN

## Technologies Used

- HTML5
- CSS3 (custom styles in `main.css`, `home.css`)
- JavaScript (vanilla ES6, `script.js`)
- Bootstrap (CSS & JS via CDN)
- Bootstrap Icons (via CDN and package.json entry)
- Canvas API (matrix animation)

Only technologies that appear in the repository are listed above.

## Folder Structure

```
archive root
├── index.html
├── main.css
├── script.js
├── package.json
├── package-lock.json
└── src/
    └── home/
        ├── home.html
        └── home.css
```

- `index.html` — lightweight landing page linking to the full `home` page.
- `main.css` — global styles and theme for the site.
- `script.js` — site-wide JavaScript (canvas animation, contact form handling, resize handlers).
- `src/home/` — main profile site with full sections and `home.css` page-specific styles.

## Pages

- `index.html` — Simple entry page with a short profile card and link to the full site.
- `src/home/home.html` — Full single-page portfolio containing:
  - Hero / Intro
  - About
  - Skills
  - Services
  - Works (project thumbnails)
  - Contact form

## Components (logical)

- Navbar — responsive Bootstrap navbar with custom styling (`custom-nav`).
- Hero — left/right hero layout, social links, CTA, stats.
- About/Profile Card — sticky profile card and bio.
- Skills — progress bars and skill items.
- Services / Works — cards using Bootstrap grid.
- Contact form — client-side form that shows a success card (no backend).
- Matrix Canvas — `#matrix` canvas element drawn by `script.js`.

## Assets

- Images: All image assets are externally hosted (Discord CDN links) and included via direct URL references in the HTML.
- Icons: Bootstrap Icons are used (CDN link in `home.html`).
- Fonts: No external web-fonts bundled. Styles rely on system fonts and `Courier New` for monospaced sections.

## Styling Architecture

- `main.css` contains global layout, utilities, custom navbar, and theme variables (implemented as hard-coded colors).
- `src/home/home.css` contains page-specific styles for the hero, about, skills, and other sections.
- Responsive behavior relies on CSS media queries and Bootstrap grid breakpoints.
- Animations: CSS keyframes used for typing effect and subtle UI transitions. The HTML markup includes AOS `data-aos` attributes, but the AOS library is not included in the repository (see SEO/Improvements).

## JavaScript Modules

- `script.js` — single file implementing:
  - Canvas matrix animation that sizes to `.main-page`
  - Resize handling to recalculate canvas columns
  - Contact form submit handler showing a success message (client-side only)

No bundlers, modules or frameworks are used — plain ES6 code runs in modern browsers.

## Responsive Design

- The site uses Bootstrap's responsive grid and custom media queries in CSS to adapt the layout for tablet and mobile breakpoints.

## SEO Features & Review

- Detected on-disk:
  - Basic `<meta charset>` and `<meta name="viewport">` tags are present.
  - Page `<title>` tags are generic (`Document`).
  - No meta description, canonical, Open Graph, Twitter Cards, structured data (JSON-LD), `robots.txt`, `sitemap.xml`, favicon, or web manifest found.

Recommendations (non-invasive):
- Update `<title>` and add `<meta name="description">` for each page.
- Add Open Graph/Twitter meta tags.
- Add robots.txt and sitemap.xml (templates included in repository).
- Add structured data (JSON-LD) with `Person` schema to improve Google indexing.

See `SEO_REVIEW.md` for a complete review and suggested snippets.

## Performance

- Assets and libraries are mostly loaded from CDNs (Bootstrap, Bootstrap Icons) which benefits caching.
- Images are externally hosted; ensure they are served at appropriate resolutions (responsive `srcset`) and compressed.
- No code splitting or bundling (not necessary for this scale).

## Browser Support

- Targets modern evergreen browsers with support for ES6, Canvas API, CSS Grid and Flexbox.
- Expected to work in latest Chrome, Edge, Firefox, and Safari. Older browsers (IE11) are not supported.

## Installation

Clone the repository and open pages directly or serve with a static server.

```bash
git clone <REPO_URL>
cd arshal-web
```

## Running Locally

Open `index.html` or `src/home/home.html` directly in a browser, or serve with a simple HTTP server for proper relative path handling:

Python 3 (built-in):

```bash
# from repository root
python -m http.server 3000
# then open http://localhost:3000/src/home/home.html
```

Node (http-server):

```bash
npm install -g http-server
http-server -p 3000
# open http://localhost:3000/src/home/home.html
```

## Production Build

No build step — copy static files to any static host.

## Deployment

This project can be deployed to any static hosting service. Examples:

- GitHub Pages: set repository root (or `/src/home/`) as pages source.
- Netlify / Vercel: drag-and-drop or connect repository; set publish directory to repository root or `src/home` depending on how you want to serve the site.

## Customization Guide

- Replace placeholder images (host locally or use a CDN).
- Update page `<title>` and add `<meta>` tags for each page.
- Add a favicon and `manifest.webmanifest` to support PWA/shortcuts.
- Replace placeholder contact behavior with a backend endpoint or a third-party service (Formspree, Netlify Forms, etc.).

## Future Improvements

- Add meta descriptions, Open Graph tags and JSON-LD structured data.
- Add AOS or properly include animation libraries if using `data-aos` attributes.
- Add accessibility improvements: ARIA attributes, keyboard navigation and semantic HTML refinements.
- Replace external image links with responsive `srcset` variants and webp fallbacks.
- Add unit tests for any JS logic if it grows more complex.

## Contributing

See `CONTRIBUTING.md` for contribution guidelines, issue templates and PR process.

## License

This project is available under the MIT License. See `LICENSE`.

## Author

- Name: Arshal (display name found in the HTML content)
- GitHub: https://github.com/arshal-exe (link detected in HTML)

## Contact

- Email (detected in project): arshalck089@gmail.com

## Credits

- Bootstrap (CSS & JS via CDN)
- Bootstrap Icons

---

If you want, I can also:

- add missing SEO meta tags to the HTML
- add a favicon and manifest
- add a small CI/CD deploy configuration for GitHub Pages
