# Extension Template

A modern, customizable browser extension template built with TypeScript, SCSS, and Webpack. This template provides a solid foundation for developing Chrome extensions using Manifest V3, with support for background scripts, content scripts, popup, and options pages.

## Features

- **Manifest V3** support
- Written in **TypeScript**
- Styles with **SCSS** and **PostCSS** (autoprefixer, precss)
- Modular build with **Webpack 5**
- Hot-reload ready for development
- Pre-configured for popup and options pages
- Example file structure for easy customization
- Includes build scripts for development and production
- MIT licensed

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16+ recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/mazillka/Extension-Template.git
   cd Extension-Template/extension
   ```

2. Install dependencies:
   ```sh
   npm install
   # or
   yarn install
   ```

### Building

- For development build (with source maps):
  ```sh
  npm run build-dev
  ```

- For production build (minified, optimized):
  ```sh
  npm run build-prod
  ```

The output will be in the `dist/` directory.

### Loading the Extension

1. Open Chrome and go to `chrome://extensions/`
2. Enable "Developer mode"
3. Click "Load unpacked" and select the `dist/` folder

## Project Structure

```
extension/
  src/
    background.ts
    contentscript.ts
    options.ts
    popup.ts
    scss/
      options.scss
      popup.scss
  static/
    html/
      options.html
      popup.html
    icons/
      16x16.png
      32x32.png
      48x48.png
      64x64.png
      128x128.png
  manifest.json
  package.json
  webpack.config.mjs
  tsconfig.json
```

- `src/` — TypeScript source files and SCSS styles
- `static/` — HTML templates and icons
- `manifest.json` — Chrome extension manifest

## Customization

- Edit `src/popup.ts` and `src/options.ts` for popup/options logic
- Update HTML in `static/html/`
- Add or replace icons in `static/icons/`
- Modify `webpack.config.mjs` for advanced build customization

## License

[MIT](../LICENSE)
