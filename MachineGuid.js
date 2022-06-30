var edge = require('edge-js');

var serialNumber = edge.func('ps', function () {/*
"[$((Get-CimInstance -Class Win32_ComputerSystemProduct).UUID)]"
*/});

serialNumber('Node.js', function (error, result) {
    if (error) throw error;
    // console.log((result[0]).substring(18, (result[0]).length - 1));
    console.log((result[0]).slice(1,-1));
    }
);