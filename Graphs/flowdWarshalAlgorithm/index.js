// It provide way to compute all pair shortest path 
// It can also be used to detect cycles within a graph
// It has a bigger time complexity and in most occassions not recommended
// Runs in O(n^3)

class Graph{

    constructor(numOfVertices){

        this.numOfVertices=numOfVertices
        this.distance=[]

        for(let i=0;i<this.numOfVertices;i++){
            this.distance[i]=[]
            
            for(let j=0;j<this.numOfVertices;j++){
                if(i===j){
                    this.distance[i][j]=0
                }
                else{
                    this.distance[i][j]=Infinity
                }
            }
        }
    }

    addEdge(source,destination,weight){
        this.distance[source][destination]=weight
    }

    floydWarshal(){

        for(let k=0;k<this.numOfVertices;k++){
            for(let i=0;i<this.numOfVertices;i++){
                for(let j=0;j<this.numOfVertices;j++){
                    if(this.distance[i][j]>this.distance[i][k]+this.distance[k][j]){
                        this.distance[i][j]=this.distance[i][k]+this.distance[k][j]
                    }
                }
            }
        }
        return this.distance
    }

}

const graph = new Graph(4);

graph.addEdge(0, 1, 3);
graph.addEdge(0, 3, 7);
graph.addEdge(1, 2, 4);
graph.addEdge(2, 0, 2);
graph.addEdge(2, 3, 1);
graph.addEdge(3, 0, 5);

const allPairsShortestPaths = graph.floydWarshal();
console.log(allPairsShortestPaths);