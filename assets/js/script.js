document.addEventListener('DOMContentLoaded', function() {
    const grid = document.getElementsByClassName('grid')[0];
    let flagsLeft = document.getElementById('flags-left');
    let result = document.getElementById('result');
    let tryAgainBtn = document.getElementById('try-again');
    result.innerHTML = '😊'
    let width = 10;
    let squares = [];
    let flags = 0;
    let numberOfBombs = 20;
    let isGameOver = false;

    // Create Board
function createBoard() {
    // Update the Flags left to the number of bombs
    flagsLeft.innerHTML = numberOfBombs;

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

        // Cntrl and left click to add flags
        square.oncontextmenu = function(event) {
            event.preventDefault();
            addFlag(square);
        }
    }


    // Add Numbers

    for (let i = 0; i < squares.length; i++) {
        let total = 0;
        let isLeftEdge = (i % width === 0);
        let isRightEdge = (i % width === width - 1);

        if (squares[i].classList.contains('valid')) {
            if (i > 0 && !isLeftEdge && squares[i -1].classList.contains('bomb')) total ++;
            if (i > 9 && !isRightEdge && squares[i +1 -width].classList.contains('bomb')) total ++;
            if (i > 10 && squares[i -width].classList.contains('bomb')) total ++;
            if (i > 11 && !isLeftEdge && squares[i -1 -width].classList.contains('bomb')) total ++;
            if (i < 98 && !isRightEdge && squares[i +1].classList.contains('bomb')) total ++;
            if (i < 90 && !isLeftEdge && squares[i -1 +width].classList.contains('bomb')) total ++;
            if (i < 88 && !isRightEdge && squares[i +1 +width].classList.contains('bomb')) total ++;
            if (i < 89 && squares[i +width].classList.contains('bomb')) total ++;
            squares[i].setAttribute('data', total);
            
        }
    }

}
createBoard();


// Function to add a flag on the squares with bombs using right click
function addFlag(square) {
    if (isGameOver) return;
    if (!square.classList.contains('checked') && (flags < numberOfBombs)) {
        if (!square.classList.contains(['flag'])) {
            square.classList.add('flag');
            square.innerHTML = '🚩';
            flags ++;
            // Update the number of flags left
            flagsLeft.innerHTML = numberOfBombs - flags;
            checkWin();
        } else {
            square.classList.remove('flag');
            square.innerHTML = '';
            flags --;
            // Update the number of Flags
            flagsLeft.innerHTML = numberOfBombs - flags;
        }
    }
}




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
    let currentId = square.id;
    if (isGameOver) return;
    if (square.classList.contains('checked') || square.classList.contains('flag')) return;
    if (square.classList.contains('bomb')) {
        gameOver(square);
    } else {
        let total = square.getAttribute('data')
        if (total != 0) {
            square.classList.add('checked');
            // Adding different colours for different bomb totals
            if (total == 1) square.classList.add('one');
            if (total == 2) square.classList.add('two');
            if (total == 3) square.classList.add('three');
            if (total == 4) square.classList.add('four');
            square.innerHTML = total;
            return;
        }
        checkSquare(square, currentId);
    }
    square.classList.add('checked');
}

/**
 * Using recursion to check the eight squares adjoining the clicked square
 * a function calling itself until a condition (base condition) is met
 * reference: https://developer.mozilla.org/en-US/docs/Glossary/Recursion
 */
// Function to check neighbouring squares when one square is clicked
function checkSquare(square, currentId) {
    const isLeftEdge = (currentId % width === 0);
    const isRightEdge = (currentId % width === width - 1);


    setTimeout(function() {
        if (currentId > 0 && !isLeftEdge) {
          const newId = squares[parseInt(currentId) -1].id
          const newSquare = document.getElementById(newId)
          click(newSquare)
        }
        if (currentId > 9 && !isRightEdge) {
          const newId = squares[parseInt(currentId) +1 -width].id
          const newSquare = document.getElementById(newId)
          click(newSquare)
        }
        if (currentId > 10) {
          const newId = squares[parseInt(currentId -width)].id
          const newSquare = document.getElementById(newId)
          click(newSquare)
        }
        if (currentId > 11 && !isLeftEdge) {
          const newId = squares[parseInt(currentId) -1 -width].id
          const newSquare = document.getElementById(newId)
          click(newSquare)
        }
        if (currentId < 98 && !isRightEdge) {
          const newId = squares[parseInt(currentId) +1].id
          const newSquare = document.getElementById(newId)
          click(newSquare)
        }
        if (currentId < 90 && !isLeftEdge) {
          const newId = squares[parseInt(currentId) -1 +width].id
          const newSquare = document.getElementById(newId)
          click(newSquare)
        }
        if (currentId < 88 && !isRightEdge) {
          const newId = squares[parseInt(currentId) +1 +width].id
          const newSquare = document.getElementById(newId)
          click(newSquare)
        }
        if (currentId < 89) {
          const newId = squares[parseInt(currentId) +width].id
          const newSquare = document.getElementById(newId)
          click(newSquare)
        }
      }, 10);
}

// Game Over function when user clicks on a square with a bomb
function gameOver(square) {
    result.innerHTML = 'BOOM! Game Over!';
    isGameOver = true;
    tryAgainBtn.style.display = 'block';
    tryAgainBtn.addEventListener('click', function() {
        // Reload the page when the button is clicked
        location.reload();
    });

    
    /**
     * Using the inbuilt forEach() method 
     * forEach() calls a provided callbackFn function once for each element in an array in ascending-index order
     * Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
     */
    // Show all the bombs when game is over
    squares.forEach(function(square) {
        if (square.classList.contains('bomb')) {
            square.innerHTML = '💣';
        }
    })
}


// Function to check for a win
function checkWin() {
    let matches = 0;

    for (let i = 0; i < squares.length; i++) {
        if (squares[i].classList.contains('flag') && squares[i].classList.contains('bomb')) {
            matches ++;
        }
        if (matches === numberOfBombs) {
            console.log("You Win!");
            isGameOver = true;
        }
    }
}

})