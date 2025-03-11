/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if (typeof s !== "string" || s.length === 0) return 0; // Ensure input is valid
    let charset = new Map();
    let left = 0, maxLength = 0;

    for(let right = 0; right < s.length; right++) {
        if(charset.has(s[right])) {
            left = Math.max(left, charset.get(s[right]) + 1);
        }

        charset.set(s[right], right);
        maxLength = Math.max(maxLength, right-left + 1);
    }
    return maxLength;
};