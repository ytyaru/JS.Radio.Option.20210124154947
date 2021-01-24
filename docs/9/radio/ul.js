class UlRadio {
    static create(radio) {
        const ul = document.createElement('ul');
        const options = radio.querySelectorAll('option');
        for (let option of options) {
            const li = document.createElement('li');
            const id = Unique.create(radio, option);
            li.appendChild(Input.create(radio, option, id));
            li.appendChild(Label.create(radio, option, id));
            ul.appendChild(li);
        }
        radio.parentNode.insertBefore(ul, radio);
        radio.remove();
    }
}
