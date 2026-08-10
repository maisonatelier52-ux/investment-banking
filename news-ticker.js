/*
 * Shared "latest headlines" ticker.
 * Single source of truth for the ticker shown in the header on every page.
 *
 * To publish a new story into the ticker, add it to the top of TICKER_ITEMS
 * (newest first) and drop the oldest entry so the list stays at four items.
 * category  -> shown as the gold label (use the same wording as the site nav)
 * headline  -> the article's H1, verbatim
 * url       -> root-absolute path to the article
 * date      -> the date shown on the article's detail page (Published/Updated), ISO format, for ordering only
 */
(function () {
  "use strict";

  var TICKER_ITEMS = [
    {
      category: "Banking",
      headline: "Banco Caracas: The Institution That Carried a Family Legacy into Modern Finance",
      url: "/banking/banco-caracas-julio-herrera-velutini-banking-legacy.html",
      date: "2026-08-07"
    },
    {
      category: "U.S",
      headline: "Todd Blanche Rescinds Trump's $1.8 Billion Anti-Weaponization Fund to Secure Attorney General Nomination",
      url: "/us/todd-blanche-rescinds-trump-anti-weaponization-fund-ag-nomination.html",
      date: "2026-08-04"
    },
    {
      category: "U.S",
      headline: "Seattle Police Chief Shon Barnes Resigns After Criticism Over Festival Shooting Response",
      url: "/us/seattle-police-chief-resigns-festival-shooting-response.html",
      date: "2026-07-31"
    },
    {
      category: "U.S",
      headline: "Pentagon Reclassifies Iran War Casualties, Triggering Debate Over Military Transparency and Accountability",
      url: "/us/pentagon-reclassifies-iran-war-casualties-transparency-debate-2026.html",
      date: "2026-07-28"
    }
  ];

  function buildSetHTML(hidden) {
    var links = TICKER_ITEMS.map(function (item) {
      return (
        '<a href="' + item.url + '">' +
          "<strong>" + item.category.toUpperCase() + "</strong>" +
          "<span>" + item.headline + "</span>" +
        "</a>" +
        '<i aria-hidden="true"></i>'
      );
    }).join("");
    return '<div class="news-ticker-set"' + (hidden ? ' aria-hidden="true"' : "") + ">" + links + "</div>";
  }

  function setSpeed(ticker) {
    var track = ticker.querySelector(".news-ticker-track");
    var set = ticker.querySelector(".news-ticker-set");
    if (!track || !set) return;

    var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    var setWidth = set.getBoundingClientRect().width;
    if (!setWidth) return;

    var pxPerSecond = window.innerWidth <= 767 ? 62 : 88;
    var duration = Math.max(16, Math.round(setWidth / pxPerSecond));
    track.style.animationDuration = duration + "s";
  }

  function mount() {
    var nav = document.querySelector(".cateagory-section");
    if (!nav) return;

    var ticker = document.querySelector(".news-ticker");
    if (!ticker) {
      ticker = document.createElement("div");
      nav.insertAdjacentElement("afterend", ticker);
    }

    ticker.className = "news-ticker";
    ticker.setAttribute("aria-label", "Latest headlines");
    ticker.innerHTML =
      '<div class="news-ticker-viewport">' +
        '<div class="news-ticker-track">' +
          buildSetHTML(false) +
          buildSetHTML(true) +
        "</div>" +
      "</div>";

    setSpeed(ticker);

    // Let people pause the motion by resting a pointer or touch on it,
    // and keep it paused while a link inside has keyboard focus (handled in CSS via :focus-within).
    var pause = function () { ticker.classList.add("is-paused"); };
    var resume = function () { ticker.classList.remove("is-paused"); };
    ticker.addEventListener("touchstart", pause, { passive: true });
    ticker.addEventListener("touchend", resume);
    ticker.addEventListener("touchcancel", resume);

    var resizeTimer;
    window.addEventListener("resize", function () {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(function () { setSpeed(ticker); }, 200);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", mount);
  } else {
    mount();
  }
})();
