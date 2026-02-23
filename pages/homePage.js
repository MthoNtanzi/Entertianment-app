import { getTrendingContent, getAllContent } from '../dataService.js';
import createHeadings from '../components/functions.js';
import searchBar from '../components/searchBar.js';
import trendingRow from '../components/trendingRow.js';
import movieGrid from '../components/movieGrid.js';

const homePage = () => {
    const main = document.createElement('main');

    const allContent = getAllContent();
    const trendingMovies = getTrendingContent();
    const recommended = allContent.filter(item => !item.isTrending);

    // Sections to show/hide during search
    const trendingHeading = createHeadings("Trending");
    const trendingSection = trendingRow(trendingMovies);
    const recommendedHeading = createHeadings("Recommended for you");
    const recommendedWrapper = document.createElement('div');

    const renderRecommended = (items) => {
        recommendedWrapper.innerHTML = '';
        recommendedWrapper.appendChild(movieGrid(items));
    };

    main.appendChild(searchBar((query) => {
        if (query) {
            const filtered = allContent.filter(item =>
                item.title.toLowerCase().includes(query.toLowerCase())
            );
            trendingHeading.style.display = 'none';
            trendingSection.style.display = 'none';
            recommendedHeading.textContent = `Found ${filtered.length} result${filtered.length !== 1 ? 's' : ''} for '${query}'`;
            renderRecommended(filtered);
        } else {
            trendingHeading.style.display = '';
            trendingSection.style.display = '';
            recommendedHeading.textContent = 'Recommended for you';
            renderRecommended(recommended);
        }
    }));

    main.appendChild(trendingHeading);
    main.appendChild(trendingSection);
    main.appendChild(recommendedHeading);
    renderRecommended(recommended);
    main.appendChild(recommendedWrapper);

    return main;
};

export default homePage;