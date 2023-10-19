import Swiper from '../../../../../node_modules/swiper/swiper-bundle.min.mjs';

if(document.querySelector('.steps-grid-container')) {
  let slider = null;

  function initSlider() {
    if (window.matchMedia('(max-width: 1224px)').matches) {
      slider = new Swiper('.steps-grid-container', {
        slidesPerView: 'auto',
        spaceBetween: 20,
      });
    } else {
      console.log(slider);
      if(slider) {
        slider.destroy();
      }
    }
  }

  initSlider();

  window.addEventListener('resize', () => {
    initSlider();
  });
}