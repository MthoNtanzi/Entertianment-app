const trendingCard = (item) => {
    const cardDiv = document.createElement('div');
    cardDiv.classList = 'trendingCardContainer';
    cardDiv.style.backgroundImage = `url('${item.thumbnail}')`;

    // Wrapper for the boomkark icon... for styling
    const bookmarkWrapper = document.createElement('div');
    bookmarkWrapper.classList = 'bookmarkImgWrapper';

    const bookmarkImg = document.createElement('img');
    bookmarkImg.src = item.isBookmarked 
        ? 'assets/icon-bookmark-full.svg' 
        : 'assets/icon-bookmark-empty.svg';
    bookmarkImg.alt = "bookmark";
    bookmarkImg.classList.add('bookmarkImg');

    bookmarkWrapper.appendChild(bookmarkImg);

    // Description container, containing movie name and description
    const descriptionContainer = document.createElement('div');
    descriptionContainer.classList = "descriptionContainer";

    const movieDescription = document.createElement('p');
    movieDescription.classList = "movieDescription"

    const categoryIcon = item.category === "Movie"
        ? 'assets/icon-category-movie.svg'
        : 'assets/icon-category-tv.svg';
    
    movieDescription.innerHTML = `
        <span>${item.year}</span> • <span><img src='${categoryIcon}' alt='movie icon'/> ${item.category}</span> • <span>${item.rating}</span>
    `;

    const movieName = document.createElement('h1');
    movieName.innerText = item.title;
    movieName.classList = "movieName"

    descriptionContainer.appendChild(movieDescription);
    descriptionContainer.appendChild(movieName);

    cardDiv.appendChild(bookmarkWrapper);
    cardDiv.appendChild(descriptionContainer);

    return cardDiv;
}

export default trendingCard;