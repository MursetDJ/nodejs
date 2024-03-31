//Esto solo en los módulos nativos que no tienen promesas nativas
// const { promimisify } = require('node:util');
// const readFilePromise = promimisify(fs.readFile);
import { readFile } from 'node:fs/promises';

Promise.all([readFile('./archivo.txt', 'utf-8'), readFile('./archivo2.txt', 'utf-8')]).then(([text, secondText]) => {
    console.log("primer texto: ", text)
    console.log('segundo texto: ', secondText)

})


/*
(async () => {
    console.log("LEYENDO EL PRIMER ARCHIVO")

    const text = await readFile('./archivo.txt', 'utf-8')
    console.log("PRIMER TEXTO: ", text)
    console.log("HACER COSAS MIENTRAS LEE EL ARCHIVO")
    console.log("LEYENDO EL SEGUNDO ARCHIVO")
    const secondText = await readFile('./archivo2.txt', 'utf-8')
    console.log("SEGUNDO TEXTO: ", secondText)
})()

*/