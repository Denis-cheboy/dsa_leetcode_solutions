
const generateSubstrings=(str)=>{
    let res=[]
    function backtrack(str,index,currString){

        if(index>=str.length){
            res.push(currString.join(""))
            return
        }


            currString.push(str[index])

            backtrack(str,index+1,currString)

            currString.pop()

            backtrack(str,index+1,currString)

       
    }

    backtrack(str,0,[])

    return res

}

console.log(generateSubstrings("Java"))