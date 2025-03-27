/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let cleanStr = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

    let reverStr = cleanStr.split("").reverse().join("");

    return cleanStr === reverStr;
};