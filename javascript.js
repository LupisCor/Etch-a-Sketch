
const gridContainer = document.querySelector('.grid-container');
let height = "500px";
let width = "500px";



document.querySelector('#click').onclick = function(){
    gridContainer.innerHTML = '';
    let size = prompt("How many cells?",2);
    for (let i=0; i<size*size; i++){
        const gridBlock = document.createElement('div');
        gridBlock.classList.add('cell');
        gridContainer.appendChild(gridBlock);
    }
}

document.querySelector('#clear').onclick = function(){
    gridContainer.innerHTML = '';
}



