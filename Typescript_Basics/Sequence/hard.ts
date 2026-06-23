//1. Circle
import promptSync from "prompt-sync";
const prompt = promptSync({});

let radius = Number(prompt("Enter radius: "));
let angle = Number(prompt("Enter angle: "));

let pi = 3.14159;
let diameter = 2 * radius;
let circumference = 2 * pi * radius;
let sectorArea = (angle/360) * pi * radius * radius;
let arcLength = (angle/360) * 2 * pi * radius;

console.log("Radius:", radius);
console.log("Diameter:", diameter);
console.log("Circumference:", circumference);
console.log("Sector Area:", sectorArea);
console.log("Arc Length:", arcLength);

//2. total cost calculate
let price = Number(prompt("Enter item price: "));
let quantity = Number(prompt("Enter quantity: "));

let total = price * quantity;
console.log("Total cost: $" + total.toFixed(2));

//3.budget tracking
let income = Number(prompt("Enter monthly income: "));
let expenses = prompt("Enter expenses separated by spaces: ");
let list = expenses.split(" ");
let sum = 0;

for (let item of list) {
    sum += Number(item);
}
let balance = income - sum;
console.log("Remaining budget: $" + balance.toFixed(2));


//4. traingle
let a = Number(prompt("Enter side a: "));
let b = Number(prompt("Enter side b: "));
let c = Number(prompt("Enter side c: "));

if (a + b > c && b + c > a && a + c > b) {
    let s=(a + b + c) / 2;
    let area=Math.sqrt(s * (s-a) * (s-b) * (s-c));
    console.log("Area of triangle:", area);
} 
else {
    console.log("Invalid triangle");
}

//5. price calculator
let total1 = 0;

while (true) {
    let price = Number(prompt("Enter item price: "));
    let quantity = Number(prompt("Enter quantity: "));
    total1 = total1 + (price * quantity);
    let choice = prompt("Do you want to continue yes/no: ");
    if (choice === "no") {
        break;
    }
}

console.log("Total Price:", total1);