  const scrollTopBtn = document.getElementById("scrollTopBtn");

  // Show button when scrolled down
  window.onscroll = () => {
    scrollTopBtn.style.display = window.scrollY > 200 ? "flex" : "none";
  };

  // Scroll to top on click
  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
