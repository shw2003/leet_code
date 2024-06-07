/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
   s = s.trim();
    
    let words = s.split(/\s+/); 

    words. reverse();

    let reveresString = words.join(' ');

    return reveresString;
};