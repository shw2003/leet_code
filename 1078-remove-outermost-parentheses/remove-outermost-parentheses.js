/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
    let result = "";
    let balance = 0;

    for( let char of s ) {
        if(char === '(') {
            if(balance > 0) {
                result += char;
            }
            balance++;
        } else if (char === ')') {
            balance--;

            if(balance > 0) {
                result += char;
            }
        }
    }

    return result;
};