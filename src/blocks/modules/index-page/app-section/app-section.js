import { gsap } from 'gsap';
import { TweenMax, TimelineMax } from 'gsap/all';
import Typed from 'typed.js';

window.addEventListener('DOMContentLoaded', () => {
  const string = document.querySelector('.app-section .shape5 .typed').dataset
    .string;

  const typed = new Typed(
    document.querySelector('.app-section .shape5 .typed'),
    {
      strings: [string, string, string],
      typeSpeed: 80,
      backSpeed: 0,
      backDelay: 1500,
      fadeOut: true,
      loop: true,
    }
  );
});

TweenMax.fromTo(
  document.querySelector('.app-section .shape2'),
  3,
  {
    rotation: 0,
    ease: 'none',
  },
  {
    rotation: 360,
    duration: 3,
    repeat: -1,
    ease: 'none',
  }
);

new TimelineMax({ repeat: -1 })
  .to(document.querySelector('.app-section .shape4'), 3, {
    y: '-=30',
    x: '+=20',
    rotation: '-=5',
    ease: 'Power1.easeInOut',
  })

  .to(document.querySelector('.app-section .shape4'), 2, {
    y: '+=30',
    x: '-=20',
    rotation: '-=5',
    ease: 'Power1.easeInOut',
  })

  .to(document.querySelector('.app-section .shape4'), 3, {
    y: '-=20',
    rotation: '+=5',
    ease: 'Power1.easeInOut',
  })

  .to(document.querySelector('.app-section .shape4'), 3, {
    y: '+=20',
    rotation: '+=5',
    ease: 'Power1.easeInOut',
  });

new TimelineMax({ repeat: -1 })
  .to(document.querySelector('.app-section .shape3'), 1, {
    y: '-=15',
    ease: 'Power1.easeInOut',
  })

  .to(document.querySelector('.app-section .shape3'), 0.6, {
    y: '0',
    ease: 'Power1.easeInOut',
  });

TweenMax.to(document.querySelector('.app-section .shape6'), 0.6, {
  scale: 1.06,
  repeat: -1,
  yoyo: true,
  ease: 'Power0.easeNone',
});
