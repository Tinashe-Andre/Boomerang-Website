
  const modal = document.getElementById("imgModal");
  const modalImg = document.getElementById("modalImage");
  const modalCaption = document.getElementById("modalCaption");
  const modalCounter = document.getElementById("modalCounter");
  const closeBtn = document.querySelector(".close-btn");
  const leftBtn = document.querySelector(".nav-btn.left");
  const rightBtn = document.querySelector(".nav-btn.right");
  const galleryItems = Array.from(document.querySelectorAll(".gallery-item img"));
  let currentIndex = 0;

  function openModal(index) {
    currentIndex = index;
    const img = galleryItems[index];
    modal.style.display = "block";
    modalImg.src = img.src;
    modalCaption.textContent = img.dataset.caption || img.alt || "";
    modalCounter.textContent = `${index + 1} of ${galleryItems.length}`;
  }

  function closeModal() {
    modal.style.display = "none";
  }

  function showNext(n) {
    currentIndex = (currentIndex + n + galleryItems.length) % galleryItems.length;
    openModal(currentIndex);
  }

  // Event listeners
  galleryItems.forEach((img, index) => {
    img.addEventListener("click", () => openModal(index));
  });

  closeBtn.onclick = closeModal;
  leftBtn.onclick = () => showNext(-1);
  rightBtn.onclick = () => showNext(1);

  window.addEventListener("keydown", (e) => {
    if (!modal.style.display.includes("block")) return;
    if (e.key === "ArrowRight") showNext(1);
    if (e.key === "ArrowLeft") showNext(-1);
    if (e.key === "Escape") closeModal();
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });

