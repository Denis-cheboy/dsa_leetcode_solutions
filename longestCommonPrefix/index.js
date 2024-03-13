const longestCommonPrefix=(stringArray)=>{
    if(stringArray.length===1 || stringArray.length===0){
        return stringArray[0] || ''
    }

    let startingWord=stringArray[0]

    for(let i=1;i<stringArray.length;i++){

        while(stringArray[i].indexOf(startingWord)!==0){

            startingWord=startingWord.substring(0,startingWord.length-1)

            if(startingWord.length===0){
                return ''
            }
        }
    }
    
    return  startingWord

}

const stringArray=["flower","flow","flight"]

const res=longestCommonPrefix(stringArray)

console.log(res)