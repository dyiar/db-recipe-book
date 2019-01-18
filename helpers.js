const db = require('./dbconfig');

module.exports = {
    getDishes: function() {
        return db.select().from('dish');
    },

    addDish: function(dish) {
        return db.insert(dish).into('dish').then(ids => { id: ids[0]})
    },

    getDish: function(id) {
            return db.select().where({ id }).from('dish')

    },

    getRecipes: function() {
        return db.select('recipes.id', 'recipe.name', 'dish.id as dish').from('recipes').innerJoin('dish', 'dish.id', '=', 'recipe.dish_id').where('recipe.id', id)
    },

    addRecipe: function(recipe) {
        return db.insert(recipe).into('recipes').then(ids => {id: ids[0] })
    }

}