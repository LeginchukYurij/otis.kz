import Swiper from '../../../../../node_modules/swiper/swiper-bundle.min.mjs';

if (document.querySelector('.approach-section__grid-container.swiper')) {

    new Swiper('.approach-section__grid-container.swiper', {
        slidesPerView: 4,
        spaceBetween: 19,

        breakpoints: {
            320: {
                slidesPerView: 'auto',
                spaceBetween: 10,
            },
            1098: {
                slidesPerView: 4,
                spaceBetween: 19,
            }
        }
    });
}