class Radio {
    static parse() {
        const radios = document.querySelectorAll('radio');
        for (let radio of radios) {
            console.log(radio);
            RadioFactory.create(radio).create(radio);
        }
    }
    // 指定した<radio>のid属性値をもつ<input>に対して、指定したfuncを'change'イベントとして実装する
    static addChangeEventListener(radio_id, func, options={}) {
        for (let el of document.querySelectorAll(`input[type="radio"][name="${radio_id}"]`)) {
            el.addEventListener('change', func, options);
        }
    }
    // 指定した<radio>のid属性値をもつ<input>に対して、指定したfuncを'change'イベントとして実装する
    static removeChangeEventListener(radio_id, func, options={}) {
        for (let el of document.querySelectorAll(`input[type="radio"][name="${radio_id}"]`)) {
            el.removeEventListener('change', func, options);
        }
    }
}
