# SEO Review & Suggestions

Detected SEO items in the repository:

- `<meta charset>` and `<meta name="viewport">` present in both pages.
- Page titles are generically set to `Document` — these should be replaced with meaningful titles.
- No meta descriptions, Open Graph, Twitter Card tags, canonical tags, or JSON-LD structured data found.
- No `robots.txt` or `sitemap.xml` present originally (now added as templates).

Recommended minimal meta snippet to add to the `<head>` of each page (replace placeholders):

```html
<title>Arshal — Web Developer | Portfolio</title>
<meta name="description" content="Arshal — Web developer. Portfolio showcasing projects, skills and contact information.">
<link rel="canonical" href="https://arshal-exe.github.io/arshal/src/home/home.html" />

<!-- Open Graph -->
<meta property="og:title" content="Arshal — Web Developer" />
<meta property="og:description" content="Portfolio of Arshal — web & Pawn developer." />
<meta property="og:image" content="https://arshal-exe.github.io/arshal/path/to/social-preview.png" />
<meta property="og:url" content="https://arshal-exe.github.io/arshal/src/home/home.html" />
<meta property="og:type" content="website" />

<!-- Twitter -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Arshal — Web Developer" />
<meta name="twitter:description" content="Portfolio of Arshal — web & Pawn developer." />
<meta name="twitter:image" content="https://arshal-exe.github.io/arshal/path/to/social-preview.png" />
```

Structured data example (Person):

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Arshal",
  "url": "https://arshal-exe.github.io/arshal/src/home/home.html",
  "sameAs": [
    "https://github.com/arshal-exe",
    "https://instagram.com/arshal__00"
  ],
  "email": "mailto:arshalck089@gmail.com"
}
</script>
```

Other suggestions:
- Add alt attributes for all images (most images already have alt but verify and improve descriptions).
- Replace external image references with optimized variants, `srcset` and WebP where possible.
- Replace `data-aos` attributes with included AOS library or remove them.
