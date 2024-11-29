/**
 * 54. 螺旋矩阵
 * @see https://leetcode.cn/problems/spiral-matrix/description/
 * @description
 * 给你一个 m 行 n 列的矩阵 matrix ，请按照 顺时针螺旋顺序 ，返回矩阵中的所有元素。
 */

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    if (matrix.length === 0) return []

    const result = []
    // 定义四个方向
    let top = 0
    let bottom = matrix.length - 1
    let left = 0
    let right = matrix[0].length - 1

    while (top <= bottom && left <= right) {

        // 从左到右
        for (let i = left; i <= right; ++i) {
            result.push(matrix[top][i])
        }
        top++

        // 从上到下
        for (let i = top; i <= bottom; ++i) {
            result.push(matrix[i][right])
        }
        right--

        // 从右到左
        if (top <= bottom) {
            for (let i = right; i >= left; --i) {
                result.push(matrix[bottom][i])
            }
            bottom--
        }

        // 从下到上
        if (left <= right) {
            for (let i = bottom; i >= top; --i) {
                result.push(matrix[i][left])
            }
            left++
        }
    }

    return result
};

/**
 * @desc 测试用例
 * 示例 1：
 * 输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
 * 输出：[1,2,3,6,9,8,7,4,5]
 * 
 * 示例 2：
 * 输入：matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
 * 输出：[1,2,3,4,8,12,11,10,9,5,6,7]
 * 
 * 提示：
 * m == matrix.length
 * n == matrix[i].length
 * 1 <= m, n <= 10
 * -100 <= matrix[i][j] <= 100
 */
console.log(spiralOrder([[1,2,3,4],[5,6,7,8],[9,10,11,12]])); 