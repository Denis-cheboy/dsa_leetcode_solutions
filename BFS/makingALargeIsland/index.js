const makingIsland=(grid)=>{
      let visited=new Set()

    let graph={}
    let max=0
    let count=2

    let directions=[[0,1],[1,0],[-1,0],[0,-1]]

    for(let i=0;i<grid.length;i++){

        for(let j=0;j<grid[0].length;j++){

            if(grid[i][j]===1){
                dfs(grid,i,j,count)
                count++
            }

           
        }
    }

    for(let i=0;i<grid.length;i++){
        for(let j=0;j<grid[0].length;j++){
            if(grid[i][j]===0){

                let size=1
                let set=new Set()

                for(let [row,col] of directions){
                    let nextRow=i+row
                    let nextCol=j+col

                    if(nextRow<0 || nextRow>=grid.length || nextCol<0 || nextCol>=grid[0].length) continue

                    if(!(set.has(grid[nextRow][nextCol])) && grid[nextRow][nextCol]>1){
                        if((grid[nextRow][nextCol] in graph)){
                            size+=graph[grid[nextRow][nextCol]]
                        }
                        set.add(grid[nextRow][nextCol])
                    }

                }
                

                max=Math.max(max,size)
            }
           
        }
    }



    function dfs(grid,row,col){
        let colInbound=col>=0 && col<grid[0].length
        let rowInbound=row>=0 && row<grid.length

        if(!colInbound || !rowInbound) return 0
        if(grid[row][col]===0 || grid[row][col]>1) return 0

        let pos=row+","+col

        if(visited.has(pos)) return 0

        visited.add(pos)

        let size=1

        grid[row][col]=count

        size+=dfs(grid,row+1,col,count)
        size+=dfs(grid,row-1,col,count)
        size+=dfs(grid,row,col+1,count)
        size+=dfs(grid,row,col-1,count)

        graph[count]=size

        return size

    }

    return max?max:grid.length*grid[0].length
}

console.log(makingIsland( [[1,1],[1,1]]))