import createHeadings from '../components/functions.js';
import searchBar from '../components/searchBar.js';
import trendingRow from '../components/trendingRow.js';
import movieGrid from '../components/movieGrid.js'
// import movieCard from '../components/movieCard.js';

const fakeMovies = [
    {
        id:1,
        title: "Beyond Earth",
        year: 2019,
        category: "Movie",
        rating: "PG",
        isBookmarked: false,
        thumbnail: "assets/golfImg.jpg"
    },
    {
        id:2,
        title: "The Last Frontier",
        year: 2020,
        category: "Movie",
        rating: "PG-13",
        isBookmarked: false,
        thumbnail: "assets/mountainImg.jpg"
    },
    {
        id:3,
        title: "Midnight Express",
        year: 2018,
        category: "Movie",
        rating: "R",
        isBookmarked: true,
        thumbnail: "assets/trainImg.jpg"
    },
    {
        id:4,
        title: "Ocean's Secret",
        year: 2021,
        category: "Movie",
        rating: "PG",
        isBookmarked: false,
        thumbnail: "assets/oceanImg.jpg"
    },
    {
        id:5,
        title: "Desert Storm",
        year: 2020,
        category: "Movie",
        rating: "R",
        isBookmarked: true,
        thumbnail: "assets/desertImg.jpg"
    }
];

const homePage = () => {
    const main = document.createElement('main');

    main.appendChild(searchBar());

    // Trending Card
    
    main.appendChild(createHeadings("Trending"));
    main.appendChild(trendingRow(fakeMovies.slice(0, 5)));

    // Movie Cards
    main.appendChild(createHeadings("Recommended for you"));
    main.appendChild(movieGrid(fakeMovies));

    return main
}

export default homePage;