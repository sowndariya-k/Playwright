"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//1. bmi calculate
const fs_1 = __importDefault(require("fs"));
const inputs = fs_1.default.readFileSync(0, 'utf8')
    .trim()
    .split(/\r?\n/);
let index = 0;
let weight = Number(inputs[index++]);
let height = Number(inputs[index++]);
let bmi = weight / (height * height);
console.log("BMI:", bmi.toFixed(2));
console.log("-----------");
//2.score message
console.log("Game Score");
let score = Number(inputs[index++]);
console.log("Your score is " + String(score) + ".");
console.log("-----------");
//3.average rating
console.log("Average Rating: ");
let rating = Number(inputs[index++]);
console.log("Rounded Rating:", Math.round(rating));
console.log("-----------");
//4.list of products
console.log("Enter product names separated by commas: ");
let products = inputs[index++];
let productList = products.split(",");
console.log("List of Products:");
for (let item of productList) {
    console.log(item.trim());
}
console.log("-----------");
//5.string
console.log("Enter the string: ");
let str1 = inputs[index++];
console.log(str1.length);
console.log(str1.repeat(2));
console.log(str1[0]);
console.log(str1.slice(0, 3));
