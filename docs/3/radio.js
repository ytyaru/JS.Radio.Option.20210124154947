class Radio {
    static parse() {
        const radios = document.querySelectorAll('radio');
        for (let radio of radios) {
            console.log(radio);
            Radio.#createRadioButton(radio);
        }
    }
    static #createRadioButton(radio) {
        const options = radio.querySelectorAll('option');
        for (let option of options) {
            const id = radio.getAttribute('id')+'-'+(option.getAttribute('name')||option.getAttribute('value'));
            const input = document.createElement('input');
            input.setAttribute('type', 'radio');
            if (option.hasAttribute('selected')) {
                input.setAttribute('checked', 'true');
            }
            input.setAttribute('value', option.getAttribute('value'));
            input.setAttribute('name', radio.getAttribute('id'));
            input.setAttribute('id', id);
            const label = document.createElement('label');
            label.innerHTML = option.innerHTML;
            label.setAttribute('for', id);
            radio.parentNode.insertBefore(input, radio);
            radio.parentNode.insertBefore(label, radio);
        }
        radio.remove();
    }
}
