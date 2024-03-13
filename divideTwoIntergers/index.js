const divideTwoIntergers=(dividend,divisor)=>{

    let resIsNegative=Math.sign(dividend)!==Math.sign(divisor)

    dividend=Math.abs(dividend)
    divisor=Math.abs(divisor)

    let ret=0

    while(divisor<=dividend){
        let value=divisor
        let multiple=1

        while(value+value<=dividend){
            value+=value
            multiple+=multiple
            console.log(multiple)
        }

        dividend=dividend-value
        ret+=multiple
    }

    if (ret > ((2**31) - 1)) {
        return resIsNegative ? -(2**31) : 2**31 - 1
    }
    return resIsNegative ? -ret : ret

}

const answer=divideTwoIntergers(10,2)

console.log(answer)