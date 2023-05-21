//Importing dependencies
const express = require('express');
const path = require('path');
//const api = require('./routes/index.html');
//Setting up port
const PORT = 3001;
//Creating express app
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});
//GET route for notes
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
});
app.get('/api/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './db/db.json'));
});
app.listen(PORT, () =>
console.log(`Example app listening at http://localhost:${PORT}`)
);