var edge = require('edge-js');

var serialNumber = edge.func('ps', function () {/*
"[$(wmic DISKDRIVE get SerialNumber /format:list)]"
*/});

serialNumber('Node.js', function (error, result) {
    if (error) throw error;
    console.log((result[0]).slice(18,-9));
    }
);