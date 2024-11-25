/**
 * 119. 杨辉三角 II
 * @see https://leetcode.cn/problems/pascals-triangle-ii/description/
 * @description
 * 给定一个非负索引 rowIndex，返回「杨辉三角」的第 rowIndex 行。
 * 在「杨辉三角」中，每个数是它左上方和右上方的数的和。
 */

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    const triangle = [[1]]
    for (let i = 1; i <= rowIndex; ++i) {
        const prevRow = triangle[i - 1]
        const currentRow = [1]

        for (let j = 1; j < i; ++j) {
            currentRow.push(prevRow[j - 1] + prevRow[j])
        }

        currentRow.push(1)
        triangle.push(currentRow)
    }

    return triangle[rowIndex]
};

/**
 * @desc 测试用例
 * 示例 1:
 * 输入: rowIndex = 3
 * 输出: [1,3,3,1]
 * 
 * 示例 2:
 * 输入: rowIndex = 0
 * 输出: [1]
 * 
 * 示例 3:
 * 输入: rowIndex = 1
 * 输出: [1,1]
 * 
 * 提示:
 * 0 <= rowIndex <= 33
 */
console.log(getRow(3)); 