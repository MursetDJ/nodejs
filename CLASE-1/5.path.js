const path = require('node:path');
//en windows la barra separadora es \\
console.log(path.sep);


//unir rutas
const filepath = path.join('content', 'subfolder', 'wa');

console.log(filepath)

const base = path.basename("\\tmp\\midu\\wa\\pasword.jpg")

console.log(base);

const filename = path.basename("\\tmp\\midu\\wa\\pasword.txt", ".txt")
console.log(filename);

const extension = path.extname(base)

console.log(extension)

const filenamewithUknowkPath = path.basename(base, extension);

console.log(filenamewithUknowkPath)