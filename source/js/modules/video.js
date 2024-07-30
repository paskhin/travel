const PlayButton = document.querySelector('[data-video="video-button"]');
const Iframe = document.getElementById('video');

export const videoPlay = () => {
  PlayButton.addEventListener('click', () => {
    Iframe.style.display = 'block';
    Iframe.style.zIndex = '10';
    PlayButton.style.display = 'none';
    Iframe.src = Iframe.src + '&autoplay=1&muted=1';
  });
};

