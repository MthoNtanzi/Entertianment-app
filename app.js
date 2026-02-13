import navBar from "./components/navBar.js";
import { navigateTo } from "./router.js";
// import homePage from "./pages/homePage.js";

const bodyElement = document.querySelector('body');

bodyElement.prepend(navBar(navigateTo));

const contentDiv = document.createElement('div');
contentDiv.id = 'content';
bodyElement.appendChild(contentDiv);


navigateTo(window.location.pathname);
