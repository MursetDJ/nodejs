const fs = require('node:fs/promises')


fs.readdir('.').then((files) => files.forEach(file => {
    console.log(file)
})).catch(err => {
    if (err) {
        console.log(err)
        return;
    }
})

// const fs = require('node:fs')
// fs.readdir('.', (err, files) => {
//     if (err) {
//         return console("error al leer los archivos", err)
//     }
//     files.forEach(file => {
//         console.log(file)
//     })
// })