class RadioFactory {
    static create(dom_radio) {
        if (dom_radio.hasAttribute('label')) { return FieldsetRadio; }
        else if (dom_radio.hasAttribute('ul')) { return UlRadio; }
        else { return BareRadio; }
    }
}
