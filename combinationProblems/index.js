const combinations=(elements)=>{
    if(elements.length===0) return [[]]

    const firstEl=elements[0]
    const rest=elements.slice(1)

    const combsWithoutFirst=combinations(rest);
    const combsWithFirst=[]

    combsWithoutFirst.forEach(comb=>{
        const combWithFirst=[firstEl,...comb]
        combsWithFirst.push(combWithFirst)
    })

    return [...combsWithFirst,...combsWithoutFirst]

}

const elements=["a","b","c"]

console.log(combinations(elements))