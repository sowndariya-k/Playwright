"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const inputs = fs_1.default.readFileSync(0, 'utf8')
    .trim()
    .split(/\r?\n/);
let index = 0;
// 1. Sum of Odd and Even Numbers
let n = Number(inputs[index++]);
let oddSum = 0;
let evenSum = 0;
for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
        evenSum += i;
    }
    else {
        oddSum += i;
    }
}
console.log(oddSum, evenSum);
console.log("-----------");
// 2. Reverse Five Digit Number
let num = inputs[index++];
if (num.length !== 5) {
    console.log("Not a valid number");
}
else {
    let reversed = num.split('').reverse().join('');
    console.log(reversed);
}
console.log("-----------");
// 3. Prime Number Check
let primeNum = Number(inputs[index++]);
let isPrime = true;
if (primeNum <= 1) {
    isPrime = false;
}
else {
    for (let i = 2; i <= Math.sqrt(primeNum); i++) {
        if (primeNum % i === 0) {
            isPrime = false;
            break;
        }
    }
}
console.log(isPrime ? "Yes" : "No");
console.log("-----------");
// 4. Prime Numbers Between 1 and N
let limit = Number(inputs[index++]);
for (let i = 2; i <= limit; i++) {
    let prime = true;
    for (let j = 2; j <= Math.sqrt(i); j++) {
        if (i % j === 0) {
            prime = false;
            break;
        }
    }
    if (prime) {
        process.stdout.write(i + " ");
    }
}
console.log();
console.log("-----------");
// 5. Sum of Even and Odd Digits
let digitNum = inputs[index++];
let evenDigitSum = 0;
let oddDigitSum = 0;
for (let digit of digitNum) {
    let numDigit = Number(digit);
    if (numDigit % 2 === 0) {
        evenDigitSum += numDigit;
    }
    else {
        oddDigitSum += numDigit;
    }
}
console.log(evenDigitSum, oddDigitSum);
