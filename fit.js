// Scale the 390x844 phone to fit the window.
(function () {
  function fit() {
    var p = document.querySelector('.phone');
    if (!p) return;
    var s = Math.min(1, window.innerWidth / 390, window.innerHeight / 844);
    p.style.transform = s < 1 ? 'scale(' + s + ')' : '';
    p.style.margin = s < 1 ? ((844 * s - 844) / 2) + 'px ' + ((390 * s - 390) / 2) + 'px' : '';
  }
  window.addEventListener('resize', fit);
  document.addEventListener('DOMContentLoaded', fit);
})();
