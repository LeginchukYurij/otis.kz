const collapseButtons = document.querySelectorAll('.options-block__title');


if (collapseButtons.length) {
    collapseButtons.forEach((btn) => {
        btn.addEventListener('click', function () {
            const container = this.closest('.options-block');
            const list = container.querySelector('.options-block__grid-container');


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
