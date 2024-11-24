/**
 * 118. 杨辉三角
 * @see https://leetcode.cn/problems/pascals-triangle/description/
 * @description
 * 给定一个非负整数 numRows，生成「杨辉三角」的前 numRows 行。
 * 在「杨辉三角」中，每个数是它左上方和右上方的数的和。
 */

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    const result = [[1]]

    for (let i = 1; i < numRows; ++i) {
        const prevRow = result[i - 1]
        // 每一行的第一个数都是 1
        const currentRow = [1]

        for (let j = 1; j < i; ++j) {
            // 每一行的中间数是上一行相邻两个数的和
            currentRow.push(prevRow[j - 1] + prevRow[j])
        }

        // 每一行的最后一个数也只会是 1
        currentRow.push(1)
        // 拼接一波
        result.push(currentRow)
    }

    return result
};

/**
 * @desc 测试用例
 * 示例 1:
 * 输入: numRows = 5
 * 输出: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
 * 
 * 示例 2:
 * 输入: numRows = 1
 * 输出: [[1]]
 * 
 * 提示:
 * 1 <= numRows <= 30
 */
console.log(generate(5)); 