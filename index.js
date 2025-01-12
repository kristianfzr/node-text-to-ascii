const figlet = require("figlet")

/**
 * Converrt text to ASCII art using specified font
 * @param {string} text - The text to convert to ASCII art.
 * @param {string [font="Standard"]} font - The font to use for the ASCII art.
 * @returns {Promise<string>} The generated ASCII art.
 */

function textToAscii(text, font = "Standard") {
    return new Promise((resolve, reject) => {
        figlet.text(text, { font }, (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}

module.exports = textToAscii;
