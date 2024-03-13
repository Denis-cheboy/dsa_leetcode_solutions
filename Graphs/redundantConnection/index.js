// Using Disjoint set
const redundant=(edges)=>{
    class DisjointUnion{
        constructor(noOfVertices){
            this.rank=[]
            this.parent=[]
            this.cycle=null

            for(let i=0;i<noOfVertices;i++){
                this.rank[i]=0
                this.parent[i]=i
            }

        }

        findParent(vertex){
            if(this.parent[vertex]===vertex) return vertex
            return this.parent[vertex]=this.findParent(this.parent[vertex])
        }

        union(vertex1,vertex2){
            let parent1=this.findParent(vertex1)
            let parent2=this.findParent(vertex2)

            if(parent1===parent2){
                this.cycle=[vertex1,vertex2]
                return 
            }
            else{
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
            }

          
        }
    }

    const dsu=new DisjointUnion(edges.length+1)

    for(let [u,v] of edges){
        dsu.union(u,v)
    }

    return dsu.cycle
}

// Using DFS

const redundant2=(edges)=>{
    let map={}
    let currentRedundant=null

    function dfs(u,v,visited){
        visited.add(u)

        if(u in map){
            if(map[u].has(v)) return true

            for(let w of map[u]){
                if(!(visited.has(w))){
                    visited.add(w)
                    if(dfs(w,v,visited)) return true
                }
            }

            return false

        }

        return false
    }

    for(let edge of edges){
        let [u,v]=edge

        if (dfs(u, v, new Set())) currentRedundant = edge;

        if(!(u in graph)) graph[u]= new Set()
        if(!(v in graph)) graph[v]= new Set()

        map[u].add(v);
        map[v].add(u);
    }
}

console.log(redundant( [[1,2],[2,3],[3,4],[4,1],[1,5]]))