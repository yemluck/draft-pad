const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// get drafts endpoint
router.get('/draft/draftDetail', (req, res) => {
  // console.log('This is the req', req.query.id);
  
  // Add query to fetch drafts
  const queryText = `
    SELECT *
    FROM
      "draft"
    WHERE
      "id" = $1
  `;

  const queryParam = [req.query.id]
  pool.query(queryText, queryParam)
    .then(result => {
      res.send(result.rows[0])
      // console.log('this is result.rows', result.rows[0]);
      
    })
    .catch(err => {
      console.log('Error fetching drafts detail', err);
      res.sendStatus(500)
    })
})

module.exports = router