import createHeadings from '../components/functions.js';
import searchBar from '../components/searchBar.js';
import trendingCard from '../components/trendingCard.js';


const homePage = () => {
    const main = document.createElement('main');

    main.appendChild(searchBar());
    createHeadings("Trending", main);
    // Trending Card
    main.appendChild(trendingCard());

    createHeadings("Recommended for you", main);
    // Movie Cards

    return main
}

export default homePage;