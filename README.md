# Rankprofit – Astro Migration

Dieses Projekt wurde von React/Vite auf **Astro** migriert mit Fokus auf:

- statische Auslieferung
- minimale JavaScript-Menge
- SEO-freundliche HTML-Struktur

## Projektstruktur

```text
src/
  components/
    Benefits.astro
    CTA.astro
    ContactForm.astro
    Footer.astro
    Hero.astro
    Navbar.astro
    Portfolio.astro
    Services.astro
    Workflow.astro
  layouts/
    BaseLayout.astro
  pages/
    index.astro
    contact.astro
  styles.css
```

## Entwicklung

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## SEO-Optimierungen

- semantische Struktur (`header`, `main`, `section`, `article`, `footer`)
- eindeutige `h1` pro Seite
- `title`, `meta description`, Open Graph, Canonical
- JSON-LD Organisation-Schema im Basislayout
- Sitemap via `@astrojs/sitemap`
