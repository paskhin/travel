export const initGallerySwiper = () => {
  const buttonNext = document.querySelector('[data-gallery="button-next"]');
  const buttonPrev = document.querySelector('[data-gallery="button-prev"]');
  const slides = document.querySelectorAll('[data-gallery="gallery-item"]');
  const slidesArr = [...slides];
  const swiper = new window.Swiper('[data-gallery="gallery-slider"]', {
    loop: true,
    navigation: {
      nextEl: buttonNext,
      prevEl: buttonPrev,
    },
    breakpoints: {
      1200: {
        slidesPerView: 'auto',
        slidesPerGroup: 2,
        spaceBetween: 5,
        allowTouchMove: false,
        initialSlide: 1,
      },
      768: {
        slidesPerView: 3,
        slidesPerGroup: 2,
        spaceBetween: 5,
        allowTouchMove: true,
        initialSlide: 1,
      },
      0: {
        initialSlide: 1,
        slidesPerView: 2,
        spaceBetween: 2,
        allowTouchMove: true,
        slidesPerGroup: 2,
      },
    },
  });
  slidesArr.forEach((slide) => {
    slide.setAttribute('tabindex', '0');
  });

};

