const sitcoms = [
    {
        name: "Everybody Hates Chris",
        category: "Sitcom",
        medium: "Live-Action",
        episodes: 21,
        isFinished: true,
    },
    {
        name: 'Fresh Prince of Bel-Air',
        category: "Sitcom",
        medium: "Live-Action",
        episodes: 21,
        isFinished: true,
    },
    {
        name: 'My wife and Kids',
        category: "Sitcom",
        medium: "Live-Action",
        episodes: 21,
        isFinished: true,
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