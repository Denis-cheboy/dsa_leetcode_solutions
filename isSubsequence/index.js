// My OWn way here
const isSubsequence=(s,t)=>{
    
    let index=0

    let i=0

    while(i<t.length){

        if(t[i]===s[index]){
            index++
        }

        i++
    }

    return index===s.length?true:false
}


console.log(isSubsequence( s = "abc", t = "ahbgdc"))