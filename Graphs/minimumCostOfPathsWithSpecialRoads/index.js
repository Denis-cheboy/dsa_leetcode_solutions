// DFS Approach
const minimum=(start,target,specialRoads)=>{
    
    function dist(x1, x2, y1, y2) {
        return Math.abs(x1 - x2) + Math.abs(y1 - y2);
    }

    let ans = Math.abs(start[0] - target[0]) + Math.abs(start[1] - target[1]);
    let hm = {};

    function helper(curX, curY, curDist) {
        // Pruning 1
        if (curDist >= ans) return;
        ans = Math.min(ans, dist(curX, target[0], curY, target[1]) + curDist);

        // Pruning 2
        if (hm.hasOwnProperty(curX + "," + curY)) {
            if (hm[curX + "," + curY] <= curDist) return;
        }
        hm[curX + "," + curY] = curDist;

        for (let i = 0; i < specialRoads.length; i++) {
            let next = specialRoads[i];
            helper(next[2], next[3], curDist + dist(curX, next[0], curY, next[1]) + next[4]);
        }
    }

    helper(start[0], start[1], 0);

    return ans;

}

// BFS Approach

const minimum2=(start,target,specialRoads)=>{

    const res=Math.abs(start[0]-target[0])+ Math.abs(start[1]-target[1])


    const stack=[]
    let distance=new Array(specialRoads.length)

    let index=0

    for(let [startRow,startCol,endRow,endCol,weight] of specialRoads){
        distance[index]=startRow-start[0]+startCol-start[1]

        stack.push(endRow,endCol,weight+distance[index++])
    }

    let x,y,cost

    while(stack.length){
        [x,y,cost]=stack.shift()

        res=Math.min(res,cost+(target[0]-x)+(target[1]-y))
        index = 0;
        for (const [x1, y1, x2, y2, c] of specialRoads) {
            if (dist[index] > (cost + Math.abs(x1 - x) + Math.abs(y1 - y))) {
                dist[index] = cost + Math.abs(x1 - x) + Math.abs(y1 - y);
                stack.push([x2, y2, c + dist[index]]);
            }
            ++index;
        }
    }

    return res

}

// Dikstras Algo
const minimum3=(start,target,specialRoads)=>{

    let distance=new Array(specialRoads.length).fill(Infinity)

    let min=Math.abs(start[0]-target[0])+Math.abs(start[1]-target[1])

    class PriorityQueue{

        constructor(){
            this.queue=[]
        }

        isEmpty(){
            return this.queue.length===0
        }

        dequeue(){
            if(this.queue.length===0) return null
            return this.queue.shift()
        }
        enqueue(row,col,w){
            let item={row,col,w}
            if(this.queue.length===0){
                this.queue.push(item)
            }
            else{
                let contained=false

                for(let i=0;i<this.queue.length;i++){
                    if(this.queue[i].w>item.w){
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
    }

    const pq=new PriorityQueue()

    pq.enqueue(start[0],start[1],0)

    while(!pq.isEmpty()){

        let {row,col,w}=pq.dequeue()

        let costToTarget=w+Math.abs(target[0]-row)+Math.abs(target[1]-col)

        min=Math.min(min,costToTarget)
        let index=0

        for(let [r,c,r1,c2,cost] of specialRoads){
            let costToDist=w+Math.abs(row-r)+Math.abs(col-c)+cost

            if(distance[index]>costToDist){
                distance[index]=costToDist
                pq.enqueue(r1,c2,costToDist)
            }
            index++
        }
    }

    return min
}

console.log(minimum3(start = [1,1], target = [4,5], specialRoads = [[1,2,3,3,2],[3,4,4,5,1]]))