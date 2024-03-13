const largestNumber=(str,swap)=>{


    let max=str
        
    function bactrack(str,k){
        
          // Return if no swaps left
        if (k == 0)
            return;

        let n = str.length;

        // Consider every digit
        for (let i = 0; i < n - 1; i++)
        {
        
            // Compare it with all digits
            // after it
            for (let j = i + 1; j < n; j++)
            {
                // if digit at position i
                // is less than digit
                // at position j, swap it
                // and check for maximum
                // number so far and recurse
                // for remaining swaps
                if (str[i] < str[j])
                {
                
                // swap str[i] with
                // str[j]
                let t = str[i];
                str[i] = str[j];
                str[j] = t;

                // If current num is more
                // than maximum so far
                if ((str).join("")>(max) )
                    max = (str).join("");

                // recurse of the other
                // k - 1 swaps
                bactrack(str, k - 1);

                // Backtrack
                let c = str[i];
                str[i] = str[j];
                str[j] = c;
                }
            }
        }
    }

    bactrack(str.split(""),swap)

    return max

}

// optimized way

function findMaximumNum(string, k, maxm, ctr) {
    // return if no swaps left
    if (k == 0) {
        return;
    }
    
    const n = string.length;
    // Consider every digit after
    // the cur position
    let mx = string[ctr];
    
    for (let i = ctr + 1; i < n; i++) {
        // Find maximum digit greater
        // than at ctr among rest
        if (parseInt(string[i]) > parseInt(mx)) {
        mx = string[i];
        }
    }
    
    // If maxm is not equal to str[ctr],
    // decrement k
    if (mx != string[ctr]) {
        k = k - 1;
    }
    
    // search this maximum among the rest from behind
    // first swap the last maximum digit if it occurs more than 1 time
    // example str= 1293498 and k=1 then max string is 9293418 instead of 9213498
    for (let i = ctr; i < n; i++) {
        // If digit equals maxm swap
        // the digit with current
        // digit and recurse for the rest
        if (string[i] == mx) {
        // swap str[ctr] with str[j]
        [string[ctr], string[i]] = [string[i], string[ctr]];
        const new_str = string.join("");
        // If current num is more than
        // maximum so far
        if (parseInt(new_str) > parseInt(maxm[0])) {
            maxm[0] = new_str;
        }
        // recurse of the other k - 1 swaps
        findMaximumNum(string, k, maxm, ctr + 1);
    
        // backtrack
        [string[ctr], string[i]] = [string[i], string[ctr]];
        }
    }
}
    

  
    
console.log(largestNumber2("4551711527",3))