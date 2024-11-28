/**
 * 419. 棋盘上的战舰
 * @see https://leetcode.cn/problems/battleships-in-a-board/
 * @description
 * 给你一个大小为 m x n 的矩阵 board 表示棋盘，其中，每个单元格可以是一艘战舰 'X' 或者是一个空位 '.'
 * 返回在棋盘 board 上放置的 舰队 的数量。
 * 
 * 舰队：只能水平或者垂直放置在 board 上。换句话说，舰队只能按 1 x k（1 行，k 列）或 k x 1（k 行，1 列）的形状放置，
 * 其中 k 可以是任意大小。两个舰队之间至少有一个水平或垂直的空格分隔 （即没有相邻的舰队）。
 * 
 * 找出其中舰队的数量
 * 
 * 进阶：你可以实现一次扫描算法，并只使用 O(1) 额外空间，并且不修改 board 的值来解决这个问题吗？
 */

/**
 * @param {character[][]} board
 * @return {number}
 */
var countBattleships = function(board) {
    // 核心在于如何判断一个舰队 
    // 舰队的判断条件：
    // 1. 舰队由一个或多个战舰(x)组成
    // 2. 战舰的左边和上边不能是战舰,否则认为是同一舰队

    let count = 0;
    const m = board.length;
    const n = board[0].length;

    for (let i = 0; i < m; ++i) {
        for (let j = 0; j < n; ++j) {
            // 如果当前位置是战舰
            if (board[i][j] === 'X') {
                // 检查左边和上边是否有战舰
                // 如果有，说明是同一艘战舰的一部分
                if (i > 0 && board[i - 1][j] === 'X') continue
                if (j > 0 && board[i][j - 1] === 'X') continue
                // 否则，是新的舰队
                count++;
            }
        }
    }

    return count;
};

/**
 * @desc 测试用例
 * 
 * 示例 1：
 * 输入：board = [["X",".",".","X"],[".",".",".","X"],[".",".",".","X"]]
 * 输出：2
 * 
 * 示例 2：
 * 输入：board = [["."]]
 * 输出：0
 * 
 * 提示：
 * m == board.length
 * n == board[i].length
 * 1 <= m, n <= 200
 * board[i][j] 是 '.' 或 'X'
 */
console.log(countBattleships([["X",".",".","X"],[".",".",".","X"],[".",".",".","X"]])); 