//Importing dependencies
const express = require('express');
const path = require('path');
const api = require('./routes/index.html');
const fs = require('fs');
//Setting up port and requiring models for syncing
const PORT = process.env.PORT || 3001;
//Creating express app
const app = express();

