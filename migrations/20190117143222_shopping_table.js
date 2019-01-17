
exports.up = function(knex, Promise) {
    return knex.schema.createTable('shopping', function(tbl) {
        tbl.integer('recipe_id').unsigned();
        tbl.integer('ingredient_id').unsigned();
        tbl.float('quantity');

        tbl.foreign('recipe_id').references('recipes.id');
        tbl.foreign('ingredient_id').references('ingredients.id');
    })
  
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('shopping')
  
};
