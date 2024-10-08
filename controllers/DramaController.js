const dramas = [
    {
        name: "Watchmen",
        category: "Drama",
        medium: "Live-Action",
        episodes: 9,
        isFinished: false,
    },
    {
        name: "Invincible",
        category: "Drama",
        medium: "Animated",
        episodes: 17,
        isFinished: false,
    },
    {
        name: "Batman: The Animated Series (1992)",
        category: "Drama",
        medium: "Animated",
        episodes: 85,
        isFinished: true,
    },
]

function getDramas(request, response) {
    response.send(dramas)
}

function getDrama(request, response) {
    response.send(dramas[request.params.id])
}

function getDramaSearch(request, response) {
    let userSearch = request.params.name.toLowerCase()
    console.log(userSearch)
    let results = []
    for (drama of dramas) {
        if (drama.name.toLowerCase().includes(userSearch)) {
            results.push(drama)
        }
    }
    if (results != '') {
        response.send(results)
    } else {
        response.send(`no results for ${userSearch}`)
}}

module.exports = {
    dramas,
    getDramas,
    getDrama,
    getDramaSearch
}