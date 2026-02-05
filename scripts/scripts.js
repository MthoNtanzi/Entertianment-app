import navBar from "./components/navBar.js";

const bodyElement = document.querySelector('body');
const mainContent = document.createElement('main');
mainContent.innerText = "Hello";

bodyElement.appendChild(navBar());
bodyElement.appendChild(mainContent);


function createHeadings(headingName){
    const userHeading = document.createElement(`h1`);
    
    userHeading.innerText = headingName;
    bodyElement.appendChild(userHeading);
}

createHeadings("Trending");
createHeadings("Recommended for you");
