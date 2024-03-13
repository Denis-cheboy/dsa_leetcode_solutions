const board=()=>{

    let count=0
    
    for(let row=0;row<board.length;row++){

        for(let col=0;col<board[0].length;col++){

            if(board[row][col]==="X" && board[row][col-1]!=="X" && (!board[row-1] || board[row-1][col]!=="X")){
                count++
                
            }
        }
    }
    return count
}

// Another way here

var countBattleships = function (board) {
    // Initialize  no of ships to 0
    let ships = 0;
  
    // Loop through each position(cell) on the board
    for (i = 0; i < board.length; i++) {
      for (j = 0; j < board[0].length; j++) {
        // If the board does not have `X` means there is no part of ship present
        // So we continue
        if (board[i][j] == ".") {
          continue;
        }
  
        // Now at this point the position(cell) is `X`
        // We check if it is a part of a ship or not
        // It can either be a part of a ship parked verticaly in which case board[i - 1][j] should be `X`
        // Or it can be a part of a ship parked horizontally in which case board[i][j - 1] should be `X`
        // In both of the above cases, we already have found a ship before when we encounter it's first cell
        // So we dont increment the result
        let previousLeft = board[i]?.[j - 1] || ".";
        let previousUp = board[i - 1]?.[j] || ".";
  
        if (previousLeft == "X" || previousUp == "X") {
          continue;
        }
  
        // If it's not any of the above case, then it's either a ship of one cell or a part of a new ship which
        // we have found for the first time
        // So increament the result
        ships++;
      }
    }
  
    return ships;
  };

//   Another best way,, i like this one
  var countBattleships = function(board) {
    let counter = 0
    for(let r=0;r<board.length;r++){
      for(let c=0;c<board[r].length;c++){
        if(board[r][c] === '.') continue
        dfs(board, r, c)
        console.log("returning")
        counter++
      }
    }
    return counter
  };
  
  function dfs(grid, r, c){
    if(r<0||r>=grid.length || c<0 || c>=grid[r].length) return null
    if(grid[r][c] === '.') return null
    grid[r][c] = '.'
    dfs(grid, r+1, c)
    dfs(grid, r, c+1)
  }

console.log(countBattleships([["X",".",".","X"],[".",".",".","X"],[".",".",".","X"]]))