/**
 * 414. 第三大的数
 * @see https://leetcode.cn/problems/third-maximum-number/
 * @description
 * 给你一个非空数组，返回此数组中 第三大的数 。如果不存在，则返回数组中最大的数。
 * 
 * 进阶：你能设计一个时间复杂度 O(n) 的解决方案吗？
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    nums.sort((a, b) => a - b)

    nums = [...new Set(nums)]

    return nums[nums.length - 3] ?? nums[nums.length - 1]
};

// 进阶解法
var thirdMax = function(nums) {
    // 初始化三个最大值，初始值为负无穷
    let max1 = max2 = max3 = -Infinity

    for (const num of nums) {
        // 这里去重复
        if (num === max1 || num === max2 || num === max3) continue
        // 如果当前值比 max1 还大，依次移动 max1, max2, max3
        if (num > max1) {
            [max1, max2, max3] = [num, max1, max2]
        }
        // 如果当前值比 max2 大，依次移动 max2, max3
        else if (num > max2) {
            [max2, max3] = [num, max2]
        }
        // 如果当前值比 max3 大，移动 max3
        else if (num > max3) {
            max3 = num
        }
    }

    // 如果 max3 的数依旧是负无穷，说明不存在第三大的数
    // 这时返回最大值 max1
    return max3 === -Infinity ? max1 : max3
}

/**
 * @desc 测试用例
 * 示例 1：
 * 输入：[3, 2, 1]
 * 输出：1
 * 解释：第三大的数是 1 。
 * 
 * 示例 2：
 * 输入：[1, 2]
 * 输出：2
 * 解释：第三大的数不存在, 所以返回最大的数 2 。
 * 
 * 示例 3：
 * 输入：[2, 2, 3, 1]
 * 输出：1
 * 解释：注意，要求返回第三大的数，是指在所有不同数字中排第三大的数。
 * 此例中存在两个值为 2 的数，它们都排第二。在所有不同数字中排第三大的数为 1 。
 * 
 * 提示：
 * 1 <= nums.length <= 104
 * -231 <= nums[i] <= 231 - 1
 */
console.log(thirdMax([3,3,4,3,4,3,0,3,3])); 