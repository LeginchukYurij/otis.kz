import { TweenMax, TimelineMax } from 'gsap/all';

const target2 = document.querySelector('.employees-section .shape2');
if(target2) {
  new TimelineMax({ repeat: -1 })
    .to(target2, 1, {
      y: '-=15',
      ease: 'Power1.easeInOut',
    })

    .to(target2, 0.6, {
      y: '0',
      ease: 'Power1.easeInOut',
    });
}


const target3 = document.querySelector('.employees-section .shape3 .pulse-box__shadow ');
if(target3) {
  TweenMax
    .to(target3, 0.9, {
      opacity: .3,
      scale: .7,
      repeat: -1,
      yoyo: true,
      ease: 'Power1.easeInOut',
    });
}

const target4 = document.querySelector('.employees-section .shape3 .pulse-box__content  ');
if(target4) {
  TweenMax.to(target4, 0.9, {
    scale: 0.9,
    repeat: -1,
    yoyo: true,
    ease: 'Power1.easeInOut',
  });
}

const target5 = document.querySelector('.employees-section  .shape4');
const target6 = document.querySelector('.employees-section  .shape5');
const target7 = document.querySelector('.employees-section  .shape6');
if(target5 && target6 && target7) {
  new TimelineMax({ repeat: -1 })
    .to(target5, 1, {
      opacity: 1,
      ease: 'Power1.easeInOut',
    })

    .to(target6, 1, {
      opacity: 1,
      ease: 'Power1.easeInOut',
    })

    .to(target7, 1, {
      opacity: 1,
      ease: 'Power1.easeInOut',
    })

    .to(target5, 1, {
      opacity: 0,
      ease: 'Power1.easeInOut',
    })

    .to(target6, 1, {
      opacity: 0,
      ease: 'Power1.easeInOut',
    })

    .to(target7, 1, {
      opacity: 0,
      ease: 'Power1.easeInOut',
    });
}