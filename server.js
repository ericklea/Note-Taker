//Importing dependencies
const express = require('express');
const path = require('path');
const api = require('./routes/index.html');
//Setting up port
const PORT = 3001;
//Creating express app
const app = express();

//GET route for notes
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
});