const longestIncreasing=(a,n)=>{
   
   let sub=[a[0]]

   for(let i=1;i<n;i++){
    let currentVal=a[i]
    let prevVal=sub[i-1]

    if(currentVal>prevVal){
        sub.push(currentVal)
    }
    else{
        let j=0
        while(currentVal>=sub[j]){
            j++
        }
        sub[j]=currentVal
    }
    console.log(sub)
   }

   return sub.length
}



console.log(longestIncreasing([5,8,3,7,9,1],6))