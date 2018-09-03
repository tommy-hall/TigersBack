const server = require('./server')

const PORT = process.env.port || 3000

server.listen(PORT, function () {
  // eslint-disable-next-line no-console
  console.log('Listening on Port', PORT)
})
