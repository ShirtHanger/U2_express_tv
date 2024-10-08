const dramas = [
    {
        name: "Watchmen",
        category: "Drama",
        medium: "Live-Action",
        episodes: 9,
        isFinished: false,
        image: 'https://m.media-amazon.com/images/M/MV5BZGJkMmY5MTQtODg0MC00NTgxLTgwMTctODMxNGM0NDhhM2UxXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
    },
    {
        name: "Invincible",
        category: "Drama",
        medium: "Animated",
        episodes: 17,
        isFinished: false,
        image: 'https://lionsdigest1.com/wp-content/uploads/2023/12/MV5BN2Q1NWExNzEtM2M1Ny00ZDJhLWIwN2MtZGI5ZGI4MzBlYTQyXkEyXkFqcGdeQXVyOTYyMTY2NzQ@._V1_.jpg',
    },
    {
        name: "Batman: The Animated Series (1992)",
        category: "Drama",
        medium: "Animated",
        episodes: 85,
        isFinished: true,
        image: 'https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p183921_b_v8_aw.jpg',
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