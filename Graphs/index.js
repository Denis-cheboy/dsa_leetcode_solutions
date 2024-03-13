// Introduction to graphs

class Graph{
    constructor(isDirected=false){
        this.isDirected=isDirected
        this.vertices={}
        this.edges={}
    }

    addVertex(newVertex){
        this.vertices[newVertex.getKey()]=newVertex
        return this
    }

    getVertexByKey(vertexKey){
        return this.vertices[vertexKey]
    }

    getNeighbors(vertex){
        return vertex.getNeighbors()
    }

    getAllVertices(){
        return Object.values(this.vertices)
    }

    getAllEdges(){
        return Object.values(this.edges)
    }

    addEdge(edge){
        // Start and end indices
        let startVertex = this.getVertexByKey(edge.startVertex.getKey());
        let endVertex = this.getVertexByKey(edge.endVertex.getKey());

    }

    deleteEdge(edge){

    }

    findEdge(startVertex,endVertex){

    }

    getWeight(){

    }
    reverse(){

    }

    getVerticesIndices(){

    }

    getAdjacencyMatrix(){

    }
    toString(){

    }


}