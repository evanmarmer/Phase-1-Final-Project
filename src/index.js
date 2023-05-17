const sonsUrl = "http://localhost:3000/seasons"

function getAllSeasons(){
    fetch(sonsUrl)
    .then(res => res.json())
    .then(data => displaySeasons(data))
}
getAllSeasons()
// asynchronous function (promise) that allows the rest of the code to be loaded before the response (data retrieval) from the json server happens

function renderCard(season){
    // console.log(season)
    const seasonCard = document.createElement('div')
    seasonCard.classname = 'card'
    seasonCard.innerHTML = `
    <img src="${season.image.original}">
    <div class ="content">
        <h1>Season ${season.number}</h1>
        <h2>Premier Date ${season.premiereDate}</h2>
        </div>
    `
    document.querySelector('#season-list').appendChild(seasonCard)
}


function displaySeasons(seasons){
    // console.log(seasons)
    seasons.forEach(season => {
        renderCard(season)
        // console.log(season)
    })
}


