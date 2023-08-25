const fs = require('fs');

function get_api_key() {
    try {
        return fs.readFileSync('secrets.txt', 'utf8');
    } catch (error) {
        console.error('Error reading file:', error);
    }
}

module.exports = { get_api_key };