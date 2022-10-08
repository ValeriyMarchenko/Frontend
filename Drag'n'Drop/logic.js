const square = document.querySelector('.square');

square.ondragstart = () => false;

const getCoords = (elem) => {
    const box = elem.getBoundingClientRect();
    return {
        top: box.top + pageYOffset,
        left: box.left + pageXOffset
    };
}

square.addEventListener('mousedown', (e) => {
    const coords = getCoords(square);
    const shiftX = e.pageX - coords.left;
    const shiftY = e.pageY - coords.top;

    const moveAt = (e) => {
        square.style.left = e.pageX - shiftX + 'px';
        square.style.top = e.pageY - shiftY + 'px';
    }

    const theEnd = () => {
        document.removeEventListener('mousemove', moveAt);
        document.removeEventListener('mouseup', theEnd);
    }

    square.style.position = 'absolute';

    moveAt(e);
    square.style.zIndex = 1000;

    document.addEventListener('mousemove', moveAt);

    document.addEventListener('mouseup', theEnd);
});