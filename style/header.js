class Header extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <nav class="header__links">
            <a href="/PotatoEngine.html"><img src="/style/PotatoEngine-Logo.png" alt="PotatoEngine logo" class="header__logo"></a>
            <a href="/PotatoEngine.html" class="header__link">Home</a>
            <a href="/PotatoEngine.html#install" class="header__link">Install</a>
            <a href="/PotatoEngine.html#tutorials" class="header__link">Tutorials</a>
            <a href="/PotatoEngine/Docs.html" class="header__link">Docs</a>
        </nav>
        `;
    }
}

customElements.define('engine-header', Header);