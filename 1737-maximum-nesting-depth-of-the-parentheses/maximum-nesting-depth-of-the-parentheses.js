/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
    let currentDepth = 0;
    let maxDepth = 0;

    for(const char of s) {
        if(char === '(') {
            currentDepth++;

            if(currentDepth > maxDepth) {
                maxDepth = currentDepth;
            }
        }else if(char === ')') {
            currentDepth--;
        }
    }

    return maxDepth;
};