class BareRadio {
    static create(radio) {
        const options = radio.querySelectorAll('option');
        for (let option of options) {
            const id = Unique.create(radio, option);
            radio.parentNode.insertBefore(Input.create(radio, option, id), radio);
            radio.parentNode.insertBefore(Label.create(radio, option, id), radio);
        }
        radio.remove();
    }
}
