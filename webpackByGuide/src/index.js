import './style.css';
import Icon from './gitlab.png';

function component() {
    const element = document.createElement('div');


    element.innerHTML = "hello";
    element.classList.add('hello');

    const myIcon = new Image();
    myIcon.src = Icon;

    element.appendChild(myIcon);

    return element;
}

document.body.appendChild(component());