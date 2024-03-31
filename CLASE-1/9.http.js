const http = require('node:http')
const { findAvaliablePort } = require('./10.free-port.js')

const desiredPort = process.env.PORT ?? 3000

const server = http.createServer((req, res) => {
  console.log('request received')
  res.end('HOLA MUNDO')
})
findAvaliablePort(desiredPort)
  .then(port => {
    server.listen(port, () => {
      console.log(`server listening port  http://localhost:${port}`)
    })
  })
  .catch(error => {
    console.error('An error occurred:', error)
  })

// server.listen(0, () => {
//     console.log(`server listening port  http://localhost:${server.address().port}`)
// })
