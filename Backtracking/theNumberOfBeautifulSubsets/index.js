var beautifulSubsets = function(nums, k) {

    let count=0

    function generateSubsets(index,nums,k,comb){
        if(index>=nums.length){

            if(comb.length===0) return

            if(comb.length===1 || checkAbsDiff(comb) ){
                count++
            }
            return 
        }

        generateSubsets(index+1,nums,k,[...comb,nums[index]])
        generateSubsets(index+1,nums,k,comb)
    }

    generateSubsets(0,nums,k,[])

    function checkAbsDiff(comb){
        let check=true

        for(let i=0;i<comb.length;i++){

            for(let j=i+1;j<comb.length;j++){
                if(Math.abs(comb[i]-comb[j])===k){
                    check=false
                    break
                }
            }

            if(!check) break
        }

        return check?true:false
    }

    return count
};

// Another way
var beautifulSubsets2 = function (A, k) {

    function bt(a) {
      let n = a.length
      if (n === 0) return 0
      let s = 0
      for (let i = 0; i < n; i++) {
        let b = []
        for (let j = i + 1; j < n; j++) {
          if (Math.abs(a[i] - a[j]) !== k) {
            b.push(a[j])
          }
        }
        s += 1 + bt(b)
      }
      return s
    }
  
    let s = bt(A)
    return s
  };

  console.log(beautifulSubsets2([2,4,6],2))