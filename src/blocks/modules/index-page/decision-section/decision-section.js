const tariffTabBtns = document.querySelectorAll(
  '.tariff-card .tariff-card__tabs-btn'
);

if (tariffTabBtns.length) {
  tariffTabBtns.forEach((tab) => {
    tab.addEventListener('click', function (e) {
      e.preventDefault();

      const card = this.closest('.tariff-card');
      const tabNum = this.dataset.tab;

      card.querySelectorAll('.tariff-card__tabs-btn').forEach((tab) => {
        tab.classList.remove('active');
      });

      card.querySelectorAll('.tariff-card__tabs-cotnent').forEach((tab) => {
        tab.classList.remove('active');
      });

      this.classList.add('active');

      card
        .querySelector(`.tariff-card__tabs-cotnent[data-tab='${tabNum}']`)
        .classList.add('active');
    });
  });
}
