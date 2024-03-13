const keysAndRooms=()=>{
    function dfs(current){
        current.forEach(node => {
           if (!(visited.has(node))){
               visited.add(node);
               total++;
               dfs(rooms[node]);
           } 
        });
    }
   
    let visited = new Set();
    visited.add(0);
    let total = 0;
    
    dfs(rooms[0]);
    return total == rooms.length-1? true:false;

}

// anothe war
const keysAndRooms2=(rooms)=>{
    const uniqueKeys = new Set([0]);
    const availableKeys = [0];
    
    while (availableKeys.length) {
        let currentKey = availableKeys.pop();
        rooms[currentKey].forEach(key => {
           if (!uniqueKeys.has(key)) {
               uniqueKeys.add(key);
               availableKeys.push(key);
           }
        });
    }

    return uniqueKeys.size === rooms.length;
}

console.log(keysAndRooms())