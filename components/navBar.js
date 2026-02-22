/**
 * 
 * * Creates a navigation icon link
 * @param {string} svgPath - SVG markup string
 * @param {string} route - Route path
 * @param {Function} onClick - Navigation handler
 * @param {string} imgClass - Optional class for image
 * @returns {HTMLAnchorElement}
 */
const iconCreate = (svgMarkup, route, onClick, linkClass = '')=>{
    //Create the link and link it to the URL given
    const imageLink = document.createElement('a');
    imageLink.href = route;
    imageLink.dataset.route = route; 

    if (linkClass) {
        imageLink.classList.add(linkClass);
    }

    // If icon looks like SVG markup
    if (svgMarkup.trim().startsWith('<svg')) {
        imageLink.innerHTML = svgMarkup;
    } else {
        const img = document.createElement('img');
        img.src = svgMarkup;
        img.alt = "Navigation link";
        imageLink.appendChild(img);
    }

    imageLink.addEventListener('click', (e) => {
        e.preventDefault();
        if (onClick) onClick(route);
        updateActiveNav(route);
    });
    
    return(imageLink);
}



const navBar =(onNavigate)=>{
    const nav = document.createElement('nav');
    nav.id = 'navBar';

    // ===== SVG ICONS =====//

    const homeIcon = `
        <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M8 0H1C.4 0 0 .4 0 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1Zm0 11H1c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1v-7c0-.6-.4-1-1-1ZM19 0h-7c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1Zm0 11h-7c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1v-7c0-.6-.4-1-1-1Z"/></svg>
    `;

    const moviesIcon = `
        <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M16.956 0H3.044A3.044 3.044 0 0 0 0 3.044v13.912A3.044 3.044 0 0 0 3.044 20h13.912A3.044 3.044 0 0 0 20 16.956V3.044A3.044 3.044 0 0 0 16.956 0ZM4 9H2V7h2v2Zm-2 2h2v2H2v-2Zm16-2h-2V7h2v2Zm-2 2h2v2h-2v-2Zm2-8.26V4h-2V2h1.26a.74.74 0 0 1 .74.74ZM2.74 2H4v2H2V2.74A.74.74 0 0 1 2.74 2ZM2 17.26V16h2v2H2.74a.74.74 0 0 1-.74-.74Zm16 0a.74.74 0 0 1-.74.74H16v-2h2v1.26Z"/></svg>
    `;

    const tvSeriesIcon = `
        <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M20 4.481H9.08l2.7-3.278L10.22 0 7 3.909 3.78.029 2.22 1.203l2.7 3.278H0V20h20V4.481Zm-8 13.58H2V6.42h10v11.64Zm5-3.88h-2v-1.94h2v1.94Zm0-3.88h-2V8.36h2v1.94Z"/></svg>
    `;

    const bookmarkIcon = `
        <svg width="17" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M15.387 0c.202 0 .396.04.581.119.291.115.522.295.694.542.172.247.258.52.258.82v17.038c0 .3-.086.573-.258.82a1.49 1.49 0 0 1-.694.542 1.49 1.49 0 0 1-.581.106c-.423 0-.79-.141-1.098-.423L8.46 13.959l-5.83 5.605c-.317.29-.682.436-1.097.436-.202 0-.396-.04-.581-.119a1.49 1.49 0 0 1-.694-.542A1.402 1.402 0 0 1 0 18.52V1.481c0-.3.086-.573.258-.82A1.49 1.49 0 0 1 .952.119C1.137.039 1.33 0 1.533 0h13.854Z"/></svg>
    `;


    const logoLink = document.createElement('a');
    logoLink.href = "/";
    logoLink.classList.add("logoLink");

    const logoImg = document.createElement('img');
    logoImg.src = "/assets/logo.svg";
    logoImg.alt = "Logo";
    logoImg.classList.add("homeImg");

    logoLink.appendChild(logoImg);
    logoLink.addEventListener('click', (e) => {
        e.preventDefault();
        if (onNavigate) onNavigate('/');
    });

    nav.appendChild(logoLink);

    //ul
    const navLinks = document.createElement('ul');
    navLinks.id = 'nav-items';

    //li * 4
    const linksConfig = [
        { icon: homeIcon, route: "#/" },
        { icon: moviesIcon, route: "#/movies" },
        { icon: tvSeriesIcon, route: "#/tv-series" },
        { icon: bookmarkIcon, route: "#/bookmarks" }
    ];
        
    linksConfig.forEach(({ icon, route }) => {
        const li = document.createElement("li");
        li.classList.add("list-nav-items");

        const link = iconCreate(icon, route, onNavigate);
        li.appendChild(link);

        navLinks.appendChild(li);
    });

    nav.appendChild(navLinks);
    
    //profile

    const profileLink = iconCreate("/assets/image-avatar.png", "/", onNavigate, "profileImg");
    profileLink.classList.add('profileImg')
    nav.appendChild(profileLink);
    
    return nav
}

export default navBar;

export const updateActiveNav = (currentRoute) => {
    document.querySelectorAll('#nav-items a').forEach(link => {
        if (link.dataset.route === currentRoute) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
};
