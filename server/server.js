
const { configDotenv } = require('dotenv')
const express = require('express')
const app = express()
const PORT =  5000





app.listen(PORT, () => {
    console.log(`App listenin on http://localhost:${PORT}`);
})

app.get('/', (req, res) => {
    res.send('Banking Project Server Side')
})
