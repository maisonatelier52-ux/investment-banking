document.addEventListener("DOMContentLoaded", () => {
  const categoryBody = document.querySelector(".cateagory-body-section");
  const isArticle = Boolean(document.querySelector(".detail-content-section"));
  const isCategoryIndex = Boolean(categoryBody && !isArticle);

  if (!isCategoryIndex) return;

  document.body.classList.add("category-index");

  const primaryNav = document.querySelector(".cateagory-section");
  if (primaryNav && !document.querySelector(".news-ticker")) {
    const ticker = document.createElement("div");
    ticker.className = "news-ticker";
    ticker.setAttribute("aria-label", "Latest headlines");
    ticker.innerHTML = `
      <div class="news-ticker-track">
        <a href="/markets/markets.html"><strong>MARKETS</strong><span>Follow the forces moving global capital and risk</span></a>
        <i aria-hidden="true"></i>
        <a href="/banking/banking.html"><strong>BANKING</strong><span>Institutions, policy and the future of finance</span></a>
        <i aria-hidden="true"></i>
        <a href="/fintech/fintech.html"><strong>FINTECH</strong><span>Technology reshaping financial services</span></a>
      </div>`;
    primaryNav.insertAdjacentElement("afterend", ticker);
  }

  const categoryRailHost = document.querySelector(".cateagory-grid-section-r");
  if (categoryRailHost) {
    categoryRailHost.innerHTML = `
      <aside class="category-rail" aria-label="Explore the publication">
        <section class="category-rail-section">
          <h2>Explore coverage</h2>
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
          <h2>Stay ahead of the story</h2>
          <p>Receive essential financial headlines and analysis from the Investment Banking newsroom.</p>
          <a href="/#newsletter">Join the newsletter</a>
        </section>
      </aside>`;
  }
});
