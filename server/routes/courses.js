const express = require('express')

const db = require('../db')

const router = express.Router()

router.get('/', (req, res) => {
  db.getCourses()
    .then(bets => {
      res.json({bets})
    })
})

router.post('/courses', (req, res) => {
  const newcourses = req.body
  db.addCourses(newcourses)
    .then(() => {
      res.sendStatus(200)
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

module.exports = Router