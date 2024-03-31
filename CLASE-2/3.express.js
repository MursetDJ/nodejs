const express = require('express')
const ditto = require('./pokemon/ditto.json')
const app = express()
const port = process.env.PORT ?? 3000
app.use(express.json())
// app.disable('x-powered-by')
// app.use((req, res, next) => {
//   if (req.method !== 'POST') return next()
//   if (req.headers['content-type'] !== 'application/json') return next()
//   // solo llegan los que no son post ni json
//   let body = ''
//   req.on('data', chunk => {
//     body += chunk.toString()
//   })
//   req.on('end', () => {
//     const data = JSON.parse(body)
//     data.timestamp = Date.now()
//     req.body = data
//     next()
//   })
// })
app.get('/pokemon/ditto', (req, res) => {
  res.json(ditto)
  // res.status(200).send('<h1>mi página</h1>')
  // res.json({ nombre: 'waza' })
})

app.post('/pokemon', (req, res) => {
  res.status(201).json(req.body)
//   let body = ''
//   req.on('data', chunk => {
//     body += chunk.toString()
//   })
//   req.on('end', () => {
//     const data = JSON.parse(body)
//     data.timestamp = Date.now()
//     res.status(201).json(data)
//   })
})

app.use((req, res) => {
  res.send('404')
})

app.listen(port, () => console.log(`Server listening on port ${port}!`))
