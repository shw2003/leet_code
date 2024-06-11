/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    const freqMap = new Map();

    for(const char of s) {
        freqMap.set(char, (freqMap.get(char) || 0) + 1);
    }

    const sortedChars = Array.from(freqMap.entries()).sort((a, b) => {
        if(b[1] === a[1]) {
            return a[0].localeCompare(b[0]);
        }
        return b[1] - a[1];
    });


    let result="";
    for(const [char, freq] of sortedChars) {
        result += char.repeat(freq);
    }
    return result;
};