// FIBONACCI PROBLEM
// const fib = (num) => {
//     if (num <= 2) return 1;
//     return fib(num - 1) + fib(num - 2);
// }

// // FIBONACCI USING DYNAMIC PROGRAMMING
// const fibonacci = (n, memo = []) => {
//     // if (memo[n] !== undefined) return memo[n];
//     // console.log(memo);
//     if (n <= 2) return 1;
//     let res = fib(n - 1, memo) + fib(n - 2, memo);
//     memo[n] = res;
//     console.log(memo);
//     return res;
// }

// // FIBONACCI USING TABULATED VERSION
// const iterFib = (n) => {
//     if (n <= 2) return 1;
//     let fibNums = [0, 1, 1];
//     for (let i = 3; i <= n; i++) {
//         fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
//     }
//     return fibNums[n];
// };

const applySpec = (obj) => (val1, val2) => {
    let newObj = {};
    for (key in obj) {
        if (typeof(obj[key]) === 'function') {
            newObj[key] = obj[key](val1, val2);
            // console.log(newObj);
        } else if (typeof(obj[key] === 'object')) {
            let keyString = `${key}`;
            const func = applySpec(obj[key]);
            let secObj = func(val1, val2);
            newObj[keyString] = secObj;
            // console.log(newObj, secObj);
        }
    }
    return newObj;
}

const spec = applySpec({
    sum: (a, b) => a + b,
    nestedMul: {
        mul: (a, b) => a * b
    },
    doubleNested: {
        power: {
            pw: (a, b) => Math.pow(a, b)
        }
    }
})

// console.log(spec(2, 4));