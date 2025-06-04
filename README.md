# Vanmaram Extension

## Overview

The Vanmaram Extension is a browser extension designed to provide quick access to the Vanmaram Dictionary. It allows users to look up words (English to Malayalam and Malayalam to English) and get definitions directly from their browser.

**Available on all major browsers:** Chrome Web Store, Firefox Add-ons, and Microsoft Edge Add-ons

## Features

- 🔍 **Quick Word Lookup**: Instant English ↔ Malayalam translations
- 🌐 **Multi-browser Support**: Works on Chrome, Firefox, and Edge
- 🚀 **Fast API Integration**: Powered by Vanmaram Dictionary API
- 🎯 **Smart Language Detection**: Automatically detects input language
- 📱 **Responsive Design**: Clean, accessible popup interface

## Browser Compatibility

- **Chrome**: Version 88+ (Manifest V3 support)
- **Firefox**: Version 109+ (Manifest V3 support)
- **Edge**: Version 88+ (Manifest V3 support)

## Installation

### Option 1: Install from Browser Stores (Recommended)

**Chrome Web Store:**
[Install Malayalam Dictionary](https://chromewebstore.google.com/detail/malayalam-dictionary/kbliaiapfnladddeljohhbgghelbdlbl)

**Firefox Add-ons:**
[Install Vanmaram Malayalam Dictionary](https://addons.mozilla.org/en-US/firefox/addon/vanmaram-malayalam-dictionary/)

**Microsoft Edge Add-ons:**
[Install Malayalam Dictionary](https://microsoftedge.microsoft.com/addons/detail/malayalam-dictionary/aobohnohflkcnpbdgadegghhngdcmkan)

### Option 2: Build from Source

1. Clone the repository:
   ```bash
   git clone https://github.com/athimannil/vanmaram-extension.git
   ```
2. Navigate to the project directory:
   ```bash
   cd vanmaram-extension
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```

## Usage

First, you need to build the extension for your desired browser:

- For Chrome: `npm run build:chrome`
- For Firefox: `npm run build:firefox`
- For Edge: `npm run build:edge`

Then, load the extension in your browser:

- For Chrome: Go to `chrome://extensions/`, enable "Developer mode", and click "Load unpacked". Select the `dist/chrome` directory.
- For Firefox: Go to `about:debugging#/runtime/this-firefox`, click "Load Temporary Add-on", and select the `dist/firefox/manifest.json` file.
- For Edge: Go to `edge://extensions/`, enable "Developer mode", and click "Load unpacked". Select the `dist/edge` directory.

After loading, click on the extension icon in the toolbar to open the popup and start using the dictionary.

## Development

- To build the extension for a specific browser, use one of the following commands:
  ```bash
  npm run build:chrome
  npm run build:firefox
  npm run build:edge
  ```
- After building, follow the "Usage" instructions to load the unpacked extension in your browser for testing.

## Contributing

Contributions are welcome! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Make your changes** and test them
4. **Commit your changes**: `git commit -m 'Add amazing feature'`
5. **Push to the branch**: `git push origin feature/amazing-feature`
6. \*\*Open a Pull Request`

### Development Guidelines

- Use TypeScript for type safety
- Follow the existing code style (ESLint + Prettier)
- Test your changes across all supported browsers

## License

This project is licensed under the ISC License (see `package.json` for details).
