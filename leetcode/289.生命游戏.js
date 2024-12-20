/**
 * 289. 生命游戏
 * @see https://leetcode.cn/problems/game-of-life/description/
 * @description
 * 根据 百度百科 ， 生命游戏 ，简称为 生命 ，是英国数学家约翰·何顿·康威在 1970 年发明的细胞自动机。

 * 给定一个包含 m × n 个格子的面板，每一个格子都可以看成是一个细胞。每个细胞都具有一个初始状态： 
 * 1 即为 活细胞 （live），或 0 即为 死细胞 （dead）。每个细胞与其八个相邻位置（水平，垂直，对角线）的细胞都遵循以下四条生存定律：
 * 2. 如果活细胞周围八个位置的活细胞数少于两个，则该位置活细胞死亡；
 * 3. 如果活细胞周围八个位置有两个或三个活细胞，则该位置活细胞仍然存活；
 * 4. 如果活细胞周围八个位置有超过三个活细胞，则该位置活细胞死亡；
 * 5. 如果死细胞周围正好有三个活细胞，则该位置死细胞复活；
 * 
 * 下一个状态是通过将上述规则同时应用于当前状态下的每个细胞所形成的，其中细胞的出生和死亡是同时发生的。
 * 给你 m x n 网格面板 board 的当前状态，返回下一个状态。
 * 给定当前 board 的状态，更新 board 到下一个状态。
 * 注意 你不需要返回任何东西。
 * 
 * 进阶：
 * 你可以使用原地算法解决本题吗？请注意，面板上所有格子需要同时被更新：你不能先更新某些格子，然后使用它们的更新后的值再更新其他格子。
 * 本题中，我们使用二维数组来表示面板。原则上，面板是无限的，但当活细胞侵占了面板边界时会造成问题。你将如何解决这些问题？
 */

/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
    const m = board.length
    const n = board[0].length

    // 遍历每个细胞
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            // 统计周围活细胞数量
            let lives = 0;
            
            // 检查周围8个位置
            for (let x = Math.max(0, i-1); x <= Math.min(m-1, i+1); x++) {
                for (let y = Math.max(0, j-1); y <= Math.min(n-1, j+1); y++) {
                    if (x === i && y === j) continue;
                    // 1和2都是活细胞
                    if (board[x][y] === 1 || board[x][y] === 2) {
                        lives++;
                    }
                }
            }
            
            // 根据规则更新状态
            if (board[i][j] === 1) {
                if (lives < 2 || lives > 3) {
                    board[i][j] = 2; // 活->死
                }
            } else if (lives === 3) {
                board[i][j] = 3; // 死->活
            }
        }
    }
    
    // 最后更新状态
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            board[i][j] = board[i][j] % 2; // 2->0, 3->1
        }
    }
};

/**
 * @desc 测试用例
 * 示例 1：
 * 输入：board = [[0,1,0],[0,0,1],[1,1,1],[0,0,0]]
 * 输出：[[0,0,0],[1,0,1],[0,1,1],[0,1,0]]
 * 
 * 示例 2：
 * 输入：board = [[1,1],[1,0]]
 * 输出：[[1,1],[1,1]]
 * 
 * 示例 3：
 * 输入：board = [[1,1],[1,0]]
 * 输出：[[1,1],[1,1]]
 * 
 * 提示：
 * m == board.length
 * n == board[i].length
 * 1 <= m, n <= 25
 * board[i][j] 为 0 或 1
 */
console.log(gameOfLife([[0,1,0],[0,0,1],[1,1,1],[0,0,0]])); 