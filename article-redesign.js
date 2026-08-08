document.addEventListener("DOMContentLoaded", () => {
  const shell = document.querySelector(".detail-content-section");
  if (!shell) return;

  document.body.classList.add("news-article");

  const sectionSlug = location.pathname.split("/").filter(Boolean)[0] || "news";
  const sectionNames = {
    us: "U.S.",
    markets: "Markets",
    business: "Business",
    banking: "Banking",
    investigations: "Investigations",
    esg: "ESG",
    fintech: "FinTech",
    opinion: "Opinion"
  };
  const sectionName = sectionNames[sectionSlug] || "News";
  const sectionHref = `/${sectionSlug}/${sectionSlug}.html`;

  const header = Array.from(shell.children).find((child) =>
    child.classList && child.classList.contains("detail-content-text-section") && child.querySelector(".detail-head")
  );
  if (!header) return;
  header.classList.add("article-header");

  let breadcrumb = header.querySelector(".breadcrumb-nav") || shell.querySelector(":scope > .breadcrumb-nav");
  if (!breadcrumb) {
    breadcrumb = document.createElement("nav");
    breadcrumb.setAttribute("aria-label", "Breadcrumb");
    breadcrumb.innerHTML = `
      <ol>
        <li><a href="/">Home</a></li>
        <li><a href="${sectionHref}">${sectionName}</a></li>
        <li aria-current="page">${document.querySelector(".detail-head").textContent.trim()}</li>
      </ol>`;
  }
  breadcrumb.classList.add("article-breadcrumb");
  shell.insertBefore(breadcrumb, header);

  if (!header.querySelector(".article-category-label")) {
    const label = document.createElement("p");
    label.className = "article-category-label";
    label.innerHTML = `<a href="${sectionHref}">${sectionName}</a>`;
    header.insertBefore(label, header.querySelector(".detail-head"));
  }

  const hero = Array.from(shell.children).find((child) =>
    child.matches && (child.matches("img.main-img") || child.matches("figure.hero-figure"))
  );

  let layout = shell.querySelector(":scope > .article-layout");
  let main;
  let sidebar;

  if (layout) {
    main = layout.querySelector(":scope > .article-main") || layout.firstElementChild;
    sidebar = layout.querySelector(":scope > .article-sidebar");
    if (!sidebar) {
      sidebar = document.createElement("aside");
      sidebar.className = "article-sidebar";
      layout.appendChild(sidebar);
    }
  } else {
    layout = document.createElement("div");
    layout.className = "article-layout";
    main = document.createElement("article");
    main.className = "article-main";
    sidebar = document.createElement("aside");
    sidebar.className = "article-sidebar";
    sidebar.setAttribute("aria-label", "Article tools");

    const startNode = hero ? hero.nextElementSibling : header.nextElementSibling;
    if (startNode) shell.insertBefore(layout, startNode);
    else shell.appendChild(layout);
    layout.append(main, sidebar);

    let node = layout.nextElementSibling;
    while (node) {
      const next = node.nextElementSibling;
      main.appendChild(node);
      node = next;
    }
  }

  main.classList.add("article-main");
  sidebar.classList.add("article-sidebar");
  sidebar.setAttribute("aria-label", "Article tools");

  const leadPackage = document.createDocumentFragment();
  leadPackage.append(breadcrumb, header);
  if (hero) leadPackage.append(hero);
  main.prepend(leadPackage);

  main.querySelectorAll(".detail-content-text-section").forEach((section) => {
    if (!section.classList.contains("article-header")) section.classList.add("article-copy");
  });
  if (main.matches(".detail-content-text-section")) main.classList.add("article-copy");

  const headings = Array.from(main.querySelectorAll("h2.detal-para-head"));
  const usedIds = new Set(Array.from(document.querySelectorAll("[id]")).map((el) => el.id));
  const slugify = (value) => value
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "") || "section";

  headings.forEach((heading) => {
    if (heading.id) return;
    const parentSection = heading.closest(".article-section[id]");
    if (parentSection) {
      heading.dataset.tocTarget = parentSection.id;
      return;
    }
    const base = slugify(heading.textContent.trim());
    let id = base;
    let suffix = 2;
    while (usedIds.has(id)) id = `${base}-${suffix++}`;
    usedIds.add(id);
    heading.id = id;
  });

  const firstParagraph = main.querySelector(".detail-para, .article-copy > p");
  if (firstParagraph) firstParagraph.classList.add("article-lede");

  const canonical = document.querySelector('link[rel="canonical"]')?.href || location.href;
  const title = document.querySelector(".detail-head")?.textContent.trim() || document.title;

  const copyText = async (value) => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      try {
        const copied = await Promise.race([
          navigator.clipboard.writeText(value).then(() => true).catch(() => false),
          new Promise((resolve) => window.setTimeout(() => resolve(false), 300))
        ]);
        if (copied) return;
      } catch (_) {
        // Browsers can expose Clipboard API while denying it in an embedded preview.
      }
    }

    const textarea = document.createElement("textarea");
    textarea.value = value;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
  };

  const makeShareButtons = () => {
    const wrap = document.createElement("div");
    wrap.className = "article-share-buttons";
    wrap.innerHTML = `
      <button class="article-share-button" type="button" data-share="native">Share</button>
      <button class="article-share-button" type="button" data-share="copy">Copy link</button>
      <a class="article-share-button" href="https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(canonical)}" target="_blank" rel="noopener noreferrer" aria-label="Share on LinkedIn">in</a>`;
    return wrap;
  };

  const bindShareButtons = (root) => {
    root.querySelector('[data-share="native"]')?.addEventListener("click", async () => {
      if (navigator.share) {
        try { await navigator.share({ title, url: canonical }); } catch (_) {}
      } else {
        await copyText(canonical);
      }
    });
    root.querySelector('[data-share="copy"]')?.addEventListener("click", async (event) => {
      const button = event.currentTarget;
      const original = button.textContent;
      await copyText(canonical);
      button.textContent = "Copied";
      window.setTimeout(() => { button.textContent = original; }, 1600);
    });
  };

  const shareUtility = document.createElement("section");
  shareUtility.className = "article-utility article-share-utility";
  shareUtility.innerHTML = '<h2 class="article-utility-title">Share this story</h2>';
  shareUtility.appendChild(makeShareButtons());
  bindShareButtons(shareUtility);

  const mobileShare = document.createElement("section");
  mobileShare.className = "article-share-mobile article-utility";
  mobileShare.setAttribute("aria-label", "Share this story");
  mobileShare.appendChild(makeShareButtons());
  bindShareButtons(mobileShare);
  header.appendChild(mobileShare);

  const existingBio = sidebar.querySelector(".about-bio")?.textContent.trim()
    || main.querySelector(".author-bio")?.textContent.trim()
    || "Reporting and analysis from the Investment Banking newsroom.";
  const authorImage = header.querySelector(".author-photo");
  const authorLink = header.querySelector(".author-name a");
  const authorName = authorLink?.textContent.trim() || header.querySelector(".author-name")?.textContent.replace(/^By\s*/i, "").trim() || "Editorial Team";

  const authorCard = document.createElement("section");
  authorCard.className = "article-author-card";
  authorCard.innerHTML = `
    <h2 class="article-utility-title">About the author</h2>
    <div class="article-author-card-top">
      ${authorImage ? `<img src="${authorImage.getAttribute("src")}" alt="">` : ""}
      <strong>${authorLink ? `<a href="${authorLink.getAttribute("href")}">${authorName}</a>` : authorName}</strong>
    </div>
    <p>${existingBio}</p>`;

  const sidebarInner = document.createElement("div");
  sidebarInner.className = "article-sidebar-inner";

  sidebar.innerHTML = "";
  sidebar.appendChild(sidebarInner);
  sidebarInner.appendChild(shareUtility);

  if (headings.length >= 5) {
    const toc = document.createElement("details");
    toc.className = "article-toc article-utility";
    toc.open = !window.matchMedia("(max-width: 980px)").matches;
    toc.innerHTML = `
      <summary class="article-utility-title">In this story</summary>
      <ol>${headings.map((heading) => {
        const id = heading.dataset.tocTarget || heading.id;
        return `<li><a href="#${id}">${heading.textContent.trim()}</a></li>`;
      }).join("")}</ol>`;
    sidebarInner.appendChild(toc);

    if ("IntersectionObserver" in window) {
      const links = Array.from(toc.querySelectorAll("a"));
      const observer = new IntersectionObserver((entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (!visible) return;
        const id = visible.target.dataset.tocTarget || visible.target.id;
        links.forEach((link) => link.classList.toggle("is-active", link.getAttribute("href") === `#${id}`));
      }, { rootMargin: "-18% 0px -70% 0px", threshold: 0 });
      headings.forEach((heading) => observer.observe(heading));
    }
  }

  sidebarInner.appendChild(authorCard);
});
