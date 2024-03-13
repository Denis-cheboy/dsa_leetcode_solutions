const numOfOperations=()=>{
    if(n-1>connections.length) return -1

    class DisjointSet{
        constructor(n){
            this.rank=[]
            this.parent=[]

            for(let i=0;i<n;i++){
                this.parent[i]=i
                this.rank[i]=0
            }
        }

        find(vertex){
            if(this.parent[vertex]===vertex){
                return vertex
            }
            return this.parent[vertex]=this.find(this.parent[vertex])
        }

        union(i,j){
            let pi=this.find(i)
            let pj=this.find(j)

            if(pi===pj) return false
            if(this.rank[pi]<this.rank[pj]){
                this.parent[pi]=pj
            }
            else if(this.rank[pi]>this.rank[pj]){
                this.parent[pj]=pi
            }
            else{
                this.parent[pi]=pj
                this.rank[pj]++
            }

            return true

        }
    }

    const dsu=new DisjointSet(n)
    let spare=0
    let notConnected=n-1


    for(let [u,v] of connections){
        if(!(dsu.union(u,v))){
            spare++
        }
        else{
            notConnected--
        }
    }

    return notConnected<=spare?notConnected:-1
}

// DFS Approach 
var makeConnected = function(n, connections) {
    let edges = connections.length;
    if(edges < n-1) return -1;
    let g = [];
    for(let i=0;i<n;i++) g[i] = []
    for(let i=0;i<edges;i++){
        g[connections[i][0]].push(connections[i][1]);
        g[connections[i][1]].push(connections[i][0]);
    } 
    let v = Array(n).fill(0),c=0;
    for(let i=0;i<n;i++){
        if(!v[i]){
            c++;
            dfs(i,g,v)
        }
    }
    return c-1;
};
function dfs(i,con,v){
    v[i] = 1;
    for(let x of con[i]){
        if(!v[x]) dfs(x,con,v)
    }
}

// BFS


console.log(numOfOperations())