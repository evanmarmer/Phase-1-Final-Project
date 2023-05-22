const sonsUrl = "http://localhost:3000/seasons"

function getAllSeasons() {
    fetch(sonsUrl) // fetch data from sonsUrl API endpoint
        .then(res => res.json()) // convert to JSON format
        .then(data => displaySeasons(data)) // pass data to desplaySeasons function 
}

getAllSeasons() // asynchronous function (promise) that allows the rest of the code to be loaded before the response (data retrieval) from the json server happens


function renderCard(season) { // function for rendering a card for each season
    const seasonCard = document.createElement('div') // create a new div for the card
    seasonCard.className = 'card' // assign 'card' class to seasonCard
    // set inner HTML using template literal
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
        <button id="comment-submit">Hit Enter to Add Comment</button>
    </div>
    `

    document.querySelector('#season-list').appendChild(seasonCard) // append the card to the DOM

    // create reference to varios elements for the seasonCard
    let likesCounter = seasonCard.querySelector('.likes')
    let likesButton = seasonCard.querySelector('button')
    let commentBox = seasonCard.querySelector('#comment-box');
    let commentsSection = document.createElement('div');
    commentsSection.className = 'comments-section';
    seasonCard.appendChild(commentsSection);


    let likes = 0

    likesButton.addEventListener('click', () => { // add event listener to like button
        likes++ // increment likes counter
        likesCounter.innerText = likes // update likes counter text
    })

    commentBox.addEventListener('keydown', (event) => { // add event listener to comment box for 'enter' key
        if (event.key === 'Enter') {
            const comment = commentBox.value;
            if (comment) {
                const commentElement = document.createElement('p'); // create a new p element for the comment
                commentElement.innerText = comment; // set inner text to comment
                commentsSection.appendChild(commentElement); // apend comment to comments section
                commentBox.value = ''; // clear the comment box
            }
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


function displaySeasons(seasons) {
    // console.log(seasons)
    seasons.forEach(season => { // iterate through each season in seasons array
        renderCard(season) // render each season card 
        // console.log(season)
    })
}


