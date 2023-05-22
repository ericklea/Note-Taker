//Importing dependencies
const express = require('express');
const path = require('path');
const fs = require('fs');
const dbNotes = require('./db/db.json');
const app = express();
const PORT = process.env.PORT || 3001;

//Middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//GET route for notes
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
});
app.get('/api/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './db/db.json'));
});
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});
//POST route for notes
app.post('/api/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './db/db.json'));
}
);

//Listen to port
app.listen(PORT, () =>
console.log(`Example app listening at http://localhost:${PORT}`)
);
