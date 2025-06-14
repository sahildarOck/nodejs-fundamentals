const fs = require('fs');

// Reading an existing file synchronously
console.log("\nReading an existing file synchronously");
let fileContent = fs.readFileSync('f1.txt');
console.log(fileContent.toString());

// Reading an existing file asynchronously
fs.readFile('f2.txt', 'utf-8', (err, data) => {
    console.log("\nReading an existing file asynchronously");
    if (err) {
        console.error(err);
        return;
    }
    console.log(data);
});

// Updating an existing file f2.txt
fs.appendFileSync('f2.txt', '\nAdded content at runtime using appendFileSync.');
console.log('\nUpdating an existing file f2.txt');

// Creating a new file f3.txt and adding content to it
console.log("\nCreating a new file f3.txt and adding content to it");
fs.writeFileSync('f3.txt', 'I am a new file f3.txt created dynamically');

// Deleting f3.txt file
console.log('\nDeleting f3.txt file');
fs.unlinkSync('f3.txt');

// fs.mkdirSync('/opt/_pm/project/darOck/nodejs-fundamentals/f3.txt', { recursive: true });
// fs.writeFileSync('/opt/_pm/project/darOck/nodejs-fundamentals/f3.txt', 'Dynamically writing to f3.txt');


