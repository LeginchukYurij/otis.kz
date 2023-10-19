import Swiper from '../../../../../node_modules/swiper/swiper-bundle.min.mjs';

if (document.querySelector('.features-cards-container.swiper ')) {
    let slider = null;

    function initSlider() {
        if (window.matchMedia('(max-width: 1224px)').matches) {
            slider = new Swiper('.features-cards-container.swiper ', {
                slidesPerView: 'auto',
                spaceBetween: 20,

                breakpoints: {
                    300: {
                        slidesPerView: 'auto',
                        spaceBetween: 10,
                        // autoHeight: true,
                    },
                    768: {
                        spaceBetween: 20,
                    },
                }
            });
            setTimeout(() => {
                slider.update();
            }, 500);

        } else {
            console.log(slider);
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