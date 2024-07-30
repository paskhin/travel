export const initTraningSwiper = () => {
  const buttonNext = document.querySelector('[data-instructors="button-next"]');
  const buttonPrev = document.querySelector('[data-instructors="button-prev"]');
  const slides = document.querySelectorAll('[data-instructors="instructors-item"]');
  const slidesArr = [...slides];
  const swiper = new window.Swiper('[data-instructors="instructors-slider"]', {
    loop: false,
    navigation: {
      nextEl: buttonNext,
      prevEl: buttonPrev,
    },
    breakpoints: {
      1200: {
        initialSlide: 1,
        slidesPerView: 4,
        spaceBetween: 20,
        allowTouchMove: false,
        tabindex: 0,
      },
      768: {
        initialSlide: 1,
        slidesPerView: 3,
        spaceBetween: 20,
        allowTouchMove: true,
      },
      0: {
        slidesPerView: 1,
        spaceBetween: 0,
        allowTouchMove: true,
        initialSlide: 3,
      },
    },
  });
  slidesArr.forEach((slide) => {
    slide.setAttribute('tabindex', '0');
  });

};

