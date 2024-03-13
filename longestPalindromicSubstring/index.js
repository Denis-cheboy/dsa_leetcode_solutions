var longestPalindrome = function(s) {

    if(s.length===1) return s

    let i=0
    let longest=0
    let answer=""


    while(i<s.length){
        let current=s[i]
        longest=Math.max(longest,current.length)
        if(longest===current.length){
            answer=current
        }
        for(let j=i+1;j<s.length;j++){
            current+=s[j]
            if(checkPalindrome(current)){
                longest=Math.max(longest,current.length)
                if(longest===current.length){
                    answer=current
                }
            }
        }
        i++
    }

    function checkPalindrome(s){
       let r=s.length-1
       let l=0
       
       while(l<r){

          if(s[l]!==s[r]) return false
          l++
          r--

       }
       return true
    }

    return answer
    
};

console.log(longestPalindrome("ac"))


