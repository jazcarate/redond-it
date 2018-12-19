var css = '* { border-radius: 47px !important; -moz-border-radius: 47px !important; -webkit-border-radius: 47px !important; -khtml-border-radius: 47px !important; }',
    head = document.head || document.getElementsByTagName('head')[0],
    style = document.createElement('style');

style.type = 'text/css';
if (style.styleSheet) {
    style.styleSheet.cssText = css;
} else {
    style.appendChild(document.createTextNode(css));
}

head.appendChild(style);