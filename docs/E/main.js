window.addEventListener('load', (event) => {
    Radio.parse();
    // <radio id="color">にchangeイベントを実装する
    Radio.addChangeEventListener('color', ColorRadio.onChange);
    // チェックボックスに応じてイベント追加・解除する
    document.querySelector('#is-add-event').addEventListener('change', (event) => {
        console.log('is-add-event', event);
        if (event.target.checked) {
            Radio.addChangeEventListener('color', ColorRadio.onChange);
        } else {
            Radio.removeChangeEventListener('color', ColorRadio.onChange);
        }
    });
});
