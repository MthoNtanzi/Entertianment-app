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
    console.log('Navigating to:', route);
    
    // Don't navigate if it's the same route
    if (window.location.pathname === route) {
        return;
    }
    
    window.history.pushState({}, '', route);
    updateActiveNav(route);
    loadPage(route);
}

export const loadInitialPage = () => {
    const route = window.location.pathname;
    console.log('Loading initial page', route);
    loadPage(route);
}

const loadPage = (route) => {
    const contentDiv = document.getElementById('content');
    
    if (!contentDiv) {
        console.error('Content div not found');
        return;
    }
    
    contentDiv.innerHTML = '';
    
    const pageComponent = routes[route] || routes['/'];
    
    try {
        const page = pageComponent();
        if (page) {
            contentDiv.appendChild(page);
        } else {
            console.error('Page component returned nothing for route:', route);
            // Fallback to home page
            contentDiv.appendChild(routes['/']());
        }
    } catch (error) {
        console.error('Error loading page:', error);
        contentDiv.innerHTML = '<div>Error loading page</div>';
    }

    if (window.updateActiveNav) window.updateActiveNav(route);
}

window.addEventListener('popstate', (event) => {
    console.log('Popstate triggered, pathname:', window.location.pathname);
    loadPage(window.location.pathname);
});

const updateActiveNav = (route) => {
    document.querySelectorAll('#nav-items a').forEach(link => {
        if (link.getAttribute('href') === route) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}
