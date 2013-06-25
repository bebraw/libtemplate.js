# {{ name }} - {{ description }}

{{ name }} makes it easier to start writing JavaScript libraries. It has been
designed to be used with GitHub (and GitHub pages). In addition it uses Grunt
as a build system.

## Getting Started

1. git clone git@github.com:bebraw/libtemplate.js.git mylib
2. cd mylib
3. rm -rf .git
4. git init
5. git add .
6. git commit

As you can see this workflow loses the version history and gives you a blank
slate to get started with.

After you have done that `npm install` the dependencies. In addition you will
need to set up [Jekyll](https://github.com/mojombo/jekyll) and
[Pygments](http://pygments.org/) in case you wish to use syntax highlighting.

Now that everything should be set up, invoke `grunt`. You should have a nice,
interactive development server running. Surf to `localhost:4000` at your browser.
If you have [set up LiveReload 
extension](http://feedback.livereload.com/knowledgebase/articles/86242-how-do-i-install-and-use-the-browser-extensions-)
the changes you make to the project `_meta` data or `package.json` should cause
the browser window to refresh automatically. This allows you to prototype your
project `README.md` and site in a quick manner.

## Other Features

Besides the basic `grunt` functionality, there are various helpers around. I've
listed these in the following list:

* `grunt refresh` updates project files based on metadata. Handy if you just
want to make some quick change.
* `scripts/pu.sh` pushes the current changes to GitHub. In addition it pushes
the contents of the master branch to gh-pages so the index shows up properly at
GitHub Pages. It also pushes your tags to GitHub.

## Code Example

This bit is here just to illustrate how Pygments works. The example will render
with syntax highlighting on both README.md and GitHub Pages index.

``` js
var a = 4;

function add(a, b) {
    return a + b;
}
```

## License

{{ name }} is available under {{ license }}. See LICENSE for more details.
