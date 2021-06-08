// There are 8 prison cells in a row and each cell is either occupied or vacant.

// Each day, whether the cell is occupied or vacant changes according to the following rules:

// If a cell has two adjacent neighbors that are both occupied or both vacant, then the cell becomes occupied.
// Otherwise, it becomes vacant.
// Note that because the prison is a row, the first and the last cells in the row can't have two adjacent neighbors.

// You are given an integer array cells where cells[i] == 1 if the ith cell is occupied and cells[i] == 0 if the ith cell is vacant, and you are given an integer n.

// Return the state of the prison after n days (i.e., n such changes described above).

// Input: cells = [0,1,0,1,1,0,0,1], n = 7
// Output: [0,0,1,1,0,0,0,0]
// Explanation: The following table summarizes the state of the prison on each day:
// Day 0: [0, 1, 0, 1, 1, 0, 0, 1]
// Day 1: [0, 1, 1, 0, 0, 0, 0, 0]
// Day 2: [0, 0, 0, 0, 1, 1, 1, 0]
// Day 3: [0, 1, 1, 0, 0, 1, 0, 0]
// Day 4: [0, 0, 0, 0, 0, 1, 0, 0]
// Day 5: [0, 1, 1, 1, 0, 1, 0, 0]
// Day 6: [0, 0, 1, 0, 1, 1, 0, 0]
// Day 7: [0, 0, 1, 1, 0, 0, 0, 0]

/**
IMPORTANT: REMEMBER TO CHECK CYCLE FOR SUCH TIME BASED QUESTIONS.
**/


/**
 * @param {number[]} cells
 * @param {number} n
 * @return {number[]}
 */
var prisonAfterNDays = function(cells, n) {
    let temp = [...cells]
    temp[0] = 0
    temp[temp.length-1] = 0
    n = n%14==0?14:n%14
    for(let i=0;i<n;i++){
        for (let j=1;j<cells.length-1;j++){
            if(cells[j-1]!=cells[j+1]){
                temp[j] = 0
            } else{
                temp[j] = 1
            }
        }
    cells = [...temp]
    }
    return temp
};
