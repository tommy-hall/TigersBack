exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('courses_reviews').del()
    .then(function () {
      // Inserts seed entries
      return knex('courses_reviews').insert([
        {id: 1, course_id: 1, review_id: 3},
        {id: 2, course_id: 2, review_id: 1},
        {id: 3, course_id: 3, review_id: 2}
      ])
    })
}
