const express = require('express');
const note = require('./db/db.json');
const PORT = process.env.port || 3001;

const app = express();

app.use(express.static('public'));

// GET Route for initial page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});

// GET Route for notes
app.get('/feedback', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);


// GET request
app.get('/api/notes', (req, res) => {
    // Let the client know that their request was received
    res.json(`${req.method} request received`);
  
    // Set the notes to the client
    return res.json(note);
  });
  
  // POST request
  app.post('/api/notes', (req, res) => {
    // Let the client know that their POST request was received
    res.json(`${req.method} request received`);
  
    // add error handling HERE

    // log response HERE

  });
  
// change port to local for testing
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);
  