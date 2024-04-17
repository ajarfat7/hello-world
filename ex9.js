function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    else {
        return n * factorial(n - 1);
    }
}
var num = 5;
var result = factorial(num);
console.log("The factorial of ".concat(num, " is ").concat(result));
