/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
     if(!root) return '';
    
    const queue = new Array();
    
    let out = `${root.val}`;
    
    queue.unshift(root);
    
    while(queue.length) {
        const curr = queue.pop();
        
        if(curr.left) {
            out = `${out},${curr.left.val}`;
            queue.unshift(curr.left);
        } else out = `${out},null`;
        
        if(curr.right) {
            out = `${out},${curr.right.val}`;
            queue.unshift(curr.right);
        } else out = `${out},null`;
    }
    return out;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    if(!data || data === '') return null;
    
    const   queue = new Array(),
            dataArr = data.split(',').map(r => r === 'null' ? null : parseInt(r)),
            root = new TreeNode(dataArr[0]),
            idx = {i: 0}
          
    queue.unshift(root);
    
    while(queue.length) {
        const parent = queue.pop();
        
        appendChild(dataArr, idx, parent, true, queue);
        appendChild(dataArr, idx, parent, false, queue);
    }
    
    return root;

};

var appendChild = (dataArr, idx, parent, left, queue) => {
    idx.i += 1;
    if(idx.i < dataArr.length) {
        const candidate = dataArr[idx.i];
        if(candidate !== null) {
            const cand = new TreeNode(candidate);
            if(left) parent.left = cand;
            else parent.right = cand;
            queue.unshift(cand);
        }
    }    
} 

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
