#!/usr/bin/env node

require('js-yaml');

var fs = require('fs');
var marked = require('marked');
var _s = require('underscore.string');

main();

function main() {
    var targets = {
        'all': generateAll,
        'index': generateIndex,
        'grunt': generator('grunt.js'),
        'package': generator('package.json'),
        'readme': generator('README.md')
    };
    var target = process.argv[2];

    if(!target) {
        console.error('Missing target!');
    }
    else if(!(target in targets)) {
        console.error('Invalid target! Try one of these:', Object.keys(targets).join(', '));
    }
    else {
        targets[target]();
    }

    function generateAll() {
        for(var target in targets) {
            if(target !== 'all') targets[target]();
        }
    }

    function generator(name) {
        return generate.bind(null, '_meta/_' + name, name);
    }
}

function generateIndex() {
    var prefix = '---\nlayout: project\n---\n';

    write('index.html', prefix + transformIndex(read('README.md')));

    function transformIndex(data) {
        var tokens = marked.lexer(data).map(function(t) {
            if(t.type == 'code') {
                t.type = 'html';
                t.text = '{% highlight ' + t.lang + ' %}\n' +
                    t.text +
                    '\n{% endhighlight %}\n';
            }

            return t;
        });
        tokens.links = [];

        return marked.parser(tokens);
    }
}

function generate(source, target) {
    write(target, transform(read(source), require('../_config.yml')));
}

function read(input) {
    return fs.readFileSync(input, 'utf-8');
}

function write(target, data) {
    fs.writeFileSync(target, data);
}

function transform(tpl, ctx) {
    return tpl.replace(/\{\{ [a-z_ ]+ \}\}/gi, function(match) {
        return ctx[_s.rtrim(_s.ltrim(match, '{'), '}').trim()];
    });
}
