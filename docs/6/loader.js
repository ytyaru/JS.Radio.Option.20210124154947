class Loader {
    static load(filepath) {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = filepath;
        const firstScript = document.getElementsByTagName('script')[ 0 ];
        firstScript.parentNode.insertBefore(script, firstScript);
    }
}
