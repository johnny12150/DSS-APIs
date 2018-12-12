// var fetch = require('node-fetch');

// spawn is not working in 2018 !!
const spawn = require("child_process").spawn;
const pythonProcess = spawn('python', [" F:/Files/volume/DSS_API/predict.py", 'hello', 'nodeJS']);

import {PythonShell} from 'python-shell';

let options = {
    pythonOptions: ['-u'], // get print results in real-time
    scriptPath: 'F:/Files/volume/DSS_API',
    args: ['hello', 'nodeJS']
};

module.exports = {
    return_prediction: function () {
        console.log('in call python func!');
        return new Promise((resolve, reject) => {

            // fixme: not working
            // pythonProcess.stdout.on('data', (data) => {
            //     console.log(data);
            //     resolve(data);
            // });

            PythonShell.run('predict.py', options, function (err, results) {
                if (err) throw err;
                // results is an array consisting of messages collected during execution
                console.log(JSON.parse(results));
                resolve(JSON.parse(results));
            });
        })
    }
};