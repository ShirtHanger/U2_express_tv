
const express = require('express') 
const PORT = process.env.PORT || 3006

const cors = require('cors')

const animeController = require('./controllers/AnimeController.js')
const sitcomController = require('./controllers/SitcomController.js')
const dramaController = require('./controllers/DramaController.js')
const allShowsController = require('./controllers/AllShowsController.js')

const app = express() 
app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.listen(PORT, () => {
    console.log(`Express server listening on port ${PORT}`)
})

app.get('/', (req, res)=> {
    res.send({
       msg: 'Welcome to our Express TV Website!'
    })
})

app.get('/all-shows/', allShowsController.getAllShows)
app.get('/all-shows/:id', allShowsController.getAShow)
app.get('/all-shows/search/:name', allShowsController.getShowSearch)

app.get('/anime', animeController.getAnimes)
app.get('/anime/:id', animeController.getAnime)
app.get('/anime/search/:name', animeController.getAnimeSearch)

app.get('/sitcom', sitcomController.getSitcoms)
app.get('/sitcom/:id', sitcomController.getSitcom)
app.get('/sitcom/search/:name', sitcomController.getSitcomSearch)

app.get('/drama', dramaController.getDramas)
app.get('/drama/:id', dramaController.getDrama)
app.get('/drama/search/:name', dramaController.getDramaSearch)

app.get('/*', (req, res)=> {
    res.send({
       error: '404 show not found'
    })
})