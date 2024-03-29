const express = require('express');
const app = express()
const PORT = process.env.SERVER_PORT || 5000
require('dotenv').config();
const colors = require('colors');
const connectDB = require('./db/config');
connectDB()

app.listen(PORT, (req, res) => {
    console.log(`Server listening on http://localhost:${PORT}`.cyan.bold.underline);
})


const style = "text-align:center; color:#0008;"
app.get('/', (req, res) => {
    res.send(`<h1 style=${style}>Banking Project Server Side</h1>`)
})
