export function createMenu() {
    const element = document.createElement('div');
    element.setAttribute('id', 'content');

    const heading = document.createElement('h1');
    heading.textContent = "What do we got?";

    const para = document.createElement('p');
    para.textContent = "Pizza! Pasta! Apples! And other things! You Name it, we got it!";

    element.appendChild(heading);
    element.appendChild(para);
    
    return element;
}