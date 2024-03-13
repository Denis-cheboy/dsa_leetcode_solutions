const sumOfDistances=(edges)=>{

    let adj = new Array(n);

    for (let i = 0; i < n; i++) {
        adj[i] = new Array()
    }

    for (let e of edges) {
        adj[e[0]].push(e[1]);
        adj[e[1]].push(e[0])
    }

    let count = new Array(n).fill(1);
    
    let ans = new Array(n).fill(0)

    let dfs1 = function(node, parent) {
        for (let child of adj[node]){
            if (child != parent) {
                dfs1(child, node)
                count[node] += count[child]
                ans[node] += ans[child] + count[child]
            }
        }
    }

    let dfs2 = function(node, parent) {
        for (let child of adj[node]) {
            if (child != parent) {
                ans[child] = n - count[child] + ans[node] - count[child]
                dfs2(child, node)
            }
        }
    }

    dfs1(0,-1)
    dfs2(0,-1)
    return ans;
}

// My best approach here

const sumOfDistances2=(n,edges)=>{
    let graph={}

    let closerNodes=new Array(n).fill(0)
    let parentCount=new Array(n).fill(0)

    for(let [u,v] of edges){
        if(!(u in graph)) graph[u]=[]
        if(!(v in graph)) graph[v]=[]

        graph[u].push(v)
        graph[v].push(u)
    }

    let visited=new Set()

    function dfs1(curr){
        let closerNodeCount=1

        visited.add(curr)

        for(let neighb of graph[curr]){
            if(!(visited.has(neighb))){
                visited.add(neighb)
                let count=dfs1(neighb)
                closerNodeCount+=count
                parentCount[0]+=count
            }
        }

        closerNodes[curr]=closerNodeCount

        return closerNodeCount

    }

    let seen=new Set()


    function dfs2(vertex){

        seen.add(vertex)

        for(let neighb of graph[vertex]){
            if(!(seen.has(neighb))){
                visited.add(neighb)
                parentCount[neighb]=(parentCount[vertex]-closerNodes[neighb])+(n-closerNodes[neighb])
                dfs2(neighb)
            }
        }
    }

    dfs1(0)

    dfs2(0)
   
    return parentCount

}

console.log(sumOfDistances2(n=6,[[0,1],[0,2],[2,3],[2,4],[2,5]]))