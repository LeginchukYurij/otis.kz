import Swiper from '../../../../node_modules/swiper/swiper-bundle.min.mjs';

if (document.querySelector('.sertificates__secondary-list-container')) {
    let slider = null;

    function initSlider() {
        if (window.matchMedia('(max-width: 1124px)').matches) {
            slider = new Swiper('.sertificates__secondary-list-container', {
                slidesPerView: 'auto',
                spaceBetween: 63,

                breakpoints: {
                    320: {
                        slidesPerView: 'auto',
                        spaceBetween: 10
                    },
                    768: {
                        slidesPerView: 'auto',
                        spaceBetween: 60,
                    },
                    1124: {
                        slidesPerView: 'auto',
                        spaceBetween: 63,
                    }
                }
            });
        } else {

            if (slider) {

                slider.destroy();
            }
        }
    }

    initSlider();

    window.addEventListener('resize', () => {
        initSlider();
    });
}