/**
 * 59. 螺旋矩阵 II
 * @see https://leetcode.cn/problems/spiral-matrix-ii/description/
 * @description
 * 给你一个正整数 n ，生成一个包含 1 到 n2 所有元素，且元素按顺时针顺序螺旋排列的 n x n 正方形矩阵 matrix 。
 */

/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    // 和螺旋矩阵 I 类似，只不过是填充矩阵
    // 创建一个 n * n 的矩阵
    const matrix = new Array(n).fill(0).map(() => new Array(n).fill(0))

    // 定义四个方向
    let top = 0
    let bottom = n - 1
    let left = 0
    let right = n - 1

    // 要填入的数字，从 1 开始
    let num = 1

    while (top <= bottom && left <= right) {
        // 从左到右
        for (let i = left; i <= right; i++) {
            matrix[top][i] = num++
        }
        top++

        // 从上到下
        for (let i = top; i <= bottom; i++) {
            matrix[i][right] = num++
        }
        right--

        // 从右到左
        if (top <= bottom) {
            for (let i = right; i >= left; i--) {
                matrix[bottom][i] = num++;
            }
            bottom--;
        }

        // 从下到上
        if (left <= right) {
            for (let i = bottom; i >= top; i--) {
                matrix[i][left] = num++;
            }
            left++;
        }
    }

    return matrix
};

/**
 * @desc 测试用例
 * 示例 1：
 * 输入：n = 3
 * 输出：[[1,2,3],[8,9,4],[7,6,5]]
 * 示例 2：
 * 输入：n = 1
 * 输出：[[1]]
 * 
 * 提示：
 * 1 <= n <= 20
 */
console.log(generateMatrix(3).toString()); 