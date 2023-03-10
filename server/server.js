const express = require('express');
const bodyParser = require('body-parser')
require('dotenv').config();

const app = express();

// source in your routes
const templateRouter = require('./routes/template.router')
const draftsRouter = require('./routes/drafts.router')





/** ----------MIDDLEWARE---------------- */
app.use(bodyParser.json()); // needed for axios request
app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static('build')); // for static files




/** ----------------EXPRESS ROUTES -------------- */
app.use('/starter', templateRouter);
app.use('/api', draftsRouter)









// App Set //
const PORT = process.env.PORT || 5000;


// START SERVER
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});

