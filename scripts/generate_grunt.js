#!/usr/bin/env node

require('js-yaml');

var fs = require('fs');
var _s = require('underscore.string');

main();

function main() {
    write('grunt.js', transform(read('_grunt.js'), require('../_config.yml')));
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