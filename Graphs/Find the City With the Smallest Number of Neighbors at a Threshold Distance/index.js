// Dijkistras
const findCity=()=>{
    class PriorityQueue{
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
    let graph={}


    for(let [u,v,w] of edges){
        if(!(u in graph)) graph[u]=[]
        if(!(v in graph)) graph[v]=[]

        graph[u].push([v,w])
        graph[v].push([u,w])
    }

    let res=[]

    for(let i=0;i<n;i++){
        
        const [node,count]=dijkstras(i)
        res.push([node,count])

    }
    res.sort((a,b)=>a[1]-b[1])

    let count=0
    let left=0
    let right=1


    while(right<res.length && res[left][1]===res[right][1]){
        count++
        left=right
        right++
    }

    return count===0?res[0][0]:res[count][0]

    function dijkstras(node){
         let pq=new PriorityQueue()

        const dist=new Array(n).fill(Infinity)

        dist[node]=0

        pq.enqueue(node,0)

        while(!pq.isEmpty()){

            let [element,priority]=pq.dequeue()

            for(let [neighb,weight] of graph[element] || []){

                let distance=weight+priority

                if(dist[neighb]>distance){
                    dist[neighb]=distance
                    pq.enqueue(neighb,distance)
                }
            }

           
        }

        let count=0

        for(let i=0;i<dist.length;i++){
            if(dist[i]<=distanceThreshold){
                count++
            }
        }

        return [node,count]



    }


   
}

// FlodWarshal

const flowrd=(n,edges,distanceThreshold)=>{

    let distance=[]


    for(let i=0;i<n;i++){
        distance[i]=[]

        for(let j=0;j<n;j++){
            
            if(i==j) distance[i][j]=0
            else distance[i][j]=Infinity
        }
    }
  
    for(let [u,v,w] of edges){
        distance[u][v]=w
        distance[v][u]=w
    }

    for(let k=0;k<n;k++){
        for(let i=0;i<n;i++){
            for(let j=0;j<n;j++){
                if(distance[i][j]>distance[i][k]+distance[k][j]){
                    distance[i][j]=distance[i][k]+distance[k][j]
                }
            }
        }
    }
    
    let city = 0;
    let minNum = n;
    for (let i = 0; i < n; ++i) {
      let curNum = 0;
      for (let j = 0; j < n; ++j) {
        distance[i][j] <= distanceThreshold && ++curNum;
      }
      if (curNum <= minNum) { minNum = curNum; city = i; }
    }
    return city;
   
}

// Bellmans Ford

// const bellMan=(n,edges)=>{

    
//     for(let i=0;i<n;i++){
//         bellAlgo(i)
//     }
    
//     function bellAlgo(source){
//         let distance=new Array(n).fill().map(()=>new Array(n).fill(Infinity))
//         distance[source]=0

//         for(let i=0;i<n-1;i++){

//             for(let [u,v,w] of edges){
//                 distance[u][v]=w
//                 distance[v][u]=w

//                 if(distance[u][v]!==Infinity && distance[u][v]+w<distance[v][u]){
//                     distance[v][u]=distance[u][v]+w
//                 }
//             }
//         }

//         console.log(distance)

//     }

// }

console.log(bellMan(n = 4, edges = [[0,1,3],[1,2,1],[1,3,4],[2,3,1]]))