class Radio {
    static parse() {
        const radios = document.querySelectorAll('radio');
        for (let radio of radios) {
            console.log(radio);
            RadioFactory.create(radio).create(radio);
        }
    }
}
