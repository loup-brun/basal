# Basal

Basal was originally a fork of Matthew Hartman's great [Base](https://github.com/matthewhartman/base) framework, with opiniated practical tweaks (since the author's version didn't entirely correspond to my vision).

The main goal is to provide a drop-in unobtrusive modern framework to start designing a site right away. The project is built on SASS. 

### Cross-browser

The framework should work across all browsers: FF, Chrome, Opera, Safari and IE8+.

In the past, I supported IE7 as much as I could - however, as of 2015, most developers have dropped support for that browser - so have I.

### What's in the box?

Basal is primarily a CSS framework. It provides the base styles for responsive web projects and allows for easy extension and customization - scalability and modularity first.

Basal provides these base styles:

- bloquotes
- buttons
- code
- forms
- grid (normal, tablet, phone)
- helpers
- nav
- print
- tables
- typography

along with header, footer, navigation and theme-ready stylesheets.

Basal is built on top of the [HTML5 Boilerplate](https://html5boilerplate.com/), with the addition of [Head.js](http://headjs.com/). HeadJS provides many useful functions, such as adding proper styles to the page, browser fallbacks, async loading (scripts and stylesheets), document ready, and more.

The base script includes a clean head.js wrapper to ensure your functions are private and are run on DOM ready.

### Installation

Basal is built with [Grunt](http://gruntjs.com/). If you have `npm` and `sass` installed, just run

```
$ npm install        # installs the build tools (Grunt)
$ bower install      # installs the libraries
$ grunt build        # builds the css and js files
```

To rebuild the files as you make changes, run

```
$ grunt dev
```

### Building, directory structure

The directory structure is the following:

```
|-- src/                     # source code to work on
	|-- scss/                  # scss files
		|-- basal/               # basal-specific files
			|-- mixins/            # component-specific mixins
			  _mixins.buttons.scss
			  _mixins.grid.scss
			  _mixins.theme.scss
				
      _bloquotes.scss
      _buttons.scss
      _code.scss
      _footer.scss
      _grid.scss
      _header.scss
      _helpers.scss
      _media.scss
      _mixins.scss
      _nav.scss
      _print.scss
      _resets.scss
      _tables.scss
      _theme.scss            # compiles stylesheets found in theme/
      _type.scss
      _variables.scss
  
    |-- theme/               # theme files (add your own)
      _theme.base.scss
      _theme.lg.scss
      _theme.phone.scss
      _theme.tablet.scss
```

Feel free to change whatever you want once you've installed the framework - make it your own for your project. Add a stylesheet for each new component in `basal/` (e.g. `main`, `sidebar`, etc...). The theme directory is merely for non-modular styles, e.g. a hero layout that you'll only find on the home page, small css widgets that require special styling and that you don't know where to put elsewhere. It's an _ordered_ mess!

## Thank You / Credits
- Nicolas Gallagher (@necolas) for Normalize.css and Micro ClearFix
- Thanks to HTML5 framework for the .htaccess file

## MIT Open Source License
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
