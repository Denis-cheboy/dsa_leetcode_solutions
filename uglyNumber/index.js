
const uglyNumber=(n)=>{

    let cache=[1]

    let p2=0
    let p3=0
    let p5=0

    var m,r2,r3,r5;

    var i=cache.length

    for(i;i<n;i++){

        r2=cache[p2]*2
        r3=cache[p3]*3
        r5=cache[p5]*5

        m=Math.min(r2,r3,r5)

        if(m===r2) p2++
        if(m===r3) p3++
        if(m===r5) p5++

        cache[i]=m

    }
    return cache[n-1]
    
}


// another way
var nthUglyNumber2 = function(n) {
    const factors = [2, 3, 5];
    const offset = [0, 0, 0];
    const ugly = [1];
    n--;
    
    
    while(n--) {
        const candidates = factors.map((val, i) => ugly[offset[i]] * val);
        const next = Math.min(...candidates);
        candidates.forEach((val, i) => candidates[i] === next ? offset[i]++ : null);
        ugly.push(next);
    }
    return ugly.pop();
};
console.log(nthUglyNumber2(10))