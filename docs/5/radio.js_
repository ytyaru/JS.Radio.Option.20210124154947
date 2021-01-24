class Radio {
    static parse() {
        const radios = document.querySelectorAll('radio');
        for (let radio of radios) {
            console.log(radio);
            if (radio.hasAttribute('label')) {
                Radio.#createFieldsetRadioButton(radio);
            } else {
                Radio.#createRadioButton(radio);
            }
        }
    }
    static #createRadioButton(radio) {
        const options = radio.querySelectorAll('option');
        for (let option of options) {
            const id = radio.getAttribute('id')+'-'+(option.getAttribute('name')||option.getAttribute('value'));
            radio.parentNode.insertBefore(Radio.#createInput(radio, option, id), radio);
            radio.parentNode.insertBefore(Radio.#createLabel(radio, option, id), radio);
        }
        radio.remove();
    }
    static #createFieldsetRadioButton(radio) {
        const fieldset = Radio.#createFieldset(radio);
        const options = radio.querySelectorAll('option');
        for (let option of options) {
            const id = radio.getAttribute('id')+'-'+(option.getAttribute('name')||option.getAttribute('value'));
            fieldset.appendChild(Radio.#createInput(radio, option, id));
            fieldset.appendChild(Radio.#createLabel(radio, option, id));
        }
        radio.remove();
    }
    static #createFieldset(radio) {
        const fieldset = document.createElement('fieldset');
        const legend = document.createElement('legend');
        const label = radio.getAttribute('label');
        if (0 < label.length) {
            legend.textContent = label;
            fieldset.appendChild(legend);
        }
        radio.parentNode.insertBefore(fieldset, radio);
        return fieldset;
    }
    static #createInput(radio, option, id) {
        const input = document.createElement('input');
        input.setAttribute('type', 'radio');
        if (option.hasAttribute('selected')) {
            input.setAttribute('checked', 'true');
        }
        input.setAttribute('value', option.getAttribute('value'));
        input.setAttribute('name', radio.getAttribute('id'));
        input.setAttribute('id', id);
        return input;
    }
    static #createLabel(radio, option, id) {
        const label = document.createElement('label');
        label.innerHTML = option.innerHTML;
        label.setAttribute('for', id);
        return label;
    }
}
