#!/usr/bin/env node

var Git = require('git-wrapper');

require('js-yaml');

var sys = require('sys');
var exec = require('child_process').exec;

main();

function main() {
    var version = require('../_config.yml').version;

    var git = new Git();
    git.exec('tag', {}, ['v' + version], function(err, msg) {});
}
