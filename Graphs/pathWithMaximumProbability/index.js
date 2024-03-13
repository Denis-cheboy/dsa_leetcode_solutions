const pathWithMax=()=>{
    class PriorityQueue{

        constructor(){
            this.queue=[]
        }

        enqueue(node,priority){

            let item={node,priority}

            if(this.queue.length===0){
                this.queue.push(item)
            }
            else{
                let contained=false

                for(let i=0;i<this.queue.length;i++){
                    if(this.queue[i].priority<item.priority){
                        this.queue.splice(i,0,item)
                        contained=true
                        break
                    }
                }

                if(!contained){
                    this.queue.push(item)
                }
            }

        }

        dequeue(){
            if(this.queue.length===0) return null
            return this.queue.shift()
        }

        isEmpty(){
            return this.queue.length===0
        }
    }
    let graph={}

    for(let i=0;i<n;i++){
        graph[i]=[]
    }

    for(let i=0;i<edges.length;i++){
        let [u,v]=edges[i]

        graph[u].push([v,succProb[i]])
        graph[v].push([u,succProb[i]])
    }


    const pq=new PriorityQueue()

    pq.enqueue(start_node,1)

    let distances=new Array(n).fill(-Infinity)

    while(!pq.isEmpty()){
        let {node,priority}=pq.dequeue()

        if(node===end_node) return priority

        for(let neighb of graph[node]){
            
            let weight=priority*neighb[1]

            if(distances[neighb[0]]<weight){
                distances[neighb[0]]=weight
                pq.enqueue(neighb[0],weight)
            }
        }
    }

    return 0
}

// Bellmans Ford

const pathWithMax2=(n,edges,succProb,start_node,end_node)=>{

    let distances=new Array(n).fill(-Infinity)

    distances[start_node]=1


    for(let i=0;i<n-1;i++){
        for(let [u,v] of edges){
            if(distances[u]!==-Infinity && distances[v]<distances[u]*succProb[i]){
                distances[v]=distances[u]*succProb[i]
            }
        }
    }

    console.log(distances)

    return distances[end_node]!==-Infinity?distances[end_node]:0
}

// BFS 
var maxProbability = function(n, edges, succProb, start, end) {
    const p = Array(n).fill(0);
    const graph = p.reduce((m, _, i) => m.set(i, []), new Map());
    edges.forEach(([u, v], i) => {
      graph.get(u).push([v, succProb[i]]);
      graph.get(v).push([u, succProb[i]]);
    });
    
    const queue = [[start, 1]];
    p[start] = 1;
    
    for (let [node, currP] of queue) {   
      for (let [adj, nextP] of graph.get(node)) {
        if (currP * nextP > p[adj]) {
          p[adj] = currP * nextP;
          queue.push([adj, p[adj]]);
        }
      }
    }
    
    return p[end];
  };

console.log(pathWithMax2( n = 3, edges = [[0,1],[1,2],[0,2]], succProb = [0.5,0.5,0.2], start = 0, end = 2))

