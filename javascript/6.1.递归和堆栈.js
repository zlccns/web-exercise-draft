/**
 * 6.1 递归和堆栈
 * @see https://zh.javascript.info/recursion
 * @des 课后题
 */


// 递归
function sumTo(n) {
  return (n === 1) ? n : n + sumTo(n - 1);
}
// 循环
function sumTo(n) {
    let sum = 0;
    for (let i = n; i > 0; --i) {
        sum += i;
    }
    return sum;
}
// 等差列数
function sumTo(n) {
    return n * (n + 1) / 2
}

// console.log(sumTo(100));

// 递归计算阶乘
function factorial(n) {
    return (n <= 1) ? 1 : n * factorial(n - 1)
}

// console.log(factorial(3))

// 递归计算斐波那契数
function fib(n) {
    return (n <= 1) ? n : fib(n - 1) + fib(n - 2) 
}

// 循环计算斐波那契数
function fib(n) {
    let [a, b] = [1, 1]
    for (let i = 3; i <= n; ++i) {
        let c = a + b;
        [a, b] = [b, c]
    }
    return b
}

// console.log(fib(4))

// 循环实现单链表
function printList(list) {
    let tmp = list
    while (tmp) {
        console.log('value', tmp.value)
        tmp = tmp.next
    }
}

// 递归实现单链表
function printList(list) {
    console.log('value', list.value)
    if (list.next) printList(list.next)
}

// printList({
//     value: 1,
//     next: {
//       value: 2,
//       next: {
//         value: 3,
//         next: {
//           value: 4,
//           next: null
//         }
//       }
//     }
//   })

