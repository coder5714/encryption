class PHP extends HTMLElement{
    constructor(){
        const php_code = `<?php ${this.innerText} ?>`
        this.innerHTML = `<div>${php_code}</div>`
    }
}
customElements.define('PHP',PHP)