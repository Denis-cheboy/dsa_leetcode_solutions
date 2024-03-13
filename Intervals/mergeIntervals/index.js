const intervalsMerge=(intervals)=>{

    if(intervals.length===0) return intervals

    intervals.sort((a,b)=>a[0]!==b[0]?a[0]-b[0]:a[1]-b[1])

    let prev=intervals[0]

    let res=[prev]

    for(let interval of intervals){

        if(interval[0]<=prev[1]){
            prev[1]=Math.max(interval[1],prev[1])
        }
        else{
            res.push(curr)
            prev=curr
        }
    }
    return res
}

console.log(intervalsMerge([[1,3],[2,6],[8,10],[15,18]]))