window.addEventListener('load', (event) => {
    Radio.parse();

    function switchDisabled(event) {
        // <label>内<input>のdisabledを切り替える
        for (let element of event.target.parentElement.children) {
            if ('label' !== element.tagName.toLowerCase()) { continue; }
            if (0 === element.children.length) { continue; }
            if ('input' !== element.children[0].tagName.toLowerCase()) { continue; }
            
            if (event.target.nextSibling === element) {
                element.children[0].removeAttribute('disabled');
            } else {
                element.children[0].setAttribute('disabled', 'disabled');
            }
        }
    }
    // <radio id="color">にchangeイベントを実装する
    Radio.addChangeEventListener('color', switchDisabled);

    // チェックボックスに応じてイベント追加・解除する
    document.querySelector('#is-add-event').addEventListener('change', (event) => {
        console.log('is-add-event', event);
        if (event.target.checked) {
            Radio.addChangeEventListener('color', switchDisabled);
        } else {
            Radio.removeChangeEventListener('color', switchDisabled);
        }
    });
});
