// One the ways to get the shortest distance in a graph=> i will implement using a priority queue
// This is beacuse we will always want to priotise picking the smallest distance from the source
// It doesnt work with negative weighted edges=> might give undesried results
// Time complexity=> O(n^2) but using a priority queue speeds the algorithm to O(ElogV)

class priorityQueue{
    constructor(){
        this.items=[]
    }

    enqueue(node,weight){
        let item=[node,weight]
        
        if(this.isEmpty()){
            this.items.push(item)
        }
        else{
            let contain=false
       
            for(let i=0;i<this.items.length;i++){
                if(this.items[i][1]>item[1]){
                    this.items.splice(i,0,item)
                    contain=true
                    break
                }
            }

            if(!contain){
                this.items.push(item)
            }
        } 

    }

    isEmpty(){
        return this.items.length===0
    }

    dequeue(){

        if(this.items.length===0) return null

        return this.items.shift()
    }
}

function dijkstraAlgo(numOfVertices,source,edges,dest){
    let AdjList=[]
    let dist=[]

    for(let i=0;i<numOfVertices;i++){
        AdjList[i]=[]
        dist[i]=Infinity
    }

    // Populate adjacency list

    for(let edge of edges){
        AdjList[edge[0]].push([edge[1],edge[2]])
    }

    dist[source]=0

    let pq=new priorityQueue()
    pq.enqueue(source,0)

    while(!pq.isEmpty()){

        let [node,weight]=pq.dequeue()

        for(let neighbor of AdjList[node]){
            let [neighNode,neighWeight]=neighbor

            if(dist[neighNode]>weight+neighWeight){
                dist[neighNode]=weight+neighWeight
                pq.enqueue(neighNode,weight+neighWeight)
            }
        }
    }
    return dist

}

const edges=[
    [0,1,1],[0,3,2],[0,2,6],[1,4,4],[1,2,1],[2,3,7],[2,4,1],[3,4,4]
]


console.log(dijkstraAlgo(n = 4,3,[[0,1,3],[1,2,1],[1,3,4],[2,3,1]],0))