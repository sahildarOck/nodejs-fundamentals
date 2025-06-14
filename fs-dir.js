const fs = require('fs');

fs.mkdirSync('dynamic-dir');
console.log('\nCreated a new dir dynamically');

console.log('Dynamically added dir exists after creating? ' + fs.existsSync('dynamic-dir'));

fs.mkdirSync('dynamic-dir/nested-dir');
fs.writeFileSync('dynamic-dir/dynamicFile1.txt', 'Dynamically created files');
console.log('\nAdded a new folder and a new file under the new dir');

console.log('\nPrinting dir content');
let dirPath = '/opt/_pm/project/darOck/nodejs-fundamentals/dynamic-dir';
let dirContent = fs.readdirSync(dirPath);
console.log(dirContent);

fs.rmdirSync('dynamic-dir', { recursive: true });
console.log('\nRemoved new directory');

console.log('Dynamically added dir exists after deleting? ' + fs.existsSync('dynamic-dir'));