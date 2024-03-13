const longestDistinctString=(word,k)=>{


    let start=0
    let end=0
    let maxLength=-Infinity
    let charSet=new Set()

    for(end;end<word.length;end++){
        
        charSet.add(word[end])

        while(charSet.size>k){
            charSet.delete(word[start])
            start++
        }

        maxLength=Math.max(maxLength,end-start+1)
    }
em
    return maxLength

}

console.log(longestDistinctString("hello",3))