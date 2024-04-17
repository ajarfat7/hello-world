function factorial(n: number): number {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

const num: number = 5;
const result: number = factorial(num);
console.log(`The factorial of ${num} is ${result}`);