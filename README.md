# Minesweeper ![bomb](https://github.com/ShradhaSK/minesweeper-game/assets/131806140/2c2541f3-2cc8-4df8-8f6c-bd45dbe21bf3)


This game probably brings back childhood memories for most, if not all, of us. I remember spending hours together hooked to the screen of my Windows '95 desktop trying to figure out a way to win the game! In fact, Minesweeper has its origins in the earliest mainframe games of the 1960s and 1970s. The earliest ancestor of Minesweeper was Jerimac Ratliff's Cube. The basic gameplay style became a popular segment of the puzzle game genre during the 1980s.

More on the history of Minesweeper [here](https://en.wikipedia.org/wiki/Minesweeper_(video_game))


# My Version

<img width="406" alt="image" src="https://github.com/ShradhaSK/minesweeper-game/assets/131806140/3ed07059-e40b-4d3f-ae8b-1797443dc3dd">
<img width="393" alt="image" src="https://github.com/ShradhaSK/minesweeper-game/assets/131806140/a58b8f56-3b62-4574-9866-9984f69eeed4">


# Getting Started

**Rules**

- The rules are straightforward:
  1. Click on any one of the cells/boxes in the grid to start
  2. The numbers depict how many mines are adjacent to any given cell.
  3. The purpose of the game is to navigate the board without clicking on any of the mines/bombs
  4. Use "Cntrl + Click" to add a flag to a cell if you think it's a mine. ("Cntrl + Click" again to remove the flag if you change your mind)

**Winning/Losing**
- If you click on a mine: GAME OVER, pal. Clicking on Try Again will reset the game and you can try your luck once more!
- Uncover all the cells without mines and flag all the cells with mines to win!

[Play the game here!](https://shradhask.github.io/minesweeper-game/)

# Technologies Used

The three Web Development Musketeers: 

- HTML
- CSS
- JavaScript

# HTML

The HTML code is pretty concise and to the point; most of the real action comes from Javascript. Also, the game board itself is a simple div element populated by Javascript.

# CSS

I had fun styling the individual box borders and the fonts for the displayed numbers. I also made it fairly responsive by adding media queries for tablets, laptops and larger screen sizes.

# JavaScript

Since this was my first time ever writing a functioning web app using JavaScript from scratch, it's not a big surprise that this section was by far the greatest challenge of the project for me. Below are some that made the headlines:

1. Dynamically creating the 10 X 10 boxes for the board using ```for``` loop

2. Randomizing bomb placement on the array.
   
3. Rendering everything in the DOM.

4. Assigning click handlers to different events.

5. Creating win/lose logic

6. Figuring out the control flow of how the functions are all chained together synchronously.

7. Learning about recursion and how to properly write a function that creates such an effect.

# Design

- I chose a simple yet elegant design, with the individual cells having a tile-like effect

- I selected diferent colors for different numbers displayed on the screen to visual appeal

- I added the Reset button (Try Again) to be displayed only when the game is over

I figured for my first project I needed to learn how to walk before I could run and imitate the original Windows Minesweeper game.
I'm very glad I chose this path, because I learned A LOT by simply trying to match the styles from the original game.
With that said, I am definitely going to create a modernized version of this game someday soon.

# Deployment






