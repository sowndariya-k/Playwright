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
// 1. Square or Not
let length = Number(inputs[index++]);
let width = Number(inputs[index++]);
if (length === width) {
    console.log("Square");
}
else {
    console.log("Not a Square");
}
console.log("-----------");
// 2. Even or Odd
let num1 = Number(inputs[index++]);
if (num1 % 2 === 0) {
    console.log("Even");
}
else {
    console.log("Odd");
}
console.log("-----------");
// 3. Positive, Negative or Zero
let num2 = Number(inputs[index++]);
if (num2 > 0) {
    console.log("Positive");
}
else if (num2 === 0) {
    console.log("Zero");
}
else {
    console.log("Negative");
}
console.log("-----------");
// 4. Kindergarten Eligibility
let age = Number(inputs[index++]);
if (age >= 4) {
    console.log("Eligible");
}
else {
    console.log("Not Eligible");
}
console.log("-----------");
// 5. Mobile Budget Check
let amount = Number(inputs[index++]);
if (amount <= 15000) {
    console.log("Mobile chosen is within the budget");
}
else {
    console.log("Mobile chosen is beyond the budget");
}
