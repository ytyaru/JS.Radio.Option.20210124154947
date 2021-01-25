class Unique {
    static getInputName(radio) {
        return Unique.#generateGroupId(radio);
    }
    static getInputId(group_id, option) {
        console.log('group_id:', group_id);
        return group_id + '-' + Unique.#generateElementId(option);
    }
    static getId(radio, option) {
        return Unique.#generateGroupId(radio) + '-' + Unique.#generateElementId(option);
    }
    static #generateGroupId(radio) {
        const id = radio.getAttribute('id');
        if (id) { return id; }
        else { return Unique.generate(); }
    }
    static #generateElementId(option) {
        for (let attr of ['name', 'value']) {
            const v = option.getAttribute(attr);
            if (v) { return v; }
        }
        return Unique.generate();
    }

    static generate() {
        return new Date().getTime().toString(16) + Math.floor(Number.MAX_SAFE_INTEGER*Math.random()).toString(16);
    }
    static groupId() {
        return new Date().getTime().toString(16) + Math.floor(Number.MAX_SAFE_INTEGER*Math.random()).toString(16);
    }
    static elementId() {
        return Math.floor(Number.MAX_SAFE_INTEGER*Math.random()).toString(16);
    }
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
