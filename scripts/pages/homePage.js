import createHeadings from '../components/functions.js';


const homePage = () => {
    const main = document.createElement('main');

    const searchBar = document.createElement('div');
    searchBar.innerHTML = `
        <img src='/assets/icon-search.svg' alt='search'/>
        <input type='text' id='searchVal' placeholder='Search for movies or TV series'/>
    `;

    main.appendChild(searchBar);
    createHeadings("Trending", main);
    createHeadings("Recommended for you", main);

    return main
}

export default homePage;