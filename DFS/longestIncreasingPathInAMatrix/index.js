const longestIncreasing=(M)=>{
    let ylen = M.length, xlen = M[0].length, ans = 0,
    memo = Array.from({length: ylen}, el => new Uint16Array(xlen))
const dfs = (y, x) => {
    if (memo[y][x]) return memo[y][x]
    let val = M[y][x]
    memo[y][x] = 1 + Math.max(
        y < ylen - 1 && M[y+1][x] < val ? dfs(y+1,x) : 0,
        y > 0 && M[y-1][x] < val ? dfs(y-1,x) : 0,
        x < xlen - 1 && M[y][x+1] < val ? dfs(y,x+1) : 0,
        x > 0 && M[y][x-1] < val ? dfs(y,x-1) : 0)
    return memo[y][x]
}
for (let i = 0; i < ylen; i++)
    for (let j = 0; j < xlen; j++)
        ans = Math.max(ans, dfs(i, j))
return ans
}


// another way

const longest=(matrix)=>{
    let dp=new Array(matrix.length).fill(1)
    

    for(let row=matrix.length-1;row>=0;row--){

        for(let col=matrix[0].length;col>=0;col--){

            if(row+1<matrix.length && matrix[row][col]<matrix[row+1][col]){
                dp[row]+=1
            }
            if(row-1>0 && matrix[row][col]<matrix[row-1][col]){
                dp[row]+=1
            }
            if(col+1<matrix[0].length && matrix[row][col]<matrix[row][col+1]){
                dp[row]+=1
            }
            if(col-1>0 && matrix[row][col]<matrix[row][col-1]){
                dp[row]+=1
            }
        }
    }
    console.log(dp)

    return Math.max(...dp)
}
console.log(longest(matrix =[[3,4,5],[3,2,6],[2,2,1]]))