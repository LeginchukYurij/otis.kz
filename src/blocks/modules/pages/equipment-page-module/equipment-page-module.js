
import Swiper from '../../../../../node_modules/swiper/swiper-bundle.min.mjs';


if (document.querySelector('.tab-actions-container.swiper')) {
    let slider = null;

    function initSlider() {
        if (window.matchMedia('(max-width: 980px)').matches) {
            slider = new Swiper('.tab-actions-container.swiper', {
                slidesPerView: 'auto',
                spaceBetween: 39,
                freeMode: true,

                breakpoints: {
                    300: {
                        slidesPerView: 'auto',
                        spaceBetween: 22,

                    },
                    768: {
                        slidesPerView: 'auto',
                        spaceBetween: 39,

                    },
                },
            });

            setTimeout(() => {
                slider.update();
            }, 500);
        } else {
            if (slider) {
                slider.destroy();
                slider.disable();
            }
        }
    }

    initSlider();

    window.addEventListener('resize', () => {
        initSlider();
    });
}