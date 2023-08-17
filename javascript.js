
const gridContainer = document.querySelector(".grid-container");

const gridBlock = document.createElement("div");
gridBlock.classList.add("grid");

document.querySelector("#click").onclick = function(){
    gridContainer.appendChild(gridBlock);
}



