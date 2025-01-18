/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
     // Initialize a slow and fast
    // pointers to the head of the list
    let slow = head;
    let fast = head;

    // Phase 1: Detect the loop
    while (fast !== null && fast.next !== null) {
        // Move slow one step
        slow = slow.next;
        // Move fast two steps
        fast = fast.next.next;

        // If slow and fast meet,
        // a loop is detected
        if (slow === fast) {
            // Reset the slow pointer
            // to the head of the list
            slow = head;

            // Phase 2: Find the first
            // node of the loop
            while (slow !== fast) {
                // Move slow and fast
                // one step at a time
                slow = slow.next;
                fast = fast.next;

                // When slow and fast meet again,
                 // it's the first node of the loop
            }

            // Return the first node of the loop
            return slow;
        }
    }

    // If no loop is found, return null
    return null;
};