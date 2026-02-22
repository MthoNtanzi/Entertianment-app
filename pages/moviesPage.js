import { getMovies } from "../api.js";
import createHeadings from "../components/functions.js";
import searchBar from "../components/searchBar.js";
// import movieGrid from "../components/movieGrid.js";

const moviesPage = () => {
    const main = document.createElement('main');

    main.appendChild(searchBar());
    main.appendChild(createHeadings("Movies"));

    const movieWrapper = document.createElement('div');
    movieWrapper.classList.add("movieWrapper");
    // movieWrapper.appendChild(movieGrid(getMovies()));



    return main
}

export default moviesPage;