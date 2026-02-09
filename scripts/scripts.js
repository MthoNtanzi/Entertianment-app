import navBar from "./components/navBar.js";
import homePage from "./pages/homePage.js";

const bodyElement = document.querySelector('body');

bodyElement.prepend(navBar());
bodyElement.appendChild(homePage());



