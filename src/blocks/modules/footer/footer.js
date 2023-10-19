const collapseButtons = document.querySelectorAll('.menu-list__collapse');


if(collapseButtons.length) {
  collapseButtons.forEach((btn) => {
    btn.addEventListener('click', function () {
      const container = this.closest('.another-cats');
      const list = container.querySelector('.menu-list');


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

