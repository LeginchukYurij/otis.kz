import Swiper from '../../../../../node_modules/swiper/swiper-bundle.min.mjs';


if(document.querySelector('.tariffs-grid-container.swiper')) {

  new Swiper('.tariffs-grid-container.swiper', {
    slidesPerView: 3,
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
      768: {
        slidesPerView: 'auto',
        spaceBetween: 20
      },
      1125: {
        slidesPerView: 3,
        spaceBetween: 20,
      }
    },

    navigation: {
      nextEl: '.decision-section .swiper-button-next.next',
      prevEl: '.decision-section .swiper-button-prev.prev',
    },
  });
}


const tariffTabBtns = document.querySelectorAll(
  '.tariff-card .tariff-card__tabs-btn'
);

if (tariffTabBtns.length) {
  tariffTabBtns.forEach((tab) => {
    tab.addEventListener('click', function (e) {
      e.preventDefault();

      const card = this.closest('.tariff-card');
      const tabNum = this.dataset.tab;

      card.querySelectorAll('.tariff-card__tabs-btn').forEach((tab) => {
        tab.classList.remove('active');
      });

      card.querySelectorAll('.tariff-card__tabs-cotnent').forEach((tab) => {
        tab.classList.remove('active');
      });

      this.classList.add('active');

      card
        .querySelector(`.tariff-card__tabs-cotnent[data-tab='${tabNum}']`)
        .classList.add('active');
    });
  });
}
