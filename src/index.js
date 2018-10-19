window.onload = () => {
    const div = createElement('div');
    setText(div, 'Node version: ' + NODE_VERSION);
    appendElement(document.getElementById('root'), div);
};

function createElement(type = 'div', options = {}) {
    const el = document.createElement(type);
    if (options && typeof options === 'object') {
        Object.keys(options).forEach(key => {
            el.setAttribute(key, options[key]);
        });
    }
    return el;
}

function appendElement(parent, child) {
    parent.appendChild(child);
}

function setText(el, text = '') {
    el.textContent = text;
}
