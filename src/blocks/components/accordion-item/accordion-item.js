const accordionItems = document.querySelectorAll('.accordion-item ');

if(accordionItems.length) {
  accordionItems.forEach(item => {
    item.querySelector('.accordion-item__head').addEventListener('click', function() {
      this.closest('.accordion-item').classList.toggle('opened');
    });
  });
}
