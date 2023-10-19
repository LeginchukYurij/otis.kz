const collapseButtons = document.querySelectorAll('.accordion-item__head');


if (collapseButtons.length) {
  collapseButtons.forEach((btn) => {
    btn.addEventListener('click', function () {
      const container = this.closest('.accordion-item');
      const list = container.querySelector('.accordion-item__body-container');


      if (list.classList.contains('container--active')) {
        container.classList.remove('active');
        list.classList.remove('container--active');
        list.style.maxHeight = 0;
      } else {
        container.classList.add('active');
        list.classList.add('container--active');
        list.style.maxHeight = list.scrollHeight + 'px';
      }
    });
  });
}
