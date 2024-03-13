const mostStonesRemoved=(stones)=>{
    let subsetCount=stones.length

    const parentMap=[]
  
    for(let i=0;i<stones.length;i++){
        parentMap[i]=i
    }
  
    for(let i=1;i<stones.length;i++){
  
        const currStone=stones[i]
  
        for(let j=0;j<i;j++){
            const prevStone=stones[j]
  
            if(currStone[0]!==prevStone[0] && currStone[1]!==prevStone[1]) continue
  
            if(parentMap[i]===i){
                parentMap[i]=j
                subsetCount--
            }
            else{
              //   find the parent of currStone
                let currenttThisStonesParentIndex=parentMap[i]
  
                while(parentMap[currenttThisStonesParentIndex] !== currenttThisStonesParentIndex){
                    currenttThisStonesParentIndex=parentMap[currenttThisStonesParentIndex]
                }
  
                let currentPrevStoneIndex=parentMap[j]
  
                while(parentMap[currentPrevStoneIndex]!==currentPrevStoneIndex){
                    currentPrevStoneIndex=parentMap[currentPrevStoneIndex]
                }
  
                if(currenttThisStonesParentIndex !== currentPrevStoneIndex){
                    parentMap[currenttThisStonesParentIndex]=currentPrevStoneIndex
                    subsetCount-=1
                }
  
            }
        }
    }
  
    return stones.length-subsetCount
}


const removeStones=(stones)=>{

    class DSU{
        constructor(n){
            this.rank=[]
            this.parent=[]

            for(let i=0;i<n;i++){
                this.rank[i]=0
                this.parent[i]=i

            }
        }
        find(vertex){
            if(this.parent[vertex]===vertex){
                return vertex
            }
            return this.parent[vertex]=this.find(this.parent[vertex])
        }

        union(i,j){
            let parent=this.find(i)
            let parent2=this.find(j)

            if(parent===parent2) return false

            if(this.rank[parent]>this.rank[parent2]){
                this.parent[parent2]=parent
            }
            else if(this.rank[parent]<this.rank[parent2]){
                this.parent[parent]=parent2
            }
            else{
                this.parent[parent2]=parent
                this.rank[parent]++
            }
            return true
        }
    }

    const dsu=new DSU(stones.length)

    let count=stones.length

    for(let i=1;i<stones.length;i++){

        let curr=stones[i]

        for(let j=0;j<i;j++){

            let prevStone=stones[j]

            if(prevStone[0]!==curr[0] && prevStone[1]!==curr[1]) continue

            if(dsu.union(i,j)){
                count--
            }
        }
    }

    return stones.length-count
}

// DFS

const removeStones2=(stones)=>{
    let valid=0
    let visited=new Set()

    const traverse=(row,col)=>{

        const key=row+""+col
        if(visited.has(key)) return 
        visited.add(key)

        for(let [r,c] of stones){
            if(r===row || col===c) traverse(r,c)
        }

    }

    for(let [x,y] of stones){
        let key=x+""+y
        
        if(visited.has(key)) continue

        traverse(x,y)

        valid++
    }

    return stones.length-valid
}

console.log(removeStones(stones = [[0,0],[0,1],[1,0],[1,2],[2,1],[2,2]]))