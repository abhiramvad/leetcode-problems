// Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of the line i is at (i, ai) and (i, 0). Find two lines, which, together with the x-axis forms a container, such that the container contains the most water.

// Notice that you may not slant the container.

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    
    let horizontal_length = height.length
    let area = min(height[0], height[horizontal_length-1])*(horizontal_length-1)
    let i=0;j=horizontal_length-1
    while(i<=j){
       if(min(height[i],height[j])==height[i]){
           i = height.findIndex(val=>val>height[i])
           if(i==-1){
               break;
           }
       } else if(min(height[i],height[j])==height[j]){
           let temp_arr = height.slice().reverse()
            j = horizontal_length - 1 - temp_arr.findIndex(val=>val>height[j])
       }
        let temp = min(height[i],height[j])*(j-i)
        if(temp>area){
            area = temp
        }
    }
    return area;
};

function min(val1,val2){
   return val1>val2?val2:val1
}
