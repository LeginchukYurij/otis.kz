import { CountUp } from '../../../../../node_modules/countup.js/dist/countUp';

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

const container = document.querySelector('.stats-section .counts-row');

if(container) {
  startCounts(container );
}