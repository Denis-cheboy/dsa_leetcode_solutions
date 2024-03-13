// Greedy approach
const couples=(row)=>{
    let currentPositions=[]

    for(let i=0;i<row.length;i++){
        currentPositions[row[i]]=i
    }

    let swapCount=0

    for(let j=0;j<row.length;j+=2){

        let leftPartner=row[j]
        let correctRightPartner=getPartner(leftPartner)

        if(row[j+1]!==correctRightPartner){
            console.log("unhappy")
            
            let temp=row[j+1]
            row[j+1]=correctRightPartner
            let tempPosition=currentPositions[correctRightPartner]
            row[tempPosition]=temp

            currentPositions[correctRightPartner]=j+1
            currentPositions[temp]=tempPosition

            swapCount++

        }
        else{
            console.log("happy")
        }
    }

    function getPartner(x){

        if(x%2===0){
            return x+1
        }
        else{
            return x-1
        }
    }

    return swapCount
}


// Another way
var minSwapsCouples = function(row) {
    let n = row.length
    let pos = Array(n)
    let res = 0
    
    for(let i=0; i<n; i++){
        pos[row[i]] = i
    }
    
    for(let i=0; i<n; i+=2){
        let x = row[i]
        let y = row[i+1]
        if(Math.abs(x-y)>1 || Math.max(x,y)%2 == 0){
            let index;
            if(y%2 == 0) {
                index = pos[(y+1)]
                pos[x] = index
            } else {
                index = pos[(y-1)]
                pos[x] = index
            }
            row[index] = x
            res++
        }
    }
    
    return res
};

// Graph appraoch 
function minSwapsCouples(row) {
    const index = [];
    for (let i = 0; i < row.length; i++) {
        index[row[i]] = i;
    }
    
    const visited = new Set();
    let cycleIslands = 0;
    
    for (let i = 0; i < row.length / 2; i++) {
        if (!visited.has(i)) {
            cycleIslands++;
            dfs(i);
        }
    }
    
    function dfs(i) {
        if (visited.has(i)) return;
        
        visited.add(i);
        
        const p1 = getPartner(row[i * 2]);
        const p2 = getPartner(row[i * 2 + 1]);
        
        const i1 = Math.floor(index[p1] / 2);
        const i2 = Math.floor(index[p2] / 2);
        
        dfs(i1);
        dfs(i2);
    }
    
    return row.length / 2 - cycleIslands;
}

function getPartner(x) {
    return x % 2 === 0 ? x + 1 : x - 1;
}
console.log(couples( [5,3,4,2,1,0]))

console.log(0%2===0)