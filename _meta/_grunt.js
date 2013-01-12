/*global module:false*/
module.exports = function(grunt) {
    grunt.initConfig({
        meta: {
            version: '{{ version }}',
            banner: '/*! {{ project }} - v<%= meta.version %> - ' +
                '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
                '* http://{{ nick }}.github.com/{{ project }}/\n' +
            '* Copyright (c) <%= grunt.template.today("yyyy") %> ' +
                '{{ author }}; Licensed {{ license }} */'
        },
        concat: {
            dist: {
                src: ['<banner:meta.banner>',
                    'js/libs/{{ project }}'],
                    dest: 'js/dist/{{ project_base }}.js'
            }
        },
        min: {
            dist: {
                src: ['<banner:meta.banner>', '<config:concat.dist.dest>'],
                dest: 'js/dist/{{ project_base }}.min.js'
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
            generate_readme: {
                command: './scripts/generate_readme.js'
            }
        }
    });

    grunt.registerTask('refresh', 'concat min shell:generate_grunt shell:generate_readme shell:generate_index jekyll:dev');
    grunt.registerTask('default', 'refresh server tinylr-start watch');

    ['grunt-jekyll', 'grunt-shell', 'tiny-lr'].forEach(grunt.loadNpmTasks);
};
