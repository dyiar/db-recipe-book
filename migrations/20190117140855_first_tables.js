exports.up = function(knex, Promise) {
  return knex.schema.createTable("dish", function(tbl) {
    tbl.increments();

    tbl.string("name", 255).notNullable();

    // tbl.string("recipes", 255);
    // tbl.foreign('recipes').references('recipes.name')
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("dish");
};
