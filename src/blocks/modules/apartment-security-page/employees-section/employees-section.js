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


function upOnHover(event) {
  const t = this.dataset.target;
  const li = document.querySelector(`.employees-section__text ul li[data-target="${t}"]`);

  if(event.type == 'mouseover') {
    if(li) {
      li.classList.add('active');
    }
  }

  if (event.type == 'mouseout') {
    if(li) {
      li.classList.remove('active');
    }
  }
}

const dots = document.querySelectorAll('.employees-section .shape-dot');

if(dots.length) {
  dots.forEach((dot) => {
    dot.onmouseover = dot.onmouseout = upOnHover;
  });
} 