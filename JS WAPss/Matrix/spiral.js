function spiralOrder(matrix) {
    if (matrix.length === 0) return [];

    const result = [];
    let top = 0;
    let bottom = matrix.length - 1;
    console.log("bottom", bottom);
    let left = 0;
    let right = matrix[0].length - 1;
    console.log("right", right);

    while (top <= bottom && left <= right) {
        // Traverse from left to right
        for (let i = left; i <= right; i++) {
            console.log("i in first loop", i);
            result.push(matrix[top][i]);
        }
        top++;

        // Traverse from top to bottom
        for (let i = top; i <= bottom; i++) {
            console.log("i in secnd loop", i);
            result.push(matrix[i][right]);
        }
        right--;

        // Traverse from right to left, if there are remaining rows
        if (top <= bottom) {
            for (let i = right; i >= left; i--) {
                console.log("i in third loop", i);
                result.push(matrix[bottom][i]);
            }
            bottom--;
        }

        // Traverse from bottom to top, if there are remaining columns
        if (left <= right) {
            for (let i = bottom; i >= top; i--) {
                console.log("i in fourth loop", i);
                result.push(matrix[i][left]);
            }
            left++;
        }
    }
    return result;
}

// Test the function with the given matrix
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
// const matrix = [
//     [1, 2, 3, 4],
//     [5, 6, 7, 8],
//     [9, 10, 11, 12],
//     [13, 14, 15, 16]
// ];

console.log(spiralOrder(matrix)); // Output: [1, 2, 3, 6, 9, 8, 7, 4, 5]
