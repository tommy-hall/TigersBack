exports.up = (knex, Promise) => {
  return knex.schema.createTable('courses', table => {
    table.increments('id')
    table.string('name')
    table.string('address')
    table.string('longitude')
    table.string('latitude')
    table.string('phone_number')
    table.string('email')
    table.string('description')
    table.string('image')
    table.string('rank')
  })
}

exports.down = (knex, Promise) => {
  return knex.dropTable('courses')
}

// Column that will automatically increment when we add new records, id column field (field)
// Table called tasks and it has three columns in it
// For naming conventions we are meant to use snake/train case for database columns, not camelCase
