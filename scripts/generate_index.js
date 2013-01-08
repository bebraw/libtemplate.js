#!/usr/bin/env node

var marked = require('marked');
var _s = require('underscore.string');

var g = require('./generate');

main();

function main() {
    var prefix = '---\nlayout: project\n---\n';

    g.write('index.html', prefix + transform(g.read('README.md')));
}

function transform(data) {
    var tokens = marked.lexer(data).map(function(t) {
        if(t.type == 'code') {
            t.type = 'html';
            t.text = '{% highlight ' + t.lang + ' %}\n' + t.text + '\n{% endhighlight %}\n';
        }

        return t;
    });
    tokens.links = [];

    return marked.parser(tokens);
}
