// this doesnt handle adjacent cases to "O" at the boundaries
const surrounded=(grid)=>{

    if(grid.length===1) return grid

    let rowLength=grid.length-1
    let colLength=grid[0].length-1

    let visited=new Set()

    for(let row=0;row<grid.length;row++){

        for(let col=0;col<grid[0].length;col++){

            if(grid[row][col]==="O"){
                 dfs(grid,row,col,visited)
            }
        }
    }

    function dfs(grid,row,col,visited){
        let colInbound=col>=0 && col<grid[0].length
        let rowInbound=row>=0 && row<grid.length

        if(!colInbound || !rowInbound) return 

        if((col===0 && row<=rowLength) || (col===colLength &&  row<=rowLength) || (row===rowLength && col<=colLength) || (row===0 && col<=colLength)){
            return 
        }

        let pos=row+","+col

        if(visited.has(pos)) return 
        visited.add(pos)

        grid[row][col]="X"

        dfs(grid,row+1,col,visited)
        dfs(grid,row-1,col,visited)
        dfs(grid,row,col+1,visited)
        dfs(grid,row,col-1,visited)
    }

    return grid
}

const solve=(board)=>{

    if(board.length==0) return null

// only start from the corners then move in 
    for(let row=0;row<board.length;row++){

        for(let col=0;col<board[0].length;col++){

            if(board[row][col]==="O" && (row==0 || row==board.length-1 || col==0 || col==board[0].length-1)){
                dfs(board,row,col)
            }
        }
    }

    for(let row=0;row<board.length;row++){

        for(let col=0;col<board[0].length;col++){
            
            if(board[row][col]=="W"){
                board[row][col]="O"
            }
            else{
                board[row][col]="X"
            }
        }
    }

    function dfs(board,row,col){
        let colInbound=col>=0 && col<board[0].length
        let rowInbound=row>=0 && row<board.length

        if(!colInbound || !rowInbound) return 
        if(board[row][col]=="X" || board[row][col]=="W") return 

        board[row][col]="W"

        dfs(board,row+1,col)
        dfs(board,row-1,col)
        dfs(board,row,col+1)
        dfs(board,row,col-1)

        return
    }

    return board
}

console.log(solve(board =  board = [["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]))