
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {id: 1, name: '12 oz can Tomato Sauce'},
        {id: 2, name: 'Small Tortillas'},
        {id: 3, name: 'Large Apple'}
      ]);
    });
};
