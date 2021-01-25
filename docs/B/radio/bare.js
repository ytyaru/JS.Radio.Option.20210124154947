class BareRadio {
    static create(radio) {
        const options = radio.querySelectorAll('option');
        const input_name = Unique.getInputName(radio);
        for (let option of options) {
            const input_id = Unique.getInputId(input_name, option);
            radio.parentNode.insertBefore(Input.create(radio, option, input_name, input_id), radio);
            radio.parentNode.insertBefore(Label.create(radio, option, input_id), radio);
        }
        radio.remove();
    }
}
