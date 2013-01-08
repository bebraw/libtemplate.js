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
            files: ['_config.yml', 'js/**/*.js', 'index.html', 'grunt.js'],
            tasks: 'concat min jekyll:dev shell:generate_grunt'
        },
        shell: {
            generate_grunt: {
                command: './scripts/generate_grunt.js'
            }
        }
    });

    grunt.registerTask('default', 'concat min jekyll:dev server watch');

    grunt.loadNpmTasks('grunt-jekyll');
    grunt.loadNpmTasks('grunt-shell');
};
