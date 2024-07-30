export const initToursSwiper = () => {
  const buttonNext = document.querySelector('[data-tours="button-next"]');
  const buttonPrev = document.querySelector('[data-tours="button-prev"]');
  const slides = document.querySelectorAll('[data-tours="tours-item"]');
  const slidesArr = [...slides];
  const swiper = new window.Swiper('[data-tours="tours-slider"]', {
    loop: false,
    navigation: {
      nextEl: buttonNext,
      prevEl: buttonPrev,
    },
    breakpoints: {
      1200: {
        initialSlide: 1,
        slidesPerView: 3,
        spaceBetween: 30,
        allowTouchMove: false,
        tabindex: 0,
      },
      768: {
        initialSlide: 1,
        slidesPerView: 2,
        spaceBetween: 18,
        allowTouchMove: true,
      },
      0: {
        initialSlide: 1,
        slidesPerView: 1,
        spaceBetween: 0,
        allowTouchMove: true,
      },
    },
  });
  slidesArr.forEach((slide) => {
    slide.setAttribute('tabindex', '0');
  });

};

