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
    // 我好像悟了，蛇皮走位
    // 每条对角线上的数字，它们的横纵坐标只和是相等的

    const m = mat.length;
    const n = mat[0].length;

    const result = [];

    // 遍历每一条对角线
    for (let sum = 0; sum < m + n - 1; sum++) {
        // 存放当前对角线上的数字
        const temp = []
        // 计算这条对角线的起点
        let row = sum < n ? 0 : sum - n + 1;
        let col = sum < n ? sum : n - 1;

        // 遍历这条对角线上的数字
        while (row < m && col >= 0) {
            temp.push(mat[row][col]);
            row++;
            col--;
        }

        // 偶数对角线要倒叙
        if (sum % 2 === 0) {
            result.push(...temp.reverse());
        } else {
            result.push(...temp);
        }
    }

    return result;
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