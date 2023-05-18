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
    <div class="image-container">
        <img src="${season.image.original}">
    </div>
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
    
      // Get the season image element
  const seasonImage = seasonCard.querySelector('.image-container img');

  // Add event listener to enlarge the image on mouseover
  seasonImage.addEventListener('mouseover', () => {
    seasonImage.style.transform = 'scale(1.8)';
  });

  // Reset the image size on mouseout
  seasonImage.addEventListener('mouseout', () => {
    seasonImage.style.transform = 'scale(1)';
  });

}


function displaySeasons(seasons){
    // console.log(seasons)
    seasons.forEach(season => {
        renderCard(season)
        // console.log(season)
    })
}


