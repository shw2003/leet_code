/**
 * @param {string} s
 * @return {number}
 */
var countPalindromicSubsequence = function(s) {
    const n = s.length;

    const firstlast = {};

    for(let i = 0; i<n; i++) {
        if(!firstlast.hasOwnProperty(s[i])){
            firstlast[s[i]] = {first : i, last : i};
        } 
        else {
            firstlast[s[i]].last = i;
        }
    }

    let count = 0;
    for(const char in firstlast){
        const {first, last } = firstlast[char];
        if(first === last) continue;

        const uniqueChar = new Set(s.slice(first + 1, last));
        count += uniqueChar.size;
    }

    return count;

};