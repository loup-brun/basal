Basal
===

Basal is a lightweight, cross-browser framework for web projects. The main goal is to provide a drop-in unobtrusive modern framework to start designing a site right away, with the use of a powerful [CSS preprocessor](http://sass-lang.com).

Basal was originally a fork of Matthew Hartman's great [Base](https://github.com/matthewhartman/base) framework.

## Philosophy & Core Concepts

* cross-browser, graceful degradation implementation
* modularity & scalability
* verbose markup
* mobile-first

### Cross-browser

The framework should work across all browsers: FF, Chrome, Opera, Safari and IE8+. IE support is dropping quickly within the www community - Basal may eventually follow this trend.

### What's in the box?

Basal is a CSS framework. It provides the base styles for responsive web projects and allows for easy extension and customization - scalability and modularity first.

Basal provides the following core styles:

- bloquotes
- buttons
- code
- forms
- grid (with responsive breakpoints)
- helpers
- lists & nav
- print
- tables
- typography

along with header, footer and navigation stylesheets.

### Installation

Basal is built with [Grunt](http://gruntjs.com/). If you have `npm` and `sass` installed, just run

```
npm install        # installs the build tools (Grunt)
grunt              # runs the build task (prefix + minify the css)
```

To rebuild the files as you make changes, run

```
grunt dev
```

### Building, directory structure

The directory structure is the following:

```
|-- src/                       # source code to work on
  index.html
  |-- scripts/
  |-- styles/
    main.css                   # compiled css files
    |-- scss/                  # source scss files
      |-- partials/
        |-- mixins/            # component-specific mixins
        |-- colors/            # custom color palettes
        _bloquotes.scss
        _buttons.scss
        _code.scss
        _footer.scss
        _grid.scss
        _header.scss
        _helpers.scss
        _lists.scss
        _media.scss
        _mixins.scss
        _print.scss
        _resets.scss
        _tables.scss
        _theme.scss
        _type.scss
        _variables.scss
```

## Credits

- Nicolas Gallagher (@necolas) for Normalize.css and the Micro ClearFix
- Thanks to HTML5 framework for the .htaccess file

## MIT Open Source License

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
