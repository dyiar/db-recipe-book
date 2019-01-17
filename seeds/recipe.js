
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {id: 1, name: 'Moms Pizza', instructions: 'Open can', dish_id: 2},
        {id: 2, name: 'Tex-Mex Tacos', instructions: 'Warm tortills', dish_id: 1},
        {id: 3, name: 'Fruit Salad', instructions: 'Slice apple', dish_id: 3}
      ]);
    });
};
