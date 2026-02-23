import { getMovies } from "../dataService.js";
import createHeadings from "../components/functions.js";
import searchBar from "../components/searchBar.js";
import movieGrid from "../components/movieGrid.js";

const moviesPage = () => {
    const main = document.createElement('main');
    const movieWrapper = document.createElement('div');
    movieWrapper.classList.add("movieWrapper");

    const renderMovies = (items) => {
        movieWrapper.innerHTML = '';
        movieWrapper.appendChild(movieGrid(items));
    }

    const allMovies = getMovies();

    main.appendChild(searchBar((query) => {
        const filtered = query
            ? allMovies.filter(movie => movie.title.toLocaleLowerCase().includes(query.toLocaleLowerCase()))
            : allMovies;
        
        renderMovies(filtered);
    }));

    main.appendChild(createHeadings("Movies"));

    renderMovies(allMovies);
    main.appendChild(movieWrapper);

    return main
}

export default moviesPage;