var pathSum = function(root, targetSum) {
    let res = 0;
    const helper = (root, sum) => {
        if(!root) return;
        sum -= root.val;
        if(sum === 0){
            res++;
        }
        helper(root.left, sum);
        helper(root.right, sum);
    }
    const main = (root, sum) => {
        if(!root) return 0;
        helper(root, sum);
        main(root.left, sum);
        main(root.right, sum);
        return ;
    }
    main(root, targetSum);
    return res;
 
 };

//  another way here
/**
 * DFS - Preorder
 * 
 * pathSum: sum of all values from current node to root
 * map(pathSum - targetSum): frequency of targetSum in the path (up to current node)
 * 
 * Case 1: valid tree path sum that starts from the root node
 *          - pathSum === targetSum
 *             => increment output by 1
 * Case 2: valid tree path sum that starts middle of the tree
 *          - check for frequency of target sum in the current path
 *             * if True, it means that we found targetSum 
 *                * map[pathSum - targetSum] number of times
 *             => increment output by frequency of map(pathSum - targetSum)
 * *Time: O(N)
 * *Space: O(N)
 */
// Runtime: 134 ms, faster than 51.52% of JavaScript online submissions for Path Sum III.
// Memory Usage: 47.5 MB, less than 12.82% of JavaScript online submissions for Path Sum III.
const pathSum = (root, targetSum) => {
	let output = 0;
	let map = {};

	const traverse = (root, pathSum) => {
		if (!root) return null;

		pathSum += root.val; // current path sum

		// Case 1: starts from root node
		if (pathSum === targetSum) output++;

		// Case 2: starts from middle of tree
		// frequency of targetSum in the current path (up to current node)
		if (map[pathSum - targetSum]) output += map[pathSum - targetSum];

		// memoize current path sum (root to current node) and it's frequency
		if (map[pathSum]) map[pathSum]++;
		else map[pathSum] = 1;

		if (root.left) traverse(root.left, pathSum);
		if (root.right) traverse(root.right, pathSum);

		// remove the current path sum
		// to note that path is not available/visited
		map[pathSum]--;
	};

	traverse(root, 0);
	return output;
};