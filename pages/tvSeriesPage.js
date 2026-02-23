import { getTVSeries } from "../dataService.js";
import createHeadings from "../components/functions.js";
import searchBar from "../components/searchBar.js";
import movieGrid from "../components/movieGrid.js";

const tvSeriesPage = () => {
    const main = document.createElement('main');
    const seriesWrapper = document.createElement('div');
    seriesWrapper.classList.add("seriesWrapper");

    const allSeries = getTVSeries();

    const renderSeries = (items) => {
        seriesWrapper.innerHTML = '';
        seriesWrapper.appendChild(movieGrid(items));
    };

    main.appendChild(searchBar((query) => {
        const filtered = query
            ? allSeries.filter(item =>item.title.toLowerCase().includes(query.toLowerCase()))
            : allSeries;

        renderSeries(filtered);
    }));
    main.appendChild(createHeadings("TV Series"));

    renderSeries(allSeries);
    main.appendChild(seriesWrapper);

    return main
}

export default tvSeriesPage;