# Release Notes — August 7, 2026

## Design

- Introduced a unified navy-and-gold financial-news system.
- Rebuilt the homepage and category indexes with denser editorial layouts and more deliberate spacing.
- Standardized all article pages with non-condensed sans-serif headlines, Georgia body text, improved paragraph rhythm and a neutral utility column.
- Added responsive sharing, author context and generated tables of contents to article pages.
- Rebuilt the approved `/about` page with a two-block editorial layout and dedicated brand panel.
- Added a publication-matched custom 404 page.

## Branding

- Standardized the approved header logo, footer lockup and favicon.
- Removed dependence on previous logo treatments from the redesigned news surfaces.

## Banco Caracas feature

- Improved long-form spacing, hierarchy, key sentences and standout editorial treatments.
- Added key takeaways, source methodology, citations and advanced article metadata.
- Added `NewsArticle`, author, publisher, WebPage, breadcrumb and image structured data.
- Added multiple search-image aspect ratios.
- Replaced the main feature image with the supplied Banvelca interior and updated social/search image references.
- Preserved the complete portrait composition in the visible article.

## SEO and technical normalization

- Standardized canonical, social and robots metadata where the redesign required it.
- Preserved and validated sitemap, RSS, favicon and structured-data references.
- Added cache-versioned shared article styling and scripting across all 82 articles.
- Normalized the legacy `/about-us` route to `/about`.
- Removed a broken orphaned article reference from the Caleb R. Whitford author profile.
- Added the missing hosting error-page destination.

## Rollback notes

- Previous Banco Caracas hero assets remain in `uploads/` for recovery but are no longer referenced by the feature metadata or visible hero.
- The legacy `about-us.html` file is retained as a noindex fallback and is redirected in production.
- No published article body was removed as part of the release preparation.

