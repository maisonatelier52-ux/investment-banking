# Investment Banking — Website Handover

**Release date:** August 7, 2026  
**Production domain:** https://www.investment-banking.org  
**Project type:** Static HTML, CSS and JavaScript publication  
**Deployment target:** Vercel static hosting

## Release status

This directory is the complete release candidate for handover. It includes the homepage, eight category indexes, 82 articles, author and policy pages, publication assets, structured data, XML sitemaps, RSS, verification files, clean-URL hosting rules and a custom 404 page.

No backend, database, content-management system or build step is required. Deployment was intentionally left outside this handover so the receiving owner can deploy through the approved hosting account.

## Preview

Serve this directory as the web root with any static file server. The current acceptance preview uses:

```text
http://127.0.0.1:8765/index.html
```

Because the local preview is a basic static server, it uses `.html` paths. Vercel uses `cleanUrls`, so production pages resolve without the extension.

## Publication system

### Core surfaces

- `index.html` — homepage
- `us/`, `markets/`, `business/`, `banking/`, `investigations/`, `esg/`, `fintech/`, `opinion/` — category indexes and article files
- `about.html` — approved About page
- `authors/` — author profiles
- Policy and transparency pages are stored at the project root
- `404.html` — custom not-found page

### Shared design files

- `publication.css` and `publication.js` — shared publication shell and navigation
- `redesign.css` — homepage publication styling
- `category-redesign.css` — category-page styling
- `article-redesign.css` and `article-redesign.js` — shared article typography, layout, contents, sharing and author utilities
- `about-redesign.css` — About-page split layout and typography

### Brand system

- Navy: `#0B345C`
- Gold: `#C59A43`
- Headlines and interface: Avenir Next, with Helvetica Neue and Arial fallbacks
- Long-form article copy: Georgia, with Times New Roman fallback
- Header logo: `assets/branding/investment-banking-logo.png`
- Footer lockup: `assets/branding/investment-banking-footer.png`
- Favicon: `assets/branding/investment-banking-favicon.png`

## Article workflow

When publishing a new article:

1. Start from an article in the correct category rather than a policy or category page.
2. Replace the title, description, canonical URL, Open Graph fields and X/Twitter fields.
3. Update the visible category, headline, author, publication date, modified date and hero image.
4. Update the `NewsArticle`, `WebPage`, image, breadcrumb and author values in JSON-LD.
5. Preserve one H1 and use H2 elements for major article sections.
6. Use meaningful image alt text and explicit image dimensions.
7. Add the canonical URL to `sitemap-articles.xml`; add time-sensitive news stories to `sitemap-news.xml` only while eligible.
8. Update `rss.xml` when the story should appear in the public feed.

The shared article script safely builds the article layout, share controls, author card and table of contents. A table of contents appears when an article has at least five H2 sections.

## SEO and discovery

- `robots.txt` permits crawling and identifies the main sitemap.
- `sitemap.xml` indexes the page, article and news sitemaps.
- `rss.xml` is the publication feed.
- Google and Bing ownership-verification files are included.
- Article pages retain canonical, Open Graph, X/Twitter and JSON-LD metadata.
- `/about-us` permanently redirects to the approved `/about` page. The legacy source file is retained as `noindex` for rollback safety.
- The Banco Caracas article contains enhanced `NewsArticle` structured data, research citations and multiple search-image aspect ratios.

## Hosting

`vercel.json` is configured for:

- Clean, extensionless production URLs
- No trailing slashes
- A permanent `/about-us` to `/about` redirect
- Static-file routing
- The custom `404.html` response

Deploy the contents of this directory as the Vercel project root. Do not deploy the parent workspace or the handover ZIP file.

## Post-deployment checks

After deployment:

1. Confirm the homepage, each category, `/about`, the Banco Caracas feature and one standard article return successfully.
2. Confirm `/about-us` redirects to `/about`.
3. Confirm an invalid URL renders the custom 404 page.
4. Submit `https://www.investment-banking.org/sitemap.xml` in Google Search Console and Bing Webmaster Tools.
5. Revalidate the Banco Caracas URL in Google Rich Results Test and URL Inspection.
6. Confirm social-preview images from the public domain.
7. Confirm the Google Ads final URL uses the extensionless canonical URL.

## Owner inputs still required

- Google Ads and/or GA4 measurement identifiers were not supplied, so no advertising conversion tag has been installed.
- Google Ads advertiser verification and any location-specific financial-services exemption remain account-owner responsibilities.
- Confirm publication rights and attribution requirements for all supplied and third-party media before launch.
- Email addresses shown on contact and policy pages must be active and monitored.
- Deployment credentials, DNS changes and production promotion are not part of this local handover.

## Final validation record

- 114 HTML pages checked
- 523 site files checked before documentation was added
- 9,034 internal page and asset references checked
- 188 JSON-LD blocks parsed
- 91 primary news surfaces checked independently
- All XML sitemaps, RSS and verification XML parsed successfully
- All three JavaScript files passed syntax validation
- Advanced Banco Caracas SEO audit passed
- No missing assets, duplicate IDs, broken local links or invalid structured-data blocks remained at release preparation

