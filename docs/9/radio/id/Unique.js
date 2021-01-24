class Unique {
    static create(radio=null, option=null) {
        if (radio && option) {
            const id = radio.getAttribute('id');
            const name = option.getAttribute('name');
            const value = option.getAttribute('value');
            if (id && (name || value)) {
                return id + '-' + (name || value);
            } else {
                return Unique.#setId(radio);
            }
        } else {
            return Unique.#setId(radio);
        }
    }
    static #createDateTimeId() {
        return new Date().getTime().toString(16) + Math.floor(1000*Math.random()).toString(16)
    }
    static #setId(radio) {
        const id = Unique.#createDateTimeId();
        radio.setAttribute('id', id);
        return id;
    }
}
