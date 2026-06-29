document.addEventListener("DOMContentLoaded", () => {
  const searchIcon = document.querySelector(".search");
  const searchBar = document.querySelector(".search-bar");

  // Show / hide on icon click
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
  const menuIcon = document.querySelector(".menu");
  const sidebar = document.querySelector(".sidebar");
  const overlay = document.querySelector(".overlay");

  // Open sidebar
  menuIcon.addEventListener("click", (e) => {
    e.stopPropagation();
    sidebar.classList.add("active");
    overlay.classList.add("active");
  });

  // Close when clicking overlay
  overlay.addEventListener("click", () => {
    sidebar.classList.remove("active");
    overlay.classList.remove("active");
  });

  // Close if click outside (extra safety)
  document.addEventListener("click", (e) => {
    if (!sidebar.contains(e.target) && !menuIcon.contains(e.target)) {
      sidebar.classList.remove("active");
      overlay.classList.remove("active");
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
  sunIcon.addEventListener("click", () => {
    body.classList.add('dark-mode');
    localStorage.setItem('theme', 'dark');
  });

  // Moon icon click - Switch to Light Mode
  moonIcon.addEventListener("click", () => {
    body.classList.remove('dark-mode');
    localStorage.setItem('theme', 'light');
  });

});
