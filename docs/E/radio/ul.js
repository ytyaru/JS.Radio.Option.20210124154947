class UlRadio {
    static create(radio) {
        const ul = document.createElement('ul');
        const options = radio.querySelectorAll('option');
        const input_name = Unique.getInputName(radio);
        for (let option of options) {
            const li = document.createElement('li');
            const input_id = Unique.getInputId(input_name, option);
            li.appendChild(Input.create(radio, option, input_name, input_id));
            li.appendChild(Label.create(radio, option, input_id));
            ul.appendChild(li);
        }
        radio.parentNode.insertBefore(ul, radio);
        radio.remove();
    }
}
