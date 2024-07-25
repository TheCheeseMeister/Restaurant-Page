export function createAbout() {
    const element = document.createElement('div');
    element.setAttribute('id', 'content');

    const heading = document.createElement('h1');
    heading.textContent = "We Value You!";

    const para = document.createElement('p');
    para.textContent = "Wether you're visiting us from Antartica or West Virginia, we will always strive for your enjoyment and happiness. Afterall, you guys are the real heroes.";

    element.appendChild(heading);
    element.appendChild(para);
    
    return element;
}