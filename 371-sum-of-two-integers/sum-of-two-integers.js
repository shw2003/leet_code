/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
    while (b !== 0) {
        // Calculate sum without carry
        let sum = a ^ b;
        
        // Calculate carry
        let carry = (a & b) << 1;
        
        // Update a and b
        a = sum;
        b = carry;
    }
    
    return a;
};