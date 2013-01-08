# {{ project }} - {{ description }}

{{ project }} makes it easier to start writing JavaScript libraries. It has been
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
* `nick` is the nickname you use at GitHub (github.com/&lt;nick&gt;)
* `author` is your full name as an author. You may alternatively use multiple
authors if you want to.
* `license` is the license of your project. You may alternatively use multiple
if you want to.
* `version` refers to the version number of your library.
* `jquery` refers to version of jQuery to load. If it is empty, it won't
be loaded at all in the demo.

## Code Example

This bit is here just to illustrate how Pygments works.

``` js
var a = 4;

function add(a, b) {
    return a + b;
}
```

## License

{{ project }} is available under {{ license }}. See LICENSE for more details.
