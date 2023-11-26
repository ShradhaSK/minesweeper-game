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
    let gameArray = safeSquares.concat(bombs);
    console.log(gameArray);
    let randomisedArray = shuffleArray(gameArray)
    console.log(randomisedArray);



    for (let i = 0; i < width * width; i++) {
        const square = document.createElement('div');
        square.setAttribute('id', i);
        grid.appendChild(square);
        squares.push(square);
    }
}
createBoard();



})


// Function to shuffle the gameArray content

function shuffleArray(array) {
    for (let i = 0; i < array.length; i++) {

        // Generate random array index 
        let j = Math.floor(Math.random() * (i + 1));
        // Swapping each element in the array with a randon value
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    return array;
}
