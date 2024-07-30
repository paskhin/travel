export const initSwiper = () => {
  const slides = document.querySelectorAll('[data-hero="hero-item"]');
  const slidesArr = [...slides];
  const swiper = new window.Swiper('[data-hero="hero-slider"]', {
    loop: true,
    pagination: {
      el: '[data-hero="hero-pagination"]',
      clickable: true,
    },
    breakpoints: {
      1200: {
        slidesPerView: 1,
        spaceBetween: 0,
        allowTouchMove: true,
        tabindex: 0,
      },
    },
  });
  slidesArr.forEach((slide) => {
    slide.setAttribute('tabindex', '0');
  });
};

