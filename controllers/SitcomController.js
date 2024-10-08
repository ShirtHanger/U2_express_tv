const sitcoms = [
    {
        name: "Everybody Hates Chris",
        category: "Sitcom",
        medium: "Live-Action",
        episodes: 21,
        isFinished: true,
        image: 'https://m.media-amazon.com/images/M/MV5BM2U1M2QxZDYtMzgyYS00OWQ5LWIyNGUtMmQ1MGQ2NTU2NzNhXkEyXkFqcGc@._V1_.jpg',
    },
    {
        name: 'Fresh Prince of Bel-Air',
        category: "Sitcom",
        medium: "Live-Action",
        episodes: 21,
        isFinished: true,
        image: 'https://m.media-amazon.com/images/M/MV5BYzhlMDVmNTgtZjkwOS00NGYwLTllMWEtYjY2OWNkMDliMTAyXkEyXkFqcGc@._V1_.jpg', 
    },
    {
        name: 'My wife and Kids',
        category: "Sitcom",
        medium: "Live-Action",
        episodes: 21,
        isFinished: true,
        image: 'https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p184700_b_v10_ao.jpg',
    },
]

function getSitcoms(request, response) {
    response.send(sitcoms)
}

function getSitcom(request, response) {
    response.send(sitcoms[request.params.id])
}

function getSitcomSearch(request, response) {
    let userSearch = request.params.name.toLowerCase()
    console.log(userSearch)
    let results = []
    for (sitcom of sitcoms) {
        if (sitcom.name.toLowerCase().includes(userSearch)) {
            results.push(sitcom)
        }
    }
    if (results != '') {
        response.send(results)
    } else {
        response.send(`no results for ${userSearch}`)
}}

module.exports = {
    sitcoms,
    getSitcoms,
    getSitcom,
    getSitcomSearch
}