#!/usr/bin/env node
const textToAscii = require("./index");
const args = process.argv.slice(2);

if (args.length === 0) {
    console.error("Usage: text-to-ascii <text> [font]");
    process.exit(1);
}

const text = args[0];
const font = args[1] || "Standard";

// Call the function and handle the returned Promise
textToAscii(text, font)
    .then((asciiArt) => {
        console.log(asciiArt); // Output the ASCII art
    })
    .catch((err) => {
        console.error("Error:", err.message || err); // Handle errors
    });
