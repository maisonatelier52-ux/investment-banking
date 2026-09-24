# Investment Banking Next.js site

This is the Next.js App Router conversion of the supplied Investment Banking HTML site. Page structure is written in JSX and styled with Tailwind utility classes. There are no source HTML pages or site-wide CSS rules beyond Tailwind's three directives.

## Run locally

```bash
pnpm install
pnpm dev
```

Run `pnpm build` to verify the production build and `pnpm start` to serve it.

## Content

- `data/articles.json`: all 40 article records, including category, author slug, metadata, images, and structured article body nodes.
- `data/authors.json`: all 8 contributor profiles, social links, and original archive order.
- `data/pages.json`: content from the original informational and policy pages.
- `data/homeLayout.json`: the original homepage section and story order.
- `data/footerIcons.json`: the original footer icon shapes.

The home, category, article, author, search, and information pages read these JSON files directly. The header and footer are shared from `app/layout.jsx`. Article routing is in `app/[category]/[slug]/page.jsx`; the Banco Caracas and Britannia articles use their dedicated components.

The newsletter keeps the original FormSubmit destination (`admin@investment-banking.org`) and return URL. To change the recipient, update `components/Newsletter.jsx` and configure the new FormSubmit address before deployment.

The canonical site URL is set in `lib/content.js`. Sitemap, robots, and RSS routes use it.
