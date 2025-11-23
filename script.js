// Simple tab-style navigation using one HTML file

document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll(".page-section");
  const buttons = document.querySelectorAll("[data-section]");

  function showSection(targetId) {
    sections.forEach((sec) => {
      sec.classList.toggle("active", sec.id === targetId);
    });

    navLinks.forEach((link) => {
      link.classList.toggle(
        "active",
        link.getAttribute("data-section") === targetId
      );
    });

    // Update hash for basic back/forward behavior
    window.location.hash = targetId;
    window.scrollTo({ top: 0, behavior: "instant" });
  }

  buttons.forEach((el) => {
    el.addEventListener("click", (e) => {
      const target = el.getAttribute("data-section");
      if (target) {
        e.preventDefault();
        showSection(target);
      }
    });
  });

  // On load, show section from hash if present
  const initialHash = window.location.hash.replace("#", "");
  if (initialHash && document.getElementById(initialHash)) {
    showSection(initialHash);
  } else {
    showSection("home");
  }
});
