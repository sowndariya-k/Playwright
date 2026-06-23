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
// 1. First N Natural Numbers
let n = Number(inputs[index++]);
for (let i = 1; i <= n; i++) {
    process.stdout.write(i + " ");
}
console.log();
console.log("-----------");
// 2. Power m raised to n
let m = Number(inputs[index++]);
let power = Number(inputs[index++]);
console.log(m ** power);
console.log("-----------");
// 3. Multiplication Table
let tableNum = Number(inputs[index++]);
for (let i = 1; i <= 10; i++) {
    process.stdout.write((tableNum * i) + " ");
}
console.log();
console.log("-----------");
// 4. Reverse Numbers and Sum
let reverseNum = Number(inputs[index++]);
let sum = 0;
for (let i = reverseNum; i >= 1; i--) {
    process.stdout.write(i + " ");
    sum += i;
}
console.log(", " + sum);
console.log("-----------");
// 5. Room Jump
let room = Number(inputs[index++]);
while (room <= 100) {
    process.stdout.write(room + " ");
    room += 10;
}
console.log();
