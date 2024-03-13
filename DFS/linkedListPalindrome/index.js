/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    const mid = getMiddleNode(head);
    const afterMid = reverseList(mid.next)
    let leftSide = head;
    let rightSide = afterMid;

    let res = true;

    while(rightSide) {
        if (rightSide.val !== leftSide.val) {
            res = false;
            break;
        };

        rightSide = rightSide.next;
        leftSide = leftSide.next;
    }
    
    reverseList(afterMid)

    return res;
};

function reverseList(head) {
    if (head === null) return null

    let prev = null;
    let curr = head;
    let nextTemp;

    while (curr !== null) {
        nextTemp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nextTemp;
    }

    return prev;
}

function getMiddleNode(head) {
    let fast = head;
    let slow = head;

    while (fast.next && fast.next.next) {
        fast = fast.next.next;
        slow = slow.next;
    }

    return slow;
}