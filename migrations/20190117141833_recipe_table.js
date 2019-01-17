
exports.up = function(knex, Promise) {
    return knex.schema.createTable('recipes', function(tbl) {
        tbl.increments()

        tbl.string('name', 255).notNullable();
        // tbl.string('ingredients', 255)
        // tbl.float('quantity')
        tbl.text('instructions', 1000)
        tbl.integer('dish_id').unsigned();

        // tbl.foreign('ingredients').references('ingredients.name')
        tbl.foreign('dish_id').references('dish.id')
    })
  
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('recipes')
};
