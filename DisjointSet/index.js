// We Will discuss
// Disjoint set Operations
// Detect a cycle
// Graphical Representation
// Array Representation
// Weighted Union for collapsing find

class DisjointSet{

    constructor(size){

        this.rank=[]
        this.parent=[]

        // Initialize each element as a seperate set

        for(let i=0;i<size;i++){
            this.rank[i]=0
            this.parent[i]=i
        }

    }

    findParent(node){
        if(this.parent[node]===node){
            return node
        }
        return this.parent[node]=this.findParent(this.parent[node])
    }

    union(x,y){
        let parentX=this.findParent(x)
        let parentY=this.findParent(y)

        if(parentX===parentY) return 
        
        if(rank[parentX]<rank[parentY]){
            this.parent[parentX]=parentY
        }
        else if(rank[parentX]>rank[parentY]){
            this.parent[parentY]=parentX
        }
        else{
            this.parent[parentX]=parentY

            this.rank[parentY]++
        }
    }

    isConnected(x,y){
        return this.findParent(x)===this.findParent(y)
    }
}

const dsu=new DisjointSet(6)

dsu.union(0,1)
dsu.union(2,3)
dsu.union(4,5)
dsu.union(1,3)

console.log(dsu.isConnected(0,3))
console.log(dsu.isConnected(2,4))