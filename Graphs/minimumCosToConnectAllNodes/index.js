const minCost=(points)=>{

    class PriorityQueue{
        constructor(){
            this.queue=[]
        }

        enqueue(ele,priority){
            let item={ele,priority}
            if(this.queue.length===0){
                this.queue.push(item)
            }
            else{
                let isContained=false
                for(let i=0;i<this.queue.length;i++){
                    if(this.queue[i].priority>item.priority){
                        this.queue.splice(i,0,item)
                        isContained=true
                        break                        
                    }
                }

                if(!isContained){
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


    const pq=new PriorityQueue()

    let visited=new Set()
    let len=points.length

    let pos=points[0][0]+","+points[0][1]

    visited.add(pos)

    for(i=1;i<points.length;i++){
        pq.enqueue(points[i],getDistance(points[0],points[i]))
    }

    let sum=0


    while(visited.size<len){
        let {ele,priority}=pq.dequeue()
       
        let pos=ele[0]+","+ele[1]

        if(visited.has(pos)) continue

        visited.add(pos)

        sum+=priority

        for(let i=0;i<len;i++){
            let pos=points[i][0]+","+points[i][1]
            if(visited.has(pos)) continue
            let distance=getDistance(ele,points[i])
            if(distance===0) continue
            pq.enqueue(points[i],distance)
        }
    }

    function getDistance(p1,p2){
        return Math.abs(p1[0]-p2[0])+Math.abs(p1[1]-p2[1])
    }

    return sum
   

}
// Another Way
var minCostConnectPoints = function(points) {

    let sum = 0;
     const length = points.length;
     const minHeap = new MinPriorityQueue({ priority: (item) => item[0] });
     const visited = new Set();
 
     visited.add(JSON.stringify(points[0]))
     
     for (let i = 1; i < length; i++){   // add frontier of first element to start with
         const item = [getDistance(points[0], points[i]), points[i]];
         minHeap.enqueue([getDistance(points[0], points[i]), points[i]])
     }
     
     while (visited.size < length){
         const  [cost, point] = minHeap.dequeue().element; //dequeue the min cost elem 
         
         if (visited.has(JSON.stringify(point))) continue;
         
         visited.add(JSON.stringify(point));
         sum += cost;
 
         // add new frontier to minHeap
         for (let i = 0; i < length; i++){
             const distance = getDistance(point, points[i]);
             if (visited.has(JSON.stringify(points[i]))) continue;
             if (distance === 0) continue;
             minHeap.enqueue([distance, points[i]])
         }
     }
     
     return sum;
     
     function getDistance(p1,p2){
     return Math.abs(p1[0]-p2[0]) + Math.abs(p1[1]-p2[1]);
 }
}

// Kruskal Algorithm

const minCost2=(points)=>{

    let n=points.length
    let parent=[]
    let rank=[]
    let dist=[]

    for(let i=0;i<points.length;i++){
        for(let j=i+1;j<points.length;j++){
            const [x1,y1]=points[i]
            const [x2,y2]=points[j]

            const distance=Math.abs(x1-x2)+Math.abs(y1-y2)

            dist.push([distance,i,j])

        }
    }

    dist.sort((a,b)=>a[0]-b[0])

    let sum=0

    for(let i=0;i<n;i++){
        parent[i]=i
        rank[i]=0

    }

    for(let [d,u,v] of dist){
        if(union(u,v)===true){
            sum+=d
        }
    }

    

    function find(vertex){
        if(parent[vertex]===vertex) return vertex
        return parent[vertex]=find(parent[vertex])
    }

    function union(i,j){
        console.log(i,j)
        let rooti=find(i)
        let rootj=find(j)

        if(rooti===rootj) return false 

        if(rank[rooti]<rank[rootj]){
            parent[rooti]=rootj
        }
        else if(rank[rooti]>rank[rootj]){
            parent[rootj]=rooti
        }
        else{
            parent[rootj]=rooti
            rank[rooti]++
        }
        return true
    }

    return sum

    
}

console.log(minCost2( [[0,0],[2,2],[3,10],[5,2],[7,0]]))