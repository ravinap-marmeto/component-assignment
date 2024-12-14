class CustomCard extends HTMLElement {
    constructor() {
        super();
        this.render();
    }

    render() {
        const hasImage = this.getAttribute('has-image') === 'true';
        const title = this.getAttribute('title') || 'Default Title';
        const subtitle = this.getAttribute('subtitle') || 'Default Subtitle';
        const body = this.getAttribute('body') || 'Default Body Content';
        const imageSrc = this.getAttribute('image-src') || '';

        this.innerHTML = `
        <div class="custom-card" data-has-image="${hasImage}">
          ${hasImage ? `<img src="${imageSrc}" alt="${title}" class="card-img" />` : ''}
          <h3 class="card-title">${title}</h3>
          <p class="card-subtitle">${subtitle}</p>
          <p class="card-body">${body}</p>
        </div>
      `;
    }
}

// Define the custom element
customElements.define('custom-card', CustomCard);
