class Input {
    static create(radio, option, id) {
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
}
