//  Math problem => bezout proof=> if a, b are intergers=> and z is the gcd(a,b)=> then their exist 
// linear combination of intergers x and y such that ax+by=g
 const waterAndJug=(jug1Capacity,jug2Capacity,targetCapacity) =>{
    if(jug1Capacity+jug2Capacity<targetCapacity) return false

    if(jug1Capacity===targetCapacity || jug2Capacity===targetCapacity || jug1Capacity+jug2Capacity===targetCapacity) return true

    return targetCapacity%GCD(jug1Capacity,jug2Capacity)===0

    function GCD(jug1,jug2){

        while(jug2!==0){
            let temp=jug2
            jug2=jug1%jug2
            jug1=temp
        }

        return jug1
 }
}

// BFS 
let max;
const canMeasureWater = (a, b, target) => {
    max = a + b;
    if (target > max) return false;
    let q = [0], visit = new Set();
    while(q.length) {
        let cur = q.shift(), nexts = []; // next has 4 conditions   +a, -a, +b -b  (add and drop water)
        if (cur == target) return true;
        if (inRange(cur + a) && !visit.has(cur + a)) {
            nexts.push(cur + a);
            visit.add(cur + a);
        }
        if (inRange(cur - a) && !visit.has(cur - a)) {
            nexts.push(cur - a);
            visit.add(cur - a);
        }
        if (inRange(cur + b) && !visit.has(cur + b)) {
            nexts.push(cur + b);
            visit.add(cur + b);
        }
        if (inRange(cur - b) && !visit.has(cur - b)) {
            nexts.push(cur - b);
            visit.add(cur - b);
        }
        for (const next of nexts) q.push(next);
    }
    return false;
};

const inRange = (x) => x >= 0 && x <= max;
console.log(waterAndJug(6,4,8))
