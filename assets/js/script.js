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

    let gameArray = safeSquares.concat(bombs);

    let randomisedArray = shuffleArray(gameArray)




    for (let i = 0; i < width * width; i++) {
        const square = document.createElement('div');
        square.setAttribute('id', i);
        square.classList.add(randomisedArray[i]);
        grid.appendChild(square);
        squares.push(square);

        // Click Event listener to handle clicking on one of the squares
        square.addEventListener('click', function(event) {
            click(square);
        })
    }


    // Add Numbers

    for (let i = 0; i < squares.length; i++) {
        let total = 0;
        let isLeftEdge = (i % width === 0);
        let isRightEdge = (i % width === width - 1);

        if (squares[i].classList.contains('valid')) {
            if (i > 0 && !isLeftEdge && squares[i - 1].classList.contains('bomb')) total ++;
            if (i > 9 && !isRightEdge && squares[i +1 -width].classList.contains('bomb')) total ++;
            if (i > 10 && squares[i - width].classList.contains('bomb')) total ++;
            if (i > 11 && !isLeftEdge && squares[i - 1 - width].classList.contains('bomb')) total ++;
            if (i < 98 && !isRightEdge && squares[i + 1].classList.contains('bomb')) total ++;
            if (i < 90 && !isLeftEdge && squares[i - 1 + width].classList.contains('bomb')) total ++;
            if (i < 88 && !isRightEdge && squares[i + width].classlist.contains('bomb')) total ++;
            squares[i].setAttribute('data', total);
            console.log(squares[i]);
        }
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


// Click function 
function click(square) {
    if (square.classList.contains('bomb')) {
        console.log('Game Over');
    } else {
        let total = square.getAttribute('data')
        if (total !== 0) {
            square.classList.add('checked');
        }
    }
}
