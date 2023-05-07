//Importing dependencies
const express = require('express');
const path = require('path');
const api = require('./routes/index.html');
const fs = require('fs');
//Setting up port
const PORT = 3001;
//Creating express app
const app = express();

app.get('/', (req, res) => res.send('Navigate to /send or/ routes'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});