const animes = [
    {
        name: "Jojo's Bizarre Adventure",
        category: "Anime",
        medium: "Animated",
        episodes: 190,
        isFinished: true,
    },
    {
        name: "Frieren: Beyond Journey's End",
        category: "Anime",
        medium: "Animated",
        episodes: 28,
        isFinished: false,
    },
    {
        name: 'Dragon Ball Z',
        category: "Anime",
        medium: "Animated",
        episodes: 372,
        isFinished: true,
    },
]

function getAnimes(request, response) {
    response.send(animes)
}

function getAnime(request, response) {
    response.send(animes[request.params.id])
}

function getAnimeSearch(request, response) {
    let userSearch = request.params.name.toLowerCase()
    console.log(userSearch)
    let results = []
    for (anime of animes) {
        if (anime.name.toLowerCase().includes(userSearch)) {
            results.push(anime)
        }
    }
    if (results != '') {
        response.send(results)
    } else {
        response.send(`no results for ${userSearch}`)
}}

module.exports = {
    animes,
    getAnimes,
    getAnime,
    getAnimeSearch
  }