/**
 * 566. 重塑矩阵
 * @see https://leetcode.cn/problems/reshape-the-matrix/description/
 * @description
 * 在 MATLAB 中，有一个非常有用的函数 reshape ，它可以将一个 m x n 矩阵重塑为另一个大小不同（r x c）的新矩阵，但保留其原始数据。
 * 给你一个由二维数组 mat 表示的 m x n 矩阵，以及两个正整数 r 和 c ，分别表示想要的重构的矩阵的行数和列数。
 * 重构后的矩阵需要将原始矩阵的所有元素以相同的 行遍历顺序 填充。
 * 如果具有给定参数的 reshape 操作是可行且合理的，则输出新的重塑矩阵；否则，输出原始矩阵。
 */

/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(mat, r, c) {
    // 其实只是行列下标的转换
    // 可以考虑直接利用 js 的特性完成

    const m = mat.length
    const n = mat[0].length

    // 判断数据是否合法
    if (m * n !== r * c) {
        return mat
    }

    // 创建新的矩阵
    const result = new Array(r).fill(0).map(() => new Array(c).fill(0))

    // 遍历原始矩阵，将元素填充到新的矩阵中
    for (let i = 0; i < m * n; i++) {

        const oldRow = Math.floor(i / n)
        const oldCol = i % n

        const newRow = Math.floor(i / c)
        const newCol = i % c

        result[newRow][newCol] = mat[oldRow][oldCol]
    }

    return result
};

/**
 * @desc 测试用例
 * 示例 1：
 * 输入：mat = [[1,2],[3,4]], r = 1, c = 4
 * 输出：[[1,2,3,4]]
 * 示例 2：
 * 输入：mat = [[1,2],[3,4]], r = 2, c = 4
 * 输出：[[1,2],[3,4]]
 * 
 * 提示：
 * m == mat.length
 * n == mat[i].length
 * 1 <= m, n <= 100
 * -1000 <= mat[i][j] <= 1000
 * 1 <= r, c <= 300
 */
console.log(matrixReshape([[1,2],[3,4]], 1, 4)); 