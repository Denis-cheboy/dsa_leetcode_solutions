const intergerReplace=(n)=>{
    if(n===1) return 0
    
    function helper(n,c=0){

        if(n===1) return c

        if(n%2===0){
            return helper(n/2,c+1)
        }
        else{
            return Math.min(helper(n+1,c+1),helper(n-1,c+1))
        }
    }

   return helper(n)
    
}

// iterative nature
var integerReplacement = function(n) {
    let count=0;
    while(n>1){
       if(n%2===0){n/=2;}
       else{
         if(n!==3 && (n+1)%4===0){n++;}
         else{n--;}
       } 
      count++;  
    }
    return count;  
};

// dp solution 
var integerReplacement = function(n, memo = new Map()) {
    if (n === 1) return 0;

    if (memo.has(n)) return memo.get(n); 

    let res = 0; 

    if (n%2===0) res = 1 + integerReplacement(n/2,memo);

    else res = 1 + Math.min(integerReplacement(n-1,memo), integerReplacement(n+1,memo));

    memo.set(n,res);

    return res;
};

// BFS Approach
const integerReplacement = function (n) {
    const q = [[n, 0]]
  
    while (q.length) {
      const [x, cnt] = q.shift()
  
      if (x === 1) {
        return cnt
      }
  
      if (x % 2 === 0) {
        q.push([x / 2, cnt + 1])
      } else {
        q.push([x + 1, cnt + 1])
        q.push([x - 1, cnt + 1])
      }
    }
  }

console.log(intergerReplace(10))