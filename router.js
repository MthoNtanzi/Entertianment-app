import homePage from "./pages/homePage.js";
import moviesPage from "./pages/moviesPage.js"
import tvSeriesPage from "./pages/tvSeriesPage.js"
import bookmarkedPage from "./pages/bookmarkedPage.js";
// import profilePage from "./pages/profile.js";
import movieDetailPage from './pages/movieDetailPage.js';


const routes = {
    '#/': homePage,
    '#/movies': moviesPage,
    '#/tv-series': tvSeriesPage,
    '#/bookmarks': bookmarkedPage,
    // '#/profile': profilePage
};

export const navigateTo = (route) => {
    if (window.location.hash !== route) {
        window.location.hash = route;
    }
}

const updateActiveNav = (route) => {
    document.querySelectorAll('#nav-items a').forEach(link => {
        if (route.startsWith(link.getAttribute('href'))) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

export const loadInitialPage = () => {
    const route = window.location.hash || '#/';
    loadPage(route);
}

const loadPage = (route) => {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = '';
    
    if (route.startsWith('#/movies/')) {
        const id = route.split('/')[2];
        contentDiv.appendChild(movieDetailPage(id));
        updateActiveNav(route);
        return;
    }

    
    const pageComponent = routes[route] || routes['#/'];
    
    try {
        const page = pageComponent();
        if (page) {
            contentDiv.appendChild(page);
        } else {
            console.error('Page component returned nothing for route:', route);
            // Fallback to home page
            contentDiv.appendChild(routes['#/']());
        }
    } catch (error) {
        console.error('Error loading page:', error);
        contentDiv.innerHTML = '<div>Error loading page</div>';
    }

    window.updateActiveNav(route);
}

window.addEventListener('hashchange', () => {
    loadPage(window.location.hash);
});
