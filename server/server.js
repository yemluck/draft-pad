const express = require('express');
const bodyParser = require('body-parser')
require('dotenv').config();

const app = express();

// source in your routes
const draftsRouter = require('./routes/drafts.router');
const draftDetailRouter = require('./routes/draftDetail.router');





/** ----------MIDDLEWARE---------------- */
app.use(bodyParser.json()); // needed for axios request
app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static('build')); // for static files




/** ----------------EXPRESS ROUTES -------------- */
app.use('/api', draftsRouter);
app.use('/api', draftDetailRouter);









// App Set //
const PORT = process.env.PORT || 5000;


// START SERVER
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});

