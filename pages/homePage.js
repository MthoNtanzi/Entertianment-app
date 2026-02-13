import createHeadings from '../components/functions.js';
import searchBar from '../components/searchBar.js';


const homePage = () => {
    const main = document.createElement('main');

    main.appendChild(searchBar());
    createHeadings("Trending", main);
    createHeadings("Recommended for you", main);

    return main
}

export default homePage;