const multiply=(num1,num2)=>{

    if((num1.length===1 && num1[0]==="0") || (num2.length===1 && num2[0]==="0") ) return 0
    
    let res=Array(num1.length+num2.length).fill(0)

    let num1Reverse=num1.split("").reverse()
    let num2Reverse=num2.split("").reverse()


    for(let i=0;i<num1Reverse.length;i++){

        for(let j=0;j<num2Reverse.length;j++){
           let digit=Number(num1Reverse[i])*Number(num2Reverse[j])
            res[i+j]+=digit
            res[i+j+1]+=Math.floor(res[i+j]/10)
            res[i+j]=res[i+j]%10
        }
    }

    res.reverse()
    let i=0

    while(i<res.length && res[i]===0){
        i++
    }
    res=res.slice(i).join('')

    return res
}

const answer=multiply("0","0")

console.log(answer)
