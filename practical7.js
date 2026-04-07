const os = require('os');
const path = require('path');
const url = require('url');

console.log("---- OS MODULE ----");
console.log("Platform:", os.platform());
console.log("CPU:", os.arch());
console.log("Home Directory:", os.homedir());

console.log("\n---- PATH MODULE ----");
const myPath = path.join('folder', 'file.txt');
console.log("Full Path:", myPath);
console.log("File Name:", path.basename(myPath));

console.log("\n---- URL MODULE ----");
const myUrl = new URL('https://example.com/test?name=arjun&age=20');
console.log("Host:", myUrl.hostname);
console.log("Path:", myUrl.pathname);
console.log("Name:", myUrl.searchParams.get('name'));
