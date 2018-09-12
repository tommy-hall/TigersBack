exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('reviews').del()
    .then(function () {
      // Inserts seed entries
      return knex('reviews').insert([
        {id: 1, name: 'Tom', comment: 'Mint Course', rating: '5'},
        {id: 2, name: 'Ben', comment: 'Sick Course', rating: '5'},
        {id: 3, name: `Sam`, comment: 'Favourite Course', rating: '4.5'}
      ])
    })
}


// This data will be an array of objects
// Map over comments. Comments were comments and show up and individual comment and then a delete button for each one inside individual component