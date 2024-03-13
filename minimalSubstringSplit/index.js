function minimalSubstringSplit(str) {
    const charSet = new Set();
    let count=0

    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (charSet.has(char)) {
            count++
            charSet.clear();
        }
        charSet.add(char);
    }
    count++
    return count;
    // const lastIndexMap = new Map(); // Map to store the last index of each character
    // let start = 0;
    // const result = [];

    // for (let end = 0; end < str.length; end++) {
    //     const char = str[end];
    //     if (lastIndexMap.has(char)) {
    //         // If the character has been encountered before, update the start index
    //         start = Math.max(start, lastIndexMap.get(char) + 1);
    //     }
    //     // Update the last index of the character
    //     lastIndexMap.set(char, end);

    //     // Check if we can split the string from the current start index to the current end index
    //     if (end - start + 1 === new Set(str.slice(start, end + 1)).size) {
    //         result.push(str.slice(start, end + 1));
    //         start = end + 1; // Move the start index to the next character
    //     }
    // }

    // return result;
}

console.log(minimalSubstringSplit("world"))