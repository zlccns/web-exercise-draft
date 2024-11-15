/**
 * 189. 旋转数组
 * @see https://leetcode.cn/problems/rotate-array/description/
 * @description
 * 给定一个整数数组 nums，将数组中的元素向右轮转 k 个位置，其中 k 是非负数。
 * 
 * 进阶：
 * 尽可能想出更多的解决方案，至少有 三种 不同的方法可以解决这个问题。
 * 你可以使用空间复杂度为 O(1) 的 原地 算法解决这个问题吗？
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// 方法一：原数组改动（性能有问题）
var rotate = function(nums, k) {
    while (k > 0) {
        let lastNums = nums.pop()
        nums.unshift(lastNums)
        k--;
    }
    return nums;
};

// 方法二：数组翻转
const reverse = (nums, start, end) => {
    while (start < end) {
        [nums[start], nums[end]] = [nums[end], nums[start]]
        start += 1;
        end -= 1;
    }
}
var rotate = function(nums, k) {
    const n = nums.length
    k = k % n

    if (k === 0) return nums

    reverse(nums, 0, n - 1)
    reverse(nums, 0, k - 1)
    reverse(nums, k, n - 1)

    return nums
};

// 方法三：临时分裂数组
var rotate = function(nums, k) {
    k = k % nums.length
    if (k === 0) return
    nums.unshift(...nums.splice(-k, k))
    return nums
};

/**
 * @desc 测试用例
 * 
 * 示例 1:
 * 输入: nums = [1,2,3,4,5,6,7], k = 3
 * 输出: [5,6,7,1,2,3,4]
 * 解释:
 * 向右轮转 1 步: [7,1,2,3,4,5,6]
 * 向右轮转 2 步: [6,7,1,2,3,4,5]
 * 向右轮转 3 步: [5,6,7,1,2,3,4]
 * 
 * 示例 2:
 * 输入：nums = [-1,-100,3,99], k = 2
 * 输出：[3,99,-1,-100]
 * 解释: 
 * 向右轮转 1 步: [99,-1,-100,3]
 * 向右轮转 2 步: [3,99,-1,-100]
 * 
 * 
 * 提示：
 * 1 <= nums.length <= 105
 * -231 <= nums[i] <= 231 - 1
 * 0 <= k <= 105
 */
console.log(rotate([1,2,3,4,5,6,7], 3)); 