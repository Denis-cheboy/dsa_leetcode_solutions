const paintWalls=(cost,time)=>{
    let minCost=0
    
    function dfs(cost,time){
        if(cost.length===0 && time.length===0) return 
        console.log(cost)
    
        let max=Math.max(...cost)
        let min= cost.length>1?Math.min(...cost):0
        
        minCost+=min
    
        

        let indexOfMax=cost.indexOf(max)
        let indexOfMin=cost.indexOf(min)

        let newCost=cost.filter((c,index)=>index!==indexOfMax && index!==indexOfMin)
        let newTime=time.filter((t,index)=>index!==indexOfMax && index!==indexOfMin)
        
        dfs(newCost,newTime)
        
    }
    dfs(cost,time)
    
    return minCost
}

console.log(paintWalls( cost= [2,3,4,2], time = [1,1,1,1]))