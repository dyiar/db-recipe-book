
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('shopping').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('shopping').insert([
        {recipe_id: 1, ingredient_id: 1, quantity: 1},
        {recipe_id: 2, ingredient_id: 2, quantity: 12},
        {recipe_id: 3, ingredient_id: 3, quantity: 1}
      ]);
    });
};
