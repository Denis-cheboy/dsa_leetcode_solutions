var floodFill = function(image, sr, sc, color) {

    let visited=new Set()

    for(let i=0;i<image.length;i++){

        for(let j=0;j<image[0].length;j++){

            if(sr===i && sc===j && color!==image[sr][sc]){
                dfs(image,i,j,color)
            }
        }
    }

    function dfs(image,row,col,color){
        let colInbound=col>=0 && col<image[0].length
        let rowInbound=row>=0 && row<image.length

        if(!colInbound || !rowInbound) return 

        let pos=row+","+col
        if(visited.has(pos)) return 
        visited.add(pos)

        let currImage=image[row][col]

        image[row][col]=color

        if(row+1<image.length && image[row+1][col]===currImage){
            dfs(image,row+1,col,color)
        }
        if(row-1>=0 && image[row-1][col]===currImage){
            dfs(image,row-1,col,color)
        }
        if(col+1<image[0].length && image[row][col+1]===currImage){
            dfs(image,row,col+1,color)
        }
        if(col-1>=0 && image[row][col-1]===currImage){
            dfs(image,row,col-1,color)
        }
    }

    return image
};


// DFS
var floodFill3 = function(image, sr, sc, newColor) {
    const currColor = image[sr][sc];
    if(newColor === currColor) return image;
    
    function callDFS(img, row, col) {
        if(row >= img.length || row < 0 || col >= img[0].length || col < 0 || img[row][col] !== currColor) return;
        img[row][col] = newColor;
		callDFS(img, row-1, col);  //up
        callDFS(img, row+1, col);  //down
        callDFS(img, row, col+1);  //right 
        callDFS(img, row, col-1);  //left
        return img;
    }
    return callDFS(image, sr, sc);
};

// BFS 
var floodFill4 = function(image, sr, sc, newColor) {
    const currColor = image[sr][sc];
    if(currColor === newColor) return image;
    const queue = [[sr, sc]];
    
    while(queue.length) {
        const [row, col] = queue.shift();
        if(image[row][col] === currColor) {
            image[row][col] = newColor
			if(row-1 >= 0) queue.push([row-1, col]);  //up
            if(row+1 < image.length) queue.push([row+1, col]);  //down
            if(col+1 < image[0].length) queue.push([row, col+1]);  //right
            if(col-1 >= 0) queue.push([row, col-1]);  //left
        }
    }
    return image;
};

console.log(floodFill2([[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, color = 2))