(() => {
  // Only activate on touch/mobile devices
  if (!window.matchMedia('(max-width: 768px)').matches) return;

  const overlay = document.createElement('div');
  overlay.className = 'img-overlay';
  const overlayImg = document.createElement('img');
  overlay.appendChild(overlayImg);
  document.body.appendChild(overlay);

  const selectors = [
    '.explore-full-image',
    '.explore-row-3 img',
    '.explore-row-2 img',
    '.cast-grid img'
  ];

  document.querySelectorAll(selectors.join(',')).forEach(img => {
    img.addEventListener('click', () => {
      overlayImg.src = img.src;
      overlayImg.alt = img.alt;
      overlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  overlay.addEventListener('click', () => {
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  });
})();
