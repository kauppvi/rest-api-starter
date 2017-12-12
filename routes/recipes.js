const express   = require('express');
const router    = express.Router();
const recipes   = require('../controllers/recipes')

// recipes routes
router.route('/')
  .get(recipes.list_all_recipes)
  .post(recipes.create_a_recipe);

router.route('/recipes/:recipe_id')
  .get(recipes.read_a_recipe)
  .put(recipes.update_a_recipe)
  .delete(recipes.delete_a_recipe);
  
module.exports = router;