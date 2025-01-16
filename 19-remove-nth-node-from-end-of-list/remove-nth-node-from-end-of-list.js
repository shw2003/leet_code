/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let fastP = head;
    let slowP = head;

    for(let i = 0;i<n; i++) {
        fastP = fastP.next;
        

    }
    if(fastP === null) {
            return head.next;
        }
    while(fastP.next !== null ) {
        fastP = fastP.next;
        slowP = slowP.next;
    }

    let delNode = slowP.next;
    slowP.next = slowP.next.next;
    delNode = null;
    return head;

};