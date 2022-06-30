var edge = require('edge-js');

var serialNumber = edge.func('ps', function () {/*
"[$(wmic csproduct get UUID)]"
*/});

serialNumber('Node.js', function (error, result) {
    if (error) throw error;
    console.log((result[0]).slice(41,-6));
    // console.log(result[0]);
    }
);