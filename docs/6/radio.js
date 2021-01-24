class Radio {
    static load() {
        const paths = [
            './radio/tag/Input.js',
            './radio/tag/Label.js',
            './radio/tag/Fieldset.js',
            './radio/bare.js',
            './radio/fieldset.js',
        ];
        for (let path of paths) {
            Loader.load(path);
        }
    }
    static parse() {
        const radios = document.querySelectorAll('radio');
        for (let radio of radios) {
            console.log(radio);
            if (radio.hasAttribute('label')) {
                FieldsetRadio.create(radio);
            } else {
                BareRadio.create(radio);
            }
        }
    }
}
