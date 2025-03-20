/**
 * @param {string} s
 * @return {number}
 */
var numberOfSubstrings = function(s) {
    let count = 0;
    let frq = { 'a':0, 'b':0, 'c':0};
    let left = 0;

    for(let right = 0; right < s.length; right++) {
         frq[s[right]]++;

         while(frq['a'] > 0 && frq['b'] && frq['c'] > 0) {
             count += s.length - right;
             frq[s[left]]--;
             left++;
         }
    }
    return count;

};