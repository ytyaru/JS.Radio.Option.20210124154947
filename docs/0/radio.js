class Radio {
    static parse() {
        const radios = document.querySelectorAll('radio');
        for (let radio of radios) {
            console.log(radio);
            Radio.#createInput(radio);
        }
    }
    static #createInput(radio) {
        const options = radio.querySelectorAll('option');
        for (let option of options) {
            let e = document.createElement('p');
            e.textContent = option.getAttribute('value') + ':' + option.textContent;
            radio.parentNode.insertBefore(e, radio);
        }
        radio.remove();
    }
}
