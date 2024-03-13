const topK=(nums,k)=>{

    let graph={}

    for(let i=0;i<nums.length;i++){

        if(graph[nums[i]]){
            graph[nums[i]]=graph[nums[i]]+1
        }
        else{
            graph[nums[i]]=1
        }
    }
   
    let res=Object.keys(graph).filter(key=>(graph[key]>=k))
    return res
}

console.log(topK(nums = [1], k = 1))