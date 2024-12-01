/**
 * 498. 对角线遍历
 * @see https://leetcode.cn/problems/diagonal-traverse/description/
 * @description
 * 给你一个大小为 m x n 的矩阵 mat ，请以对角线遍历的顺序，用一个数组返回这个矩阵中的所有元素。
 */

/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function(mat) {
    // 完全不会，先教白卷吧
};

/**
 * @desc 测试用例
 * 示例 1：
 * 输入：mat = [[1,2,3],[4,5,6],[7,8,9]]
 * 输出：[1,2,4,7,5,3,6,8,9]
 * 
 * 示例 2：
 * 输入：mat = [[1,2],[3,4]]
 * 输出：[1,2,3,4]
 * 
 * 提示：
 * m == mat.length
 * n == mat[i].length
 * 1 <= m, n <= 104
 * 1 <= m * n <= 104
 * -105 <= mat[i][j] <= 105
 */
console.log(findDiagonalOrder([[1,2,3],[4,5,6],[7,8,9]])); 