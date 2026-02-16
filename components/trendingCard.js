const trendingCard = () => {
    const cardDiv = document.createElement('div');

    cardDiv.classList = 'trendingCardContainer';

    const defBookmarkIcon = 'assets/icon-bookmark-empty.svg';
    const bookmarkTrueIcon = 'assets/icon-bookmark-full.svg';
    const movieIcon = 'assets/icon-category-movie.svg';
    const tvSeriesIcon = 'assets/icon-category-tv.svg';
    let isBookMark = false;
    let isMovie = true;

    const bookmarkWrapper = document.createElement('div');
    bookmarkWrapper.classList = 'bookmarkImgWrapper';

    const isBookMarkImg = document.createElement('img');
    isBookMark ? isBookMarkImg.src = bookmarkTrueIcon : isBookMarkImg.src = defBookmarkIcon;
    isBookMarkImg.alt = "bookmark";
    isBookMarkImg.classList = 'bookmarkImg';

    bookmarkWrapper.appendChild(isBookMarkImg);

    const descriptionContainer = document.createElement('div');
    descriptionContainer.classList = "descriptionContainer";

    const movieDescription = document.createElement('p');
    movieDescription.classList = "movieDescription"
    movieDescription.innerHTML = `
        <span id='movieYear'>2019</span> • <span id="category"> <img src='${isMovie? movieIcon: tvSeriesIcon}' alt='movie icon'/> Movie</span> • <span id='rating'>PG</span>
    `;
    const movieName = document.createElement('h1');
    movieName.innerText = 'BeyondEarth';
    movieName.classList = "movieName"

    cardDiv.appendChild(bookmarkWrapper);
    descriptionContainer.appendChild(movieDescription);
    descriptionContainer.appendChild(movieName);
    cardDiv.appendChild(descriptionContainer);
    cardDiv.style.backgroundImage = "url('assets/golfImg.jpg')";

    return cardDiv;
}

export default trendingCard;