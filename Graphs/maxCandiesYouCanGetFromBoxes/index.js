const maxCandies=(status, candies, keys, containedBoxes, initialBoxes)=>{
    let totalCandies=0

    let myKeys=new Set()
 
    function bfs(initialBoxes){
        let queue=initialBoxes
 
        let closedBoxes=[]
 
        while(queue.length){
            const boxNum=queue.pop()
 
            if(status[boxNum]===1 || myKeys.has(boxNum)){
                totalCandies+=candies[boxNum]
                queue.push(...containedBoxes[boxNum])
                keys[boxNum].forEach(k=>myKeys.add(k))
            }
            else{
                closedBoxes.push(boxNum)
            }
        }
 
        return closedBoxes
    }
 
    let lastKeyCount=-1
    let closedBoxes=initialBoxes
 
    while(lastKeyCount!==myKeys.size){
        lastKeyCount=myKeys.size
        closedBoxes=bfs(closedBoxes)
    }
 
    return totalCandies
}

console.log(maxCandies( status = [1,0,1,0], candies = [7,5,4,100], keys = [[],[],[1],[]], containedBoxes = [[1,2],[3],[],[]], initialBoxes = [0]))