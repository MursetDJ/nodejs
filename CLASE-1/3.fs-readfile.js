const fs = require('node:fs')


console.log("LEYENDO EL PRIMER ARCHIVO")
fs.readFile('./archivo.txt', 'utf-8', (err, txt) => { console.log(txt) })
// const text = fs.readFileSync('./archivo.txt', 'utf-8')
// console.log(text);
console.log("HACER COSAS MIENTRAS LEE EL ARCHIVO")
console.log("LEYENDO EL SEGUNDO ARCHIVO")
const text2 = fs.readFileSync('./archivo2.txt', 'utf-8')
console.log(text2);
