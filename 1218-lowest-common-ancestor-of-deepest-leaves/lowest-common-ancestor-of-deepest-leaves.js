var lcaDeepestLeaves = function(root) {
    function dfs(node) {
        if (!node) return [0, null]; // Base case
        
        let [leftDepth, leftLCA] = dfs(node.left);
        let [rightDepth, rightLCA] = dfs(node.right);
        
        if (leftDepth > rightDepth) return [leftDepth + 1, leftLCA];
        if (rightDepth > leftDepth) return [rightDepth + 1, rightLCA];
        
        return [leftDepth + 1, node]; // Both sides are equal, current node is LCA
    }
    
    return dfs(root)[1]; // Return the LCA
};
