import { arch, cpus, freemem, platform, release, totalmem } from 'node:os';
import { memoryUsage } from 'node:process';

console.log('INFORMACIÓN DEL SISTEMA OPERATIVO');
console.log('__________________________________');
console.log('NOMBRE DEL OS', platform());
console.log('VERSIÓN DEL OS', release());
console.log('ARQUITECTURA', arch());
console.log('CPUs', cpus());
console.log('FREE MEMORY', freemem() / 1024 / 1024);
console.log('USAGE MEMORY', memoryUsage() / 1024 / 1024);
console.log('TOTAL MEMORY', totalmem() / 1024 / 1024);


