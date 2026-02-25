import { getBookmarked } from "../dataService.js";
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

    // Movies section
    main.appendChild(createHeadings(bookmarkedMovies.length > 0 ? "Bookmarked Movies" : "No Bookmarked Movies"));
    if (bookmarkedMovies.length > 0) {
        trendingMovieWrapper.appendChild(movieGrid(bookmarkedMovies));
        main.appendChild(trendingMovieWrapper);
    }

    // TV Series section
    main.appendChild(createHeadings(bookmarkedSeries.length > 0 ? "Bookmarked TV Series" : "No Bookmarked TV Series"));
    if (bookmarkedSeries.length > 0) {
        trendingSeriesWrapper.appendChild(movieGrid(bookmarkedSeries));
        main.appendChild(trendingSeriesWrapper);
    }

    return main;
}

export default bookmarkedPage;