const similarString=()=>{
     
    let result=0

    if(!strs || strs.length===0) return 0

    const visited=new Set()

    for(let word of strs){

        if(!(visited.has(word))){
            dfs(word,strs,visited)
            result++
        }
        
    }

    function isSimilar(word,newWord){
        let count=0

        for(let i=0;i<word.length;i++){
            if(word[i]!==newWord[i]){
                count++

                if(count>2){
                    return false
                }

            }
        }

        return count===0 || count===2
    }

    function dfs(word,strs,visited){
        if(visited.has(word)) return

        visited.add(word)

        for(let i=0;i<strs.length;i++){

            if(isSimilar(word,strs[i])){
                dfs(strs[i],strs,visited)
            }

        }
    }

    return result
}


// BFS 

var numSimilarGroups = function(strs) {
    const l = strs.length, strl = strs[0].length;
    const used = Array(l).fill(false);
    const queue = [];
    let res = 0, cur, diff;
  
    for (let i = 0; i < l; i++) {
      if (!used[i]) {
        res++;
        queue.push(strs[i]);
      }
  
      while (queue.length > 0) {
        cur = queue.pop();
        for (let j = 0; j < l; j++) {

          if (!used[j]) {
  
            // check cur and strl is similar or not
            // if diff > 2: they are not similar, otherwise: add strs[j] into queue
            diff = 0;
            for (let k = 0; k < strl; k++) {
              if(cur[k] !== strs[j][k] && ++diff > 2) break;
            }
            if (diff <= 2) {
              used[j] = true;
              queue.push(strs[j]);
            }
          }
        }
      }
    }
  
    return res;
  };

//   Union Find
class DSU {
    constructor() {
        this.uv = new Map();
    }
    find(node) {
        if (!this.uv.has(node)) this.uv.set(node, node);
        if (this.uv.get(node) === node) return node;
        return this.find(this.uv.get(node));
    }
    union(u, v) {
        this.uv.set(this.find(v), this.uv.get(this.find(u)));
    }
    // count the number of parent nodes as parents are nodes where key and value is equal
    getCount() {
        return [...this.uv.keys()].filter(key => key == this.uv.get(key)).length;
    }
}

const isSimilar = (word1, word2) => {
    let diff = 0, i = 0;
    while(i < word1.length) {
        if (word1[i] !== word2[i]) {
           diff += 1; 
        }
        i += 1;
        continue;
    }
    return diff <= 2;
}


// Union Find
var numSimilarGroups = function(A) {
    let dsu = new DSU();
    
    for (let i = 0; i < A.length; i++) {
        let matchFound = false;
        for (let j = i + 1; j < A.length; j++) {
            if (isSimilar(A[i], A[j])) {
                dsu.union(A[i], A[j]);
                matchFound = true;
            }   
        }
        if (!matchFound) {
            dsu.union(A[i], A[i]);
        }
    }
    
    return dsu.getCount();
};
console.log(similarString())