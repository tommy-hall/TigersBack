exports.up = (knex, Promise) => {
  return knex.schema.createTable('reviews', table => {
    table.increments('id')
    table.string('name')
    table.string('review')
    table.string('rating')
  })
}

exports.down = (knex, Promise) => {
  return knex.dropTable('reviews')
}
