import { gsap } from 'gsap';

const target = document.querySelector('.shares-hero-section .shape2');

if(target) {
  gsap.fromTo(
    target,
    {
      x: 700,
      duration: 0.8,
      ease: 'power1.inOut',
      opacity: 0,
      delay: 0.5,
    },
    { x: 0, duration: 1, ease: 'power1.inOut', opacity: 1 }
  );
}