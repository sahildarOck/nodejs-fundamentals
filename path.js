const path = require('path');

console.log('__dirname:', __dirname);
console.log('__filename:', __filename);
console.log('path.dirname(__filename):', path.dirname(__filename));
console.log('path.basename(__filename):', path.basename(__filename));
console.log('path.extname(__filename):', path.extname(__filename));

console.log('path.extname for f1.txt', path.extname('/opt/_pm/project/darOck/nodejs-fundamentals/f1.txt'));