/**
 * 697. 数组的度
 * @see https://leetcode.cn/problems/degree-of-an-array/description/
 * @description
 * 给定一个非空且只包含非负数的整数数组 nums，数组的 度 的定义是指数组里任一元素出现频数的最大值。
 * 你的任务是在 nums 中找到与 nums 拥有相同大小的度的最短连续子数组，返回其长度。
 * 
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findShortestSubArray = function(nums) {
    const count = new Map(); // 记录每个元素出现的次数
    const first = new Map(); // 记录每个元素第一次出现的位置
    const last = new Map() ; // 记录每个元素最后一次出现的位置

    // 首先，记录每个元素出现的次数和位置
    for (let i = 0; i < nums.length; ++i) {
        const num = nums[i];
        // 更新计数
        count.set(num, (count.get(num) || 0) + 1);
        // 更新第一次出现的位置
        if (!first.has(num)) {
            first.set(num, i);
        }
        // 更新最后一次出现的位置
        last.set(num, i);
    }

    // 然后，找到数据的度（即最大出现次数）
    const degree = Math.max(...count.values());

    // 最后，找到并返回最短的子数组长度
    let minLength = nums.length;
    for (const [num, freq] of count.entries()) {
        if (freq === degree) {
            minLength = Math.min(minLength, last.get(num) - first.get(num) + 1);
        }
    }
    return minLength;
};

/**
 * @desc 测试用例
 * 示例 1：
 * 输入：nums = [1,2,2,3,1]
 * 输出：2
 * 解释：
 * 输入数组的度是 2 ，因为元素 1 和 2 的出现频数最大，均为 2 。
 * 连续子数组里面拥有相同度的有如下所示：
 * [1, 2, 2, 3, 1], [1, 2, 2, 3], [2, 2, 3, 1], [1, 2, 2], [2, 2, 3], [2, 2]
 * 最短连续子数组 [2, 2] 的长度为 2 ，所以返回 2 。
 * 
 * 示例 2：
 * 输入：nums = [1,2,2,3,1,4,2]
 * 输出：6
 * 解释：
 * 数组的度是 3 ，因为元素 2 重复出现 3 次。
 * 所以 [2,2,3,1,4,2] 是最短子数组，因此返回 6 。
 */
console.log(findShortestSubArray(1,2,2,3,1)); 