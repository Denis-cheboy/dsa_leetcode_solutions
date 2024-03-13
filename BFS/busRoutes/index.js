var numBusesToDestination = function(routes, source, target) {
    
    let graph={}

   for(let i=0;i<routes.length;i++){
      
        for(let route of routes[i]){
            if(!(route in graph)) graph[route]=[i]
            else graph[route].push(i)
        }
     
   }

   let seenBus=new Set()
   let seenRoute=new Set()
   let answer=0

   let queue=[source]

   while(queue.length>0){
      let len=queue.length

      for(let i=0;i<len;i++){
         let curr=queue.shift()

         if(curr===target) return answer

         for(let routeId of graph[curr]){
            if(seenBus.has(routeId)) continue

            for(let route of routes[routeId]){
                if(!(seenRoute.has(route))){
                    seenRoute.add(route)
                    queue.push(route)
                }
            }

            seenBus.add(routeId)
         }
      }
      answer++
   }

   return -1
   
};
console.log(numBusesToDestination(routes = [[1,2,7],[3,6,7]], source = 1, target = 6))