
const express = require('express') 
const PORT = process.env.PORT || 3001
const cors = require('cors')

const animeController = require('./controllers/AnimeController.js')
const sitcomController = require('./controllers/SitcomController.js')
const mysteryController = require('./controllers/MysteryController.js')

const app = express() 
app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.listen(PORT, () => {
    console.log(`Express server listening on port ${PORT}`)
})

app.get('/', (req, res)=> { // request and response arguements
    res.send('Hello there! Welcome to my TV website!')
})

app.get('/*', (req, res)=> {
    res.send({
       error: '404 file not found'
    })
})