const pwd = require("./pwd")
pwd();

const ls = require("./ls")
ls();

const cat = require("./cat")
cat();

process.stdout.write('prompt > ');
// process.stdin.on('data', (data) => {
//   const cmd = data.toString().trim();

//   process.stdout.write("You typed: " + cmd);
//   process.stdout.write('\nprompt >');
// });



