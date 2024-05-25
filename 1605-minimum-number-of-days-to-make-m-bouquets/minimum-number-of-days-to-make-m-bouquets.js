/**
 * @param {number[]} bloomDay
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
var minDays = function(bloomDay, m, k) {
    let val = m*k;
    let n = bloomDay.length;
    if(val> n) return -1;

    let mini = Infinity, maxi = -Infinity;

    for(let i = 0; i<n; i++ ) {
        mini = Math.min(mini, bloomDay[i]);
        maxi = Math.max(maxi, bloomDay[i]);
    }

    let low = mini, high = maxi;

    while(low<= high) {
        let mid = Math.floor((low + high) / 2);
        if(possible(bloomDay, mid, m, k)) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }

    return low;

};


function possible(arr, day, m , k) {
    let n = arr.length;

    let cnt = 0;

    let noOfB = 0;

    for(let i= 0;i< n;i++) {
        if(arr[i] <= day){
            cnt++;
        } else{
        noOfB += Math.floor(cnt/k);
        cnt= 0;
        }
    }

    noOfB += Math.floor(cnt/k);
    return noOfB >= m;
}