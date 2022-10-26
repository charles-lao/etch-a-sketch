const container = document.querySelector('#container');
let rows = document.getElementsByClassName('rows');
let cells = document.getElementsByClassName('cells');

let rowCount = 16;
let columnCount = 16; 


function createGrid(){
    createRows(rowCount);
    createColumns(columnCount);
}

function createRows(rowNum){
    for (let r = 0; r < rowNum; r++) {
        let row = document.createElement('div');
        container.appendChild(row);
        row.setAttribute('class', 'rows');
    }
}

function createColumns(columnNum) {
    for (let r = 0; r < rowCount; r++) {
        for (let c = 0; c<columnNum; c++) {
            let cell = document.createElement('div');
            cell.setAttribute('class', 'cells');

            cell.addEventListener('mouseover', function (e) {
                e.target.style.background = 'black';
            });

            rows[r].appendChild(cell);
            console.log(r+' '+c);
        }
    }
}





createGrid();