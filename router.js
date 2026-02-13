import homePage from "./pages/homePage.js";
import moviesPage from "./pages/moviesPage.js"
import tvSeriesPage from "./pages/tvSeriesPage.js"
import bookmarkedPage from "./pages/bookmarkedPage.js";
// import profilePage from "./pages/profile.js";

const routes = {
    '/': homePage,
    '/movies': moviesPage,
    '/tv-series': tvSeriesPage,
    '/bookmarks': bookmarkedPage,
    // '/profile': profilePage
};

export const navigateTo = (route) => {
    window.history.pushState({}, '', route);

    const contentDiv = document.getElementById('content');

    contentDiv.innerHTML = '';
    const pageComponent = routes[route] || routes['/'];

    contentDiv.appendChild(pageComponent());
}

window.addEventListener('popstate', () => {
    navigateTo(window.location.pathname);
});