export const initReviewsSwiper = () => {
  const buttonNext = document.querySelector('[data-reviews="button-next"]');
  const buttonPrev = document.querySelector('[data-reviews="button-prev"]');
  const slides = document.querySelectorAll('[data-reviews="reviews-item"]');
  const slidesArr = [...slides];
  const swiper = new window.Swiper('[data-reviews="reviews-slider"]', {
    loop: true,
    navigation: {
      nextEl: buttonNext,
      prevEl: buttonPrev,
    },
    breakpoints: {
      1200: {
        initialSlide: 1,
        slidesPerView: 'auto',
        spaceBetween: '10%',
        allowTouchMove: false,
        tabindex: 0,
      },
      768: {
        initialSlide: 1,
        slidesPerView: 'auto',
        spaceBetween: 30,
        allowTouchMove: true,
        centeredSlides: false,
      },
      0: {
        initialSlide: 1,
        slidesPerView: 1,
        spaceBetween: 0,
        centeredSlides: true,
        allowTouchMove: true,
      },
    },
  });
  slidesArr.forEach((slide) => {
    slide.setAttribute('tabindex', '0');
  });

};

