const mostProfit=()=>{
    const graph = Array.from({ length: edges.length + 1 }, () => []);

    for (const [i, j] of edges)
        graph[i].push(j), graph[j].push(i);
    
    function aliceMoves(node, parent, time) {
        let totalBobTime = node == bob ? 0 : Infinity, newScore = -Infinity;

        for (const child of graph[node]) {
            if (child == parent) continue;

            const [score, bobTime] = aliceMoves(child, node, time + 1);
            totalBobTime = Math.min(totalBobTime, bobTime + 1);
            newScore = Math.max(newScore, score)
        }

        if (newScore == -Infinity) newScore = 0;
        if (time < totalBobTime) newScore += amount[node];
        else if (time == totalBobTime) newScore += amount[node] / 2;

        return [newScore, totalBobTime];
    }
    
    return aliceMoves(0, -1, 0)[0];
}

// Another way

const mostProfit2=()=>{
     // Construct graph
     const graph = Array(edges.length + 1).fill(0).map(ele => []);
     edges.forEach(([node1, node2]) => {
         graph[node1].push(node2);
         graph[node2].push(node1);
         
     });
     // Get Bob path to Root node
     let queue = [bob];
     const prev = Array(graph.length).fill(null);
     let visited = initVisited(graph.length);
     while(queue.length){
         const popped = queue.shift();
         for(const neighbor of graph[popped]){
             if(!visited[neighbor]){
                 visited[neighbor] = true;
                 prev[neighbor] = popped;
                 queue.push(neighbor);
             }
         }
         if(visited[0])
             break;
     }
     // construct bob's path to root
     const bobPath = [0];
     let dest = 0;
     while(dest !== bob){
         bobPath.push(prev[dest]);
         dest = prev[dest]
     }
     bobPath.reverse();
     const maxIncome = [Number.MIN_SAFE_INTEGER];
     visited = initVisited(graph.length);
     finalDfs(graph, 0, 0, 0, amount, visited, bobPath, maxIncome);
     return maxIncome[0];
 };
 
 function finalDfs(graph, node, step, currIncome, amount, visited, bobPath, maxIncome){
     // terminate if leaf node
     if(node !== 0 && graph[node].length === 1){
         maxIncome[0] = Math.max(maxIncome[0], currIncome + amount[node]);
         // console.log({node, max: maxIncome[0]})
         return;
     }
     if(!visited[node]){
         visited[node] = true;
         const storeAliceNodeAmount = amount[node];
         const storeBobNodeAmount = step < bobPath.length ? amount[bobPath[step]] : null;
         if(bobPath[step] === node){
             amount[node] = amount[node] / 2;
         }
         currIncome += amount[node];
         amount[node] = 0;
         if(step < bobPath.length)
             amount[bobPath[step]] = 0;
         for(const neighbor of graph[node]){
             if(!visited[neighbor]){
                 finalDfs(graph, neighbor, step + 1, currIncome, amount, visited, bobPath, maxIncome);
             }
         }
         // Backtrack
         if(bobPath[step] === node){
             currIncome -= storeAliceNodeAmount / 2
         }else{
             currIncome -= storeAliceNodeAmount;
         }
         if(step < bobPath.length)
             amount[bobPath[step]] = storeBobNodeAmount;
         amount[node] = storeAliceNodeAmount;
     }
     
 }
 function initVisited(len){
    return Array(len).fill(false);
}
 

