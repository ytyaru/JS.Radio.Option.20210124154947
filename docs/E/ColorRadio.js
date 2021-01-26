class ColorRadio {
    static onChange(event) {
        // <label>内<input>のdisabledを切り替える
        for (let element of event.target.parentElement.children) {
            if ('label' !== element.tagName.toLowerCase()) { continue; }
            if (0 === element.children.length) { continue; }
            if ('input' !== element.children[0].tagName.toLowerCase()) { continue; }
            
            if (event.target.nextSibling === element) {
                element.children[0].removeAttribute('disabled');
            } else {
                element.children[0].setAttribute('disabled', 'disabled');
            }
        }
    }
}
