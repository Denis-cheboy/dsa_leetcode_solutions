/**
 * @param {number[]} nums
 * @param {number} indexDiff
 * @param {number} valueDiff
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function(nums, indexDiff, valueDiff) {

    for(let i=0;i<nums.length;i++){

        for(let j=i+1;j<=i+indexDiff;j++){

            let diff=Math.abs(nums[i]-nums[j])

            if(diff<=valueDiff){
                return true
            }

        }
    }

    return false
};
// another approach 
var containsNearbyAlmostDuplicate = function(nums, indexDiff, valueDiff) {
    
    if(  (valueDiff == 0) && ( new Set(nums).size == nums.length ) ) {
        
        // Quick response for valueDiff = 0
        // valueDiff = 9 requires at least one pair ofrepeated element
        return false;
    }
    
    // key: element value / width
    // value: corresponding element 
    let bucket = new Map();
    
    const width = valueDiff + 1;
    
    for( let idx = 0 ; idx < nums.length ; idx++ ){
        
        let curNumber = nums[idx];
        
        let bucketIdx = Math.floor( curNumber / width );
        
        if( bucket.has(bucketIdx) ){
            
            // two numbers in the same bucket, gap must be smaller than width
            return true;
            
        }else if( bucket.has(bucketIdx+1) && Math.abs( curNumber - bucket.get(bucketIdx+1) ) < width ){
        
            // two number in two consecutive buckets, and gap is smaller than width
            return true;
            
        }else if( bucket.has(bucketIdx-1) && Math.abs( curNumber - bucket.get(bucketIdx-1) ) < width ){
            
            // two number in two consecutive buckets, and gap is smaller than width
            return true;
        }
        
        
        // put current number into corresponding bucket
        bucket.set( bucketIdx,  curNumber );
        
        if( idx >= indexDiff ){
            
            let oldNumber = nums[ idx - indexDiff ];
            let oldNumberBucketIdx = Math.floor( oldNumber / width);
            bucket.delete( oldNumberBucketIdx );
        } 
        
    }
    
   
    
    return false;
};