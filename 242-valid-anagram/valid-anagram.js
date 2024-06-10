/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length) return false;

    const sortString = (s) => s.split('').sort().join();

    return sortString(t) === sortString(s);
};