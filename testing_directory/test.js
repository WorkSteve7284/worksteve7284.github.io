class element extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <p>test</p>
        `;
    }
}

customElements.define('my-element', element);