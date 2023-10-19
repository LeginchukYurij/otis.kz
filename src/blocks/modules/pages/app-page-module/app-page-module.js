import Swiper from '../../../../../node_modules/swiper/swiper-bundle.min.mjs';

if (document.querySelector('.access-sec__list-container.swiper')) {

    new Swiper('.access-sec__list-container.swiper', {
        slidesPerView: 3,
        spaceBetween: 20,
        // freeMode: true,

        breakpoints: {
            320: {
                slidesPerView: 'auto',
                spaceBetween: 10,
                autoHeight: true,
            },
            768: {
                autoHeight: false,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 20,

            },
        },

    });
}