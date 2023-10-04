import Swiper from '../../../../../node_modules/swiper/swiper-bundle.min.mjs';

new Swiper('.hero-section__slider', {
  slidesPerView: 1,
  loop: true,
  speed: 1000,
  //   direction: 'vertical',

  pagination: {
    el: '.swiper-pagination.hero-pagination',
    clickable: true,
  },

  autoplay: {
    delay: 3000,
  },
});
