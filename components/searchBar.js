const searchBar = (onSearch) => {
    const searchBarWrapper = document.createElement('div');
    searchBarWrapper.id = "searchbar";

    const input = document.createElement('input');
    input.type = "text";
    input.placeholder = "Search for movies or TV series";

    input.addEventListener("input", (e) => {
        onSearch(e.target.value.trim());
    });

    searchBarWrapper.appendChild(input);

    return searchBarWrapper
}

export default searchBar;