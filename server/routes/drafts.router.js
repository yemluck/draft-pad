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

router.post('/drafts', (req, res) => {
  const title = req.body.title;
  const date = req.body.date;
  const note = req.body.note;
  const rating = req.body.rating;
  // Add query to post draft to data base
  const queryText = `
    INSERT INTO "draft"
      ("title", "note", "date", "rating")
    VALUES
      ($1, $2, $3, $4)
  `;

  const queryParams = [title, note, date, rating]

  pool.query(queryText, queryParams)
      .then(() => res.sendStatus(201))
      .catch((error) => {
        res.sendStatus(500);
        console.log('Create Draft failed', error);
      })

})

module.exports = router