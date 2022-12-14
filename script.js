const gridContainer = document.querySelector('#grid-container');
let rows = document.getElementsByClassName('rows');
let cells = document.getElementsByClassName('cells');

const settingsBtn = document.querySelector('#settings-btn');
settingsBtn.addEventListener('click', changeSettings);

let rowCount = 16;
let columnCount = 16; 

//initialize grid
createGrid();

function createGrid(){
    createRows(rowCount);
    createColumns(columnCount);
}

function createRows(rowNum){
    for (let r = 0; r < rowNum; r++) {
        let row = document.createElement('div');
        gridContainer.appendChild(row);
        row.setAttribute('class', 'rows');
    }
}

function createColumns(columnNum) {

    for (let r = 0; r < rowCount; r++) {
        for (let c = 0; c<columnNum; c++) {

            let cell = document.createElement('div');
            cell.setAttribute('class', 'cells');
            cell.style.filter = 'brightness(100%)';

            cell.addEventListener('mouseover', () => {
                changeCellColor(cell);
            });

            rows[r].appendChild(cell);

        }
    }
}

function changeSettings() {
    rowCount = prompt('Input the dimensions of the grid:' 
            +'(default value is 16) ', 16);

    columnCount = rowCount;

    //clean grid
    removeAllChildNodes(gridContainer);
    createGrid();
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function randomColor() {
    return Math.floor(Math.random() * 255);
}

function changeCellColor(cell) {
    cell.style.backgroundColor = 'rgba('+randomColor()+','
            +randomColor()+','+randomColor()+')';

    //dims the cell by 10% everytime the mouse hovers
    let currBrightness = cell.style.filter;
    currBrightness = currBrightness.replace(/\D/g, '');

    if (currBrightness > 0) {
        currBrightness -= 10;
    }
    
    cell.style.filter = `brightness(${currBrightness}%)`;

}