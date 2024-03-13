var numIslands = function(grid) {
    
    let visited=new Set()

    let size=0


    for(let row=0;row<grid.length;row++){

        for(let col=0;col<grid[0].length;col++){

            if(grid[row][col]==="1"){
                if(dfs(grid,row,col,visited)===true){
                    size+=1
                }
            }
        }
    }

    function dfs(grid,row,col,visited){

        let colInbound=col>=0 && col<grid[0].length

        let rowInbound=row>=0 && row<grid.length

        if(!rowInbound || !colInbound) return false

        if(grid[row][col]==="0") return false

        let pos=row+","+col

        if(visited.has(pos)) return false
        
        visited.add(pos)

        dfs(grid,row+1,col,visited)
        dfs(grid,row-1,col,visited)
        dfs(grid,row,col+1,visited)
        dfs(grid,row,col-1,visited)

        return true
    }

    return size
}

console.log(numIslands(grid = [
    ["1","1","0","0","0"],
    ["1","1","0","0","0"],
    ["0","0","1","0","0"],
    ["0","0","0","1","1"]
  ]))
