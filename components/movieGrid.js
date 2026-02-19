import movieCard from "./movieCard.js";

const movieGrid = (items = []) => {
    const container = document.createElement('div');
    container.classList.add('movieCardsContainer');

    items.forEach(item => {
        container.appendChild(movieCard(item));
    });

    return container;
}

export default movieGrid;