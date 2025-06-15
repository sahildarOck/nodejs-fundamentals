const osInfo = require('./os.js');

const cp = require('child_process');
console.log('\nPrinting OS Information from child process file by calling function from os.js:');
osInfo.printOSInfo();

console.log('\nExecuting another file using child process AND printing WITH console log:');
console.log(cp.execSync('node os.js')); // <Buffer 49 6e 73 69 64 65 20 6f 73 2e 6a 73 20 66 69 6c 65 0a>
console.log(cp.execSync('node os.js').toString()); // Correctly prints the output of os.js

console.log('\nExecuting another file using child process AND printing WITHOUT console log:');
cp.execSync('node os.js', { stdio: 'inherit' });

console.log('\nExecuting Node.js version command AND printing WITH console log:');
console.log('node version: ' + cp.execSync('node -v'));

console.log('\nExecuting Node.js version command AND printing WITHOUT console log:');
cp.execSync('node -v', { stdio: 'inherit' });