import data from './data.js';

//save bookmarks to local storage
const BOOKMARK_KEY = "entertainment-bookmarks";

const getStoredBookmarks = () => {
    return JSON.parse(localStorage.getItem(BOOKMARK_KEY)) || [];
};

const saveBookmarks = (bookmarks) => {
    localStorage.setItem(BOOKMARK_KEY, JSON.stringify(bookmarks));
}

export const getByTitle = (title) => {
    return data.find(item => item.title === title);
};

export const getTrendingContent = () => {
    return applyBookmarks(
        data.filter(item => item.isTrending)
    );
};

export const getAllContent = () => {
    return applyBookmarks(data);
};

export const getMovies = () => {
    return applyBookmarks(data.filter(item => item.category === 'Movie'));
};

export const getTVSeries = () => {
    return applyBookmarks(data.filter(item => item.category === 'TV Series'));
};

export const getBookmarked = () => {
    const bookmarks = getStoredBookmarks();
    return applyBookmarks(data.filter(item => bookmarks.includes(item.title)));
};

export const toggleBookmark = (title) => {
    const bookmarks = getStoredBookmarks();

    const exists = bookmarks.includes(title);

    let updated;

    if (exists) {
        updated = bookmarks.filter(t => t !== title);
    } else {
        updated = [...bookmarks, title];
    }

    saveBookmarks(updated);
};

const applyBookmarks = (items) => {
    const bookmarks = getStoredBookmarks();

    return items.map(item => ({
        ...item,
        isBookmarked: bookmarks.includes(item.title)
    }));
};