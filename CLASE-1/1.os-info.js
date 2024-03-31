const os = require('node:os');

console.log('INFORMACIÓN DEL SISTEMA OPERATIVO');
console.log('__________________________________');
console.log('NOMBRE DEL OS', os.platform());
console.log('VERSIÓN DEL OS', os.release());
console.log('ARQUITECTURA', os.arch());
console.log('CPUs', os.cpus());



