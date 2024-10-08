const animeController = require('./AnimeController')
const sitcomController = require('./SitcomController')
const dramaController = require('./DramaController')

allShows = [
    ...animeController.animes,
    ...sitcomController.sitcoms,
    ...dramaController.dramas
]

function getAllShows(request, response) {
    response.send(allShows)
}

function getAShow(request, response) {
    response.send(allShows[request.params.id])
}

function getShowSearch(request, response) {
    let userSearch = request.params.name.toLowerCase()
    console.log(userSearch)
    let results = []
    for (show of allShows) {
        if (show.name.toLowerCase().includes(userSearch)) {
            results.push(show)
        }
    }
    if (results != '') {
        response.send(results)
    } else {
        response.send(`no results for ${userSearch}`)
}}

module.exports = {
    allShows,
    getAllShows,
    getAShow,
    getShowSearch
}