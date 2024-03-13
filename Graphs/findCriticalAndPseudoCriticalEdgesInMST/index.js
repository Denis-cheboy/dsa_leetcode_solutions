const findCritical=(n,edges)=>{
 

    // before sort the edges we use a simple trick for keep the original index after sorting
	
    for(let i = 0; i < edges.length; i++){
        edges[i].push(i)
    }
    // sort array edges in increasing order by weight
    edges.sort((a, b) => a[2] - b[2]);
	
    // find the weight of minimum spanning tree
	
    const MSTweight = findMSTweight(edges,n);
	
    // allocate two arrays for storing critical edges and pseudo edges
	
    let critical = [];
    let pseudo = [];
    // go through all edges and each step exclude one
    for(let j = 0;j < edges.length;j++){
        if(MSTweight < findMSTweight(edges, n,j)){
            critical.push(edges[j][3])
        }else if(MSTweight === findMSTweight(edges, n, -1,j)){
            pseudo.push(edges[j][3])
        }
    }
    return [critical, pseudo]
};

// helper function for build MST and get min weight
function findMSTweight(edges, n, exclude = -1, included = -1){
    let weight = 0;
    const ds = new DisjointSets(n);
    if(included !== -1){
        let [src, dst, wgt,idx] = edges[included];
        if(ds.union(src, dst)){
            weight+= wgt;
        }
    }
    for(let k = 0; k < edges.length; k++){
        if(exclude === k){ 
            continue;
        }
        let [src, dst, wgt, idx] = edges[k];
        if(ds.union(src, dst)){
            weight+= wgt;
        }
    }
    // so here the algorithm find the minimum weight for building MST
    // but the question is how to verify all vertices are connected
    for(let i = 0; i < n; i++) {
        if(ds.find(0) !== ds.find(i)){
            return Number.MAX_VALUE;
        }
    }
    return weight;
       

    }


console.log(findCritical(n = 4, edges = [[0,1,1],[1,2,1],[2,3,1],[0,3,1]]))
