import { navigateTo } from '../router.js';
import { toggleBookmark } from '../dataService.js';

const trendingCard = (item) => {
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('trendingCardContainer');
    cardDiv.style.backgroundImage = `url('${item.thumbnail.trending.large}')`;

    // Wrapper for the boomkark icon... for styling
    const bookmarkWrapper = document.createElement('div');
    bookmarkWrapper.classList.add('bookmarkImgWrapper');

    bookmarkWrapper.addEventListener("click", (e) => {
        e.stopPropagation(); // prevent navigation

        toggleBookmark(item.title);

        // Re-render current route
        window.dispatchEvent(new HashChangeEvent("hashchange"));
    });

    const bookmarkImg = document.createElement('img');
    bookmarkImg.src = item.isBookmarked 
        ? 'assets/icon-bookmark-full.svg' 
        : 'assets/icon-bookmark-empty.svg';
    bookmarkImg.alt = "bookmark";
    bookmarkImg.classList.add('bookmarkImg');

    const playButton = document.createElement('div');
    playButton.classList.add('playButton');
    
    const playImg = document.createElement('img');
    const playtext = document.createElement('p');

    playImg.src = "assets/icon-play.svg";
    playtext.innerText = 'Play';

    playButton.appendChild(playImg);
    playButton.appendChild(playtext);

    bookmarkImg.classList.add('bookmarkImg');

    bookmarkWrapper.appendChild(bookmarkImg);

    // Description container, containing movie name and description
    const descriptionContainer = document.createElement('div');
    descriptionContainer.classList.add("trendingDescriptionContainer");

    const movieDescription = document.createElement('p');
    movieDescription.classList.add("trendingMovieDescription");

    const categoryIcon = item.category === "Movie"
        ? 'assets/icon-category-movie.svg'
        : 'assets/icon-category-tv.svg';
    
    // Build metadata with proper structure (better for screen readers)
    const yearSpan = document.createElement('span');
    yearSpan.textContent = item.year;
    
    const categorySpan = document.createElement('span');
    const catIcon = document.createElement('img');
    catIcon.src = categoryIcon;
    catIcon.alt = item.category;
    catIcon.classList.add('categoryIcon');
    categorySpan.appendChild(catIcon);
    categorySpan.appendChild(document.createTextNode(` ${item.category}`));
    
    const ratingSpan = document.createElement('span');
    ratingSpan.textContent = item.rating;
    
    movieDescription.appendChild(yearSpan);
    movieDescription.appendChild(document.createTextNode(' • '));
    movieDescription.appendChild(categorySpan);
    movieDescription.appendChild(document.createTextNode(' • '));
    movieDescription.appendChild(ratingSpan);

    const movieName = document.createElement('h1');
    movieName.innerText = item.title;
    movieName.classList.add("trendingMovieName");

    descriptionContainer.appendChild(movieDescription);
    descriptionContainer.appendChild(movieName);

    cardDiv.appendChild(bookmarkWrapper);
    cardDiv.appendChild(playButton)
    cardDiv.appendChild(descriptionContainer);

    // For routing
    cardDiv.addEventListener('click', () => {
        navigateTo(`#/movies/${item.title}`);
    });

    return cardDiv;
}

export default trendingCard;