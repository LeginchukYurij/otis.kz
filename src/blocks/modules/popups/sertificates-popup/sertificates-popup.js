import Swiper from '../../../../../node_modules/swiper/swiper-bundle.min.mjs';

const slider = document.querySelector('.sertificates-popup-inner.swiper');

if (slider) {
    const swiper = new Swiper(slider, {
        slidesPerView: 1,
        spaceBetween: 150,
        autoHeight: true,
        navigation: {
            nextEl: '.sertificates-popup-inner .r-nav.next',
            prevEl: '.sertificates-popup-inner .r-nav.prev',
        },
    });


    const sertificates = document.querySelectorAll('.sertificates__main-list [data-trigger-modal="sertificates"]');

    if (sertificates.length) {
        sertificates.forEach((sertificat) => {
            sertificat.addEventListener('click', function (e) {
                e.preventDefault();

                const num = this.dataset.num - 1;

                swiper.slideTo(num);
            });
        });
    }

}


