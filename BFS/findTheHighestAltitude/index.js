var largestAltitude = function(gain) {
    let max=0
    let sum=0

    for(let i=0;i<gain.length;i++){
       sum+=gain[i]
       max=Math.max(sum,max)
    }

    return max

   

   
};

console.log(largestAltitude([-4,-3,-2,-1,4,3,2]))