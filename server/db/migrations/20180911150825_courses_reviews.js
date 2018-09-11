exports.up = (knex, Promise) => {
  return knex.schema.createTable('courses_reviews', table => {
    table.increments('id')
    table.integer('course_id')
    table.integer('review_id')
  })
}

exports.down = (knex, Promise) => {
  return knex.dropTable('courses_reviews')
}
