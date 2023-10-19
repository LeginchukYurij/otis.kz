import Swiper from '../../../../../node_modules/swiper/swiper-bundle.min.mjs';

if(document.querySelector('.reward-row__images.swiper')) {

  new Swiper('.reward-row__images.swiper', {
    slidesPerView: 5,
    spaceBetween: 45,

    breakpoints: {
      320: {
        slidesPerView: 'auto',
        spaceBetween: 35
      },
      768: {
        slidesPerView: 5,
        spaceBetween: 35,
      },
      800: {
        slidesPerView: 5,
        spaceBetween: 45,
      }
    }
  });
}