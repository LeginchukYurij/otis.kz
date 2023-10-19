const telAction = document.querySelector('.js-tel-action');

if (telAction) {
  telAction.addEventListener('click', function (e) {
    e.preventDefault();

    const target = this.closest('.tel-action-wrapper').querySelector('.tel-action-drop');

    target.classList.toggle('active');
  });
}