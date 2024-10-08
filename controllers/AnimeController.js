const animes = [
    {
        name: "Jojo's Bizarre Adventure",
        category: "Anime",
        medium: "Animated",
        episodes: 190,
        isFinished: true,
        image: 'https://upload.wikimedia.org/wikipedia/en/a/aa/JoJo_Part_1_Phantom_Blood.jpg',
    },
    {
        name: "Frieren: Beyond Journey's End",
        category: "Anime",
        medium: "Animated",
        episodes: 28,
        isFinished: false,
        image: 'https://m.media-amazon.com/images/I/816AbVQc+0L.jpg', 
    },
    {
        name: 'Dragon Ball Z',
        category: "Anime",
        medium: "Animated",
        episodes: 372,
        isFinished: true,
        image: 'https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781569319307/dragon-ball-z-vol-1-9781569319307_hr.jpg',
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