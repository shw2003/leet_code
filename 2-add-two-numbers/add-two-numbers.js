/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let dummyHead = new ListNode(0); // Dummy node to simplify the logic
        let current = dummyHead; // Pointer to build the result list
        let carry = 0; // To store carry over

        // Traverse both lists and add corresponding digits
        while (l1 !== null || l2 !== null || carry !== 0) {
            // Get the current values (or 0 if the list is shorter)
            let x = (l1 !== null) ? l1.val : 0;
            let y = (l2 !== null) ? l2.val : 0;
            
            // Calculate sum of digits and carry
            let sum = x + y + carry;
            carry = Math.floor(sum / 10); // Carry for next iteration
            current.next = new ListNode(sum % 10); // Create a new node with the current digit
            
            current = current.next; // Move to the next node

            // Move to the next nodes in l1 and l2, if available
            if (l1 !== null) l1 = l1.next;
            if (l2 !== null) l2 = l2.next;
        }
        
        return dummyHead.next; // Return the result list (skipping dummy node)
};