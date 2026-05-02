(() => {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  const html = `
    <header class="header">
      <nav class="nav">
        <a href="index.html" class="nav-logo">DHL快递</a>
        <div class="nav-links">
          <a href="solitaire.html" class="nav-link">Solitaire</a>
        </div>
      </nav>
    </header>
  `;

  document.currentScript.insertAdjacentHTML('afterend', html);
})();
