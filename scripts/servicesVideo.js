window.addEventListener('load', () => {
  const video = document.querySelector('.video-bg');
  video.addEventListener('canplaythrough', () => {
    video.classList.add('ready');
  });
});
