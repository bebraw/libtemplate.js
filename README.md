# libtemplate.js - Provides a starting point for JavaScript libraries

libtemplate.js makes it easier to start writing JavaScript libraries. It has been
designed to be used with GitHub (and GitHub pages). In addition it uses Grunt
as a build system.

In order to use it, simply clone this repository and configure \_config.yml to
your liking.

## Dependencies

Make sure you have `npm` installed. You are going to need `Jekyll` as well. In
case you wish to use syntax highlighting, install Pygments. You can get the Node
dependencies simply by using `npm install` (might need to sudo it).

In order to generate the initial grunt file, use `scripts/generate_grunt.js`.
After it has been executed, you should be able to develop the library using
`grunt`. Examine the generated file for more details.

## \_config.yml Fields

* `project_base` refers to the project name without a possible suffix (such as .js)
* `project` is meant to contain that
* `description` contains a brief (80-100) description of your project. This is
something you would use as your GitHub project description.
* `nick` is the nickname you use at GitHub (github.com/\<nick\>)
* `author` is your full name as an author. If there are multiple authors, send
me a pull request.
* `license` is the license of your project. If there are multiple in use, send
me a pull request.
* `version` refers to the version number of your library.
* `jquery` refers to version of jQuery to load. If it is empty, it won't
be loaded at all in the demo.

## License

libtemplate.js is available under MIT. See LICENSE for more details. Given this
is a template, I really don't mind whether or not your actual project is based
on MIT. If you fork this project as a template of your own, keep the MIT and
attribution.
