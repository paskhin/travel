const buttonNext = document.querySelector('[data-advantages="button-next"]');
const buttonPrev = document.querySelector('[data-advantages="button-prev"]');

export const initSwiperAdvantages = () => {
  const resizableSwiper = (breakpoint, swiperClass, swiperSettings) => {
    let swiper;

    breakpoint = window.matchMedia(breakpoint);

    const enableSwiper = function (className, settings) {
      swiper = new window.Swiper(className, settings);
    };

    const checker = function () {
      if (breakpoint.matches) {
        return enableSwiper(swiperClass, swiperSettings);
      } else {
        if (swiper !== undefined) swiper.destroy(true, true);
        return;
      }
    };

    breakpoint.addEventListener('change', checker);
    checker();
  };

  resizableSwiper(
    '(min-width: 1200px)',
    '[data-advantages="advantages-slider"]',
    {
      loop: false,
      navigation: {
        nextEl: buttonNext,
        prevEl: buttonPrev,
      },
      breakpoints: {
        1200: {
          initialSlide: 2,
          slidesPerView: 'auto',
          spaceBetween: 30,
          allowTouchMove: false,
          tabindex: 0,
          centeredSlides: true,
        },
      },
    },
  );
};
