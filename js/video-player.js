class VideoPlayer extends HTMLElement {
  static get observedAttributes() {
    return ['poster', 'src', 'type'];
  }

  connectedCallback() {
    this.renderVideo();
  }

  attributeChangedCallback() {
    this.renderVideo();
  }

  renderVideo() {
    const poster = this.getAttribute('poster') || '';
    const src = this.getAttribute('src') || '';
    const type = this.getAttribute('type') || 'video/mp4';

    this.innerHTML = `
      <video
        controls
        controlsList="nodownload noplaybackrate"
        disablePictureInPicture
        oncontextmenu="return false;"
        preload="auto"
        poster="${poster}">
        <source src="${src}" type="${type}">
        Your browser does not support the video tag.
      </video>
    `.trim();
  }
}

customElements.define('video-player', VideoPlayer);
