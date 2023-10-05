import { TimelineMax } from 'gsap/all';

function getRandom(max) {
  return Math.random() * max;
}

const circles = document.querySelectorAll('.geo-section__map svg > circle');
const groups = document.querySelectorAll('.geo-section__map svg > g');

const all = [...circles, ...groups];

all.forEach((item) => {
  new TimelineMax({ repeat: -1 })
    .to(item, 1, {
      scale: 1,
      ease: 'Power1.easeInOut',
      transformOrigin: 'center center',
      delay: getRandom(0.8),
      opacity: 1,
    })

    .to(item, 1, {
      scale: 0.3,
      ease: 'Power1.easeInOut',
      transformOrigin: 'center center',
      // delay: getRandom(1),
      opacity: 0,
    })

    .to(item, 1.5, {
      scale: 1,
      ease: 'Power1.easeInOut',
      transformOrigin: 'center center',
      delay: getRandom(0.8),
      opacity: 1,
    });
});
