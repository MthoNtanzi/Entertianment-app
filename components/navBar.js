/**
 * 
 * @param { string } iconURL 
 * @param { string } navIconSrc 
 * @return void
 */
const iconCreate =(navIconSrc, route, onClick, imgClass = '')=>{
    //Create the link and link it to the URL given
    const imageLink = document.createElement('a');
    imageLink.href = route;

    imageLink.addEventListener('click', (e) => {
        e.preventDefault();
        if (onClick) onClick(route);
    })
    
    // Create icons for navigation
    const navIcon = document.createElement('img');
    navIcon.src = navIconSrc;
    navIcon.alt = "Navigation link";

    if (imgClass) {
        navIcon.classList.add(imgClass);
    }
    
    imageLink.appendChild(navIcon);
    return(imageLink);
}



const navBar =(onNavigate)=>{
    const navBar = document.createElement('nav');
    navBar.id = 'navBar';

    const logoLink = iconCreate("/assets/logo.svg", "/", onNavigate, "homeImg");
    logoLink.classList.add("logoLink")

    navBar.appendChild(logoLink);

    //ul
    const navLinks = document.createElement('ul');
    navLinks.id = 'nav-items';
    //li * 4
    const homeLink = iconCreate("/assets/icon-nav-home.svg", "/", onNavigate);
    const moviesLink = iconCreate("/assets/icon-nav-movies.svg", "/movies", onNavigate);
    const tvSeriesLink = iconCreate("/assets/icon-nav-tv-series.svg", "/tv-series", onNavigate);
    const bookmarkLink = iconCreate("/assets/icon-nav-bookmark.svg", "/bookmarks", onNavigate);
    
    const listItems = [homeLink, moviesLink, tvSeriesLink, bookmarkLink];
    listItems.forEach(link => {
        
        const li = document.createElement("li");
        li.appendChild(link)
        li.classList.add('list-nav-items');
        navLinks.appendChild(li);
    });

    navBar.appendChild(navLinks);
    
    //profile

    const profileLink = iconCreate("/assets/image-avatar.png", "/", onNavigate);
    profileLink.classList.add('profileImg')
    navBar.appendChild(profileLink);
    
    return navBar
}

export default navBar;