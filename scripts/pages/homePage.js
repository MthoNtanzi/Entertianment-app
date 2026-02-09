import createHeadings from '../components/functions.js';


const homePage = () => {
    const main = document.createElement('main');

    const searchBar = document.createElement('div');
    searchBar.innerHTML = `
        <img src='/assets/icon-search.svg' alt='search'/>
        <input type='text' id='searchVal'/>
    `;

    main.appendChild(searchBar);
    createHeadings("Trending", main);

    return main
}

export default homePage;