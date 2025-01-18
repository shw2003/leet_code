/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    function getLength(head) {
        let length = 0;

        while(head) {
            length++;
            head = head.next;
        }
        return length;
    }
    let lengthA = getLength(headA);
    let lengthB = getLength(headB);

    while(lengthA > lengthB) {
        
    headA = headA.next;
    lengthA--;
    }

    while(lengthA < lengthB) {

    headB = headB.next;
    lengthB--;
    }

    while(headA && headB) {
        if(headA === headB) {
            return headA;
        }

        headA = headA.next;
        headB = headB.next;

    }
    return null;

};