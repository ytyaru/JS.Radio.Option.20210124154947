class Unique {
    static getInputName(radio) {
        return Unique.#generateGroupId(radio);
    }
    static getInputId(group_id, option) {
        return group_id + '-' + Unique.#generateElementId(option);
    }
    static #generateGroupId(radio) {
        const id = radio.getAttribute('id');
        if (id) { return id; }
        else { return Unique.#generate(); }
    }
    static #generateElementId(option) {
        for (let attr of ['name', 'value']) {
            const v = option.getAttribute(attr);
            if (v) { return v; }
        }
        return Unique.#generate();
    }
    static #generate() {
        return new Date().getTime().toString(16) + Math.floor(Number.MAX_SAFE_INTEGER*Math.random()).toString(16);
    }
}
