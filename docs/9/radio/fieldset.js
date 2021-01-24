class FieldsetRadio {
    static create(radio) {
        const fieldset = Fieldset.create(radio);
        const options = radio.querySelectorAll('option');
        for (let option of options) {
            const id = Unique.create(radio, option);
            fieldset.appendChild(Input.create(radio, option, id));
            fieldset.appendChild(Label.create(radio, option, id));
        }
        radio.remove();
    }
}
