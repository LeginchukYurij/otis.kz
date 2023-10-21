import Inputmask from '../../../../node_modules/inputmask/dist/inputmask.es6';

const inputs = document.querySelectorAll('.input-wrap input');

if (inputs.length) {
    inputs.forEach((input) => {
        const container = input.closest('.input-wrap');

        input.onblur = function () {
            if (input.value == '') { // не email
                container.classList.remove('active');
            }
        };

        input.onfocus = function () {
            container.classList.add('active');
        };
    });
}


const tels = document.querySelectorAll('input.tel-mask');

if (tels.length) {
    tels.forEach((tel) => {
        Inputmask({ 'mask': '+7 (999) 999-99-99' }).mask(tel);
    });
}