module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        dirs: {
            dest: 'dist/<%= pkg.name %>'
        },
        concat: {
            options: {
                stripBanners: true,
                banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
                    '<%= pkg.author %> - <%= pkg.license %>\n' +
                    '<%= pkg.homepage %> - ' +
                    '<%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            basic: {
                src: ['js/libs/<%= pkg.name %>.js'],
                dest: '<%= dirs.dest %>.js'
            }
        },
        uglify: {
            'default': {
                files: {
                    '<%= dirs.dest %>.min.js': '<%= dirs.dest %>.js'
                }
            }
        },
        jekyll: {
            server: {
                options: {
                    source: '.',
                    destination: '_site',
                    serve: true,
                    port: 4000,
                    auto: true,
                    safe: true
                }
            },
            dev: {
                options: {
                    source: '.',
                    destination: '_site',
                    safe: true
                }
            }
        },
        watch: {
            files: ['js/**/*.js', 'css/**/*.css', 'index.html', '_meta/*'],
            tasks: ['build'],
            options: {
                livereload: true
            }
        },
        shell: {
            generate_all: {
                command: './scripts/generate.js'
            }
        }
    });

    grunt.registerTask('build', ['concat:basic', 'shell:generate_all', 'uglify', 'jekyll:dev']);
    grunt.registerTask('default', ['build', 'jekyll:server', 'watch']);

    ['grunt-jekyll',
     'grunt-shell',
     'grunt-contrib-concat',
     'grunt-contrib-uglify',
     'grunt-contrib-watch'].forEach(grunt.loadNpmTasks);
};
