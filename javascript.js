
const size = 0;
let currentColor = 'black';
const gridContainer = document.querySelector('.grid-container');

const randomColor = () => {
    let r = Math.floor(Math.random() * 256); // Random number from 0 - 255
    let g = Math.floor(Math.random() * 256)
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
}


document.querySelector('#grid-size').onclick = function(){
    gridContainer.innerHTML = '';
    let size = prompt("How big is the grid?",2);
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i=0; i<size*size; i++){
        const gridCell = document.createElement('div');
        gridCell.classList.add('grid-cell');
        gridCell.addEventListener('mouseover', changeColor);
        gridContainer.appendChild(gridCell);
    }
}
document.querySelector('#solid-color').onclick = function(){
    solidColor();
}
document.querySelector('#rainbow-color').onclick = function(){
    rainbowColor();
}
document.querySelector('#erase').onclick = function(){
    erase();
}

function changeColor(e) {
    if (currentColor === 'black'){
        e.target.style.backgroundColor = 'black';
    }
    else if (currentColor === 'rainbow'){
        e.target.style.backgroundColor = randomColor();
    }
    else if (currentColor === 'erase'){
        e.target.style.backgroundColor = 'transparent';
    }
}

function solidColor() {
    currentColor = 'black';
    console.log(currentColor);
}
function rainbowColor() {
    currentColor = 'rainbow';
}
function erase() {
    currentColor = 'erase';
}

