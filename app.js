import navBar, {updateActiveNav} from "./components/navBar.js";
import { navigateTo, loadInitialPage } from "./router.js";

const bodyElement = document.querySelector('body');
bodyElement.prepend(navBar(navigateTo));

window.updateActiveNav = updateActiveNav;

const contentDiv = document.createElement('div');
contentDiv.id = 'content';
bodyElement.appendChild(contentDiv);

loadInitialPage();