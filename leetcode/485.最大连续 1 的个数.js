/**
 * 485. 最大连续 1 的个数
 * @see https://leetcode.cn/problems/max-consecutive-ones/description/
 * @description
 * 给定一个二进制数组 nums ， 计算其中最大连续 1 的个数。
 * 
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findMaxConsecutiveOnes = function(nums) {
    let current = 0
    let max = 0

    for (const num of nums) {
        if (num === 1) {
            ++current
            max = Math.max(max, current)
        } else {
            current = 0
        }
    }

    return max
};

/**
 * @desc 测试用例
 * 示例 1：
 * 输入：nums = [1,1,0,1,1,1]
 *  输出：3
 * 解释：开头的两位和最后的三位都是连续 1 ，所以最大连续 1 的个数是 3.
 * 
 * 示例 2:
 * 输入：nums = [1,0,1,1,0,1]
 * 输出：2

* 提示：
 * 1 <= nums.length <= 105
 * nums[i] 不是 0 就是 1.
 */
console.log(findMaxConsecutiveOnes([1,0,1,1,0,1])); 