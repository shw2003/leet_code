class FenwickTree {
  constructor(size) {
    this.tree = Array(size + 1).fill(0);
  }

  update(index, value) {
    index += 1; // 1-based index
    while (index < this.tree.length) {
      this.tree[index] += value;
      index += index & -index;
    }
  }

  query(index) {
    index += 1;
    let sum = 0;
    while (index > 0) {
      sum += this.tree[index];
      index -= index & -index;
    }
    return sum;
  }
}

var goodTriplets = function(nums1, nums2) {
  const n = nums1.length;

  // Map each element in nums2 to its index
  const pos = new Array(n);
  for (let i = 0; i < n; i++) {
    pos[nums2[i]] = i;
  }

  // Convert nums1 to position array in nums2
  const indexArray = nums1.map(x => pos[x]);

  const leftTree = new FenwickTree(n);
  const left = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    left[i] = leftTree.query(indexArray[i] - 1); // Count of smaller elements before i
    leftTree.update(indexArray[i], 1);
  }

  const rightTree = new FenwickTree(n);
  const right = new Array(n).fill(0);
  for (let i = n - 1; i >= 0; i--) {
    right[i] = rightTree.query(n - 1) - rightTree.query(indexArray[i]); // Count of greater elements after i
    rightTree.update(indexArray[i], 1);
  }

  let total = 0;
  for (let i = 0; i < n; i++) {
    total += left[i] * right[i];
  }

  return total;
};
