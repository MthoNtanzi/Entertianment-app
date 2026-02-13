const searchBar = () => {
    const searchBar = document.createElement('div');
    searchBar.innerHTML = `
        <img src='/assets/icon-search.svg' alt='search'/>
        <input type='text' id='searchVal' placeholder='Search for movies or TV series'/>
    `;
    searchBar.id = "searchbar"

    return searchBar
}

export default searchBar;