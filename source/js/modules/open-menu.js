const navMain = document.querySelector('[data-header="main-nav"]');
const navToggle = document.querySelector('[data-header="button-menu"]');
const header = document.querySelector('[data-header="header-open"]');
const headerContainer = document.querySelector('[data-header="header-container"]');
const heroContainer = document.querySelector('[data-hero="hero-container"]');
const wrapper = document.querySelector('[data-wrapper="off-scroll"]');
export const openMenu = () => {
  navToggle.addEventListener('click', () => {
    if (header.classList.contains('header-wrapper__opened')) {
      header.classList.remove('header-wrapper__opened');
      wrapper.classList.remove('scroll-off');
    } else {
      wrapper.classList.add('scroll-off');
      header.classList.add('header-wrapper__opened');
      headerContainer.classList.add('header-container--opened');
      heroContainer.classList.add('container--open-menu');
    }

    if (navMain.classList.contains('main-nav--opened')) {
      navMain.classList.remove('main-nav--opened');
      headerContainer.classList.remove('header-container--opened');
      heroContainer.classList.remove('container--open-menu');
      wrapper.classList.remove('scroll-off');
    } else {
      navMain.classList.add('main-nav--opened');
      wrapper.classList.add('scroll-off');
    }
  });

  navMain.addEventListener('click', () => {
    header.classList.remove('header-wrapper__opened');
    headerContainer.classList.remove('header-container--opened');
    heroContainer.classList.remove('container--open-menu');
    navMain.classList.remove('main-nav--opened');
    wrapper.classList.remove('scroll-off');
  });
};
