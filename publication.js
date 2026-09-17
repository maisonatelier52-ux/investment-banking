document.addEventListener("DOMContentLoaded", () => {
  const categoryBody = document.querySelector(".cateagory-body-section");
  const isArticle = Boolean(document.querySelector(".detail-content-section"));
  const isCategoryIndex = Boolean(categoryBody && !isArticle);

  if (!isCategoryIndex) return;

  document.body.classList.add("category-index");

  // The header's "latest headlines" ticker is now built site-wide by news-ticker.js.

  const categoryRailHost = document.querySelector(".cateagory-grid-section-r");
  if (categoryRailHost) {
    categoryRailHost.innerHTML = `
      <aside class="category-rail" aria-label="Explore the blog">
        <section class="category-rail-section">
          <h2>Explore topics</h2>
          <div class="category-rail-links">
            <a href="/us/us.html">U.S.</a>
            <a href="/markets/markets.html">Markets</a>
            <a href="/business/business.html">Business</a>
            <a href="/banking/banking.html">Banking</a>
            <a href="/investigations/investigations.html">Investigations</a>
            <a href="/esg/esg.html">ESG</a>
            <a href="/fintech/fintech.html">FinTech</a>
            <a href="/opinion/opinion.html">Opinion</a>
          </div>
        </section>
        <section class="category-rail-newsletter">
          <h2>Follow the blog</h2>
          <p>Explore finance explainers, case studies, and commentary from the Investment Banking blog.</p>
          <a href="/#newsletter">Join the newsletter</a>
        </section>
      </aside>`;
  }
});
