/**
 * 41. 缺失的第一个正数
 * @see https://leetcode.cn/problems/first-missing-positive/description/
 * @description
 * 给你一个未排序的整数数组 nums ，请你找出其中没有出现的最小的正整数。
 * 请你实现时间复杂度为 O(n) 并且只使用常数级别额外空间的解决方案。
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var firstMissingPositive = function(nums) {
    const n = nums.length

    for (let i = 0; i < n; ++i) {
        if (nums[i] <= 0) {
            nums[i] = n + 1
        }
    }

    for (let i = 0; i < n; ++i) {
        const index = Math.abs(nums[i]) - 1
        if (nums[index] > 0) {
            nums[index] = -Math.abs(nums[index])
        }
    }

    for (let i = 0; i < n; ++i) {
        if (nums[i] > 0) {
            return i + 1
        }
    }

    return n + 1
};

// 解法 2
var firstMissingPositive = function(nums) {
    const compliance = new Set()

    // 把所有正整数添加到集合中，因为非正整数不可能是答案
    for (const num of nums) {
        if (num > 0) {
            compliance.add(num)
        }
    }

    let i = 1
    // 从 1 开始检查，直到找到第一个不在集合中的正整数
    while (compliance.has(i)) {
        i++
    }

    return i
}

/**
 * @desc 测试用例
 * 示例 1：
 * 输入：nums = [1,2,0]
 * 输出：3
 * 解释：范围 [1,2] 中的数字都在数组中。
 * 
 * 示例 2：
 * 输入：nums = [3,4,-1,1]
 * 输出：2
 * 解释：1 在数组中，但 2 没有。
 * 
 * 示例 3：
 * 输入：nums = [7,8,9,11,12]
 * 输出：1
 * 解释：最小的正数 1 没有出现。
 * 
 * 提示：
 * 1 <= nums.length <= 105
 * -231 <= nums[i] <= 231 - 1
 */
console.log(firstMissingPositive([3,4,-1,1])); 