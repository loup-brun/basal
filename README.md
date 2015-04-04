# Bloup

Bloup was originally a fork of Matthew Hartman's great [Base](https://github.com/matthewhartman/base) framework, with opiniated practical tweaks (since the author's version didn't entirely correspond to my vision).

The main goal is to provide a drop-in unobtrusive modern framework to start designing a site right away. The project is built on SASS. 

### Cross-Browser
The framework should work across all browsers: FF, Chrome, Opera, Safari and IE8+.

In the past, I supported IE7 as much as I could - however, as of 2015, most developers have dropped support for that browser - so have I.

Bloup is built on top of the [HTML5 Boilerplate](https://html5boilerplate.com/).

### Instalation

Bloup is built with [Grunt](http://gruntjs.com/). If you have `npm` and `sass` installed, just run

```
$ npm install        # installs the build tools (Grunt)
$ bower install      # installs the libraries
$ grunt build        # builds the css and js files
```

To rebuild the files as you make changes, run

```
$ grunt dev
```

## Thank You / Credits
- Thanks to HTML5 framework for the .htaccess file
- Nicolas Gallagher (@necolas) for Normalize.css and Micro ClearFix
- Tristan McNab for adding bower support

## MIT Open Source License
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
