const printDirectory = require('./pwd');
const listFiles = require('./ls');

process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
    const cmd = data.toString().trim();
    if (cmd === 'ls') {
        listFiles();
    } else {
        return printDirectory(cmd);
    }
})

