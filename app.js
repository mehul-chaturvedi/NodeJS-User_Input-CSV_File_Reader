const readController = require('./readController');
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})
var interval = 1000;
var run = setInterval(request, interval);

function request() {

    clearInterval(run);

    // dynamically change the run interval
    readline.question(`Enter time interval`, (time) => {
        interval = parseInt(time) * 1000;
        readline.question('Enter file name/s', (files) => {
            var a = readController.readFile(files);
    
        })

    })
    

    run = setInterval(request, interval);

}