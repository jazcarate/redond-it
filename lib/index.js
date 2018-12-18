var css = '* { border-radius: 47px; -moz-border-radius: 47px; -webkit-border-radius: 47px; -khtml-border-radius: 47px; }',
    head = document.head || document.getElementsByTagName('head')[0],
    style = document.createElement('style');

style.type = 'text/css';
if (style.styleSheet) {
    style.styleSheet.cssText = css;
} else {
    style.appendChild(document.createTextNode(css));
}

head.appendChild(style);