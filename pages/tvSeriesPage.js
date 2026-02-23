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

    const heading = createHeadings("TV Series");

    main.appendChild(searchBar((query) => {
        const filtered = query
            ? allSeries.filter(item =>item.title.toLowerCase().includes(query.toLowerCase()))
            : allSeries;
        
        heading.textContent = query
        ? `Found ${filtered.length} result${filtered.length !== 1 ? 's' : ''} for '${query}'`
        : 'TV Series';

        renderSeries(filtered);
    }));
    main.appendChild(heading);

    renderSeries(allSeries);
    main.appendChild(seriesWrapper);

    return main
}

export default tvSeriesPage;