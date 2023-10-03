import NiceSelect from '../../../../node_modules/nice-select2/dist/js/nice-select2';

const selects = document.querySelectorAll('.n-select');

if (selects.length) {
  selects.forEach((select) => {
    console.log(NiceSelect);
    new NiceSelect(select);
  });
}
