class CustomInput extends HTMLElement {
    constructor() {
        super();
        this.render();
    }

    render() {
        const label = this.getAttribute('label') || 'Label';
        const placeholder = this.getAttribute('placeholder') || 'Enter text';
        const errorMessage = this.getAttribute('error-message') || 'Invalid input';
        const successMessage = this.getAttribute('success-message') || 'Valid input!';
        const type = this.getAttribute('type') || 'text'; // Default to text type

        this.innerHTML = `
        <div class="custom-input">
          <label for="input-field" class="input-label">${label}</label>
          <input id="input-field" type="${type}" class="input-box" placeholder="${placeholder}" />
          <p class="error-message">${errorMessage}</p>
          <p class="success-message">${successMessage}</p>
        </div>
      `;
    }

    connectedCallback() {
        const input = this.querySelector('.input-box');
        const errorMessage = this.querySelector('.error-message');
        const successMessage = this.querySelector('.success-message');

        input.addEventListener('input', () => {
            if (input.value.trim() === '') {
                this.classList.add('error');
                this.classList.remove('success');
                errorMessage.style.display = 'block';
                successMessage.style.display = 'none';
            } else if (input.type === 'email' && !this.isValidEmail(input.value)) {
                this.classList.add('error');
                this.classList.remove('success');
                errorMessage.style.display = 'block';
                successMessage.style.display = 'none';
            } else {
                this.classList.remove('error');
                this.classList.add('success');
                errorMessage.style.display = 'none';
                successMessage.style.display = 'block';
            }
        });

        input.addEventListener('focus', () => {
            if (input.type === 'email' && !this.isValidEmail(input.value)) {
                this.classList.add('error');
                this.classList.remove('success');
                errorMessage.style.display = 'block';
                successMessage.style.display = 'none';
            } else {
                this.classList.remove('error');
                this.classList.remove('success');
                errorMessage.style.display = 'none';
                successMessage.style.display = 'none';
            }
        });

        input.addEventListener('blur', () => {
            if (input.type === 'email' && !this.isValidEmail(input.value)) {
                this.classList.add('error');
                this.classList.remove('success');
                errorMessage.style.display = 'block';
                successMessage.style.display = 'none';
            } else if (input.type === 'email' && this.isValidEmail(input.value)) {
                this.classList.remove('error');
                this.classList.add('success');
                errorMessage.style.display = 'none';
                successMessage.style.display = 'block';
            }
        });
    }

    // Helper method to validate email format
    isValidEmail(value) {
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailPattern.test(value);
    }
}

// Define the custom element
customElements.define('custom-input', CustomInput);
