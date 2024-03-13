// Best way to approach this,
// O(logn)
var topKFrequent1 = function(nums, k) {
    const map = new Map();
    for(let n of nums) map.set(n, (map.get(n) || 0) + 1);
    const keys = [...map.keys()], finalIdx = keys.length - k;
    let start = 0, end = keys.length-1;
    
    while(start <= end) {
        const pivot = Math.floor(Math.random() * (end - start + 1)) + start;
        const pivotIdx = pivotHelper(pivot, start, end);
        
        if(pivotIdx === finalIdx) return keys.slice(finalIdx);
        if(pivotIdx < finalIdx) start = pivotIdx + 1;
        else end = pivotIdx - 1;
    }
    
    function pivotHelper(pivot, start, end) {
        // move pivot away to the end
        swap(pivot, end);
        let swapIdx = start;
        
        for(let i = start; i < end; i++) {
            if(map.get(keys[i]) < map.get(keys[end])) {
                swap(swapIdx, i); swapIdx++;
            }
        }
        swap(swapIdx, end);
        return swapIdx;
    }
    
    function swap(i, j) {
        [keys[i], keys[j]] = [keys[j], keys[i]];
    }
};

// another way
var topKFrequent2 = function(nums, k) {
    const freqMap=new Map()
    const bucket=[]
    const result=[]

    for(let num of nums){
        freqMap.set(num,(freqMap.get(num) || 0)+1)
    }

    for(let [num,freq] of freqMap){
        bucket[freq]=(bucket[freq] || new Set()).add(num)
    }

    for(let i=bucket.length-1;i>=0;i--){
        if(bucket[i]) result.push(...bucket[i])
        if(result.length===k) break
    }
    return result
};

// another way,best way
const topKFrequent = (nums, k) => {
    const map = new Map(); //! map to count the frequency of the number
    for (let num of nums) {
      map.set(num, map.get(num) + 1 || 1);
    }
    const result = [];
    for (let [key, value] of map) {
      result.push([key, value]); //! we will add the number and its frequency
    }
    result.sort((a, b) => b[1] - a[1]);
    console.log(result) //! we will solve with respect to the frequency of the number
    return result.slice(0, k).map((x) => x[0]); //! we will slice the list with respect to length of k
  };

console.log(topKFrequent(nums = [1,1,1,2,2,3], k = 2))