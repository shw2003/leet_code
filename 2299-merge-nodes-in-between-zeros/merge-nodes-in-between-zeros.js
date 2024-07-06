/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var mergeNodes = function(head) {
    let modify = head.next; // Start from the node after the initial 0
    let nextSum = modify;

    while (nextSum !== null) {
        let sum = 0;
        // Find the sum of all nodes until you encounter a 0.
        while (nextSum.val !== 0) {
            sum += nextSum.val;
            nextSum = nextSum.next;
        }

        // Assign the sum to the current node's value.
        modify.val = sum;
        // Move nextSum to the first non-zero value of the next block.
        nextSum = nextSum.next;
        // Move modify also to this node.
        modify.next = nextSum;
        modify = modify.next;
    }
    return head.next; // Skip the initial 0 node
};