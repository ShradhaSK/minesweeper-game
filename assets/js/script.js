document.addEventListener('DOMContentLoaded', function() {
    const grid = document.getElementsByClassName('grid')[0];
    let width = 10;
    let squares = [];
    let numberOfBombs = 20;

    // Create Board
function createBoard() {

    //  Get shuffled game array with random bombs

    const bombs = Array(numberOfBombs).fill('bomb');
    const safeSquares = Array((width * width) - numberOfBombs).fill('valid');
    console.log(bombs);
    console.log(safeSquares);



    for (let i = 0; i < width * width; i++) {
        const square = document.createElement('div');
        square.setAttribute('id', i);
        grid.appendChild(square);
        squares.push(square);
    }
}
createBoard();



})
