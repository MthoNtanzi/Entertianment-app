import trendingCard from "./trendingCard.js";

const trendingRow = (items = []) => {
    const container = document.createElement('div');
    container.classList.add('trendingMovContainer');

    items.forEach(item => {
        container.appendChild(trendingCard(item));
    });

    return container;
};

export default trendingRow;