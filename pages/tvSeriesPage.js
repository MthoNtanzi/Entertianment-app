import { getTVSeries } from "../api.js";
import createHeadings from "../components/functions.js";
import searchBar from "../components/searchBar.js";
import movieGrid from "../components/movieGrid.js";

const tvSeriesPage = () => {
    const main = document.createElement('main');

    const allSeries = getTVSeries();

    main.appendChild(searchBar());
    main.appendChild(createHeadings("TV Series"));

    const seriesWrapper = document.createElement('div');
    seriesWrapper.classList.add("seriesWrapper");
    seriesWrapper.appendChild(movieGrid(allSeries));
    main.appendChild(seriesWrapper);

    return main
}

export default tvSeriesPage;