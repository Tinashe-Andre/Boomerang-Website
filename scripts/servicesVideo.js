window.addEventListener('load', () => {
  const video = document.querySelector('.video-bg');
  const playOverlay = document.querySelector('.video-play-overlay');

  // Try to play video and check for failure
  video.play().then(() => {
    // Success: hide overlay and fade in video
    video.classList.add('ready');
    playOverlay.classList.remove('active');
  }).catch(() => {
    // Failed: show overlay so user can tap to play
    playOverlay.classList.add('active');
  });

  // On overlay click or keyboard enter/space, play the video
  function playVideo() {
    video.play().then(() => {
      video.classList.add('ready');
      playOverlay.classList.remove('active');
    }).catch(() => {
      // Still failed, do nothing
    });
  }

  playOverlay.addEventListener('click', playVideo);
  playOverlay.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      playVideo();
    }
  });
});
