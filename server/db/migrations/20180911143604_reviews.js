exports.up = (knex, Promise) => {
  return knex.schema.createTable('reviews', table => {
    table.increments('id')
    table.string('name')
    table.string('comment')
    table.string('rating')
  })
}

exports.down = (knex, Promise) => {
  return knex.dropTable('reviews')
}
