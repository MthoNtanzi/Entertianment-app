import navBar from "./components/navBar.js";

const bodyElement = document.querySelector('body');

bodyElement.prepend(navBar());

function createHeadings(headingName){
    const userHeading = document.createElement(`h1`);
    
    userHeading.innerText = headingName;
    bodyElement.appendChild(userHeading);
}

createHeadings("Trending");
createHeadings("Recommended for you");
