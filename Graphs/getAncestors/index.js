// BFS
const getAncestors=()=>{
    let graph={}
    let res=[]
    

    for(let i=0;i<n;i++){
        graph[i]=[]
        res[i]=[]
    }

    for(let [u,v] of edges){
        graph[u].push(v)
    }

    for(let i=0;i<n;i++){
        let q=[i]
        let visited=new Set()

        while(q.length){
            let curr=q.shift()

            if(curr!=i) res[curr].push(i)
            for(const child of graph[curr]){
                if(visited.has(child)) continue
                visited.add(child)
                q.push(child)
            }
        }
    }

    return res
}

// DFS
const initializeGraph = (n) => { let g = []; for (let i = 0; i < n; i++) { g.push([]); } return g; };
const packDGParent = (g, edges) => { for (const [u, v] of edges) { g[v].push(u); } };
const initializeGraphSet = (n) => { let g = []; for (let i = 0; i < n; i++) { g.push(new Set()); } return g; };

let g;
const getAncestors2 = (n, edges) => {
    g = initializeGraph(n);
    packDGParent(g, edges);
    let res = initializeGraphSet(n), visit = Array(n).fill(false);
    for (let i = 0; i < n; i++) {
        if (!visit[i]) dfs(i, visit, res);
    }
    return res.map(se => [...se].sort((x, y) => x - y));
};

const dfs = (cur, visit, res) => {
    visit[cur] = true;
    for (const child of g[cur]) {
        if (!visit[child]) dfs(child, visit, res);
        res[cur].add(child);
        for (const ancestor of res[child]) res[cur].add(ancestor);
    }
};

// Topological Sort=>My best way

const topSort=(n,edges)=>{

    let graph={}
    let inDegrees=new Array(n).fill(0)
    let res=[]

    for(let i=0;i<n;i++){
        graph[i]=[]
        res[i]=new Set()
        
    }

    for(let [u,v] of edges){
        if(!(u in graph)) graph[u]=[]
        graph[u].push(v)
        inDegrees[v]++
    }

    let queue=[]

    for(let i=0;i<n;i++){
        if(inDegrees[i]===0){
            queue.push(i)
        }
    }

    while(queue.length){
        let curr=queue.shift()
        let neighbours=graph[curr]

        for(let neigh of neighbours){

            if(--inDegrees[neigh]===0) queue.push(neigh)
            res[neigh].add(curr)
            for(let ancestor of res[curr]) res[neigh].add(ancestor)
        }
    }

    return res.map(se=>[...se].sort((a,b)=>a-b))
}

console.log(topSort( n = 8, edgeList = [[0,3],[0,4],[1,3],[2,4],[2,7],[3,5],[3,6],[3,7],[4,6]]))