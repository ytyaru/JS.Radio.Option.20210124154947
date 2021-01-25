class Label {
    static create(radio, option, input_id) {
        const label = document.createElement('label');
        label.innerHTML = option.innerHTML;
        label.setAttribute('for', input_id);
        return label;
    }
}
