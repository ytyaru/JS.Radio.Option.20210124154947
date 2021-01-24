class Radio {
    static parse() {
        const radios = document.querySelectorAll('radio');
        for (let radio of radios) {
            console.log(radio);
            if (radio.hasAttribute('label')) {
                FieldsetRadio.create(radio);
            } else if (radio.hasAttribute('ul')) {
                UlRadio.create(radio);
            } else {
                BareRadio.create(radio);
            }
        }
    }
}
