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
    seasonCard.className = 'card'
    seasonCard.innerHTML = `
    <img src="${season.image.original}">
    <div class="likes-section">
        <span class="likes">0 likes</span>
        <button id="like">Like</button>
    </div>
    <div class ="content">
        <h1>Season ${season.number}</h1>
        <h2>Premier Date: ${season.premiereDate}</h2>
    </div>
    <div class="comments">
        <input type="text" id="comment-box" placeholder="Enter comment">
        <button id="post">Post</button>
    </div>
    `
    
    document.querySelector('#season-list').appendChild(seasonCard)

    let likesCounter = seasonCard.querySelector('.likes')
    let likesButton = seasonCard.querySelector('button')
    let commentBox = seasonCard.querySelector('#comment-box');
  let postButton = seasonCard.querySelector('#post');
  let commentsSection = document.createElement('div');
  commentsSection.className = 'comments-section';
  seasonCard.appendChild(commentsSection);


   let likes = 0

    likesButton.addEventListener('click', () => {
        likes++
        likesCounter.innerText = likes
    })

    postButton.addEventListener('click', () => {
        const comment = commentBox.value;
        if (comment) {
          const commentElement = document.createElement('p');
          commentElement.innerText = comment;
          commentsSection.appendChild(commentElement);
          commentBox.value = '';
        }
      });
    
}


function displaySeasons(seasons){
    // console.log(seasons)
    seasons.forEach(season => {
        renderCard(season)
        // console.log(season)
    })
}


