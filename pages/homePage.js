import createHeadings from '../components/functions.js';
import searchBar from '../components/searchBar.js';
import trendingCard from '../components/trendingCard.js';
import movieCard from '../components/movieCard.js';

const fakeMovie = {
    title: "Beyond Earth",
    year: 2019,
    category: "Movie",
    rating: "PG",
    isBookmarked: false,
    thumbnail: "assets/golfImg.jpg"
};

const trendingHeading = createHeadings("Trending");
const recommendedMovHeading = createHeadings("Recommended for you");


const homePage = () => {
    const main = document.createElement('main');

    main.appendChild(searchBar());

    // Trending Card
    const trendingMovDiv = document.createElement('div');
    trendingMovDiv.classList.add('trendingMovContainer');
    main.appendChild(trendingHeading);
    trendingMovDiv.appendChild(trendingCard(fakeMovie));
    main.appendChild(trendingMovDiv);

    // Movie Cards
    const movieCardsContainer = document.createElement('div');
    movieCardsContainer.classList.add('movieCardsContainer');
    main.appendChild(recommendedMovHeading);
    movieCardsContainer.appendChild(movieCard(fakeMovie));
    main.appendChild(movieCardsContainer);

    return main
}

export default homePage;