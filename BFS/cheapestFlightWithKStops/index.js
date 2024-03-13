const cheapestFlight=(n, flights, src, dst, k)=>{
    let adj=new Array(n)

    for(let i=0;i<n;i++){
        adj[i]=new Array()
    }


    for(let [from,to,price] of flights){
        adj[from].push([to,price])
    }

    let memo=new Array(n).fill(Infinity)
    let queue=[[src,0]]

    while(queue.length>0 && k>-1){
        let size=queue.length

        while(size--){
            let [node,price]=queue.shift()

            for(let [neighhbour,cost] of adj[node]){
                if(memo[neighhbour]<price+cost) continue
                memo[neighhbour]=price+cost
                queue.push([neighhbour,memo[neighhbour]])
            }
        }
        k--
    }

    return memo[dst]===Infinity?-1:memo[dst]
}

// Another way

const findCheapestPrice = function (n, flights, src, dst, k) {
    let costs = new Array(n).fill(Infinity);
    costs[src] = 0;
    let adj = new Array(n).fill(0).map(() => []);
    let queue = [];
    queue.push([src, 0]);
    for (let flight of flights) {
      const [u, v, cost] = flight;
      //it is a direct graph that'why we only push adj[u]
      if (!adj[u]) adj[u] = [];
      adj[u].push([v, cost]);
    }
    let level = 0;
    while (queue.length && k >= level) {
      let size = queue.length;
      //iterate to every level
      while (size--) {
        let [currentNode, currentCost] = queue.shift();
        for (let child of adj[currentNode]) {
          const [childNode, childCost] = child;
          //if current costs present in costs array is greater than child cost then we need to update the cost of child node because we are looking for min cost
          if (costs[childNode] > currentCost + childCost) {
            costs[childNode] = currentCost + childCost;
            //we will update child and its min cost in queue
            queue.push([childNode, currentCost + childCost]);
          }
        }
      }
      //increment the level by one
      level++;
    }
    return costs[dst] === Infinity ? -1 : costs[dst];
  };

console.log(cheapestFlight(n = 3, flights = [[0,1,100],[1,2,100],[0,2,500]], src = 0, dst = 2, k = 1))