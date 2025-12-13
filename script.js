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


  const initialHash = window.location.hash.replace("#", "");
  if (initialHash && document.getElementById(initialHash)) {
    showSection(initialHash);
  } else {
    showSection("home");
  }
});


const phoneInput = document.getElementById("phoneInput");
if (phoneInput) {
  phoneInput.addEventListener("input", function (e) {
    let x = e.target.value.replace(/\D/g, "").slice(0, 10);
    let formatted = "";

    if (x.length > 0) formatted = "(" + x.substring(0, 3);
    if (x.length >= 4) formatted += ") " + x.substring(3, 6);
    if (x.length >= 7) formatted += "-" + x.substring(6, 10);

    e.target.value = formatted;
  });
}

