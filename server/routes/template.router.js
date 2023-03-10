const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// Setup a GET route to get all the states from the database
router.get('/', (req, res) => {
    // GET route code here
})

/** POST route template */
router.post('/', (req, res) => {
    // POST route code
})


module.exports = router