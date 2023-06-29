const sonsUrl = "http://localhost:3000/seasons"

function getAllSeasons() {
    fetch(sonsUrl) 
        .then(res => res.json()) 
        .then(data => {
            displaySeasons(data)  
        }) 
    }

getAllSeasons() 


function renderCard(season) { 
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
        <input type="text" id="comment-box" placeholder="Enter Comment">
    </div> 
    `

    document.querySelector('#season-list').appendChild(seasonCard) 

    const likesCounter = seasonCard.querySelector('.likes')
    const likesButton = seasonCard.querySelector('button')
    const commentBox = seasonCard.querySelector('#comment-box');
    const commentsSection = document.createElement('div');
    commentsSection.className = 'comments-section';
    seasonCard.appendChild(commentsSection);


    let likes = 0

    likesButton.addEventListener('click', () => { 
        likes++ 
        likesCounter.innerText = likes 
    })

    commentBox.addEventListener('keydown', (event) => { 
        if (event.key === 'Enter') {
            const comment = commentBox.value;
            if (comment) {
                const commentElement = document.createElement('p'); 
                commentElement.innerText = comment; 
                commentsSection.appendChild(commentElement); 
                commentBox.value = ''; 
            }
        }
    });
   
    const seasonImage = seasonCard.querySelector('.image-container img');

    seasonImage.addEventListener('mouseover', () => {
        seasonImage.style.transform = 'scale(1.8)';
    });

    seasonImage.addEventListener('mouseout', () => {
        seasonImage.style.transform = 'scale(1)';
    });

}


function displaySeasons(seasons) {
    seasons.forEach(season => { 
        renderCard(season) 
    })
}






