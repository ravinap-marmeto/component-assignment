class CustomButton extends HTMLElement {
    constructor() {
        super();
        this.render();
    }

    render() {
        const variant = this.getAttribute('variant') || 'primary';
        const size = this.getAttribute('size') || 'medium';
        const text = this.getAttribute('text') || 'Click Me';

        this.innerHTML = `
        <div class="custom-button" data-variant="${variant}" data-size="${size}">
          <span class="button-text">${text}</span>
        </div>
      `;
    }

    connectedCallback() {
        this.addEventListener('click', () => {
            if (this.getAttribute('variant') === 'disabled') {
                console.log('Button is disabled');
            } else {
                console.log('Button clicked:', this.innerText);
            }
        });
    }
}

// Define the custom element
customElements.define('custom-button', CustomButton);
