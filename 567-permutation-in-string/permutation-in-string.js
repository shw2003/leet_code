/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    if (s1.length > s2.length) return false;

    let s1Count = new Array(26).fill(0);
    let s2Count = new Array(26).fill(0);
    let aCharCode = "a".charCodeAt(0);

    // Count frequencies of s1 and first window in s2
    for (let i = 0; i < s1.length; i++) {
        s1Count[s1.charCodeAt(i) - aCharCode]++;
        s2Count[s2.charCodeAt(i) - aCharCode]++;
    }

    let matches = 0;
    for (let i = 0; i < 26; i++) {
        if (s1Count[i] === s2Count[i]) matches++;
    }

    let left = 0;
    for (let right = s1.length; right < s2.length; right++) {
        if (matches === 26) return true;

        // Add new character to window
        let index = s2.charCodeAt(right) - aCharCode;
        s2Count[index]++;
        if (s1Count[index] === s2Count[index]) {
            matches++;
        } else if (s1Count[index] + 1 === s2Count[index]) {
            matches--;
        }

        // Remove left character from window
        index = s2.charCodeAt(left) - aCharCode;
        s2Count[index]--;
        if (s1Count[index] === s2Count[index]) {
            matches++;
        } else if (s1Count[index] - 1 === s2Count[index]) {
            matches--;
        }
        left++;
    }

    return matches === 26;
};