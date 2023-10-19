import Swiper from '../../../../../node_modules/swiper/swiper-bundle.min.mjs';


if(document.querySelector('.latest-news__grid-container.swiper')) {

  new Swiper('.latest-news__grid-container.swiper', {
    slidesPerView: 4,
    spaceBetween: 20,

    breakpoints: {
      320: {
        slidesPerView: 'auto',
        spaceBetween: 7.68
      },
      577: {
        slidesPerView: 'auto',
        spaceBetween: 20
      },
      980: {
        slidesPerView: 4,
        spaceBetween: 20,
      }
    },

  });
}