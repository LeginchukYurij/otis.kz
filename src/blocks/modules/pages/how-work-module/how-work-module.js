import Swiper from '../../../../../node_modules/swiper/swiper-bundle.min.mjs';

(() => {
  const buttons = document.querySelectorAll('.how-work__action');

  if (buttons.length) {
    buttons.forEach((btn) => {
      btn.addEventListener('click', function (e) {
        e.preventDefault();

        const num = this.dataset.slide;

        document.querySelectorAll('.how-work__action').forEach((item) => {
          item.classList.remove('active');
        });
        document.querySelectorAll('.how-work__img-slider .swiper-slide').forEach((item) => {
          item.classList.remove('active');
        });
        document.querySelectorAll('.how-work__text-slider .swiper-slide').forEach((item) => {
          item.classList.remove('active');
        });

        this.classList.add('active');
        document.querySelector(`.how-work__img-slider .swiper-slide[data-slide='${num}']`).classList.add('active');
        document.querySelector(`.how-work__text-slider .swiper-slide[data-slide='${num}']`).classList.add('active');
      });
    });
  }





  if (document.querySelector('.how-work__actions-container')) {

    new Swiper('.how-work__actions-container', {
      slidesPerView: 'auto',
      spaceBetween: 39,
      freeMode: true,

      breakpoints: {
        320: {
          slidesPerView: 'auto',
          spaceBetween: 22
        },
        768: {
          slidesPerView: 'auto',
          spaceBetween: 39,
        },
      },

    });
  }

})();







