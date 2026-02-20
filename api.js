// api.js
import data from './data.js';

export const getTrendingContent = () => {
    return data.filter(item => item.isTrending);
};

export const getAllContent = () => {
    return data;
};

export const getMovies = () => {
    return data.filter(item => item.category === 'Movie');
};

export const getTVSeries = () => {
    return data.filter(item => item.category === 'TV Series');
};

export const getBookmarked = () => {
    return data.filter(item => item.isBookmarked);
};

export const toggleBookmark = (title) => {
    const item = data.find(item => item.title === title);
    if (item) item.isBookmarked = !item.isBookmarked;
};