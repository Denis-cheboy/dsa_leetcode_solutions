const closest=()=>{
    const dfs = function(edges, src, vis, dist){

        vis[src] = true;
        let nbr = edges[src];
        if(nbr != -1 && vis[nbr] == false){
            dist[nbr] = 1 + dist[src];
            dfs(edges, nbr, vis, dist);
        }

    }
    let n = edges.length;
    let dist1 = new Array(n).fill(Number.MAX_SAFE_INTEGER);
    let dist2 = new Array(n).fill(Number.MAX_SAFE_INTEGER);
    dist1[node1] = 0;
    dist2[node2] = 0;
    let vis = new Array(n).fill(false);
    let vis1 = new Array(n).fill(false);
    dfs(edges, node1, vis, dist1);
    dfs(edges, node2, vis1, dist2);

   let maxNode=-1

   let maxDist=Number.MAX_SAFE_INTEGER

   for(let i=0;i<edges.length;i++){
       if(maxDist>Math.max(dist1[i],dist2[i])){
           maxDist=Math.max(dist1[i],dist2[i])
           maxNode=i
       }
   }

   return maxNode

}

// BFS

const closest2=(edges,node1,node2)=>{
    let dist1=new Array(edges.length).fill(Infinity)
    let dist2=new Array(edges.length).fill(Infinity)

    let graph={}

    for(let i=0;i<edges.length;i++){
        graph[i]=[]
    }

    for(let i=0;i<edges.length;i++){
        if(edges[i]===-1) continue
        graph[i].push(edges[i])
    }

    function bfs(node,val,distance){

        let queue=[]

        queue.push(node)
        
        distance[node]=val
        let visited=new Set()

        while(queue.length>0){
            let curr=queue.shift()

            visited.add(curr)

            let neighbour=graph[curr]

            for(let neigh of neighbour){
                if(!(visited.has(neigh))){
                    distance[neigh]=distance[curr]+1
                    queue.push(neigh)
                }
            }
        }
        

    }

    bfs(node1,0,dist1)
    bfs(node2,0,dist2)

    let maxNode=-1

    let max=Infinity

    for(let i=0;i<edges.length;i++){
        if(max>Math.max(dist1[i],dist2[i])){
            maxNode=i
            max=Math.max(dist1[i],dist2[i])
        }
    }

    return maxNode
}

console.log(closest2(edges = [2,2,3,-1], node1 = 0, node2 = 1))