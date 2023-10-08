import { gsap } from 'gsap';
import { TweenMax, TimelineMax } from 'gsap/all';
import Typed from 'typed.js';

window.addEventListener('DOMContentLoaded', () => {
  const string = document.querySelector('.app-section .shape5 .typed')?.dataset
    .string;


  if(string) {  
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
  }
});

const target1 = document.querySelector('.app-section .shape2');

if(target1) {
  TweenMax.fromTo(
    target1,
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
}

const target2 = document.querySelector('.app-section .shape4');
if(target2) {
  new TimelineMax({ repeat: -1 })
    .to(target2, 3, {
      y: '-=30',
      x: '+=20',
      rotation: '-=5',
      ease: 'Power1.easeInOut',
    })

    .to(target2, 2, {
      y: '+=30',
      x: '-=20',
      rotation: '-=5',
      ease: 'Power1.easeInOut',
    })

    .to(target2, 3, {
      y: '-=20',
      rotation: '+=5',
      ease: 'Power1.easeInOut',
    })

    .to(target2, 3, {
      y: '+=20',
      rotation: '+=5',
      ease: 'Power1.easeInOut',
    });
}


const target3 = document.querySelector('.app-section .shape3');
if(target3) {
  new TimelineMax({ repeat: -1 })
    .to(target3, 1, {
      y: '-=15',
      ease: 'Power1.easeInOut',
    })

    .to(target3, 0.6, {
      y: '0',
      ease: 'Power1.easeInOut',
    });
}

const target4 = document.querySelector('.app-section .shape6');
if(target4) {
  TweenMax.to(target4, 0.6, {
    scale: 1.06,
    repeat: -1,
    yoyo: true,
    ease: 'Power0.easeNone',
  });
}
