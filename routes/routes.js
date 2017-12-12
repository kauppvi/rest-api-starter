const express   = require('express');
const router    = express.Router();

router.use('/recipes', require('./recipes'));

// test route to make sure everything is working
router.get('/', function(req, res) {
    res.json({ message: 'OK!' });   
});

module.exports = router;