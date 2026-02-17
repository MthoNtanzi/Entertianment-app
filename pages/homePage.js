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


const homePage = () => {
    const main = document.createElement('main');

    main.appendChild(searchBar());

    // Trending Card
    const trendingMovDiv = document.createElement('div');
    trendingMovDiv.classList.add('trendingMovContainer');
    createHeadings("Trending", main);
    trendingMovDiv.appendChild(trendingCard(fakeMovie));
    main.appendChild(trendingMovDiv);

    // Movie Cards
    const movieCardsContainer = document.createElement('div');
    movieCardsContainer.classList.add('movieCardsContainer');
    createHeadings("Recommended for you", main);
    movieCardsContainer.appendChild(movieCard(fakeMovie));
    main.appendChild(movieCardsContainer);

    return main
}

export default homePage;