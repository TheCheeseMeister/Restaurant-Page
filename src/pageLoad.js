import Bros from './BlowJobBrothers.jpg';

export function createContent() {
    const element = document.createElement('div');
    element.setAttribute('id', 'content');
    
    const pic = new Image();
    pic.src = Bros;

    const heading = document.createElement('h1');
    heading.textContent = "Two Blowing Bros";

    const para = document.createElement('p');
    para.textContent = "Welcome to the Blowing Bros' blowing diner!";

    element.appendChild(pic);
    element.appendChild(heading);
    element.appendChild(para);
    
    return element;
}