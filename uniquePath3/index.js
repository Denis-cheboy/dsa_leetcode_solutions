var uniquePathsIII = function(grid) {
    let count=0
    let visited=new Set()

    for(let i=0;i<grid.length;i++){

        for(let j=0;j<grid[0].length;j++){

            if(grid[i][j]===1){
                count+=explore(grid,i,j,visited)
            }
        }
    }

    function explore(grid,row,col,visited){

        let colInbound=col>=0 && col<grid[0].length
        let rowInbound=row>=0 && row<grid.length

        if(!colInbound || !rowInbound || grid[row][col]===-1){ 
            return 0
        }

        let position=row+","+col

        
        if(visited.has(position)){
            return 0
        }
        
        visited.add(position)
        
        if(grid[row][col]===2){
            return 1
        } 

        let size=0

        
        size+=explore(grid,row+1,col,visited)
        size+=explore(grid,row-1,col,visited)
        size+=explore(grid,row,col-1,visited)
        size+=explore(grid,row,col+1,visited)
        
        visited.delete(position)
        
        return size

    }

    return count
}


// backtracking and recursion here
const uniquePath3=(grid)=>{

    let zeroes=0
    let sr=0
    let sc=0

    for(let i=0;i<grid.length;i++){

        for(let j=0;j<grid[0].length;j++){

            if(grid[i][j]==0){
                zeroes++
            } 
            else if(grid[i][j]===1){
                sr=i
                sc=j
            }
        }
    }

    return explore(grid,sr,sc,zeroes)


    function explore(grid,x,y,zeroes){
        let colInbound=y>=0 && y<grid[0].length
        let rowInbound=x>=0 && x<grid.length

        if(!colInbound || !rowInbound || grid[x][y]===-1){ 
            return 0
        }

        if(grid[x][y]===2){
            return zeroes==-1?1:0
        }
        grid[x][y]=-1
        zeroes--

        let totalPaths=0

        totalPaths+=explore(grid,x+1,y,zeroes)
        totalPaths+=explore(grid,x-1,y,zeroes)
        totalPaths+=explore(grid,x,y+1,zeroes)
        totalPaths+=explore(grid,x,y-1,zeroes)

        grid[x][y]=0
        zeroes++

        return totalPaths
        
    }
}

console.log(uniquePath3([[1,0,0,0],[0,0,0,0],[0,0,0,2]]))