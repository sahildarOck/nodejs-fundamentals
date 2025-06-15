const os = require('os');

console.log('Inside os.js file');

function printOSInfo() {
    console.log('Operating System:', os.type());
    console.log('Platform:', os.platform());
    console.log('Architecture:', os.arch());
    // console.log('CPU Information:', os.cpus());
    console.log('Free Memory:', os.freemem(), 'bytes');
    console.log('Total Memory:', os.totalmem(), 'bytes');
    // console.log('Home Directory:', os.homedir());
    // console.log('Temporary Directory:', os.tmpdir());
    // console.log('Network Interfaces:', os.networkInterfaces());
    // console.log('Uptime:', os.uptime(), 'seconds');
    // console.log('Release:', os.release());
    // console.log('Load Average:', os.loadavg());
    // console.log('Endianness:', os.endianness());
    // console.log('Hostname:', os.hostname());
    // console.log('User Info:', os.userInfo());
    // console.log('OS Version:', os.version());
}

module.exports = {
    printOSInfo
};