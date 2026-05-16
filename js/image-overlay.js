(function () {
  var overlay = document.getElementById('imgOverlay');
  var overlayImg = document.getElementById('overlayImg');

  document.querySelectorAll('.explore-content img').forEach(function (img) {
    img.style.cursor = 'zoom-in';
    img.addEventListener('click', function () {
      overlayImg.src = img.src;
      overlayImg.alt = img.alt;
      overlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  overlay.addEventListener('click', function () {
    overlay.classList.remove('active');
    document.body.style.overflow = '';
    overlayImg.src = '';
  });
})();
