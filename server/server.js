const path = require('path')
const express = require('express')

const server = express()

const usersRoutes = require('./routes/users')

server.use('/api/v1/users', usersRoutes)

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

module.exports = server

/* packages are up the top, then server = express() and then underneath that any files that you are importing
that you created, underneath that where you are using them */
