import Swiper from '../../../../../node_modules/swiper/swiper-bundle.min.mjs';

const slider = document.querySelector('.review-popup-inner.swiper');

if (slider) {
    const swiper = new Swiper(slider, {
        slidesPerView: 1,
        spaceBetween: 150,
        navigation: {
            nextEl: '.review-popup-inner .swiper-button-next.next',
            prevEl: '.review-popup-inner .swiper-button-prev.prev',
        },
    });


    const reviews = document.querySelectorAll('.company-slide[data-trigger-modal="review"]');

    if (reviews.length) {
        reviews.forEach((review) => {
            review.addEventListener('click', function (e) {
                e.preventDefault();

                const num = this.dataset.num - 1;

                swiper.slideTo(num);
            });
        });
    }

    const nextBtns = document.querySelectorAll('.next-review');

    if (nextBtns.length) {
        nextBtns.forEach((btn) => {
            btn.addEventListener('click', function (e) {
                e.preventDefault();

                const num = this.closest('.review-popup__card').dataset.num;

                swiper.slideTo(num);
            });
        });
    }
}


