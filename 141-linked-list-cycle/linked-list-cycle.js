/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let temp = head;
    const nodeMap = new Map();

    while(temp !== null) {
        if(nodeMap.has(temp)) {
            return true;
        }
        nodeMap.set(temp, true);
        temp = temp.next;

    }

    return false;
};