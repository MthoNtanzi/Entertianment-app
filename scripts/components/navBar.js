/**
 * 
 * @param { string } iconURL 
 * @param { string } navIconSrc 
 * @return void
 */
const iconCreate =(navIconSrc, iconURL, imgClass = '')=>{
    //Create the link and link it to the URL given
    const imageLink = document.createElement('a');
    imageLink.href = iconURL
    
    // Create icons for navigation
    const navIcon = document.createElement('img');
    navIcon.src = navIconSrc;
    navIcon.alt = "Navigation link";
    
    imageLink.appendChild(navIcon);
    return(imageLink);
}



const navBar =()=>{
    const navBar = document.createElement('nav');
    navBar.id = 'navBar';

    const logoLink = iconCreate("/assets/logo.svg", "/");



    navBar.appendChild(logoLink);

    //ul
    const navLinks = document.createElement('ul');
    navLinks.id = 'nav-items';
    //li * 4
    const homeLink = iconCreate("/assets/icon-nav-home.svg", "/");
    const moviesLink = iconCreate("/assets/icon-nav-movies.svg", "/");
    const tvSeriesLink = iconCreate("/assets/icon-nav-tv-series.svg", "/");
    const bookmarkLink = iconCreate("/assets/icon-nav-bookmark.svg", "/");
    
    const listItems = [homeLink, moviesLink, tvSeriesLink, bookmarkLink];
    listItems.forEach(link => {
        
        const li = document.createElement("li");
        li.appendChild(link)
        li.classList.add('nav-items');
        navLinks.appendChild(li);
    });

    navBar.appendChild(navLinks);
    
    //profile

    const profileLink = iconCreate("/assets/image-avatar.png", "/");
    profileLink.classList.add('profileImg')
    navBar.appendChild(profileLink);
    
    return navBar
}

export default navBar;