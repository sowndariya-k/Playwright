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
// 1. BMI Calculation
console.log("Enter weight in kilograms:");
let weight = Number(inputs[index++]);
console.log("Enter height in meters:");
let height = Number(inputs[index++]);
let bmi = weight / (height * height);
console.log("BMI:", bmi.toFixed(2));
console.log("-----------");
// 2. Score Message
console.log("Game Score:");
let score = Number(inputs[index++]);
console.log("Your score is " + score + ".");
console.log("-----------");
// 3. Average Rating
console.log("Average Rating:");
let rating = Number(inputs[index++]);
console.log("Rounded Rating:", Math.round(rating));
console.log("-----------");
// 4. List of Products
console.log("Enter product names separated by commas:");
let products = inputs[index++];
let productList = products.split(",");
console.log("List of Products:");
for (let item of productList) {
    console.log(item.trim());
}
console.log("-----------");
// 5. String Operations
console.log("Enter a string:");
let str1 = inputs[index++];
console.log(str1.length);
console.log(str1.repeat(2));
console.log(str1[0]);
console.log(str1.slice(0, 3));
