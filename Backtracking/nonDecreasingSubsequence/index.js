const nonDecreasingSequence=(nums)=>{
    let res=[]
    let map={}

    function recurse(index,currArr){

        if(map[currArr]) return 

        if(currArr.length>=2){
            res.push(currArr)
        }

        for(let i=index;i<nums.length;i++){

            if(currArr[currArr.length-1]>nums[i]) continue

            map[currArr]=true

            recurse(i+1,[...currArr,nums[i]])
        }
    }

    recurse(0,[])

    return res
}

// const nonDecreasingSequence2=(nums)=>{

// }