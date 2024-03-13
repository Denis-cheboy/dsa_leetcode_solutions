var minimumTotal = function(triangle) {

    if(triangle.length===1) return triangle[0][0]

    let dp=Array(triangle.length).fill(0)

    dp[0]=triangle[0][0]
    let currentIndex=0

    for(let i=1;i<triangle.length;i++){
        let min=Math.min(triangle[i][currentIndex],triangle[i][currentIndex+1])
        currentIndex=triangle[i].indexOf(min)
        dp[i]=min+dp[i-1]
    }

    return dp[triangle.length-1]
};

// another way here

const minimumTotal1=(triangle)=>{

    if(triangle.length===1) return triangle[0][0]

    for(let i=triangle.length-2;i>=0;i--){

        for(let j=0;j<triangle[i].length;j++){
            triangle[i][j]+=Math.min(triangle[i+1][j],triangle[i+1][j+1])
        }
    }

    return triangle[0][0]
}

// another way

var minimumTotal3= function(triangle) {
    let lastRow = new Array(triangle.length+1).fill(0);
    triangle.reverse().forEach((row) => row.forEach((e, i) => (lastRow[i] = e + Math.min(lastRow[i], lastRow[i + 1]))));
    return lastRow[0];
};

// recursion approach
var minimumTotal4 = function(triangle) {
    let n = triangle.length;
    let dp = Array(n).fill(Number.MAX_VALUE).map(()=> Array(n).fill(Number.MAX_VALUE));
    //let min = Number.MAX_VALUE;
    function f(i, j){
        if(i == n-1){return triangle[i][j];}
        if(dp[i][j] != Number.MAX_VALUE) return dp[i][j];
        let down = triangle[i][j] + f(i+1, j);
        let diag = triangle[i][j] + f(i+1, j+1);
        return dp[i][j] = Math.min(down, diag);
    }
    return f(0, 0);
};


console.log(minimumTotal([[-1],[2,3],[1,-1,-3]]))
