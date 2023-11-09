const express = require('express');
const notesData = require('./db/db.json');
const PORT = 3001;

const app = express();

app.use(express.static('public'));






  
  app.listen(PORT, () =>
    console.log(`Express server listening on port ${PORT}!`)
  );
  