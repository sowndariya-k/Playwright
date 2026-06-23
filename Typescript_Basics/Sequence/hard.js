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
// 1. Circle
let radius = Number(inputs[index++]);
let angle = Number(inputs[index++]);
let pi = 3.14159;
let diameter = 2 * radius;
let circumference = 2 * pi * radius;
let sectorArea = (angle / 360) * pi * radius * radius;
let arcLength = (angle / 360) * 2 * pi * radius;
console.log("Radius:", radius);
console.log("Diameter:", diameter);
console.log("Circumference:", circumference);
console.log("Sector Area:", sectorArea);
console.log("Arc Length:", arcLength);
console.log("-----------");
// 2. Total Cost Calculation
let price = Number(inputs[index++]);
let quantity = Number(inputs[index++]);
let total = price * quantity;
console.log("Total cost: $" + total.toFixed(2));
console.log("-----------");
// 3. Budget Tracking
let income = Number(inputs[index++]);
let expenses = inputs[index++];
let list = expenses.split(" ");
let sum = 0;
for (let item of list) {
    sum += Number(item);
}
let balance = income - sum;
console.log("Remaining budget: $" + balance.toFixed(2));
console.log("-----------");
// 4. Triangle Area
let a = Number(inputs[index++]);
let b = Number(inputs[index++]);
let c = Number(inputs[index++]);
if (a + b > c && b + c > a && a + c > b) {
    let s = (a + b + c) / 2;
    let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    console.log("Area of triangle:", area);
}
else {
    console.log("Invalid triangle");
}
console.log("-----------");
// 5. Price Calculator
let total1 = 0;
while (index < inputs.length) {
    let itemPrice = Number(inputs[index++]);
    let itemQuantity = Number(inputs[index++]);
    total1 += itemPrice * itemQuantity;
    let choice = inputs[index++].toLowerCase();
    if (choice === "no") {
        break;
    }
}
console.log("Total Price:", total1);
