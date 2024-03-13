const dailyTemp=(temperatures)=>{
    let stack=[]

    let res=Array(temperatures.length).fill(0)

    for(let i=0;i<temperatures.length;i++){
        while(stack.length && temperatures[i]>temperatures[stack[stack.length-1]]){
            let temp=stack.pop()
            res[temp]=i-temp
        }
        stack.push(i)
    }
    
    return res
}
console.log(dailyTemp( temperatures = [73,74,75,71,69,72,76,73]))
