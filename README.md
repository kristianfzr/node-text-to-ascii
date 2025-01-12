# node-text-to-ascii

A simple Node.js library and CLI tool to convert text into ASCII art with customizable fonts.

## Features
- Supports multiple ASCII art fonts using the powerful [figlet](https://www.npmjs.com/package/figlet) library.
- Easy-to-use library for integration into Node.js applications.
- Command-line interface (CLI) for quick ASCII art generation.
- Customizable fonts for unique outputs.

---

## Installation

### Using npm (Recommended)
To install globally (for CLI usage):
```bash
npm install -g nodetext-to-ascii
```
To install locally (for library usage):
```
npm install node-text-to-ascii
```

# Usage

## CLI
Once installed globally, you can use the node-text-to-ascii command from your terminal.

### Generate ASCII Art
```
node-text-to-ascii "Hello, World!" "Standard"
```

### List Available Fonts
To see all available fonts:
```
node-text-to-ascii --list-fonts
```

### Save Output to a File
```
node-text-to-ascii "ASCII Art" "Ghost" > output.txt
```

## Library
You can use this package programmatically in your Node.js applications.

### Import and Use
```
const textToAscii = require("text-to-ascii");

// Convert text to ASCII art
textToAscii("Hello, World!", "Standard")
    .then((asciiArt) => console.log(asciiArt))
    .catch((err) => console.error("Error:", err));

```
### Available Fonts
Use the `figlet.fontsSync()` method to get a list of all supported fonts:

```
const figlet = require("figlet");

const fonts = figlet.fontsSync();
console.log("Available fonts:", fonts);

```