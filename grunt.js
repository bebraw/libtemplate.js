/*global module:false*/
module.exports = function(grunt) {
    grunt.initConfig({
        meta: {
            version: '0.1.1',
            banner: '/*! libtemplate.js - v<%= meta.version %> - ' +
                '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
                '* http://bebraw.github.com/libtemplate.js/\n' +
            '* Copyright (c) <%= grunt.template.today("yyyy") %> ' +
                'Juho Vepsalainen; Licensed MIT */'
        },
        concat: {
            dist: {
                src: ['<banner:meta.banner>',
                    'js/libs/libtemplate.js'],
                    dest: 'js/dist/libtemplate.js'
            }
        },
        min: {
            dist: {
                src: ['<banner:meta.banner>', '<config:concat.dist.dest>'],
                dest: 'js/dist/libtemplate.min.js'
            }
        },
        server: {
            port: 4000,
            base: '_site'
        },
        jekyll: {
            dev: {
                src: '.',
                dest: '_site',
                pygments: true,
                safe: true
            }
        },
        watch: {
            reload: {
                files: ['_config.yml', '_meta/*', 'js/**/*.js', 'index.html', 'grunt.js'],
                tasks: 'refresh tinylr-reload'
            }
        },
        shell: {
            generate_grunt: {
                command: './scripts/generate_grunt.js'
            },
            generate_index: {
                command: './scripts/generate_index.js'
            },
            generate_package: {
                command: './scripts/generate_package.js'
            },
            generate_readme: {
                command: './scripts/generate_readme.js'
            }
        }
    });

    grunt.registerTask('refresh', 'concat min shell:generate_grunt shell:generate_readme shell:generate_index shell:generate_package jekyll:dev');
    grunt.registerTask('default', 'refresh server tinylr-start watch');

    ['grunt-jekyll', 'grunt-shell', 'tiny-lr'].forEach(grunt.loadNpmTasks);
};
