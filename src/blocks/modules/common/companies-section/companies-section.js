import Swiper from '../../../../../node_modules/swiper/swiper-bundle.min.mjs';

const slider = document.querySelector('.companies-section__content-slider');

if(slider) {
  new Swiper(slider , {
    slidesPerView: 3,
    spaceBetween: 20,
    navigation: {
      nextEl: '.companies-section .swiper-button-next.next',
      prevEl: '.companies-section .swiper-button-prev.prev',
    },
  });
}
