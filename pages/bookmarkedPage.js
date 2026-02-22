import { getBookmarked } from "../api.js";
import createHeadings from "../components/functions.js";
import searchBar from "../components/searchBar.js";
import movieGrid from "../components/movieGrid.js";

const bookmarkedPage = () => {
    const main = document.createElement('main');

    const allBookmarked = getBookmarked();
    const bookmarkedMovies = allBookmarked.filter(item => item.category === 'Movie');
    const bookmarkedSeries = allBookmarked.filter(item => item.category === 'TV Series');

    const trendingMovieWrapper = document.createElement('div');
    trendingMovieWrapper.classList.add("trendingMovieWrapper");
    const trendingSeriesWrapper = document.createElement('div');
    trendingSeriesWrapper.classList.add("trendingSeriesWrapper");

    main.appendChild(searchBar());
    main.appendChild(createHeadings("Bookmarked Movies"));
    trendingMovieWrapper.appendChild(movieGrid(bookmarkedMovies));
    main.appendChild(trendingMovieWrapper);
    main.appendChild(createHeadings("Bookmarked TV Series"));
    trendingSeriesWrapper.appendChild(movieGrid(bookmarkedSeries));
    main.appendChild(trendingSeriesWrapper);

    return main
}

export default bookmarkedPage;

// import { getTVSeries } from "../api.js";
// import createHeadings from "../components/functions.js";
// import searchBar from "../components/searchBar.js";
// import movieGrid from "../components/movieGrid.js";

// const tvSeriesPage = () => {
//     const main = document.createElement('main');

//     const allSeries = getTVSeries();

//     main.appendChild(searchBar());
//     main.appendChild(createHeadings("TV Series"));

//     const seriesWrapper = document.createElement('div');
//     seriesWrapper.classList.add("seriesWrapper");
//     seriesWrapper.appendChild(movieGrid(allSeries));
//     main.appendChild(seriesWrapper);

//     return main
// }

// export default tvSeriesPage;