  const images = [
    'images/home-bg.jpeg',
    'images/home-bg-2.jpg',
    'images/home-bg-3.jpg'
  ];

  let current = 0;
  const homeSection = document.querySelector('.home');

  function switchBackground() {
    current = (current + 1) % images.length;
    homeSection.style.setProperty('--bg-img', `url('${images[current]}')`);
    homeSection.style.backgroundImage = `url('${images[current]}')`;
  }

  // Optional: Also change the ::after layer
  function switchAfterBackground() {
    homeSection.classList.add('sliding');
    document.querySelector('.home::after'); // doesn't work in JS
  }

  setInterval(switchBackground, 3500); // change every 5 seconds

