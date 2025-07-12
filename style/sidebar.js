class Hide_Button extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <span class="hide__sidebar" onclick="hide_below(this)">
            <span class="hide__sidebar__1"></span>
            <span class="hide__sidebar__2"></span>
        </span>
        `;
    }
}

function hide_below(me) {
    me.classList.toggle('collapsed');
    const content = me.parentElement.parentElement.nextElementSibling;
    if(!content) return;

    const isOpen = content.style.maxHeight ==='' || content.style.maxHeight === 'none';

    if(isOpen) {
        const currentHeight = content.scrollHeight;
        content.style.maxHeight = currentHeight + 'px';

        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                content.style.maxHeight = '0px';
            });
        });
    } else {
        content.style.maxHeight = content.scrollHeight + 'px';

        const clear = () => {
            if (content.style.maxHeight !== '0px') {
                content.style.maxHeight = 'none';
            }
            content.removeEventListener('transitionend', clear);
        };

        content.addEventListener('transitionend', clear);
    }
}

customElements.define('hide-sidebar', Hide_Button);

class Sidebar_Item extends HTMLElement {
    connectedCallback() {
        this.innerHTML += `
        <hide-sidebar></hide-sidebar>
        `;
        this.className = "sidebar__element";
    }
}

customElements.define('sidebar-element', Sidebar_Item);

class Sidebar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <nav class="sidebar__links">
            <a href="/PotatoEngine/Docs.html" class="sidebar__button"><img src="/style/PotatoEngineDocs-Logo.png" alt="PotatoEngine Docs Logo" class="sidebar__logo"></a>
            <div class="sidebar__level1">
                <sidebar-element><a href="/PotatoEngine/Docs/Core.html" class="sidebar__link">Core</a></sidebar-element>
                <div class="sidebar__level2 collapsible">
                    <sidebar-element><a href="/PotatoEngine/Docs/Core/PotatoEngine.html" class="sidebar__link">PotatoEngine</a></sidebar-element>
                        <div class="sidebar__level3 collapsible">
                            <a href="/PotatoEngine/Docs/Core/PotatoEngine/Master_Scene.html" class="sidebar__link">Master_Scene</a>
                            <a href="/PotatoEngine/Docs/Core/PotatoEngine/Scene.html" class="sidebar__link">Scene</a>
                            <a href="/PotatoEngine/Docs/Core/PotatoEngine/Object.html" class="sidebar__link">Object</a>
                            <a href="/PotatoEngine/Docs/Core/PotatoEngine/Component.html" class="sidebar__link">Component</a>
                            <a href="/PotatoEngine/Docs/Core/PotatoEngine/Event.html" class="sidebar__link">Event</a>
                        </div>
                    <sidebar-element><a href="/PotatoEngine/Docs/Core/Physics.html" class="sidebar__link">Physics</a></sidebar-element>
                        <div class="sidebar__level3 collapsible">
                            <sidebar-element><a href="/PotatoEngine/Docs/Core/Physics/Structs.html" class="sidebar__link">Structs</a></sidebar-element>
                            <div class="sidebar__level4 collapsible">
                                <sidebar-element><a href="/PotatoEngine/Docs/Core/Physics/Structs/Vector.html" class="sidebar__link">Vector</a></sidebar-element>
                                    <div class="sidebar__level5 collapsible">
                                        <a href="/PotatoEngine/Docs/Core/Physics/Structs/Vector/Structs/Vector3.html" class="sidebar__link">Vector3</a>
                                        <a href="/PotatoEngine/Docs/Core/Physics/Structs/Vector/Structs/Vector2.html" class="sidebar__link">Vector2</a>
                                    </div>
                                <sidebar-element><a href="/PotatoEngine/Docs/Core/Physics/Structs/Matrix.html" class="sidebar__link">Matrix</a></sidebar-element>
                                    <div class="sidebar__level5 collapsible">
                                        <a href="/PotatoEngine/Docs/Core/Physics/Structs/Matrix/Matrix3x3.html" class="sidebar__link">Matrix3x3</a>
                                        <a href="/PotatoEngine/Docs/Core/Physics/Structs/Matrix/Matrix4x4.html" class="sidebar__link">Matrix4x4</a>
                                    </div>
                                <a href="/PotatoEngine/Docs/Core/Physics/Structs/Quaternion.html" class="sidebar__link">Quaternion</a>
                            </div>
                        </div>
                    <sidebar-element><a href="/PotatoEngine/Docs/Core/UI.html" class="sidebar__link">UI</a></sidebar-element>
                    <sidebar-element><a href="/PotatoEngine/Docs/Core/Rendering.html" class="sidebar__link">Rendering</a></sidebar-element>
                    <sidebar-element><a href="/PotatoEngine/Docs/Core/Input.html" class="sidebar__link">Input</a></sidebar-element>
                </div>
            </div>
        </nav>
        `;
    }
}

customElements.define('docs-sidebar', Sidebar);