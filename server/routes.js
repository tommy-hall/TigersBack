const express = require('express')

const db = require('./db')

const router = express.Router()

router.get('/', (req, res) => {
  db.getTasks()
    .then(displayTasks)
    .catch(displayError)

  function displayTasks (tasks) {
    res.render('home', {
      tasks
    })
  }

  function displayError (err) {
    res.status(500).send(err.message)
  }
})

module.exports = router
