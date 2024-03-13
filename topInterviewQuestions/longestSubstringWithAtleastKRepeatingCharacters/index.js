// not best approach due to time limit exceeding 
var longestSubstring = function(s, k) {
    if(s.length===0 || k>s.length) return 0
    
    let current=""
    let result=0

    for(let i=0;i<s.length;i++){
        current+=s[i]

        if(isValid(current)){
            result=Math.max(result,current.length)
        }
    }

    function isValid(current){
        console.log(current)
        if(current.length<k) return false

        let graph={}

        for(let i=0;i<current.length;i++){
            if(graph[current[i]]){
                graph[current[i]]=graph[current[i]]+1
            }
            else{
                graph[current[i]]=1
            }
        }
        const check=Object.values(graph).every(v=>v>=k)
        
        return check?true:false
    }

    return result
  
};

// another way, divide and conquer
// Time Complexity : TC O(n^2)- because in a case where we have to split the elements at every index, would go to
// the maximum recursive depth of O(n)=> for each recursive call you notice it takes O(n) to generate the memoisation
// hence the TC of O(n^2)
// SC: O(n)  for the recursive calls depth

var longestSubstring2= function(s, k) {
   
        let len=s.length
        return helper(s,0,len,k)
     
        function helper(s,start,end,k){

            if(end<k) return 0

            let graph={}
     
            for(let i=start;i<end;i++){
                if(graph[s[i]]){
                    graph[s[i]]=graph[s[i]]+1
                }
                else{
                    graph[s[i]]=1
                }
            }
            for(let i=start;i<end;i++){
                if(graph[s[i]]>=k) continue
     
                let midNext=i+1

                // her we are avoiding invalid elements after the midNext

                while(midNext<end && graph[s[midNext]]<k) midNext++

                return Math.max(helper(s,start,i,k),helper(s,midNext,end,k))
            }
            return (end-start)
     
        }
};

// sliding window approach=>need to understand below working on this solution



console.log(longestSubstring2(s = "ababcabaaadc", k = 2))