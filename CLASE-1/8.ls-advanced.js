const fs = require('node:fs/promises');
const path = require('node:path');
const pc = require('picocolors')

const folder = process.argv[2] ?? '.'
async function ls(folder) {
    let files
    try {
        files = await fs.readdir(folder)
    } catch (err) {
        console.error(pc.red(`no se pudo leer el directorio ${folder}`))
        process.exit(1)
    }
    const filesPromises = files.map(async file => {
        const filepath = path.join(folder, file);
        let stats
        try {
            stats = await fs.stat(filepath)
        } catch (err) {
            console.error(`no se pudo leer el archivo ${file}`)
            process.exit(1)
        }
        const isDirectory = stats.isDirectory()
        const filetype = isDirectory ? 'd' : 'f'
        const filesize = stats.size
        const fileModified = stats.mtime.toLocaleString()

        return `${pc.bgCyan(filetype)} ${pc.blue(file.padEnd(35))} ${pc.yellow(filesize.toString().padStart(10))} ${pc.green(fileModified)}`
    })

    const filesinfo = await Promise.all(filesPromises);

    filesinfo.forEach(data => {
        console.log(data)
    })
}

ls(folder)