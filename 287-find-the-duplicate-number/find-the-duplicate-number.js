/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    const counts = {};
    let duplicate;

    // Count occurrences of each element
    nums.forEach(item => {
        counts[item] = (counts[item] || 0) + 1;
    });

    // Log unique values
    for (let item in counts) {
        if (counts[item] > 1) {
        duplicate = parseInt(item);
        break;
        }
    }
    return duplicate;
}
    