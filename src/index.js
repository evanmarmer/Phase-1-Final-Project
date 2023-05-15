const sonsUrl = "http://localhost:3000/seasons"

function getAllSeasons(){
    fetch(sonsUrl)
    .then(res => res.json())
    .then(data => console.log(data))
}
getAllSeasons()
// asynchronous function (promise) that allows the rest of the code to be loaded before the response (data retrieval) from the json server happens








