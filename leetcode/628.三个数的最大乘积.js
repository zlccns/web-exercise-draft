/**
 * 628. 三个数的最大乘积
 * @see https://leetcode.cn/problems/maximum-product-of-three-numbers/description/
 * @description
 * 给你一个整型数组 nums ，在数组中找出由三个数组成的最大乘积，并输出这个乘积。
 * 
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
    // 记录最大的三个数
    let max1 = max2 = max3 = -Infinity
    // 记录最小的两个数
    let min1 = min2 = Infinity

    for (const num of nums) {
        // 更新最大的三个数
        if (num > max1) {
            [max1, max2, max3] = [num, max1, max2]
        } else if (num > max2) {
            [max2, max3] = [num, max2]
        } else if (num > max3) {
            max3 = num
        }

        // 更新最小的两个数
        if (num < min1) {
            [min1, min2] = [num, min1]
        } else if (num < min2) {
            min2 = num
        }
    }

    // 返回最大乘积
    // 最大乘积可能是三个最大数的乘积，也可能是两个最小数和一个最大数的乘积
    // 因为存在负数，所以需要考虑最小数的情况
    // 而最小数的情况是两个负数相乘，可能成为最大数
    return Math.max(max1 * max2 * max3, min1 * min2 * max1)
};

/**
 * @desc 测试用例
 * 示例 1：
 * 输入：nums = [1,2,3]
 * 输出：6
 * 
 * 示例 2： 
 * 输入：nums = [1,2,3,4]
 * 输出：24
 * 
 * 示例 3：
 * 输入：nums = [-1,-2,-3]
 * 输出：-6
 * 
 * 提示：
 * 3 <= nums.length <= 104
 * -1000 <= nums[i] <= 1000
 */
console.log(maximumProduct([1000,1000,1000])); 