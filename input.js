const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});
const readLine = message =>
    new Promise(resolve => rl.question(message, line => resolve(line)));

module.exports = readLine;
