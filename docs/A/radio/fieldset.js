class FieldsetRadio {
    static create(radio) {
        const fieldset = Fieldset.create(radio);
        const options = radio.querySelectorAll('option');
        const input_name = Unique.getInputName(radio);
        for (let option of options) {
            const input_id = Unique.getInputId(input_name, option);
            fieldset.appendChild(Input.create(radio, option, input_name, input_id));
            fieldset.appendChild(Label.create(radio, option, input_id));
        }
        radio.remove();
    }
}
