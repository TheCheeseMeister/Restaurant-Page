import { createContent } from './pageLoad.js';
import "./styles.css";

function component() {
    return createContent();
}

document.body.appendChild(component());