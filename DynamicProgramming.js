// FIBONACCI PROBLEM
const fib = (num) => {
    if (num <= 2) return 1;
    return fib(num - 1) + fib(num - 2);
}

// FIBONACCI USING DYNAMIC PROGRAMMING
const fibonacci = (n, memo = []) => {
    // if (memo[n] !== undefined) return memo[n];
    // console.log(memo);
    if (n <= 2) return 1;
    let res = fib(n - 1, memo) + fib(n - 2, memo);
    memo[n] = res;
    console.log(memo);
    return res;
}

// FIBONACCI USING TABULATED VERSION
const iterFib = (n) => {
    if (n <= 2) return 1;
    let fibNums = [0, 1, 1];
    for (let i = 3; i <= n; i++) {
        fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
    }
    return fibNums[n];
};