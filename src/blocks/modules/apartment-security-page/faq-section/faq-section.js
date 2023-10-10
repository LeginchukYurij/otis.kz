const faqItems = document.querySelectorAll('.faq-list__item');

if(faqItems.length) {
  faqItems.forEach(item => {
    item.querySelector('.faq-list__item-head').addEventListener('click', function() {
      this.closest('.faq-list__item').classList.toggle('opened');
    });
  });
}
