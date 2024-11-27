/**
 * 598. 区间加法 II
 * @see https://leetcode.cn/problems/range-addition-ii/description/
 * @description
 * 给你一个 m x n 的矩阵 M 和一个操作数组 op 。矩阵初始化时所有的单元格都为 0 。
 * ops[i] = [ai, bi] 意味着当所有的 0 <= x < ai 和 0 <= y < bi 时， M[x][y] 应该加 1。
 * 在 执行完所有操作后 ，计算并返回 矩阵中最大整数的个数 。
 * 
 */

/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
var maxCount = function(m, n, ops) {
    // 由于是区间加法，所以只需要找到ops中所有ai和bi的最小值即可
    // 不需要实际操作矩阵

    // 如果没有操作，返回整个矩阵的大小
    if (ops.length === 0) return m * n;

    // 找到所有操作中最小的行和列
    let minRow = m, minCol = n;

    for (const [ai, bi] of ops) {
        minRow = Math.min(minRow, ai);
        minCol = Math.min(minCol, bi);
    }

    // 返回结果
    return minRow * minCol;
};

/**
 * @desc 测试用例
 * 示例 1：
 * 输入: m = 3, n = 3，ops = [[2,2],[3,3]]
 * 输出: 4
 * 解释: M 中最大的整数是 2, 而且 M 中有4个值为2的元素。因此返回 4。
 * 
 * 示例 2:
 * 输入: m = 3, n = 3, ops = [[2,2],[3,3],[3,3],[3,3],[2,2],[3,3],[3,3],[3,3],[2,2],[3,3],[3,3],[3,3]]
 * 输出: 4
 * 
 * 示例 3:
 * 输入: m = 3, n = 3, ops = []
 * 输出: 9
 
 * 提示:
 * 1 <= m, n <= 4 * 104
 * 0 <= ops.length <= 104
 * ops[i].length == 2
 * 1 <= ai <= m
 * 1 <= bi <= n
 */
console.log(maxCount(3, 3, [])); 