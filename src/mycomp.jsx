import * as React from 'react'

class johnElement extends HTMLElement {
    connectedCallback(){
        this.innerHTML = "<h1>Hello World</h1>"
        React.render("<a href=''>hello</a>", this);
    }
}
customElements.define('john-element', johnElement);
