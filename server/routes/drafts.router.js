const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


// get drafts endpoint
router.get('/drafts', (req, res) => {
  // Add query to fetch drafts
  const queryText = `
    SELECT
      "id", "title", "note", "rating",
      TO_CHAR("date", 'YYYY-MM-DD') AS date
    FROM
      "draft"
  `;

  pool.query(queryText)
      .then( result => {
        res.send(result.rows)
      })
      .catch(err => {
        console.log('Error fetching drafts', err);
        res.sendStatus(500)
      })
})

module.exports = router