/**
 * 442. 数组中重复的数据
 * @see https://leetcode.cn/problems/find-all-duplicates-in-an-array/description/
 * @description
 * 给你一个长度为 n 的整数数组 nums ，其中 nums 的所有整数都在范围 [1, n] 内，且每个整数出现 最多两次。
 * 请你找出所有出现 两次 的整数，并以数组形式返回。
 * 你必须设计并实现一个时间复杂度为 O(n) 且仅使用常量额外空间（不包括存储输出所需的空间）的算法解决此问题。
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    const result = []

    for (let i = 0; i < nums.length; ++i) {
        const index = Math.abs(nums[i]) - 1
        if (nums[index] < 0) {
            result.push(Math.abs(nums[i]))
        } else {
            nums[index] = -nums[index]
        }
    }

    return result
};

/**
 * @desc 测试用例
 * 
 * 示例 1：
 * 输入：nums = [4,3,2,7,8,2,3,1]
 * 输出：[2,3]
 * 
 * 示例 2：
 * 输入：nums = [1,1,2]
 * 输出：[1]
 * 
 * 示例 3：
 * 输入：nums = [1]
 * 输出：[]
 * 
 * 提示：
 * n == nums.length
 * 1 <= n <= 105
 * 1 <= nums[i] <= n
 * nums 中的每个元素出现 一次 或 两次
 */
console.log(findDuplicates([4,3,2,7,8,2,3,1])); 