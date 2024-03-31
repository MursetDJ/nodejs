//Esto solo en los módulos nativos que no tienen promesas nativas
// const { promimisify } = require('node:util');
// const readFilePromise = promimisify(fs.readFile);
const { readFile } = require('node:fs/promises');

async function init() {
    console.log("LEYENDO EL PRIMER ARCHIVO")

    const text = await readFile('./archivo.txt', 'utf-8')
    console.log("PRIMER TEXTO: ", text)
    console.log("HACER COSAS MIENTRAS LEE EL ARCHIVO")
    console.log("LEYENDO EL SEGUNDO ARCHIVO")
    const secondText = await readFile('./archivo2.txt', 'utf-8')
    console.log("SEGUNDO TEXTO: ", secondText)
}

init()
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