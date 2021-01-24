class Label {
    static create(radio, option, id) {
        const label = document.createElement('label');
        label.innerHTML = option.innerHTML;
        label.setAttribute('for', id);
        return label;
    }
}
