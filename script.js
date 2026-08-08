document.addEventListener("DOMContentLoaded", () => {
  const searchIcon = document.querySelector(".search");
  const searchBar = document.querySelector(".search-bar");

  // Show / hide on icon click
  if (!searchIcon || !searchBar) return;
  searchIcon.addEventListener("click", (e) => {
    e.stopPropagation(); // prevent immediate close
    searchBar.style.display = (searchBar.style.display === "flex") ? "none" : "flex";
  });

  // Close when clicking outside
  document.addEventListener("click", (e) => {
    if (!searchBar.contains(e.target) && !searchIcon.contains(e.target)) {
      searchBar.style.display = "none";
    }
  });
});

// Select all dropdown wrappers
document.querySelectorAll('.category.dropdown').forEach(drop => {
  drop.addEventListener('click', (e) => {
    e.stopPropagation(); // prevent click bubbling
    // Toggle active class
    drop.classList.toggle('active');
    
    // Optional: close other dropdowns when opening one
    document.querySelectorAll('.category.dropdown').forEach(other => {
      if(other !== drop) {
        other.classList.remove('active');
      }
    });
  });
});

// Close dropdowns if clicking outside
document.addEventListener('click', () => {
  document.querySelectorAll('.category.dropdown').forEach(drop => {
    drop.classList.remove('active');
  });
});

document.addEventListener("DOMContentLoaded", () => {
  let menuIcon = document.querySelector(".menu-button");
  const legacyMenuImage = document.querySelector("img.menu");
  const sidebar = document.querySelector(".sidebar");
  const overlay = document.querySelector(".overlay");

  if (!menuIcon && legacyMenuImage) {
    menuIcon = document.createElement("button");
    menuIcon.className = "menu-button";
    menuIcon.type = "button";
    menuIcon.setAttribute("aria-label", "Open navigation");
    legacyMenuImage.parentNode.insertBefore(menuIcon, legacyMenuImage);
    menuIcon.appendChild(legacyMenuImage);
  }

  // Open sidebar
  if (!menuIcon || !sidebar || !overlay) return;
  if (!sidebar.id) sidebar.id = "site-navigation";
  menuIcon.setAttribute("aria-controls", sidebar.id);
  menuIcon.setAttribute("aria-expanded", "false");
  sidebar.setAttribute("aria-hidden", "true");
  overlay.setAttribute("aria-hidden", "true");

  const closeMenu = () => {
    sidebar.classList.remove("active");
    overlay.classList.remove("active");
    document.body.classList.remove("menu-open");
    sidebar.setAttribute("aria-hidden", "true");
    menuIcon.setAttribute("aria-expanded", "false");
  };

  menuIcon.addEventListener("click", (e) => {
    e.stopPropagation();
    sidebar.classList.add("active");
    overlay.classList.add("active");
    document.body.classList.add("menu-open");
    sidebar.setAttribute("aria-hidden", "false");
    menuIcon.setAttribute("aria-expanded", "true");
  });

  // Close when clicking overlay
  overlay.addEventListener("click", closeMenu);

  // Close if click outside (extra safety)
  document.addEventListener("click", (e) => {
    if (!sidebar.contains(e.target) && !menuIcon.contains(e.target)) {
      closeMenu();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && sidebar.classList.contains("active")) {
      closeMenu();
      menuIcon.focus();
    }
  });
});

// Handle main "Posts"
document.querySelectorAll(".has-dropdown > .drop-head").forEach(head => {
  head.addEventListener("click", () => {
    head.parentElement.classList.toggle("active");
  });
});

// Handle "Layouts" & "Variations"
document.querySelectorAll(".has-sub-dropdown > .drop-head").forEach(head => {
  head.addEventListener("click", () => {
    head.parentElement.classList.toggle("active");
  });
});

// ========================
// DARK/LIGHT THEME TOGGLE
// ========================
document.addEventListener("DOMContentLoaded", () => {
  const sunIcon = document.querySelector(".theme:not(.b)"); // Sun icon (light mode trigger)
  const moonIcon = document.querySelector(".theme.b"); // Moon icon (dark mode trigger)
  const body = document.body;

  // Check if user has a saved theme preference
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
  }

  // Sun icon click - Switch to Dark Mode
  if (sunIcon) sunIcon.addEventListener("click", () => {
    body.classList.add('dark-mode');
    localStorage.setItem('theme', 'dark');
  });

  // Moon icon click - Switch to Light Mode
  if (moonIcon) moonIcon.addEventListener("click", () => {
    body.classList.remove('dark-mode');
    localStorage.setItem('theme', 'light');
  });

});
