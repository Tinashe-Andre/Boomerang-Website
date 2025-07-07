//switches the background image every 4 seconds
const slideImages = [
    'images/about-bg.jpg',
    'images/about-bg-2.jpg',
    'images/about-bg-3.jpg'
  ];

  let currentIndex = 0;

  const slides = document.querySelectorAll('.bg-slide');
  let currentSlide = slides[0];
  let nextSlide = slides[1];

  function switchBackground() {
    currentIndex = (currentIndex + 1) % slideImages.length;

    // Update the background of the "next" slide
    nextSlide.style.backgroundImage = `url('${slideImages[currentIndex]}')`;

    // Trigger fade effect
    nextSlide.classList.add('current');
    currentSlide.classList.remove('current');

    // Swap slide references
    [currentSlide, nextSlide] = [nextSlide, currentSlide];
  }

  setInterval(switchBackground, 4000);