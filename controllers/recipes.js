const express   = require('express');
const router    = express.Router();
const Recipe    = require('../models/recipe');

// middleware to use for all requests
router.use(function(req, res, next) {
    // do logging
    console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});

// more routes for our API will happen here
// on routes that end in /recipes
// ----------------------------------------------------
router.route('/')

    // create a recipe (accessed at POST http://localhost:8080/api/recipes)
    .post(function(req, res) {
        
        var recipe = new Recipe();      // create a new instance of the Recipe model
        recipe.name = req.body.name;  // set the recipes name (comes from the request)

        // save the recipe and check for errors
        recipe.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: 'Recipe created!' });
        });
        
    })

    // get all the recipes (accessed at GET http://localhost:8080/api/recipes)
    .get(function(req, res) {
        Recipe.find(function(err, recipes) {
            if (err)
                res.send(err);

            res.json(recipes);
        });
    });

// on routes that end in /recipes/:recipe_id
// ----------------------------------------------------
router.route('/:recipe_id')

    // get the recipe with that id (accessed at GET http://localhost:8080/api/recipes/:recipe_id)
    .get(function(req, res) {
        Recipe.findById(req.params.recipe_id, function(err, recipe) {
            if (err)
                res.send(err);
            res.json(recipe);
        });
    })

    // update the recipe with this id (accessed at PUT http://localhost:8080/api/recipes/:recipe_id)
    .put(function(req, res) {

        // use our recipe model to find the recipe we want
        Recipe.findById(req.params.recipe_id, function(err, recipe) {

            if (err)
                res.send(err);

            recipe.name = req.body.name;  // update the recipes info

            // save the recipe
            recipe.save(function(err) {
                if (err)
                    res.send(err);

                res.json({ message: 'Recipe updated!' });
            });

        });
    })

    // delete the recipe with this id (accessed at DELETE http://localhost:8080/api/recipes/:recipe_id)
    .delete(function(req, res) {
        Recipe.remove({
            _id: req.params.recipe_id
        }, function(err, recipe) {
            if (err)
                res.send(err);

            res.json({ message: 'Successfully deleted' });
        });
    });

module.exports = router;