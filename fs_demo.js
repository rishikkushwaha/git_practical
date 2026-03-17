const fs = require('fs');

// 1. Create & write file
fs.writeFileSync('example.txt', 'Hello, this is my first file');

// 2. Read file
const data = fs.readFileSync('example.txt', 'utf-8');
console.log("File Content:", data);

// 3. Append data
fs.appendFileSync('example.txt', '\nThis is appended text');

// 4. Read again
const updatedData = fs.readFileSync('example.txt', 'utf-8');
console.log("Updated Content:", updatedData);

// 5. Delete file
fs.unlinkSync('example.txt');
console.log("File deleted successfully");
