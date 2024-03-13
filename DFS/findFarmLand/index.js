const findFarmLand=(land)=>{
     
    let height=land.length
    let width=land[0].length


    let results=[]

    let endRow=0
    let endCol=0

    let go=(i,j)=>{
        if (i < 0 || j < 0 || i >= height || j >= width || land[i][j] === 0) {
            return;
        } 

        land[i][j]=0 //reset the land to avoid revisiting the land

        endRow=Math.max(endRow,i)
        endCol=Math.max(endCol,j)

        go(i+1,j)
        go(i-1,j)
        go(i,j+1)
        go(i,j-1)

    }

    for(let row=0;row<height;row++){

        for(let col=0;col<width;col++){

            if(land[row][col]===1){
                endRow=0
                endCol=0
                go(row,col)

                results.push([row,col,endRow,endCol])
            }
        }
    }

    return results
}

console.log(findFarmLand([[1]]))
