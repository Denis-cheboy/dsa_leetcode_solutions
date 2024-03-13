const wordBreak=(s,wordDict,memo={})=>{
    if(s in memo) return memo[s]
    if(s.length===0 || s==='') return true

    for(let word of wordDict){
        console.log(word)
        if(s.indexOf(word)===0){
            let suffix=s.substring(word.length)
            memo[s]=wordBreak(suffix,wordDict)
            return memo[s]
        }
    }

    return false
   
    
}

// BFS 
const wordBreak2 = (s, wordDict) => {
    if (wordDict == null || wordDict.length === 0) return false;
    const set = new Set(wordDict);
  
    // When s = 'catsandog', wordDict = ['cats', 'ca', 'ts']
    // After 'cats' and 'ca', it will become 'andog', 'tsandog'
    // For 'tsandog', after 'ts', it will become 'andog' again, visited set here is for memoization
    const visited = new Set();
    const q = [0];
  
    while (q.length) {
      const start = q.shift();
  
      if (!visited.has(start)) {
        for (let end = start + 1; end <= s.length; end++) {
          if (set.has(s.slice(start, end))) {
            if (end === s.length) return true;
            q.push(end);
          }
        }
        visited.add(start);
      }
    }
    return false;
  };

//   dp solution
const wordBreak3 = (s, wordDict) => {
    if (wordDict == null || wordDict.length === 0) return false;
  
    const set = new Set(wordDict);
    const dp = Array(s.length + 1).fill(false);
    dp[0] = true;
  
    for (let end = 1; end <= s.length; end++) {
      for (let start = 0; start < end; start++) {
        const w = s.slice(start, end);
        if (dp[start] === true && set.has(w)) {
          dp[end] = true;
          break;
        }
      }
    }
    return dp[s.length];
  };

console.log(wordBreak3("cars",["car","ca","rs"]))