module.exports = function(cmd) {
    if (cmd === "pwd") {
      process.stdout.write(process.cwd())
    } else {
    process.stdout.write('You typed: ' + cmd);
    }
    process.stdout.write('\nprompt > ');
}