class Input {
    static create(radio, option, input_name, input_id) {
        const input = document.createElement('input');
        input.setAttribute('type', 'radio');
        if (option.hasAttribute('selected')) {
            input.setAttribute('checked', 'true');
        }
        input.setAttribute('id', input_id);
        input.setAttribute('name', input_name);
        input.setAttribute('value', Input.#getValue(option));
        input.addEventListener('change', (event)=>{
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
        });
        return input;
    }
    static #getValue(option) {
        const value = option.getAttribute('value');
        if (value) { return value; }
        if (option.textContent) { return option.textContent; }
        throw new Error('<option>にはvalue属性またはtextNodeが必要です。');
    }
}
