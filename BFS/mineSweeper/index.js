// Tommorow
/**
 * @param {character[][]} board
 * @param {number[]} click
 * @return {character[][]}
 */
var adjacentMines = function(board, x, y){
    let numMines = 0;
    for(let i = x-1; i <= x+1; ++i){ //loops to check all 8 squares around the click
        for (let k=y-1; k <=y+1; ++k){
            if (i >=0 && i < board.length && k >=0 && k <board[i].length && board[i][k] == 'M') //makes sure the algorithm is only checking squares that are ON the board
                numMines += 1;
        }
    }
    
    return numMines;
}
var updateBoard = function(board, click) { //main function
    if(!board) return board
    
    let [x,y] = click
    if (board[x][y] == 'M'){ //if the click landed on a mine, change it to X
        board[x][y] = 'X';
    }else{
        numMines = adjacentMines(board, x,y); //find out how many mines are around the square
        if (numMines > 0){ 
            board[x][y] = numMines.toString() //remember to return the number as a string
        }else{
           board[x][y] = 'B'
             for(let a= x-1; a<x+2; a++){ //another nested loop to check all 8 squares around a click
                for(let b=y-1; b< y+2;b++){ // this time we're looking for squares around the click that are NOT blank
                    if(a>=0 && a< board.length && b>=0 && b< board[a].length && board[a][b] !== 'B') //making sure we stay on the board here 
                        updateBoard(board, [a,b]) //call the updateBoard function again with new click coordinates
                }
            }
        }
    }
    return board;
};

// Another way
const updateBoard2=()=>{
    const rows=board.length
    const cols=board[0].length

    dfs(click[0],click[1])

    function dfs(row,col){
        if(!board[row][col]) return
        if(board[row][col]==="M"){
            board[row][col]="X"
            return
        }

        if(board[row][col]!=="E") return

        const mines=checkForMine(row,col)

        if(mines){
            board[row][col]=mines.toString()
            return
        }
        else{
            board[row][col]="B"

            for(let x=Math.max(row-1,0);x<Math.min(row+2,rows);x++){
                for(let y=Math.max(col-1,0);y<Math.min(col+2,cols);y++){
                    dfs(x,y)
                }
            }

        }
    }

    function checkForMine(x,y){
        let mines=0

    for (let i = Math.max(x - 1, 0); i < Math.min(x + 2, rows); i++) {
      for (let j = Math.max(y - 1, 0); j < Math.min(y + 2, cols); j++) {
        if (board[i][j] === 'M') mines++;
      }
    }
      return mines;

     

    }

    return board
}

console.log(mineSweeper())