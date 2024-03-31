//Esto solo en los módulos nativos que no tienen promesas nativas
// const { promimisify } = require('node:util');
// const readFilePromise = promimisify(fs.readFile);
const fs = require('node:fs/promises')
console.log("LEYENDO EL PRIMER ARCHIVO")
fs.readFile('./archivo.txt', 'utf-8').then((text) => { console.log("PRIMER TEXTO: ", text) })
console.log("HACER COSAS MIENTRAS LEE EL ARCHIVO")
console.log("LEYENDO EL SEGUNDO ARCHIVO")
fs.readFile('./archivo2.txt', 'utf-8').then((text) => { console.log("SEGUNDO TEXTO: ", text) })