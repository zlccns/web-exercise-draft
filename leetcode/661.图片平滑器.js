/**
 * 661. 图片平滑器
 * @see https://leetcode.cn/problems/image-smoother/description/
 * @description
 * 图像平滑器 是大小为 3 x 3 的过滤器，用于对图像的每个单元格平滑处理，平滑处理后单元格的值为该单元格的平均灰度。
 * 每个单元格的  平均灰度 定义为：该单元格自身及其周围的 8 个单元格的平均值，结果需向下取整。（即，需要计算蓝色平滑器中 9 个单元格的平均值）。
 * 如果一个单元格周围存在单元格缺失的情况，则计算平均灰度时不考虑缺失的单元格（即，需要计算红色平滑器中 4 个单元格的平均值）。
 * 给你一个表示图像灰度的 m x n 整数矩阵 img ，返回对图像的每个单元格平滑处理后的图像 。
 * 
 * PS: 题目和测试用例中都存在图例，可以点击链接去 leetcode 参考图例理解
 * 
 */

/**
 * @param {number[][]} img
 * @return {number[][]}
 */
var imageSmoother = function(img) {
    // 我连题目都看不懂
    // 算了，直接看答案吧
    // 就当作自己已经学废了

    const rows = img.length;
    const cols = img[0].length;
    // 创建结果数组
    const result = Array(rows).fill(0).map(() => Array(cols).fill(0));
    
    // 遍历每个格子
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            let sum = 0;    // 周围格子的总和
            let count = 0;  // 有效格子的数量
            
            // 遍历当前格子的周围8个方向和它自己
            for (let x = i - 1; x <= i + 1; x++) {
                for (let y = j - 1; y <= j + 1; y++) {
                    // 检查位置是否有效（是否在图片范围内）
                    if (x >= 0 && x < rows && y >= 0 && y < cols) {
                        sum += img[x][y];
                        count++;
                    }
                }
            }
            
            // 计算平均值并向下取整
            result[i][j] = Math.floor(sum / count);
        }
    }
    

    // 完了，答案也看不懂
    // 毁灭吧，直接背下来
    return result;
};

/**
 * @desc 测试用例
 * 输入:img = [[1,1,1],[1,0,1],[1,1,1]]
 * 输出:[[0, 0, 0],[0, 0, 0], [0, 0, 0]]
 */
console.log(imageSmoother([[1,1,1],[1,0,1],[1,1,1]])); 