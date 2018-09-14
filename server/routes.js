const express = require('express')
const router = express.Router()

const db = require('./db')

module.exports = router

router.get('/profile/:id', (req, res) => {
  const id = req.params.id
  db.getCourseById(id)
    .then(course => {
      res.send(course)
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

router.post('/profile', (req, res) => {
  const newReviews = req.body
  db.addReviews(newReviews)
    .then(() => {
      res.sendStatus(200)
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})
