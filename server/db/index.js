const knex = require('knex')
const config = require('./knexfile').development

// To create my open database connection (something that I can use to do CRUD operations with), I need to create a connection, I need to create a database connection
// Now we have an open data base connection that we can do stuff with

const conn = knex(config)

// Table you want to work with, select all data and then run this function
conn('tasks')
  .select()
  .then(tasks => {
    tasks.forEach(task => {
      console.log(`${task.id}: ${task.title} - ${task.is_complete}`)
    })
  })
  .then(() => {
    conn.destroy()
  })
