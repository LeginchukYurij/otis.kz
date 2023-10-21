const hamb = document.querySelector('.burger-menu');
const close = document.querySelector('.close-menu');
const back = document.querySelector('.menu-back');
const geo = document.querySelector('.select-geo-btn');

if (hamb) {
    hamb.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector('.mobile-menu').classList.add('active');
    });
}

if (close) {
    close.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector('.mobile-menu').classList.remove('active');
    });
}

if (back) {
    back.addEventListener('click', function (e) {
        e.preventDefault();

        this.closest('.menu-module').classList.remove('active');
    });
}

if (geo) {
    geo.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector('.geo-select').classList.add('active');
    });
}