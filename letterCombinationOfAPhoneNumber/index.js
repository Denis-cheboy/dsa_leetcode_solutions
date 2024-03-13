var letterCombinations = function(digits) {
    let answer=[]

    if(digits.length===0){
        return []
    }

    let digitsGraph={
        2:['a','b','c'],
        3:['d','e','f'],
        4:['g','h','i'],
        5:['j','k','l'],
        6:['m','n','o'],
        7:['p','q','r','s'],
        8:['t','u','v'],
        9:['w','x','y','z']
    }

    const helper=(str,index)=>{
        if(str.length===digits.length){
            answer.push(str)
        }
        else{
            let alpha=digitsGraph[digits[index]]

            for(let i=0;i<alpha.length;i++){
                console.log(index)
                helper(str+alpha[i],index+1)
            }
        }
    }
    helper('',0)

    return answer

};

const result=letterCombinations("49")

console.log(result)