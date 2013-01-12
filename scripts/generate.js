#!/usr/bin/env node

require('js-yaml');

var fs = require('fs');
var _s = require('underscore.string');

function generate(source, target) {
    write(target, transform(read(source), require('../_config.yml')));
}
exports.generate = generate;

function read(input) {
    return fs.readFileSync(input, 'utf-8');
}
exports.read = read;

function write(target, data) {
    fs.writeFileSync(target, data);
}
exports.write = write;

function transform(tpl, ctx) {
    return tpl.replace(/\{\{ [a-z_ ]+ \}\}/gi, function(match) {
        return ctx[_s.rtrim(_s.ltrim(match, '{'), '}').trim()];
    });
}
