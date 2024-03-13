// Bruteforce approach
var numsSameConsecDiff = function(n, k) {
    let list=[1,2,3,4,5,6,7,8,9]

    while(--n>0){
        let temp=[]

        for(let val of list){
            let rem=val%10

            if(rem+k<10) temp.push(val*10+rem+k)
            if(k!=0 && rem-k>=0) temp.push(val*10+rem-k)
        }
        
        list=temp
    }

    return list
};
// Backtracking
var numsSameConsecDiff = function(n, k) {
    let ans = [];
    
    const min = Math.pow(10, n-1);
    const max = Math.pow(10, n) - 1;
    
    const backtrack = (curr) => {
        if(curr >= min && curr <= max){
            ans.push(curr);
            return;
        }
        
        let prevDigit = curr % 10;
        
        if(prevDigit - k >= 0) backtrack(curr * 10 + prevDigit - k);
        if(prevDigit + k <= 9 && k!== 0) backtrack(curr * 10 + prevDigit + k);
    }
    
    for(let i = 1; i <=9; i++){
        backtrack(i);
    }
    
    return ans;
};

// DFS
var numsSameConsecDiff = function(n, k) {
    const res = []
    const dfs = (currDigit, lastNum, index, currNum) => {
        if(currDigit > n) {
            res.push(parseInt(currNum.join('')))
            return
        }
        if(lastNum + k > 9 && lastNum - k < 0) return

        for(let i=index;i<=9;i++){
            if(currDigit==1 && (i+k<=9 || i-k>0)){
                currNum.push(i.toString());
                dfs(currDigit+1,i,0,currNum)
                currNum.pop()
            } else if(lastNum + k == i || lastNum - k == i){
                currNum.push(i.toString());
                dfs(currDigit+1,i,0,currNum)
                currNum.pop()
            }
        }
    }

    dfs(1,0,1,[])
    return res
};
// DP approach
var numsSameConsecDiff = function(N, K) {
    let prevSet = new Set([0,1,2,3,4,5,6,7,8,9]);
    
    for (let n = 2; n <= N; n++) { // we start at 2 since n = 1 is just the one digit numbers 0 through 9
        const newSet = new Set();
        
        for (const prevVal of prevSet) {
            const lastDig = prevVal % 10;
            
            const plusK = lastDig + K;
            const minusK = lastDig - K;
            
            if (prevVal > 0 && plusK < 10) newSet.add((prevVal * 10) + plusK);
            if (prevVal > 0 && minusK >= 0) newSet.add((prevVal * 10) + minusK);
        }
        
        prevSet = newSet;
    }

    return [...prevSet];
};

console.log(numberWithSameConsercutiveDiff())