/**
 * 
 * @param { string } iconURL 
 * @param { string } navIconSrc 
 * @return void
 */
const iconCreate =(navIconSrc, iconURL)=>{
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

    const homeLink = iconCreate("/assets/icon-nav-home.svg", "/");



    navBar.appendChild(homeLink);

    //ul
        //li * 3
    
    //profile
    
    return navBar
}

export default navBar;