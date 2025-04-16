function spiralOrder(matrix) {
    let res = [];
    let top = 0, bottom = matrix.length - 1;
    let left = 0, right = matrix[0].length - 1;

    while (top <= bottom && left <= right) {
        // Traverse Right
        for (let i = left; i <= right; i++) res.push(matrix[top][i]);
        top++;

        // Traverse Down
        for (let i = top; i <= bottom; i++) res.push(matrix[i][right]);
        right--;

        // Traverse Left
        if (top <= bottom) {
            for (let i = right; i >= left; i--) res.push(matrix[bottom][i]);
            bottom--;
        }

        // Traverse Up
        if (left <= right) {
            for (let i = bottom; i >= top; i--) res.push(matrix[i][left]);
            left++;
        }
    }
    return res;
}
