const http = require('node:http')

const dittoJson = require('./pokemon/ditto.json')

const processRequest = (req, res) => {
  const { method, url } = req
  switch (method) {
    case 'GET':
      switch (url) {
        case '/pokemon/ditto':
          res.setHeader('Content-Type', 'application/json ; charset=utf-8')
          return res.end(JSON.stringify(dittoJson))

        default:
          res.statusCode = 400
          res.setHeader('Content-Type', 'text/html ; charset=utf-8')
          return res.end('<h1>404</h1>')
      }
    case 'POST':
      switch (url) {
        case '/pokemon':
        {
          let body = ''
          req.on('data', chunk => {
            body += chunk.toString()
          })
          req.on('end', () => {
            const data = JSON.parse(body)
            res.writeHead(201, { 'Content-Type': 'application/json ; charset=utf-8' })
            data.timestamp = Date.now()
            res.end(JSON.stringify(data))
          })
          break
        }

        default:
          res.statusCode = 400
          res.setHeader('Content-Type', 'text/html ; charset=utf-8')
          return res.end('<h1>404</h1>')
      }
      break
    default:
      res.setHeader('Content-Type', 'text/plain ; charset=utf-8')
      return res.end('<h1>Mi Página About</h1>')
  }
}

const serverHttp = http.createServer(processRequest)

serverHttp.listen(3000, () => {
  console.log('server listening http://localhost:3000')
})
