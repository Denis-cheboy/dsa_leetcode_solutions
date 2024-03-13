const redundant=(edges)=>{
    const n=edges.length

    const outwards=new Map()
    const inwards=new Map()
  
    const maxIncoming={node:1,size:0,latestEdge:[]}
    const maxOutgoing={node:1,size:0}
  
    for(let i=1;i<=n;i++){
        inwards.set(i,new Set())
        outwards.set(i,new Set())
    }
  
    for(const [from,to] of edges){
        const outwardSet=outwards.get(from)
        
        outwardSet.add(to)
  
        if(outwardSet.size>maxOutgoing.size){
            maxOutgoing.node=from
            maxOutgoing.size=outwardSet.size
        }
  
        const inwardSet=inwards.get(to)
        inwardSet.add(from)
  
        if(inwardSet.size>=maxIncoming.size){
            maxIncoming.node=to
            maxIncoming.size=inwardSet.size
            maxIncoming.latestEdge=[from,to]
        }
    }
  
    const nodesThatCycle=new Set()
  
    function doesItCycle(node){
        if(nodesThatCycle.has(node)){
            return true
        }
  
        nodesThatCycle.add(node)
  
        for(const nextNode of outwards.get(node)){
            if(doesItCycle(nextNode)){
                return true
            }
        }
        return false
    }
  
    const root=maxIncoming.size>1?maxIncoming.node:maxOutgoing.node
  
    if(doesItCycle(root)){
  
        for(let i=edges.length-1;i>=0;i--){
            const [from,to]=edges[i]
  
            if((maxIncoming.size===1 && nodesThatCycle.has(to)) || maxIncoming.size>1 && to===root && nodesThatCycle.has(from)){
                return edges[i]
            }
        }
    }
  
    return maxIncoming.latestEdge
}

// Another way here

const redundant2=(edges)=>{
    let n=edges.length

    let first=[]
    let second=[]

    let parent=new Array(n+1).fill(0)

    for(let [u,v] of edges){
        if(parent[v]===0){
            parent[v]=u
        }
        else{
            first=[parent[v],v]
            second=[u,v]
            v=0
        }
    }

    for(let i=1;i<=n;i++) parent[i]=i

    for(const [u,v] of edges){
        if(v===0) continue

        let [x,y]=[find(parent,u),find(parent,v)]
        if(x==y) return first.length===0?[u,v]:first

        parent[x]=y

    }

    const find=(parent,vertex)=>{
        return vertex===parent[vertex]?vertex:find(parent,parent[vertex])
    }

    return second

}
// My way 
class DisjointUnion{
    constructor(n){
        this.rank=[]
        this.parent=[]
        
        for(let i=1;i<=n;i++){
            this.rank[i]=0
            this.parent[i]=i
        }
    }
    
    findParent(vertex){
        if(this.parent[vertex]===vertex) return vertex
        return this.parent[vertex]=this.findParent(this.parent[vertex])
    }
    
    union(vertex1,vertex2){
        const parent1=this.findParent(vertex1)
        const parent2=this.findParent(vertex2)
        
        if(parent1===parent2) return false
        
        if(this.rank[parent1]<this.rank[parent2]){
            this.parent[parent1]=parent2
        }
        else if(this.rank[parent1]>this.rank[parent2]){
            this.parent[parent2]=parent1
        }
        else{
            this.parent[parent1]=parent2
            this.rank[parent2]++
        }
        return true
    }
}

const redundant3=(edges)=>{
    let n=edges.length
    let dsu=new DisjointUnion(n)
    let cycle=null
    let twoParent=null
    let inDegrees=new Array(n+1).fill(0)
    
    for(let [v,u] of edges){
        inDegrees[u]++
        if(dsu.union(v,u)) continue
        cycle=[v,u]
        if(inDegrees[u]>1) twoParent=[v,u]
    }


    return cycle!==null?cycle:twoParent
}

console.log(redundant3(edges = [[1,2],[2,3],[3,4],[4,1],[1,5]]))