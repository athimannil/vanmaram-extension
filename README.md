# Vanmaram Extension

## Overview

The Vanmaram Extension is a browser extension designed to provide quick access to the Vanmaram Dictionary. It allows users to look up words and get definitions directly from their browser.

## Features

- Popup interface for easy word lookup.
- Background script for managing events and tasks.
- Content script for interacting with web pages.

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/athimannil/vanmaram-extension.git
   ```
2. Navigate to the project directory:
   ```
   cd vanmaram-extension
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage

1. Load the extension in your browser:
   - For Chrome: Go to `chrome://extensions/`, enable "Developer mode", and click "Load unpacked". Select the `vanmaram-extension` directory.
   - For Firefox: Go to `about:debugging#/runtime/this-firefox`, click "Load Temporary Add-on", and select the `manifest.json` file.
   - For Edge: Go to `edge://extensions/`, enable "Developer mode", and click "Load unpacked". Select the `vanmaram-extension` directory.
2. Click on the extension icon in the toolbar to open the popup and start using the dictionary.

## Development

- To run the extension in development mode, use the following command:
  ```
  npm run dev
  ```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the ISC License. See the LICENSE file for details.
