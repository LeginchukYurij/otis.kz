import Swiper from '../../../../../node_modules/swiper/swiper-bundle.min.mjs';

new Swiper('.clients-section__content-slider', {
  slidesPerView: 5,
  spaceBetween: 18,
  navigation: {
    nextEl: '.clients-section__content-slider .swiper-button-next.next',
    prevEl: '.clients-section__content-slider .swiper-button-prev.prev',
  },
});
