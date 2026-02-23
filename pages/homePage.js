import { getTrendingContent, getAllContent } from '../dataService.js';
import createHeadings from '../components/functions.js';
import searchBar from '../components/searchBar.js';
import trendingRow from '../components/trendingRow.js';
import movieGrid from '../components/movieGrid.js';

const homePage = () => {
    const main = document.createElement('main');

    const trendingMovies = getTrendingContent();
    const recommended = getAllContent().filter(item => !item.isTrending);

    main.appendChild(searchBar());
    main.appendChild(createHeadings("Trending"));
    main.appendChild(trendingRow(trendingMovies));
    main.appendChild(createHeadings("Recommended for you"));
    main.appendChild(movieGrid(recommended));

    return main;
}

// const homePage = () => {
//     console.log('homePage function called');
//     const main = document.createElement('main');
//     main.innerHTML = '<h1 style="color:white">Hello</h1>';
//     return main;
// };

export default homePage;