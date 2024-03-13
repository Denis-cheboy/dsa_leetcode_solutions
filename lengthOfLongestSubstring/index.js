var lengthOfLongestSubstring = function(s) {
    const set=new Set()
    let max=0
    let start=0
    let end=0
    while(start<s.length){
        if(!set.has(s[start])){
            if(start-end +1>max){
                max=start-end+1
            }
            set.add(s[start])
            start+=1
           
        }
        else{
            set.delete(s[end])
            end+=1
        }


    }
  
    return max
};

const res=lengthOfLongestSubstring("abcabcc")
console.log(res)