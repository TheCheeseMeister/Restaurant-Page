import { createContent } from './pageLoad.js';
import { createHome } from './tabs/home.js';
import { createMenu } from './tabs/menu.js';
import { createAbout } from './tabs/about.js';

import "./styles.css";

// Creates initial content of page

function intialContent() {
    return createContent();
}

document.body.appendChild(intialContent());

// Buttons for switching tabs on page

const buttons = document.getElementsByClassName("tab");

for (let i = 0; i < buttons.length; i++) {
    buttons.item(i).addEventListener("click", event => {
        event.preventDefault();

        document.body.removeChild(document.body.lastChild);
        
        switch(event.target.getAttribute('id')) {
            case "home":
                createHome();
                break;
            case "menu":
                createMenu();
                break;
            case "about":
                createAbout();
                break;
        }
    });
}