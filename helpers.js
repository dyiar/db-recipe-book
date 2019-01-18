const db = require('./dbconfig');

module.exports = {
    getDishes: function(req, res) {
        db('dish')
        .then(dishes => {
            res.status(200).send({ dishes })
        })
        .catch(() => res.status(500).send({ error: "The data could not be retrieved." }))
    },

    addDish: function(dish) {
        db('dish')
        .insert(dish)
        .then(ids => {
            db('dish')
            .where({ id: ids[0] })
            .then(newDish => {
                res.status(201).send({ newDish })
            })
        })
        .catch(() => res.status(500).send({ error: "Data couldn't be saved." }))
    },

    getDish: function(id) {
            db('dish')
            .where({ id })
            .then(dishes => {
                res.status(200).send({ dishes })
            })
            .catch(() => res.status(500).send({ error: "The data could not be retrieved." }))

    },

    getRecipes: function() {
        db.select('recipes.id', 'recipe.name', 'dish.id as dish').from('recipes').innerJoin('dish', 'dish.id', '=', 'recipe.dish_id').where('recipe.id', id).then(response => {
            res.status(200).json({ response })
        })
        .catch(() => res.status(500).send({ error: "The data couldn't be retrieved." }))
    },

    addRecipe: function(recipe) {
        db('recipe')
        .insert(recipe)
        .then(ids => {
            db('recipe')
            .where({ id: ids[0] })
            .then(newRecipe => {
                res.status(201).send({ newRecipe })
            })
        })
        .catch(() => res.status(500).send({ error: "Data couldn't be saved." }))
    }

}