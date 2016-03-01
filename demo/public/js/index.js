var hljs = window.hljs;

var demoCode = document.getElementById('demo-code');
var toggleBox = document.getElementById('toggle-box');
var frameSet = document.getElementById('frameset');
var hamburgerMenu = document.getElementById('hamburger-menu');
var tree = document.getElementById('menu');

frameSet.addEventListener('load', function () {
    setShowCode(this);
});

document.getElementById('menu-list').addEventListener('click', function (e) {
    if (e.target.parentNode.className.match('active')) {
        e.target.parentNode.className = '';
    }
    else {
        e.target.parentNode.className = 'active';
    }
});

function setShowCode(iframe) {
    demoCode.textContent = iframe.contentDocument.getElementById('show-code').innerHTML;
    hljs.highlightBlock(demoCode);
}

toggleBox.addEventListener('click', function (e) {
    toggleBox.getElementsByClassName('active')[0].className = '';
    e.target.className = 'active';
    frameSet.setAttribute('src', e.target.getAttribute('data-target'));
});

hamburgerMenu.addEventListener('click', function (e) {
    document.body.className = -1 !== document.body.className.indexOf("open-menu") ? "closed-menu" : "open-menu";
});

Array.prototype.forEach.call(document.getElementsByClassName('tree'), function (el) {
    if (String.prototype.match.call(el.nextElementSibling.className, 'node')) {
        el.className += ' ceng_close';
    }
});

tree.addEventListener('click', function (e) {
    if (e.target.className.match('tree')) {
        var ul = e.target.nextElementSibling;
        if (String.prototype.match.call(e.target.className, 'ceng_close')) {
            e.target.className = String.prototype.replace.call(e.target.className, 'ceng_close', 'ceng_open');
            ul.className = String.prototype.replace.call(ul.className, 'close', 'open');
        }
        else {
            e.target.className = String.prototype.replace.call(e.target.className, 'ceng_open', 'ceng_close');
            ul.className = String.prototype.replace.call(ul.className, 'open', 'close');
        }
    }
    else if (e.target.className.match('item')) {
        document.body.className = -1 !== document.body.className.indexOf("open-menu") ? "closed-menu" : "open-menu";
    }
});

// Build tree

[
    [
        document.querySelectorAll('#frame h4'),
        document.querySelector('#intro-tree')
    ],
    [
        document.querySelectorAll('.options h4'),
        document.querySelector('#options-param-tree')
    ],
    [
        document.querySelectorAll('#functions h3'),
        document.querySelector('#function-tree')
    ],
    [
        document.querySelectorAll('.methods-static h4'),
        document.querySelector('#method-static-tree')
    ],
    [
        document.querySelectorAll('.methods-example h4'),
        document.querySelector('#method-example-tree')
    ]
].forEach(function (cf) {
        var o = [];
        Array.prototype.forEach.call(cf[0], function (el) {
            o.push('<li><a class="item" href="#' + el.getAttribute('id') + '">' + el.textContent + '</a></li>');
        });
        cf[1].innerHTML = o.join('');
    });

// Check and add "+"

Array.prototype.forEach.call(document.querySelectorAll('#menu ul'), function (el) {
    var target = el.previousElementSibling;
    if (target.nodeName.toUpperCase() === 'A') {
        var plus = document.createElement('span');
        plus.className = 'submenu-indicator';
        target.appendChild(plus);
    }
});

//var str = '';
//Array.prototype.forEach.call(document.getElementsByClassName('options')[0].getElementsByTagName('h4'), function (el) {
//    str += '<li><a class="item" href="#' + el.getAttribute('id') + '">' + el.textContent + '</a></li>'
//});
//document.getElementById('options-param-tree').innerHTML = str;
//
//str = '';
//Array.prototype.forEach.call(document.getElementById('functions').getElementsByTagName('h3'), function (el) {
//    str += '<li><a class="item" href="#' + el.getAttribute('id') + '">' + el.textContent + '</a></li>'
//});
//document.getElementById('function-tree').innerHTML = str;
//
//str = '';
//Array.prototype.forEach.call(document.getElementsByClassName('methods-static')[0].getElementsByTagName('h4'), function (el) {
//    str += '<li><a class="item" href="#' + el.getAttribute('id') + '">' + el.textContent + '</a></li>'
//});
//document.getElementById('method-static-tree').innerHTML = str;
//
//str = '';
//Array.prototype.forEach.call(document.getElementsByClassName('methods-example')[0].getElementsByTagName('h4'), function (el) {
//    str += '<li><a class="item" href="#' + el.getAttribute('id') + '">' + el.textContent + '</a></li>'
//});
//document.getElementById('method-example-tree').innerHTML = str;