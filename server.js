const express = require('express');
const notesData = require('./db/db.json');
const PORT = 3001;

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
  });
  
  
  // GET request
  app.get('/api/notes', (req, res) => {
      // Let the client know that their request was received
      res.json(`${req.method} request received`);
    
      // Set the notes to the client
      return res.json(notesData);
    });
    
    // POST request
    app.post('/api/notes', (req, res) => {
      // Let the client know that their POST request was received
      res.json(`${req.method} request received`);
    
      // add error handling HERE
  
      // log response HERE
  
    });
  
  app.listen(PORT, () =>
    console.log(`Express server listening on port ${PORT}!`)
  );
  