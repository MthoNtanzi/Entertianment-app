import createHeadings from '../components/functions.js';
import searchBar from '../components/searchBar.js';
import trendingCard from '../components/trendingCard.js';

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
    createHeadings("Trending", main);
    // Trending Card
    main.appendChild(trendingCard(fakeMovie));

    createHeadings("Recommended for you", main);
    // Movie Cards

    return main
}

export default homePage;