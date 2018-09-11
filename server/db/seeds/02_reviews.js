exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('reviews').del()
    .then(function () {
      // Inserts seed entries
      return knex('reviews').insert([
        {id: 1, name: 'Cape Kidnappers', comment: 'Mint Course', rating: '5'},
        {id: 2, name: 'Kauri Cliffs', comment: 'Sick Course', rating: '5'},
        {id: 3, name: `Jack's Point`, comment: 'Favourite Course', rating: '4.5'}
      ])
    })
}
