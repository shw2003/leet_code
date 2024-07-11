var reverseParentheses = function(s) {
    let indStack = [];
    let res = [];

    for (let char_s of s) {
        if (char_s === '(') {
            indStack.push(res.length);
        } else if (char_s === ')') {
            let startInd = indStack.pop();
            let subArr = res.slice(startInd).reverse();
            res.splice(startInd, subArr.length, ...subArr);
        } else {
            res.push(char_s);
        }
    }

    return res.join('');
};