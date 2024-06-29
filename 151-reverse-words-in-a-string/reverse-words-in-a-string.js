/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let words = s.trim().split(/\s+/);

    // Reverse each word in the array
    // let reversedWords = words.map(word => word.split('').reverse().join(''));

    // Join the reversed words back into a single string
    let reversedString = words.reverse().join(' ');

    return reversedString;

};