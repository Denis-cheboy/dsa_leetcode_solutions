var partition = function(s) {
    let result=[]
    let currentList=[]

    dfs(result,s,0,currentList)

    return result
   

    function dfs(result,s,start,currentList){

        if(start>=s.length){
            result.push([...currentList])
        } 

        for(let end=start;end<s.length;end++){
            if(isPalindrome(s,start,end)){
                currentList.push(s.substring(start,end+1))

                dfs(result,s,end+1,currentList)
                // backtrack and remove the current substring from the current list
                currentList.pop()
            }
        }
        return 
    }
    function isPalindrome(s,start,end){
        while(start<end){
            if(s[start]!==s[end]){
                return false
            }
            start++
            end--
        }
        return true
    }

};

// another way here dynamic programming solution here

const partition2=(s)=>{
    let len=s.length
    let dp=new Array(s.length).fill().map(()=>new Array(s.length).fill(false))
    console.log(dp)
}

// another way again here
const partition3=(s)=>{
        
    const isPalindrome=str=>(str===str.split("").reverse().join(''))

    let result=[]

    function dfs(s,partition,result){

        // base case
        // empty string must be a palindrome
        if(s.length===0){
            result.push([...partition])
        }

        // general cases:

        for(let i=1;i<=s.length;i++){

            let prefix=s.substring(0,i)
            let postFix=s.substring(i)

            // current prefix is palindrome, keep trying to make more partitions in postFix by dfs

            if(isPalindrome(prefix)){

                partition.push(prefix)

                dfs(postFix,partition,result)

                partition.pop()
            }
        }
        
        return
    }
    dfs(s,[],result)
    return result
}
console.log(partition("aab"))