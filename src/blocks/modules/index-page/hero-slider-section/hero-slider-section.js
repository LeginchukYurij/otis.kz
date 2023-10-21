import Swiper from '../../../../../node_modules/swiper/swiper-bundle.min.mjs';
import { CountUp } from '../../../../../node_modules/countup.js/dist/countUp';
import { gsap } from 'gsap';

function startCounts(container) {
  const targets = container.querySelectorAll('.clock-count__text strong small');

  if (targets.length) {
    targets.forEach((element) => {
      const num = Number(element.dataset.num);

      const options = {
        decimalPlaces: num % 1 == 0 ? 0 : 2,
        separator: ' ',
      };

      let demo = new CountUp(element, num, options);
      if (!demo.error) {
        demo.start();
      } else {
        console.error(demo.error);
      }
    });
  }
}

function startAnimation(activeSlide) {
  gsap.fromTo(
    activeSlide.querySelector('.shape1'),
    {
      y: -700,
      duration: 1,
      ease: 'power1.inOut',
      opacity: 0,
      delay: 0.5,
    },
    {
      y: 0,
      duration: 1,
      ease: 'power1.inOut',
      opacity: 1,
      delay: 0.5,
    }
  );

  gsap.fromTo(
    activeSlide.querySelector('.shape2'),
    {
      x: 700,
      duration: 0.8,
      ease: 'power1.inOut',
      opacity: 0,
      delay: 0.5,
    },
    { x: 0, duration: 1, ease: 'power1.inOut', opacity: 1 }
  );

  gsap.fromTo(
    activeSlide.querySelector('.shape3'),
    {
      y: 700,
      duration: 1.2,
      ease: 'power1.inOut',
      opacity: 0,
      delay: 0.5,
    },
    {
      y: 0,
      duration: 1.2,
      ease: 'power1.inOut',
      opacity: 1,
      delay: 0.5,
    }
  );
}

if (document.querySelector('.hero-section__slider.swiper')) {

  new Swiper('.hero-section__slider', {
    slidesPerView: 1,
    loop: true,
    speed: 1000,
    spaceBetween: 50,
    autoHeight: true,
    //   direction: 'vertical',

    pagination: {
      el: '.swiper-pagination.hero-pagination',
      clickable: true,
    },

    // autoplay: {
    //   delay: 3000,
    // },

    on: {
      afterInit: function (swiper) {
        let activeSlide = document.querySelector(
          `.hero-section__slider .swiper-slide:nth-child(${swiper.activeIndex + 1
          })`
        );

        startCounts(activeSlide);
        startAnimation(activeSlide);
      },

      slideChangeTransitionStart: function (swiper) {
        let activeSlide = document.querySelector(
          `.hero-section__slider .swiper-slide:nth-child(${swiper.activeIndex + 1
          })`
        );

        startCounts(activeSlide);
        startAnimation(activeSlide);
      },
    },
  });
}