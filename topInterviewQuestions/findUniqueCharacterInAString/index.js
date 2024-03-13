var firstUniqChar = function(s) {
    let graph={}

    for(let i=0;i<s.length;i++){

        if(graph[s[i]]){
            graph[s[i]]=graph[s[i]]+1
        }
        else{
            graph[s[i]]=1
        }
    }  
    let uniqueCheck=s.indexOf(Object.keys(graph).find(key=>graph[key]===1))

    if(uniqueCheck===0 || uniqueCheck>0){
        return uniqueCheck
    }
    else{
        return -1
    }
};

// another way

const firstUniqChar2=(s)=>{
    let graph={}

    for(let i=0;i<s.length;i++){

        if(graph[s[i]]){
            graph[s[i]]=graph[s[i]]+1
        }
        else{
            graph[s[i]]=1
        }
    }

    for(let i=0;i<s.length;i++){
        if(graph[s[i]]===1){
            return i
        }
    }
    return -1
}

console.log(firstUniqChar2("leetcode"))