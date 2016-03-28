# amann.me

If you're interested in how this website works, I've published an article explaning it on [my website](http://www.amann.me/projects/amann.me).

## Development
### Setup
1. Install node.js.
2. Install an editor that accepts eslint (e. g. [Atom](https://atom.io/) with the plugin [linter-eslint](https://atom.io/packages/linter-eslint)), so you get warnings about syntax or code style errors.
3. Install dependencies with `npm install`.

### Run
1. Start the development server with `npm run dev`.
2. Check the console to see the URL the server runs on.

## Use in production
### Setup
1. Install node.js

### Build
1. Build the app with `npm run build`.
2. Find the built files in the folder `public`. Upload them to the root folder of a web server that can serve static files.

You can test the built files by navigating to `public` and run `python -m SimpleHTTPServer`. Then open the shown URL in the browser.

Every route (e.g. `/about`) contains all the prerendered HTML code and loads the rest of web site with the JavaScript code. Therefore subsequent route changes will load instantly without communication with the server.

## Conventions

### JS
 * ECMAScript stage 0 (bleeding edge yay)
 * React with ES6 classes
 * JSX

ESLint takes care of the rest.

### CSS

CSS is written with SASS and [CSS modules](https://github.com/css-modules/css-modules).

The only thing used from the CSS modules are the local classnames. Other features like `compose` are avoided and solved with well-known SASS features.

Example:

```
// Component ('B' of BEM)
.root {
  padding: 12px;
}

// Elements used within component ('E' of BEM)
.button {
  color: blue;

  // Modifiers ('M' of BEM)
  &_isInactive {
    opacity: 0.25;
  }
}
```
