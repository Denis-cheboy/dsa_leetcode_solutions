const minimumCost=()=>{
    let fuel=0

    let graph={}
 
    for(let i=0;i<roads.length+1;i++){
        graph[i]=[]
    }
 
    for(let [u,v] of roads){
        graph[u].push(v)
        graph[v].push(u)
    }
 
    function dfs(node,parent){
        const totalPeople=graph[node].reduce((a,b)=>a+(b==parent?0:dfs(b,node)),1)
 
        if(parent>-1){
            fuel+=Math.ceil(totalPeople/seats)
 
        }
        return totalPeople
    }
 
    dfs(0,-1)
 
    return fuel
 
}

// Another way

/**
 * @param {number[][]} roads
 * @param {number} seats
 * @return {number}
 */
var minimumFuelCost = function(roads, seats) {
    const adjList = createAdjacencyList(roads);
    let ans = 0

    const dfs = (curNode, preNode) => {
        let people = 1
        for(let child of adjList[curNode]){ 
            if(child !== preNode){
                people += dfs(child, curNode)
            }
        }
        if(curNode) 
            ans += Math.ceil(people/seats)

        return people
    }
    dfs(0, -1)

    return ans
};


const createAdjacencyList = (edges) => {
    const N = edges.length
    const adjList = Array(N+1).fill().map(() => []);

    // Add the edges to the adjacency list
    for(const edge of edges){
        const [node1, node2] = edge;
        adjList[node1].push(node2);
        adjList[node2].push(node1);
    }
    return adjList;
}

console.log(minimumCost())