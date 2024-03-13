const findMatch=(numSeq)=>{
    let firstScore=0
    let secondScore=0

    let length=numSeq.length

   for(let i=0;i<length;i++){
    // checking for odd and even indices representing the first and second player respectively
    
    // for first player with the even index
        if(i%2===0){
            if(numSeq[0]%2===0){
                firstScore+=numSeq[0]
                numSeq=numSeq?.slice(1)?.reverse()
            }
            else{
                firstScore+=numSeq[0]
                numSeq=numSeq?.slice(1)
            }
        }
        
        // second player with the odd index
        else{
            if(numSeq[0]%2===0){
                secondScore+=numSeq[0]
                numSeq=numSeq.slice(1)?.reverse()
            }
            else{
                secondScore+=numSeq[0]
                numSeq=numSeq?.slice(1)
            }
            
        }
    }
   return Math.abs(firstScore-secondScore)
}


const diff=findMatch([3,6,2,3,5])
console.log(diff)
