/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if (!head || k === 0) return head;

    // Find the length of the linked list
    let length = 1;
    let tail = head;
    while (tail.next) {
        tail = tail.next;
        length++;
    }

    // Handle cases where k >= length
    k = k % length;
    if (k === 0) return head;

    // Traverse the list to find the new head
    let breakPoint = length - k;
    let current = head;
    for (let i = 1; i < breakPoint; i++) {
        current = current.next;
    }

    // Rotate the list
    let newHead = current.next;
    current.next = null;
    tail.next = head;

    return newHead;
};